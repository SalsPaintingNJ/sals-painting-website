const SERVICE_PAGES = [
  "interior-painting",
  "exterior-painting",
  "drywall-repair-prep",
  "trim-doors-ceilings",
  "accent-walls",
  "deck-fence-staining",
  "basic-renovations",
];

const AREA_PAGES = [
  "service-areas",
  "carteret-painter",
  "perth-amboy-painter",
  "woodbridge-painter",
  "rahway-painter",
  "edison-painter",
  "linden-painter",
  "iselin-painter",
  "sayreville-painter",
  "south-amboy-painter",
];

const NAV_ACTIVE_SELECTORS = {
  home: [".site-nav > a[href='/']", ".mobile-nav-links > a[href='/']"],
  about: [".site-nav > a[href='about.html']", ".mobile-nav-links a[href='about.html']"],
  gallery: [".site-nav > a[href='gallery.html']", ".mobile-nav-links a[href='gallery.html']"],
  contact: [".site-nav > a[href='contact.html']", ".mobile-nav-links a[href='contact.html']"],
  pricing: [".site-nav > a[href='pricing.html']", ".mobile-nav-links a[href='pricing.html']"],
  "interior-painting": [
    ".nav-dropdown-menu a[href='interior-painting.html']",
    ".mobile-services-sub a[href='interior-painting.html']",
  ],
  "exterior-painting": [
    ".nav-dropdown-menu a[href='exterior-painting.html']",
    ".mobile-services-sub a[href='exterior-painting.html']",
  ],
  "drywall-repair-prep": [
    ".nav-dropdown-menu a[href='drywall-repair-prep.html']",
    ".mobile-services-sub a[href='drywall-repair-prep.html']",
  ],
  "trim-doors-ceilings": [
    ".nav-dropdown-menu a[href='trim-doors-ceilings.html']",
    ".mobile-services-sub a[href='trim-doors-ceilings.html']",
  ],
  "accent-walls": [
    ".nav-dropdown-menu a[href='accent-walls.html']",
    ".mobile-services-sub a[href='accent-walls.html']",
  ],
  "deck-fence-staining": [
    ".nav-dropdown-menu a[href='deck-fence-staining.html']",
    ".mobile-services-sub a[href='deck-fence-staining.html']",
  ],
  "basic-renovations": [
    ".nav-dropdown-menu a[href='basic-renovations.html']",
    ".mobile-services-sub a[href='basic-renovations.html']",
  ],
  "service-areas": [
    ".nav-dropdown-wrap--areas .nav-dropdown-menu a[href='service-areas.html']",
    "#mobile-areas-sub a[href='service-areas.html']",
    ".footer-links a[href='service-areas.html']",
  ],
  "carteret-painter": [
    ".nav-dropdown-wrap--areas .nav-dropdown-menu a[href='carteret-painter.html']",
    "#mobile-areas-sub a[href='carteret-painter.html']",
  ],
  "perth-amboy-painter": [
    ".nav-dropdown-wrap--areas .nav-dropdown-menu a[href='perth-amboy-painter.html']",
    "#mobile-areas-sub a[href='perth-amboy-painter.html']",
  ],
  "woodbridge-painter": [
    ".nav-dropdown-wrap--areas .nav-dropdown-menu a[href='woodbridge-painter.html']",
    "#mobile-areas-sub a[href='woodbridge-painter.html']",
  ],
  "rahway-painter": [
    ".nav-dropdown-wrap--areas .nav-dropdown-menu a[href='rahway-painter.html']",
    "#mobile-areas-sub a[href='rahway-painter.html']",
  ],
  "edison-painter": [
    ".nav-dropdown-wrap--areas .nav-dropdown-menu a[href='edison-painter.html']",
    "#mobile-areas-sub a[href='edison-painter.html']",
  ],
  "linden-painter": [
    ".nav-dropdown-wrap--areas .nav-dropdown-menu a[href='linden-painter.html']",
    "#mobile-areas-sub a[href='linden-painter.html']",
  ],
  "iselin-painter": [
    ".nav-dropdown-wrap--areas .nav-dropdown-menu a[href='iselin-painter.html']",
    "#mobile-areas-sub a[href='iselin-painter.html']",
  ],
  "sayreville-painter": [
    ".nav-dropdown-wrap--areas .nav-dropdown-menu a[href='sayreville-painter.html']",
    "#mobile-areas-sub a[href='sayreville-painter.html']",
  ],
  "south-amboy-painter": [
    ".nav-dropdown-wrap--areas .nav-dropdown-menu a[href='south-amboy-painter.html']",
    "#mobile-areas-sub a[href='south-amboy-painter.html']",
  ],
  "service-guarantee": [".footer-links a[href='service-guarantee.html']"],
  "privacy-policy": [".footer-links a[href='privacy-policy.html']"],
  "thank-you": [],
  "404": [],
};

function getIncludeBase() {
  const script = document.querySelector('script[src*="includes.js"]');
  if (!script || !script.src) return "";
  return script.src.replace(/includes\.js(?:\?.*)?$/, "");
}

function getCurrentNavPage() {
  const path = window.location.pathname;
  const file = path.split("/").pop() || "index.html";
  if (!file || file === "index.html") return "home";
  return file.replace(/\.html$/, "");
}

function isHomePage() {
  return (
    document.body.classList.contains("home-landing") ||
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/index.html")
  );
}

function applyHeaderAdjustments() {
  const brand = document.querySelector(".site-header .brand");
  if (brand) {
    brand.setAttribute("href", isHomePage() ? "#top" : "/");
  }

  document.querySelectorAll('[aria-current="page"]').forEach((el) => {
    el.removeAttribute("aria-current");
  });

  const page = getCurrentNavPage();
  (NAV_ACTIVE_SELECTORS[page] || []).forEach((selector) => {
    document.querySelectorAll(selector).forEach((link) => {
      link.setAttribute("aria-current", "page");
    });
  });

  if (SERVICE_PAGES.includes(page)) {
    const servicesBtn = document.querySelector(
      ".nav-dropdown-wrap:not(.nav-dropdown-wrap--areas) .nav-dropdown-btn",
    );
    if (servicesBtn) servicesBtn.setAttribute("aria-current", "page");
  }

  if (AREA_PAGES.includes(page)) {
    const areasBtn = document.querySelector(".nav-dropdown-wrap--areas .nav-dropdown-btn");
    if (areasBtn) areasBtn.setAttribute("aria-current", "page");
  }
}

async function fetchInclude(path) {
  const response = await fetch(path, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error(`Failed to load ${path} (${response.status})`);
  }
  return response.text();
}

function injectInclude(slot, html) {
  if (!slot || !html) return;
  slot.insertAdjacentHTML("afterend", html.trim());
  slot.remove();
}

async function loadSiteIncludes() {
  const base = getIncludeBase();
  const headerSlot = document.getElementById("site-header-include");
  const footerSlot = document.getElementById("site-footer-include");
  const tasks = [];

  if (headerSlot) {
    tasks.push(
      fetchInclude(`${base}header.html`).then((html) => injectInclude(headerSlot, html)),
    );
  }

  if (footerSlot) {
    tasks.push(
      fetchInclude(`${base}footer.html`).then((html) => injectInclude(footerSlot, html)),
    );
  }

  await Promise.all(tasks);

  if (!document.querySelector(".site-header")) {
    console.warn("Site header was not injected. Check header.html and includes.js.");
    return;
  }

  applyHeaderAdjustments();
  document.dispatchEvent(new CustomEvent("site:includes-loaded"));
}

function initSiteIncludes() {
  loadSiteIncludes().catch((error) => {
    console.error("Site includes failed to load:", error);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSiteIncludes);
} else {
  initSiteIncludes();
}
