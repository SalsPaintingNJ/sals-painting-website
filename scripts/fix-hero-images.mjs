import { readFileSync, writeFileSync, copyFileSync, mkdirSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const H = "Images/hero";
const W = 600;
const H_PANEL = 900;
const PARALLAX_W = 824;
const PARALLAX_H = 548;
const GP = "Images/gallery/parallax";

try {
  execSync("python scripts/generate-hero-assets.py", { cwd: ROOT, stdio: "inherit" });
  execSync("python scripts/generate-gallery-parallax.py", { cwd: ROOT, stdio: "inherit" });
} catch {
  console.warn("Could not regenerate hero/parallax assets; using existing files if present.");
}

/** Homepage sliding panels — portrait crops sized for narrow columns */
const HOME_HERO_PANELS = [
  { src: `${H}/panel-left.webp`, w: W, h: H_PANEL },
  { src: `${H}/panel-top.webp`, w: W, h: H_PANEL },
  { src: `${H}/panel-bottom.webp`, w: W, h: H_PANEL },
  { src: `${H}/panel-right.webp`, w: W, h: H_PANEL },
];

const HOME_HERO_CUTOUT = {
  src: "Images/SalBrochure-cutout.webp",
  w: 1103,
  h: 1426,
};

const GALLERY_W = 824;

const galleryImg = (n) => ({
  src: `Images/gallery/gallery-${String(n).padStart(2, "0")}.webp`,
  w: GALLERY_W,
  h: GALLERY_W,
});

/** Inner pages: short sp-hero (~360px) — native gallery webps are sharp enough at this size */
const INNER_GALLERY_SETS = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 5, 7],
].map((nums) => nums.map(galleryImg));

const PARALLAX_BGS = {
  work: { src: `${GP}/work.webp`, w: PARALLAX_W, h: PARALLAX_H },
  process: { src: `${GP}/process.webp`, w: PARALLAX_W, h: PARALLAX_H },
  route: { src: `${GP}/route.webp`, w: PARALLAX_W, h: PARALLAX_H },
};

const WORK_THUMBS = [
  { src: "Images/gallery/gallery-02.webp", w: 824, h: 824, alt: "Interior painting project Carteret NJ" },
  { src: "Images/gallery/gallery-04.webp", w: 824, h: 824, alt: "Exterior painting Middlesex County" },
  { src: "Images/gallery/gallery-05.webp", w: 824, h: 824, alt: "Trim and door painting NJ" },
  { src: "Images/gallery/gallery-14.webp", w: 824, h: 824, alt: "Deck staining Carteret area" },
];

const SERVICE_PREVIEW_GALLERY = [2, 4, 6, 8, 10, 12, 14];

mkdirSync(join(ROOT, "Images", "preview", "services"), { recursive: true });
const serviceNames = [
  "interior-painting",
  "exterior-painting",
  "drywall-repair-prep",
  "trim-doors-ceilings",
  "accent-walls",
  "deck-fence-staining",
  "basic-renovations",
];
serviceNames.forEach((name, i) => {
  const num = SERVICE_PREVIEW_GALLERY[i % SERVICE_PREVIEW_GALLERY.length];
  copyFileSync(
    join(ROOT, "Images", "gallery", `gallery-${String(num).padStart(2, "0")}.webp`),
    join(ROOT, "Images", "preview", "services", `${name}.webp`),
  );
});

const htmlFiles = readdirSync(ROOT).filter(
  (f) => f.endsWith(".html") && f !== "header.html" && f !== "footer.html",
);

function panelImg(asset, { eager = false, cls = "" } = {}) {
  const loading = eager ? 'loading="eager"' : 'loading="lazy"';
  const fetch = eager ? ' fetchpriority="high"' : "";
  const classAttr = cls ? ` class="${cls}"` : "";
  return `<img${classAttr} src="${asset.src}" alt="" width="${asset.w}" height="${asset.h}" ${loading} decoding="async"${fetch}>`;
}

function buildHeroPanels(panels, { eager = false, innerMobile = false } = {}) {
  const positions = ["left", "top", "bottom", "right"];
  const lines = panels.map((asset, i) => {
    const pos = positions[i];
    if (innerMobile && pos === "bottom") {
      return `        <div class="hero-panel hero-panel--bottom hero-panel--photo">
          ${panelImg(asset, { eager, cls: "hero-panel-img--desktop" })}
          ${panelImg(asset, { eager, cls: "hero-panel-img--mobile" })}
        </div>`;
    }
    return `        <div class="hero-panel hero-panel--${pos} hero-panel--photo">${panelImg(asset, { eager })}</div>`;
  });
  return `<div class="hero-panels" aria-hidden="true">\n${lines.join("\n")}\n      </div>`;
}

function innerSetIndex(filename) {
  let h = 0;
  for (const ch of filename) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h % INNER_GALLERY_SETS.length;
}

for (const file of htmlFiles) {
  let html = readFileSync(join(ROOT, file), "utf8");
  const isHome = file === "index.html";
  const panels = isHome ? HOME_HERO_PANELS : INNER_GALLERY_SETS[innerSetIndex(file)];
  const eager = isHome;

  html = html.replace(
    /<div class="hero-panels"[\s\S]*?<\/div>\s*(?=<div class="(?:sp-hero-overlay|hero-cutout-wrap|hero-overlay)")/,
    `${buildHeroPanels(panels, { eager, innerMobile: !isHome })}\n      `,
  );

  if (isHome && html.includes("hero-cutout")) {
    const c = HOME_HERO_CUTOUT;
    html = html.replace(
      /<img class="hero-cutout"[^>]*>/,
      `<img class="hero-cutout" src="${c.src}" alt="" width="${c.w}" height="${c.h}" loading="eager" decoding="async">`,
    );
  }

  if (isHome) {
    html = html.replace(
      /<div class="work-teaser__bg st-parallax-bg"[^>]*><img[^>]*><\/div>/,
      `<div class="work-teaser__bg st-parallax-bg" aria-hidden="true">${panelImg(PARALLAX_BGS.work)}</div>`,
    );
    html = html.replace(
      /<div class="st-process-band__bg st-parallax-bg"[^>]*><img[^>]*><\/div>/,
      `<div class="st-process-band__bg st-parallax-bg" aria-hidden="true">${panelImg(PARALLAX_BGS.process)}</div>`,
    );
    html = html.replace(
      /<div class="st-route-band__bg st-parallax-bg"[^>]*><img[^>]*><\/div>/,
      `<div class="st-route-band__bg st-parallax-bg" aria-hidden="true">${panelImg(PARALLAX_BGS.route)}</div>`,
    );

    let thumbIdx = 0;
    html = html.replace(
      /(<a class="work-thumb[^"]*"[^>]*><img)[^>]*(>)/g,
      (_, open, close) => {
        const asset = WORK_THUMBS[thumbIdx % WORK_THUMBS.length];
        thumbIdx += 1;
        return `${open} src="${asset.src}" alt="${asset.alt || ""}" loading="lazy" width="${asset.w}" height="${asset.h}"${close}`;
      },
    );

    html = html.replace(
      /<link rel="preload" as="image" href="Images\/(?:SalsHeroImage|gallery\/hero\/panel)[^"]*"[^>]*>\s*/g,
      "",
    );
    html = html.replace(
      "</head>",
      `  <link rel="preload" as="image" href="${H}/panel-mobile.webp" fetchpriority="high" media="(max-width: 768px)">\n  <link rel="preload" as="image" href="${H}/panel-left.webp" fetchpriority="high" media="(min-width: 769px)">\n</head>`,
    );
  }

  writeFileSync(join(ROOT, file), html, "utf8");
  console.log("Updated", file);
}

console.log("Homepage sharp hero + inner-page gallery heroes updated.");
