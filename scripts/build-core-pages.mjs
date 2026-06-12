import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { SEO, validateAllSeo } from "./seo-meta.mjs";
import { homePageSchema, schemaScript } from "./schema-lib.mjs";

validateAllSeo();
const HSEO = SEO.home;
const HOME_SCHEMA = schemaScript(homePageSchema({ title: HSEO.title, description: HSEO.description }));

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const S = {
  url: "https://salspaintingrenovation.com",
  name: "Sal's Painting & Basic Renovations",
  short: "Sal's Painting",
  phone: "(727) 644-7674",
  tel: "7276447674",
  email: "sal@salspaintingrenovation.com",
  city: "Carteret",
  county: "Middlesex County",
  formspree: "https://formspree.io/f/xnnggyzp",
  ga: "G-WHCK03JK3N",
  clarity: "wnhud5rtzk",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.996521205878!2d-74.2174052!3d40.58583219999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24be16dffced7%3A0x615b5ab5933b0305!2sSal&#39;s%20Painting%20%26%20basic%20renovations!5e0!3m2!1sen!2sus!4v1778553489814!5m2!1sen!2sus",
  googleProfile: "https://share.google/WfeqOL0v1ni1DC3Mh",
  facebook: "https://www.facebook.com/SalsPaintingNJ",
};

const H = "Images/hero";
const GP = "Images/gallery/parallax";
const G = (n) => `Images/gallery/gallery-${String(n).padStart(2, "0")}.webp`;
const PARALLAX = {
  work: `${GP}/work.webp`,
  process: `${GP}/process.webp`,
  route: `${GP}/route.webp`,
};

writeFileSync(
  join(ROOT, "index.html"),
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${HSEO.title}</title>
  <meta name="description" content="${HSEO.description}">
  <meta name="keywords" content="${HSEO.keywords}">
  <link rel="canonical" href="${S.url}/">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="author" content="${S.name}">
  <meta name="geo.region" content="US-NJ">
  <meta name="geo.placename" content="Carteret, New Jersey">
  <meta name="geo.position" content="40.5858322;-74.2174052">
  <meta name="ICBM" content="40.5858322, -74.2174052">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${S.url}/">
  <meta property="og:title" content="${HSEO.title}">
  <meta property="og:description" content="${HSEO.description}">
  <meta property="og:image" content="${S.url}/Images/SalsHeroImage.webp">
  <meta property="og:site_name" content="${S.name}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#4a9fd4">
  <link rel="icon" type="image/png" href="Images/SalsLogo-175.png">
  <link rel="apple-touch-icon" href="Images/SalsLogo-175.png">
  <link rel="manifest" href="site.webmanifest">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
  <link rel="preload" as="image" href="${H}/panel-mobile.webp" fetchpriority="high" media="(max-width: 1060px)">
  <link rel="preload" as="image" href="Images/SalsHeroImage.webp" fetchpriority="high" media="(min-width: 1061px)">
  <link rel="preload" as="image" href="${H}/panel-left.webp" fetchpriority="high" media="(min-width: 769px) and (max-width: 1060px)">
  <link rel="stylesheet" href="styles.css">
  ${HOME_SCHEMA}
  <script async src="https://www.googletagmanager.com/gtag/js?id=${S.ga}"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${S.ga}');</script>
  <script>window.addEventListener('load',function(){setTimeout(function(){(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${S.clarity}");},4000);},{once:true});</script>
</head>
<body class="home-landing">
  <a class="skip-nav" href="#main-content">Skip to main content</a>
  <div id="site-header-include"></div>
  <main id="main-content">
    <section class="hero" aria-label="Introduction">
      <div class="hero-panels" aria-hidden="true">
        <div class="hero-panel hero-panel--left hero-panel--photo"></div>
        <div class="hero-panel hero-panel--top hero-panel--photo"></div>
        <div class="hero-panel hero-panel--bottom hero-panel--photo"></div>
        <div class="hero-panel hero-panel--right hero-panel--photo"></div>
      </div>
      <div class="hero-cutout-wrap" aria-hidden="true">
        <img class="hero-cutout" src="Images/SalBrochure-cutout.webp" alt="" role="presentation" width="1103" height="1426" loading="eager" decoding="async">
      </div>
      <div class="hero-overlay" aria-hidden="true"></div>
      <div class="hero-content">
      <div class="container hero-inner">
        <aside class="hero-card hero-enter hero-enter--from-left hero-enter--d0" aria-label="Get a free quote">
          <p class="card-eyebrow">Get a free quote</p>
          <p class="card-name">Talk to Sal Today</p>
          <p class="card-note">Fill out the form and Sal will get back to you about your project.</p>
          <form class="contact-form" action="${S.formspree}" method="POST" id="hero-contact-form">
            <div class="form-group"><label for="cf-name">Your Name</label><input type="text" id="cf-name" name="name" placeholder="First and last name" required autocomplete="name"></div>
            <div class="form-group"><label for="cf-phone">Phone Number</label><input type="tel" id="cf-phone" name="phone" placeholder="(727) 000-0000" autocomplete="tel"></div>
            <div class="form-group"><label for="cf-service">Service Needed</label>
              <select id="cf-service" name="service" required>
                <option value="" disabled selected>Select a service...</option>
                <option>Interior Painting</option><option>Exterior Painting</option><option>Drywall Repair &amp; Prep</option>
                <option>Trim, Doors &amp; Ceilings</option><option>Accent Walls</option><option>Deck &amp; Fence Staining</option>
                <option>Basic Renovations</option><option>Not sure - need advice</option>
              </select>
            </div>
            <div class="form-group"><label for="cf-message">Tell us about the job</label><textarea id="cf-message" name="message" placeholder="Rooms, surfaces, town, timeline..." rows="3"></textarea></div>
            <input type="hidden" name="_subject" value="New quote request - ${S.name}">
            <input type="hidden" name="_next" value="${S.url}/thank-you.html">
            <div class="honeypot-field" aria-hidden="true"><label for="cf-gotcha">Leave blank</label><input type="text" id="cf-gotcha" name="_gotcha" tabindex="-1" autocomplete="off"></div>
            <button type="submit" class="btn btn-primary btn-full">Send My Request</button>
            <p class="form-note">Or call directly: <a href="tel:${S.tel}">${S.phone}</a></p>
          </form>
          <div class="form-success" id="form-success" aria-live="polite" hidden><p class="form-success-msg">Thanks! Sal will be in touch shortly.</p></div>
        </aside>
        <div class="hero-copy">
          <p class="eyebrow hero-enter hero-enter--from-left hero-enter--d1">Interior · Exterior · Drywall · Trim · Decks · Renovations</p>
          <h1 class="hero-enter hero-enter--from-right hero-enter--d1">${HSEO.h1}</h1>
          <p class="hero-sub hero-enter hero-enter--from-right hero-enter--d14">${HSEO.heroLead}</p>
          <div class="hero-actions">
            <a class="btn btn-primary hero-enter hero-enter--from-left hero-enter--d17" href="tel:${S.tel}">Call Sal Now</a>
            <a class="btn btn-ghost hero-enter hero-enter--from-right hero-enter--d17" href="#services">Our Services</a>
          </div>
          <div class="trust-row">
            <div class="trust-item hero-enter hero-enter--from-left hero-enter--d17"><strong>5.0</strong><span>Google rating</span></div>
            <div class="trust-divider" aria-hidden="true"></div>
            <div class="trust-item hero-enter hero-enter--from-right hero-enter--d17"><strong>Direct</strong><span>Owner contact</span></div>
            <div class="trust-divider" aria-hidden="true"></div>
            <div class="trust-item hero-enter hero-enter--from-right hero-enter--d17"><strong>7 Days</strong><span>7 AM – 9 PM</span></div>
          </div>
          <div class="hero-social hero-enter hero-enter--from-bottom hero-enter--d14">
            <span class="hero-social-label">Follow us</span>
            <div class="social-icons">
              <a href="${S.facebook}" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="${S.googleProfile}" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Google"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    <section class="trust-strip" aria-label="Trust highlights">
      <div class="container trust-strip-grid">
        <div class="strip-slide stagger-1"><span>Service area</span><strong>Middlesex County</strong></div>
        <div class="strip-slide stagger-2"><span>Contact</span><strong>Direct Line</strong></div>
        <div class="strip-slide stagger-3"><span>Estimates</span><strong>Free Quotes</strong></div>
        <div class="strip-slide stagger-4"><span>Services</span><strong>7 Services</strong></div>
      </div>
    </section>

    <section class="st-intent-strip" aria-label="Popular painting searches">
      <div class="container st-intent-strip__inner">
        <a class="strip-slide stagger-1" href="interior-painting.html"><strong>Interior painting Carteret</strong><span>Walls, ceilings, rooms</span></a>
        <a class="strip-slide stagger-2" href="exterior-painting.html"><strong>Exterior house painting</strong><span>Siding, trim, doors</span></a>
        <a class="strip-slide stagger-3" href="edison-painter.html"><strong>Painter in Edison NJ</strong><span>Local Edison service</span></a>
        <a class="strip-slide stagger-4" href="woodbridge-painter.html"><strong>Painter in Woodbridge</strong><span>Colonia, Avenel, Iselin</span></a>
        <a class="strip-slide stagger-1" href="pricing.html"><strong>House painting cost NJ</strong><span>Pricing guide &amp; estimates</span></a>
      </div>
    </section>

    <section id="services" class="services-section section-shell">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow reveal-left">What we do</p>
          <h2 class="reveal-left stagger-1">Professional Painting &amp; Renovation Services</h2>
          <p class="reveal stagger-2">Quality prep, clean lines, and durable finishes on every job — interior to exterior.</p>
        </div>
        <div class="services-grid">
          <a class="service-card service-card--media slide-enter slide-enter--left stagger-1" href="interior-painting.html">
            <div class="service-card-media" style="background-image: url('Images/preview/services/interior-painting.webp')" role="img" aria-label="Interior painting project"></div>
            <div class="service-card-body"><div class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg></div><h3>Interior Painting</h3><p>Walls, ceilings, bedrooms, kitchens, and whole-home repaints with proper surface prep.</p></div>
          </a>
          <a class="service-card service-card--media slide-enter slide-enter--right stagger-2" href="exterior-painting.html">
            <div class="service-card-media" style="background-image: url('Images/preview/services/exterior-painting.webp')" role="img" aria-label="Exterior painting project"></div>
            <div class="service-card-body"><div class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/></svg></div><h3>Exterior Painting</h3><p>Siding, trim, shutters, and doors — coatings rated for New Jersey weather.</p></div>
          </a>
          <a class="service-card service-card--media slide-enter slide-enter--top stagger-3" href="drywall-repair-prep.html">
            <div class="service-card-media" style="background-image: url('Images/preview/services/drywall-repair-prep.webp')" role="img" aria-label="Drywall repair"></div>
            <div class="service-card-body"><div class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/></svg></div><h3>Drywall Repair &amp; Prep</h3><p>Patching, sanding, priming — the prep that makes paint look flawless.</p></div>
          </a>
          <a class="service-card service-card--media slide-enter slide-enter--bottom stagger-4" href="trim-doors-ceilings.html">
            <div class="service-card-media" style="background-image: url('Images/preview/services/trim-doors-ceilings.webp')" role="img" aria-label="Trim painting"></div>
            <div class="service-card-body"><div class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/></svg></div><h3>Trim, Doors &amp; Ceilings</h3><p>Crisp cut-in lines on baseboards, casings, doors, and ceiling repaints.</p></div>
          </a>
          <a class="service-card service-card--media slide-enter slide-enter--left stagger-1" href="accent-walls.html">
            <div class="service-card-media" style="background-image: url('Images/preview/services/accent-walls.webp')" role="img" aria-label="Accent wall"></div>
            <div class="service-card-body"><div class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg></div><h3>Accent Walls</h3><p>Bold feature walls with the right primer base for saturated color.</p></div>
          </a>
          <a class="service-card service-card--media slide-enter slide-enter--right stagger-2" href="deck-fence-staining.html">
            <div class="service-card-media" style="background-image: url('Images/preview/services/deck-fence-staining.webp')" role="img" aria-label="Deck staining"></div>
            <div class="service-card-body"><div class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19h16M4 15l4-8h8l4 8"/></svg></div><h3>Deck &amp; Fence Staining</h3><p>Outdoor wood cleaned, prepped, and protected from NJ weather.</p></div>
          </a>
          <a class="service-card service-card--media slide-enter slide-enter--top stagger-3" href="basic-renovations.html">
            <div class="service-card-media" style="background-image: url('Images/preview/services/basic-renovations.webp')" role="img" aria-label="Renovation painting"></div>
            <div class="service-card-body"><div class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div><h3>Basic Renovations</h3><p>Light renovation finish work paired with painting and drywall repair.</p></div>
          </a>
        </div>
      </div>
    </section>

    <section class="work-teaser work-teaser--parallax section-shell" data-parallax-overscan="0.30">
      <div class="work-teaser__bg st-parallax-bg" aria-hidden="true"><img src="${PARALLAX.work}" alt="" width="824" height="548" loading="lazy" decoding="async"></div>
      <div class="work-teaser__overlay" aria-hidden="true"></div>
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow reveal-left">Proof of work</p>
          <h2 class="reveal-left stagger-1">Real Jobs, Real Results</h2>
          <p class="reveal stagger-2">Every photo is from an actual completed project across Middlesex County.</p>
        </div>
        <div class="work-teaser-grid">
          <a class="work-thumb slide-enter slide-enter--left stagger-1" href="gallery.html?filter=interior"><img src="${G(2)}" alt="Interior painting project Carteret NJ" loading="lazy" width="824" height="824"><span class="work-thumb-label">Interior</span></a>
          <a class="work-thumb slide-enter slide-enter--right stagger-2" href="gallery.html?filter=exterior"><img src="${G(4)}" alt="Exterior painting Middlesex County" loading="lazy" width="824" height="824"><span class="work-thumb-label">Exterior</span></a>
          <a class="work-thumb slide-enter slide-enter--top stagger-3" href="gallery.html?filter=trim"><img src="${G(5)}" alt="Trim and door painting NJ" loading="lazy" width="824" height="824"><span class="work-thumb-label">Trim &amp; Doors</span></a>
          <a class="work-thumb slide-enter slide-enter--bottom stagger-4" href="gallery.html?filter=deck"><img src="${G(14)}" alt="Deck staining Carteret area" loading="lazy" width="824" height="824"><span class="work-thumb-label">Decks</span></a>
        </div>
        <div class="work-teaser-cta reveal"><a class="btn btn-ghost" href="gallery.html">See All Projects &rarr;</a></div>
      </div>
    </section>

    <section class="map-section section-shell" aria-label="Customer reviews and service area map">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow reveal-left">Where we work</p>
          <h2 class="reveal-left stagger-1">Middlesex County Service Area</h2>
          <p class="reveal stagger-2">Based in ${S.city} — serving Carteret, Perth Amboy, Woodbridge, Edison, Rahway, Linden, and nearby Central NJ within roughly 25 miles.</p>
        </div>
        <div class="st-map-review-shell reveal stagger-2">
          <div class="st-google-reviews-showcase">
            <div class="st-google-reviews-header">
              <svg class="st-google-g-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
              <span>Google Reviews</span>
              <div class="st-google-stars-display" role="img" aria-label="5 star rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <div class="st-google-reviews-summary" id="st-review-summary">5.0 &middot; 14 reviews</div>
            </div>
            <div class="st-review-carousel-wrapper" data-st-review-carousel>
              <button class="st-review-carousel-btn prev" type="button" aria-label="Previous review" disabled>&#8249;</button>
              <div class="st-review-carousel-track-outer"><div class="st-review-carousel-track" aria-live="polite"></div></div>
              <button class="st-review-carousel-btn next" type="button" aria-label="Next review" disabled>&#8250;</button>
            </div>
            <div class="st-review-carousel-dots" role="group" aria-label="Google review pages"></div>
            <p class="st-google-review-links"><a href="${S.googleProfile}" target="_blank" rel="noopener noreferrer">See our Google profile &amp; leave a review</a></p>
            <script id="google-reviews-seed" type="application/json">{"ratingValue":5,"reviewCount":14,"reviews":[{"name":"Michael Martinko","meta":"Local Guide · 10 reviews","date":"Nov 20, 2024","text":"The owner at Sal's made this experience seamless. He answered my call on the 1st attempt.","stars":5,"avatarColor":"#1a56c4"},{"name":"Venus Vargas","meta":"5 reviews","date":"Sep 21, 2024","text":"Timely, professional and reliable. Definitely would recommend!","stars":5,"avatarColor":"#c0392b"},{"name":"laura martinko","meta":"7 reviews","date":"Mar 23, 2022","text":"Mr. Sal did a beautiful job painting all my bedrooms! Extremely professional and fantastic prices!","stars":5,"avatarColor":"#7d3c98"}]}</script>
          </div>
          <div class="st-map-panel" aria-label="Sal's Painting on Google Maps">
            <iframe src="${S.mapEmbed}" title="Sal's Painting on Google Maps" loading="lazy" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="st-map-overlay">
              <strong>${S.name}</strong>
              <span class="st-map-rating" id="st-map-rating" aria-label="5 out of 5 stars, 14 Google reviews">&#9733;&#9733;&#9733;&#9733;&#9733; 5.0 &middot; 14 Google reviews</span>
              <span>${S.city}, NJ &bull; ${S.county}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about-section section-shell">
      <div class="container about-grid">
        <div class="about-copy">
          <p class="eyebrow reveal-left">Why choose us</p>
          <h2 class="reveal-left stagger-1">Straight quotes.<br>Quality prep.<br>No runaround.</h2>
          <p class="reveal stagger-2">Sal runs Sal's Painting as a direct-contact operation. When you call, you're talking to the person doing the work — not a call center or sales handoff.</p>
          <p class="reveal stagger-3">Residential painting and light renovation across Middlesex County since 2015 — built on clean finishes one room at a time.</p>
        </div>
        <div class="about-card reveal-right stagger-2">
          <h3>What to expect</h3>
          <ul class="about-list">
            <li>Direct line to Sal — no phone trees</li>
            <li>Honest scope — prep included when needed</li>
            <li>Protected floors and furniture</li>
            <li>Local to Carteret — knows NJ homes</li>
            <li>Available 7 days a week, 7 AM – 9 PM</li>
          </ul>
          <a class="btn btn-primary" href="tel:${S.tel}">Call ${S.phone}</a>
        </div>
      </div>
    </section>

    <section class="st-process-band section-shell" aria-labelledby="process-heading" data-parallax-overscan="0.08">
      <div class="st-process-band__bg st-parallax-bg" aria-hidden="true"><img src="${PARALLAX.process}" alt="" width="824" height="548" loading="lazy" decoding="async"></div>
      <div class="st-process-band__overlay" aria-hidden="true"></div>
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow reveal-left">How it works</p>
          <h2 class="reveal-left stagger-1" id="process-heading">Three steps from call to finished paint work.</h2>
          <p class="reveal stagger-2">No sales reps — Sal handles estimates and painting directly across Middlesex County.</p>
        </div>
        <div class="st-process-grid">
          <article class="st-process-card reveal-left stagger-1"><span class="st-process-number">1</span><h3>Call or send a quote request</h3><p>Reach Sal at ${S.phone} or use the form. Share the town, rooms or surfaces, and timeline — that's enough to start.</p></article>
          <article class="st-process-card reveal stagger-2"><span class="st-process-number">2</span><h3>Get a straight quote</h3><p>Smaller jobs can be quoted from photos. Larger interiors or exteriors get a walkthrough. You'll know scope and price before work begins.</p></article>
          <article class="st-process-card reveal-right stagger-3"><span class="st-process-number">3</span><h3>Job done right</h3><p>Sal handles prep and paint — protected floors, clean cut-in lines, walkthrough before payment.</p></article>
        </div>
      </div>
    </section>

    <section class="st-trust-quotes" aria-labelledby="trust-quotes-heading">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow reveal-left">How we work</p>
          <h2 class="reveal-left stagger-1" id="trust-quotes-heading">Three commitments on every Sal's Painting job.</h2>
          <p class="reveal stagger-2">Follow along on <a href="${S.facebook}" target="_blank" rel="noopener noreferrer">Facebook</a> and <a href="${S.googleProfile}" target="_blank" rel="noopener noreferrer">Google</a>.</p>
        </div>
        <div class="st-quote-grid">
          <article class="st-quote-card reveal stagger-1"><p class="st-pillar-tag">Who you talk to</p><p class="st-quote-text"><strong>Owner on every job.</strong> When you call ${S.phone}, you reach Sal — the person who quotes and paints your project.</p><p class="st-quote-meta"><a href="about.html">About Sal</a></p></article>
          <article class="st-quote-card reveal stagger-2"><p class="st-pillar-tag">How we quote</p><p class="st-quote-text"><strong>Honest scope, no upsell.</strong> Drywall prep when walls need it — not a rushed roll over cracks that will telegraph through.</p><p class="st-quote-meta"><a href="service-guarantee.html">Service Guarantee</a></p></article>
          <article class="st-quote-card reveal stagger-3"><p class="st-pillar-tag">Before we start</p><p class="st-quote-text"><strong>Free estimates before work starts.</strong> Clear pricing on interiors, exteriors, decks, and renovation paint across ${S.county}.</p><p class="st-quote-meta"><a href="pricing.html">Pricing guide</a> · <a href="gallery.html">See our work</a></p></article>
        </div>
      </div>
    </section>

    <section class="section-shell" aria-labelledby="local-painter-heading">
      <div class="container sp-content" style="max-width:920px;">
        <p class="eyebrow reveal-left">Carteret &amp; Middlesex County</p>
        <h2 class="reveal-left stagger-1" id="local-painter-heading">Residential House Painter in Carteret &amp; Middlesex County, NJ</h2>
        <p class="reveal stagger-2">Sal's Painting &amp; Basic Renovations is a owner-operated house painting company based at 54 Charles St in ${S.city}. Sal handles <a href="interior-painting.html">interior painting</a>, <a href="exterior-painting.html">exterior painting</a>, <a href="drywall-repair-prep.html">drywall repair and prep</a>, <a href="trim-doors-ceilings.html">trim and ceiling work</a>, <a href="accent-walls.html">accent walls</a>, <a href="deck-fence-staining.html">deck and fence staining</a>, and <a href="basic-renovations.html">basic renovation finish</a> across ${S.county}.</p>
        <h3 class="reveal stagger-2" style="font-family:var(--font-head);text-transform:uppercase;letter-spacing:0.04em;margin-top:1.75rem;">Where Sal paints in New Jersey</h3>
        <p class="reveal stagger-3">Regular service in <a href="carteret-painter.html">Carteret</a>, <a href="perth-amboy-painter.html">Perth Amboy</a>, <a href="woodbridge-painter.html">Woodbridge</a>, <a href="edison-painter.html">Edison</a>, <a href="rahway-painter.html">Rahway</a>, <a href="linden-painter.html">Linden</a>, <a href="iselin-painter.html">Iselin</a>, <a href="sayreville-painter.html">Sayreville</a>, and <a href="south-amboy-painter.html">South Amboy</a> — see the <a href="service-areas.html">full service area map</a> for neighborhood-level detail on each town.</p>
        <h3 class="reveal stagger-3" style="font-family:var(--font-head);text-transform:uppercase;letter-spacing:0.04em;margin-top:1.75rem;">Why homeowners call Sal directly</h3>
        <p class="reveal stagger-4">No franchise dispatch or sales handoff — you talk to the person who walks your rooms and rolls your walls. Free estimates, honest prep scope, protected floors, and a <a href="service-guarantee.html">workmanship guarantee</a>. Check <a href="pricing.html">NJ house painting prices</a> and the <a href="gallery.html">project gallery</a> before you call <a href="tel:${S.tel}">${S.phone}</a>.</p>
      </div>
    </section>

    <section class="st-route-band st-route-band--parallax" aria-label="Next steps" data-parallax-overscan="0.28">
      <div class="st-route-band__bg st-parallax-bg" aria-hidden="true"><img src="${PARALLAX.route}" alt="" width="824" height="548" loading="lazy" decoding="async"></div>
      <div class="st-route-band__overlay" aria-hidden="true"></div>
      <div class="container">
        <div class="st-route-grid">
          <article class="st-route-card reveal-left stagger-1"><h3>Get a free quote</h3><p>Call Sal or fill out the contact form. Interior, exterior, drywall, decks, and renovation work across NJ.</p><a class="btn btn-primary" href="contact.html">Request a Quote</a></article>
          <article class="st-route-card reveal stagger-2"><h3>See completed projects</h3><p>Real photos from Carteret, Woodbridge, Edison, and nearby towns — proof before you book.</p><a class="btn btn-ghost" href="gallery.html">View Our Work</a></article>
          <article class="st-route-card reveal-right stagger-3"><h3>Check your service area</h3><p>Carteret, Perth Amboy, Woodbridge, Edison, Rahway, Linden, and more. Not sure? Just call.</p><a class="btn btn-ghost" href="service-areas.html">Service Areas</a></article>
        </div>
      </div>
    </section>

    <section id="faq" class="faq-section section-shell">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow reveal-left">Common questions</p>
          <h2 class="reveal-left stagger-1">Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          <div class="faq-item"><button class="faq-question" aria-expanded="false" aria-controls="faq-a1">Do you offer free estimates?<svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></button><div class="faq-answer" id="faq-a1" aria-hidden="true" inert><div class="faq-answer-inner"><p>Yes — call or text Sal at ${S.phone}, or use the form on this page. You'll get a clear quote before any work begins.</p></div></div></div>
          <div class="faq-item"><button class="faq-question" aria-expanded="false" aria-controls="faq-a2">What areas do you serve?<svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></button><div class="faq-answer" id="faq-a2" aria-hidden="true" inert><div class="faq-answer-inner"><p>Carteret, Perth Amboy, Woodbridge, Edison, Rahway, Linden, Iselin, Sayreville, South Amboy, and surrounding ${S.county} communities within roughly 25 miles of Carteret.</p></div></div></div>
          <div class="faq-item"><button class="faq-question" aria-expanded="false" aria-controls="faq-a3">Do you handle drywall repair before painting?<svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></button><div class="faq-answer" id="faq-a3" aria-hidden="true" inert><div class="faq-answer-inner"><p>Yes. Patching, sanding, and priming are part of the service when walls need more than a quick repaint.</p></div></div></div>
          <div class="faq-item"><button class="faq-question" aria-expanded="false" aria-controls="faq-a4">Are evenings and weekends available?<svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></button><div class="faq-answer" id="faq-a4" aria-hidden="true" inert><div class="faq-answer-inner"><p>Yes — 7 days a week, 7 AM to 9 PM. Sal works around occupied homes and busy schedules.</p></div></div></div>
          <div class="faq-item"><button class="faq-question" aria-expanded="false" aria-controls="faq-a5">How much does house painting cost in Middlesex County?<svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></button><div class="faq-answer" id="faq-a5" aria-hidden="true" inert><div class="faq-answer-inner"><p>Single rooms often start around $350–$800; whole homes and exteriors vary by prep and size. See the <a href="pricing.html">pricing guide</a> for ballparks — Sal quotes your exact scope free after walkthrough or photos.</p></div></div></div>
          <div class="faq-item"><button class="faq-question" aria-expanded="false" aria-controls="faq-a6">Does Sal paint decks and fences?<svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></button><div class="faq-answer" id="faq-a6" aria-hidden="true" inert><div class="faq-answer-inner"><p>Yes — <a href="deck-fence-staining.html">deck and fence staining</a> spring through early fall when wood is dry. Wash, prep, and coat rated for NJ weather.</p></div></div></div>
        </div>
      </div>
    </section>

    <section class="st-crawl-hub" aria-labelledby="crawl-hub-heading">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow reveal-left">Explore the site</p>
          <h2 class="reveal-left stagger-1" id="crawl-hub-heading">Painting resources across Middlesex County.</h2>
        </div>
        <nav class="st-crawl-hub__chips" aria-label="Site sections">
          <a class="st-crawl-chip" href="interior-painting.html">Interior Painting</a>
          <a class="st-crawl-chip" href="exterior-painting.html">Exterior Painting</a>
          <a class="st-crawl-chip" href="drywall-repair-prep.html">Drywall Repair</a>
          <a class="st-crawl-chip" href="carteret-painter.html">Carteret Painter</a>
          <a class="st-crawl-chip" href="edison-painter.html">Edison Painter</a>
          <a class="st-crawl-chip" href="woodbridge-painter.html">Woodbridge Painter</a>
          <a class="st-crawl-chip" href="perth-amboy-painter.html">Perth Amboy</a>
          <a class="st-crawl-chip" href="rahway-painter.html">Rahway</a>
          <a class="st-crawl-chip" href="sayreville-painter.html">Sayreville</a>
          <a class="st-crawl-chip" href="deck-fence-staining.html">Deck Staining</a>
          <a class="st-crawl-chip" href="pricing.html">Pricing Guide</a>
          <a class="st-crawl-chip" href="service-areas.html">All Service Areas</a>
          <a class="st-crawl-chip" href="gallery.html">Project Gallery</a>
          <a class="st-crawl-chip" href="contact.html">Contact</a>
        </nav>
      </div>
    </section>

    <section id="contact" class="contact-section contact-section--parallax section-shell" data-parallax-overscan="0.30">
      <div class="container contact-inner reveal-scale">
        <p class="eyebrow">Ready to get started?</p>
        <h2>Call or text Sal today.</h2>
        <p>Interior painting, exterior work, drywall repair, deck staining, or renovation finish — call to talk through what you need.</p>
        <a class="btn btn-primary btn-lg" href="tel:${S.tel}">${S.phone}</a>
      </div>
    </section>
  </main>
  <div id="site-footer-include"></div>
  <script src="includes.js"></script>
  <script src="script.js"></script>
</body>
</html>`,
  "utf8",
);

console.log("Wrote index.html");
