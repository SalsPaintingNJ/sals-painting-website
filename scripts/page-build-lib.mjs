/** Shared helpers for Sal's Painting static page generation */

export const S = {
  domain: "salspaintingrenovation.com",
  url: "https://salspaintingrenovation.com",
  name: "Sal's Painting & Basic Renovations",
  short: "Sal's Painting",
  phone: "(727) 644-7674",
  tel: "7276447674",
  email: "sal@salspaintingrenovation.com",
  address: "54 Charles St, Carteret, NJ 07008",
  city: "Carteret",
  county: "Middlesex County",
  state: "NJ",
  formspree: "https://formspree.io/f/xnnggyzp",
  ga: "G-WHCK03JK3N",
  clarity: "wnhud5rtzk",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.996521205878!2d-74.2174052!3d40.58583219999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24be16dffced7%3A0x615b5ab5933b0305!2sSal&#39;s%20Painting%20%26%20basic%20renovations!5e0!3m2!1sen!2sus!4v1778553489814!5m2!1sen!2sus",
  googleProfile: "https://share.google/WfeqOL0v1ni1DC3Mh",
  facebook: "https://www.facebook.com/SalsPaintingNJ",
};

export const SERVICE_OPTIONS = [
  "Interior Painting",
  "Exterior Painting",
  "Drywall Repair & Prep",
  "Trim, Doors & Ceilings",
  "Accent Walls",
  "Deck & Fence Staining",
  "Basic Renovations",
  "Not sure - need advice",
];

/** Gallery paths — 824×824 project photos (gallery grid only; soft if enlarged) */
export const G = (n) => `Images/gallery/gallery-${String(n).padStart(2, "0")}.webp`;

/** Sharp in-page content crops — 560×420 from SalsHeroImage.png */
export const CONTENT = (slug) => `Images/content/${slug}.webp`;
export const CONTENT_W = 560;
export const CONTENT_H = 420;

export const HERO_GALLERY_SETS = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 1, 5],
  [2, 4, 6, 8],
  [3, 5, 7, 9],
  [10, 12, 14, 2],
  [11, 13, 1, 3],
  [4, 8, 12, 14],
  [6, 10, 1, 7],
  [9, 13, 2, 11],
];

export function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function head({ title, desc, keywords = "", canonical, ogImage, extraSchema = "", noindex = false }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  ${keywords ? `<meta name="keywords" content="${esc(keywords)}">` : ""}
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}">
  <meta name="author" content="${esc(S.name)}">
  <meta name="geo.region" content="US-NJ">
  <meta name="geo.placename" content="${esc(S.city)}, New Jersey">
  <meta name="geo.position" content="40.5858322;-74.2174052">
  <meta name="ICBM" content="40.5858322, -74.2174052">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:image" content="${ogImage || `${S.url}/Images/SalsHeroImage.webp`}">
  <meta property="og:site_name" content="${esc(S.name)}">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(desc)}">
  <meta name="twitter:image" content="${ogImage || `${S.url}/Images/SalsHeroImage.webp`}">
  <meta name="theme-color" content="#071f5c">
  <link rel="icon" type="image/png" href="Images/SalsLogo-175.png">
  <link rel="apple-touch-icon" href="Images/SalsLogo-175.png">
  <link rel="manifest" href="site.webmanifest">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
  <link rel="stylesheet" href="styles.css">
  ${extraSchema}
  <script async src="https://www.googletagmanager.com/gtag/js?id=${S.ga}"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${S.ga}');</script>
  <script>window.addEventListener('load',function(){setTimeout(function(){(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${S.clarity}");},4000);},{once:true});</script>
</head>`;
}

export function heroPanelsGallery(nums, { mobileBottom = true } = {}) {
  const imgs = nums.map((n) => G(n));
  const bottom = mobileBottom
    ? `        <div class="hero-panel hero-panel--bottom hero-panel--photo">
          <img class="hero-panel-img--desktop" src="${imgs[2]}" alt="" width="824" height="824" loading="lazy" decoding="async">
          <img class="hero-panel-img--mobile" src="${imgs[2]}" alt="" width="824" height="824" loading="lazy" decoding="async">
        </div>`
    : `        <div class="hero-panel hero-panel--bottom hero-panel--photo"><img src="${imgs[2]}" alt="" width="824" height="824" loading="lazy" decoding="async"></div>`;
  return `<div class="hero-panels" aria-hidden="true">
        <div class="hero-panel hero-panel--left hero-panel--photo"><img src="${imgs[0]}" alt="" width="824" height="824" loading="lazy" decoding="async"></div>
        <div class="hero-panel hero-panel--top hero-panel--photo"><img src="${imgs[1]}" alt="" width="824" height="824" loading="lazy" decoding="async"></div>
${bottom}
        <div class="hero-panel hero-panel--right hero-panel--photo"><img src="${imgs[3]}" alt="" width="824" height="824" loading="lazy" decoding="async"></div>
      </div>`;
}

export function contactForm(selected = "", subject = "New quote request") {
  const opts = SERVICE_OPTIONS.map(
    (o) => `<option${o === selected ? " selected" : ""}>${esc(o)}</option>`,
  ).join("\n                  ");
  return `<form class="contact-form" action="${S.formspree}" method="POST" id="hero-contact-form">
              <div class="form-group">
                <label for="cf-name">Your Name</label>
                <input type="text" id="cf-name" name="name" placeholder="First and last name" required autocomplete="name">
              </div>
              <div class="form-group">
                <label for="cf-phone">Phone Number</label>
                <input type="tel" id="cf-phone" name="phone" placeholder="(727) 000-0000" autocomplete="tel">
              </div>
              <div class="form-group">
                <label for="cf-town">Town / City</label>
                <input type="text" id="cf-town" name="town" placeholder="Carteret, Edison, Woodbridge..." autocomplete="address-level2">
              </div>
              <div class="form-group">
                <label for="cf-service">Service Needed</label>
                <select id="cf-service" name="service" required>
                  <option value="" disabled${selected ? "" : " selected"}>Select a service...</option>
                  ${opts}
                </select>
              </div>
              <div class="form-group">
                <label for="cf-message">Tell us about the job</label>
                <textarea id="cf-message" name="message" placeholder="Rooms, surfaces, timeline, condition..." rows="3"></textarea>
              </div>
              <input type="hidden" name="_subject" value="${esc(subject)}">
              <input type="hidden" name="_next" value="${S.url}/thank-you.html">
              <div class="honeypot-field" aria-hidden="true">
                <label for="cf-gotcha">Leave blank</label>
                <input type="text" id="cf-gotcha" name="_gotcha" tabindex="-1" autocomplete="off">
              </div>
              <button type="submit" class="btn btn-primary btn-full">Send My Request</button>
              <p class="form-note">Or call directly: <a href="tel:${S.tel}">${S.phone}</a></p>
            </form>
            <div class="form-success" id="form-success" aria-live="polite" hidden>
              <p class="form-success-msg">Thanks! Sal will be in touch shortly.</p>
            </div>`;
}

export function faqBlock(items, prefix) {
  return items
    .map(
      ([q, a], i) => `
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false" aria-controls="${prefix}-faq-${i + 1}">
              ${esc(q)}
              <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer" id="${prefix}-faq-${i + 1}" aria-hidden="true" inert>
              <div class="faq-answer-inner"><p>${a}</p></div>
            </div>
          </div>`,
    )
    .join("\n");
}

export function renderSections(sections) {
  return sections
    .map((sec) => {
      let html = "";
      if (sec.h2) html += `<h2>${sec.h2}</h2>`;
      if (sec.p) html += `<p>${sec.p}</p>`;
      if (sec.list)
        html += `<ul class="about-list">${sec.list.map((li) => `<li>${li}</li>`).join("")}</ul>`;
      if (sec.note)
        html += `<div class="city-local-note"><strong>${sec.note}</strong> ${sec.noteText}</div>`;
      if (sec.media) {
        const src = sec.media.src ?? (sec.media.n != null ? G(sec.media.n) : "");
        const w = sec.media.w ?? (sec.media.n != null ? 824 : CONTENT_W);
        const h = sec.media.h ?? (sec.media.n != null ? 824 : CONTENT_H);
        html += contentMedia(src, sec.media.alt, sec.media.caption, { w, h });
      }
      return html;
    })
    .join("\n\n          ");
}

export function contentMedia(src, alt, caption, { w = CONTENT_W, h = CONTENT_H } = {}) {
  return `<figure class="sp-content-media">
            <img src="${src}" alt="${esc(alt)}" width="${w}" height="${h}" loading="lazy" decoding="async">
            <figcaption>${esc(caption)}</figcaption>
          </figure>`;
}

/** Real project photo for service pages — display capped in CSS, native 824×824 */
export function galleryMedia(n, alt, caption) {
  return contentMedia(G(n), alt, caption, { w: 824, h: 824 });
}

export function splitMediaBlock(src, alt, heading, body, { w = CONTENT_W, h = CONTENT_H, portrait = false } = {}) {
  const figCls = portrait ? "sp-split-media__img sp-split-media__img--portrait" : "sp-split-media__img";
  return `<div class="sp-split-media" data-reveal>
          <figure class="${figCls}">
            <img src="${src}" alt="${esc(alt)}" width="${w}" height="${h}" loading="lazy" decoding="async">
          </figure>
          <div class="sp-split-media__copy">
            <h2>${heading}</h2>
            ${body}
          </div>
        </div>`;
}

export function relatedChips(links, label = "Related pages") {
  return `<nav class="sp-related-chips" aria-label="${esc(label)}">
          <p class="eyebrow">${esc(label)}</p>
          <div class="st-crawl-hub__chips">
            ${links.map(([href, text]) => `<a class="st-crawl-chip" href="${href}">${esc(text)}</a>`).join("\n            ")}
          </div>
        </nav>`;
}

export function processStrip(steps, title = "How Sal handles your project") {
  return `<div class="sp-process-strip" data-reveal>
          <h2>${title}</h2>
          <ol class="sp-process-strip__list">
            ${steps.map((s) => `<li>${s}</li>`).join("\n            ")}
          </ol>
        </div>`;
}

export function contactParallax(eyebrow, h2, p = "") {
  return `<section class="contact-section contact-section--parallax section-shell" data-parallax-overscan="0.30">
      <div class="container contact-inner" data-reveal>
        <p class="eyebrow">${eyebrow}</p>
        <h2>${h2}</h2>
        ${p ? `<p>${p}</p>` : ""}
        <a class="btn btn-primary btn-lg" href="tel:${S.tel}">${S.phone}</a>
      </div>
    </section>`;
}

export function foot() {
  return `  <div id="site-footer-include"></div>
  <script src="includes.js"></script>
  <script src="script.js"></script>
</body>
</html>`;
}
