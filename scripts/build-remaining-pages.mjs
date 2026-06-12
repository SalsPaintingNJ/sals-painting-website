import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import {
  S,
  G,
  CONTENT,
  HERO_GALLERY_SETS,
  head,
  heroPanelsGallery,
  contactForm,
  faqBlock,
  contentMedia,
  splitMediaBlock,
  relatedChips,
  processStrip,
  contactParallax,
  foot,
} from "./page-build-lib.mjs";
import { SEO, validateAllSeo } from "./seo-meta.mjs";
import {
  aboutPageSchema,
  contactPageSchema,
  galleryPageSchema,
  pricingPageSchema,
  serviceAreasPageSchema,
  guaranteePageSchema,
  schemaScript,
} from "./schema-lib.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = SEO.pages;
validateAllSeo();

const CITIES = [
  ["carteret-painter", "Carteret", "Home base — priority scheduling from Charles St."],
  ["perth-amboy-painter", "Perth Amboy", "Waterfront and inland neighborhoods across the city."],
  ["woodbridge-painter", "Woodbridge", "Colonia, Avenel, Fords, and all township sections."],
  ["rahway-painter", "Rahway", "Historic downtown and suburban neighborhoods."],
  ["edison-painter", "Edison", "Oak Tree, Clara Barton, and north Edison areas."],
  ["linden-painter", "Linden", "Residential and rental turnover painting."],
  ["iselin-painter", "Iselin", "Dense residential hub in Woodbridge Township."],
  ["sayreville-painter", "Sayreville", "Parlin, Morgan, and waterfront sections."],
  ["south-amboy-painter", "South Amboy", "Raritan Bay waterfront and downtown."],
];

const GALLERY_ITEMS = [
  [1, "interior", "Interior room repaint — Carteret, NJ"],
  [2, "interior", "Living room walls and trim — Middlesex County"],
  [3, "exterior", "Exterior siding refresh — Perth Amboy area"],
  [4, "exterior", "House exterior painting — Woodbridge Township"],
  [5, "trim", "Trim and door painting — crisp cut-in lines"],
  [6, "interior", "Bedroom repaint with ceiling — Edison area"],
  [7, "deck", "Deck staining project — Central NJ"],
  [8, "interior", "Kitchen and hallway repaint"],
  [9, "exterior", "Exterior trim and shutter painting"],
  [10, "renovation", "Renovation finish paint — Rahway"],
  [11, "interior", "Accent wall and trim detail"],
  [12, "exterior", "Fence staining — Carteret area"],
  [13, "interior", "Whole-room interior transformation"],
  [14, "deck", "Outdoor wood staining and protection"],
];

writeFileSync(
  join(ROOT, "about.html"),
  `${head({ title: P.about.title, desc: P.about.description, keywords: P.about.keywords, canonical: `${S.url}/about.html`, extraSchema: schemaScript(aboutPageSchema({ title: P.about.title, description: P.about.description })) })}
<body>
  <a class="skip-nav" href="#main-content">Skip to main content</a>
  <div id="site-header-include"></div>
  <main id="main-content">
    <section class="sp-hero sp-hero--panels hero" aria-label="About Sal">
      ${heroPanelsGallery(HERO_GALLERY_SETS[9])}
      <div class="sp-hero-overlay" aria-hidden="true"></div>
      <div class="container">
        <p class="breadcrumb-trail"><a href="/">Home</a> &rsaquo; About</p>
        <h1>${P.about.h1}</h1>
        <p>Owner-operated painting and light renovation across ${S.county}. One call, one contact, from estimate to final walkthrough.</p>
      </div>
    </section>
    <section class="section-shell">
      <div class="container sp-layout">
        <div class="sp-content" data-reveal>
          <h2>Who you're hiring</h2>
          <p>Sal's Painting &amp; Basic Renovations is Sal — the person who answers ${S.phone}, walks your rooms, and paints your project. No franchise dispatch, no sales team handing off to a different crew mid-job.</p>
          <p>Based at 54 Charles St in ${S.city} since 2015, Sal built the business on residential work across Middlesex County: interiors that need real prep, exteriors that face NJ weather, and the drywall repair that has to happen before color goes up.</p>
          ${splitMediaBlock("Images/SalBrochure-cutout.webp", "Sal's Painting — Carteret NJ painter", "Local owner, local reputation", `<p>Sal's reputation is built on repeat referrals in Carteret, Woodbridge, Edison, and nearby towns — homeowners who want the same person from quote to cleanup.</p><p>See <a href="${S.googleProfile}" target="_blank" rel="noopener noreferrer">Google reviews</a> and follow project photos on <a href="${S.facebook}" target="_blank" rel="noopener noreferrer">Facebook</a>.</p>`, { w: 400, h: 520, portrait: true })}
          <h2>What Sal focuses on</h2>
          <ul class="about-list">
            <li>Interior painting — walls, ceilings, trim, whole-home repaints</li>
            <li>Exterior painting — siding, trim, shutters, doors</li>
            <li>Drywall repair and surface prep before paint</li>
            <li>Deck and fence staining for outdoor wood</li>
            <li>Basic renovation finish work paired with painting</li>
          </ul>
          <div class="city-local-note"><strong>5.0 on Google:</strong> Fourteen public reviews from local homeowners — consistently mentioning professionalism, fair pricing, and clean results.</div>
          <h2>How Sal works</h2>
          <p>Free estimates. Straight scope. Protected floors and furniture. Walkthrough before payment. Available seven days a week, 7 AM to 9 PM — because homeowners in ${S.county} are busy too.</p>
          ${processStrip(["<strong>Call or form</strong> — Share town, rooms, and timeline.", "<strong>Walkthrough</strong> — Prep and scope defined before price.", "<strong>Finish walk</strong> — Same contact if anything needs attention."], "The Sal's Painting process")}
          <h2>Where Sal paints in Middlesex County</h2>
          <p>Based in <a href="carteret-painter.html">Carteret</a> and serving <a href="perth-amboy-painter.html">Perth Amboy</a>, <a href="woodbridge-painter.html">Woodbridge</a>, <a href="edison-painter.html">Edison</a>, <a href="rahway-painter.html">Rahway</a>, <a href="linden-painter.html">Linden</a>, <a href="iselin-painter.html">Iselin</a>, <a href="sayreville-painter.html">Sayreville</a>, and <a href="south-amboy-painter.html">South Amboy</a> within roughly 25 miles. <a href="service-areas.html">See the full service area hub</a>.</p>
          <h2>Residential painting services Sal offers</h2>
          <ul class="about-list">
            <li><a href="interior-painting.html">Interior house painting</a> — walls, ceilings, bedrooms, kitchens, whole-home repaints</li>
            <li><a href="exterior-painting.html">Exterior house painting</a> — siding, trim, shutters, doors, curb appeal</li>
            <li><a href="drywall-repair-prep.html">Drywall repair and prep</a> — patch, skim, prime before paint</li>
            <li><a href="trim-doors-ceilings.html">Trim, doors, and ceilings</a> — crisp cut-in and detail work</li>
            <li><a href="accent-walls.html">Accent wall painting</a> — bold feature walls done right</li>
            <li><a href="deck-fence-staining.html">Deck and fence staining</a> — outdoor wood protection</li>
            <li><a href="basic-renovations.html">Basic renovation finish</a> — paint after light updates</li>
          </ul>
          <h2>What makes Sal different from franchise painters</h2>
          <p>No call center, no surprise crew swap mid-job, no vague per-day pricing. Sal answers ${S.phone}, walks your ${S.county} home, and paints the project. That direct model is why referrals drive most of the business — homeowners who want one accountable contact from quote to cleanup.</p>
          <p><a href="tel:${S.tel}">${S.phone}</a> · <a href="service-guarantee.html">Service guarantee</a> · <a href="pricing.html">Pricing guide</a> · <a href="gallery.html">See completed work</a> · <a href="contact.html">Contact Sal</a></p>
          ${relatedChips([["interior-painting.html", "Interior Painting"], ["exterior-painting.html", "Exterior"], ["service-areas.html", "Service Areas"], ["contact.html", "Contact"]], "Explore services")}
        </div>
        <aside class="sp-sidebar" data-reveal>
          <div class="about-card">
            <h3>Talk to Sal directly</h3>
            <p>Questions about scope, timing, or prep — call or text.</p>
            <a class="btn btn-primary btn-full" href="tel:${S.tel}">${S.phone}</a>
            <a class="btn btn-ghost btn-full" href="contact.html" style="margin-top:12px;">Contact form</a>
          </div>
        </aside>
      </div>
    </section>
    ${contactParallax("Ready to start?", "Call Sal for a free estimate.")}
  </main>
${foot()}`,
);

writeFileSync(
  join(ROOT, "contact.html"),
  `${head({ title: P.contact.title, desc: P.contact.description, keywords: P.contact.keywords, canonical: `${S.url}/contact.html`, extraSchema: schemaScript(contactPageSchema({ title: P.contact.title, description: P.contact.description, faqs: [
          ["What's the fastest way to reach Sal?", `Call or text ${S.phone}. Form submissions are answered promptly — texting photos of the rooms or exterior speeds up ballparks.`],
          ["Is the estimate really free?", "Yes — walkthroughs and photo-based quotes for smaller scopes are always free with no obligation."],
          ["What should I include in my message?", "Town, service type (interior, exterior, drywall, deck, etc.), room count or surfaces, and your ideal timeline."],
          ["Do you serve my town if it's not listed?", "Sal serves Middlesex County and nearby towns within roughly 25 miles of Carteret. Call if you're unsure — you'll get a straight answer."],
          ["Can I text photos instead of an in-person walkthrough?", "Yes — smaller scopes are often quoted from photos. Larger interiors and full exteriors usually need an on-site look."],
          ["What are Sal's hours?", "Seven days a week, 7 AM to 9 PM — including evenings and weekends for busy homeowners."],
          ["Where is Sal's Painting located?", `54 Charles St, ${S.city}, NJ 07008 — see the map below or about Sal.`],
          ["Do you offer interior and exterior painting?", "Yes — see interior and exterior service pages for scope details."],
        ] })) })}
<body>
  <a class="skip-nav" href="#main-content">Skip to main content</a>
  <div id="site-header-include"></div>
  <main id="main-content">
    <section class="sp-hero sp-hero--panels hero" aria-label="Contact">
      ${heroPanelsGallery(HERO_GALLERY_SETS[10])}
      <div class="sp-hero-overlay" aria-hidden="true"></div>
      <div class="container">
        <p class="breadcrumb-trail"><a href="/">Home</a> &rsaquo; Contact</p>
        <h1>${P.contact.h1}</h1>
        <p>Interior, exterior, drywall repair, deck staining, and renovation work across ${S.county}. Call, text, or send the form below.</p>
      </div>
    </section>
    <section class="section-shell">
      <div class="container">
        <div class="contact-page-grid">
          <div class="contact-page-form" data-reveal>
            <p class="eyebrow">Estimate request</p>
            <h2>Send your project details</h2>
            <p style="color:var(--muted);margin-bottom:1.25rem;">Include your town, rooms or surfaces, and whether you have photos — Sal can often narrow scope before the walkthrough.</p>
            ${contactForm("", `Contact form - ${S.name}`)}
          </div>
          <div class="contact-direct-cards" data-reveal>
            <a class="contact-direct-card" href="tel:${S.tel}"><strong>Call or Text</strong><span>${S.phone}</span></a>
            <a class="contact-direct-card" href="mailto:${S.email}"><strong>Email</strong><span>${S.email}</span></a>
            <div class="contact-direct-card contact-direct-card--static"><strong>Hours</strong><span>7 days · 7 AM – 9 PM</span></div>
            <div class="contact-direct-card contact-direct-card--static"><strong>Address</strong><span>54 Charles St, ${S.city}, NJ 07008</span></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-shell faq-section">
      <div class="container">
        <div class="section-heading" data-reveal>
          <p class="eyebrow">Before you call</p>
          <h2>Contact &amp; scheduling FAQ</h2>
        </div>
        <div class="faq-list">${faqBlock([
          ["What's the fastest way to reach Sal?", `Call or text ${S.phone}. Form submissions are answered promptly — texting photos of the rooms or exterior speeds up ballparks.`],
          ["Is the estimate really free?", "Yes — walkthroughs and photo-based quotes for smaller scopes are always free with no obligation."],
          ["What should I include in my message?", "Town, service type (interior, exterior, drywall, deck, etc.), room count or surfaces, and your ideal timeline."],
          ["Do you serve my town if it's not listed?", "Sal serves Middlesex County and nearby towns within roughly 25 miles of Carteret. Call if you're unsure — you'll get a straight answer."],
          ["Can I text photos instead of an in-person walkthrough?", "Yes — smaller scopes are often quoted from photos. Larger interiors and full exteriors usually need an on-site look."],
          ["What are Sal's hours?", "Seven days a week, 7 AM to 9 PM — including evenings and weekends for busy homeowners."],
          ["Where is Sal's Painting located?", `54 Charles St, ${S.city}, NJ 07008 — see the map below or <a href="about.html">about Sal</a>.`],
          ["Do you offer interior and exterior painting?", `Yes — see <a href="interior-painting.html">interior</a> and <a href="exterior-painting.html">exterior</a> service pages for scope details.`],
        ], "contact")}</div>
      </div>
    </section>
    <section class="section-shell">
      <div class="container sp-content" data-reveal style="max-width:900px;">
        <h2>Towns Sal serves from Carteret</h2>
        <p>Sal's Painting is based at 54 Charles St in ${S.city} and paints across ${S.county} and nearby Union County border towns. Each city page covers local neighborhoods, housing types, and what to expect on prep.</p>
        <ul class="about-list">
          <li><a href="carteret-painter.html">Carteret, NJ painter</a> — home base, priority scheduling</li>
          <li><a href="perth-amboy-painter.html">Perth Amboy, NJ painter</a> — waterfront and inland</li>
          <li><a href="woodbridge-painter.html">Woodbridge, NJ painter</a> — Colonia, Avenel, Fords, Keasbey</li>
          <li><a href="edison-painter.html">Edison, NJ painter</a> — Oak Tree, Clara Barton, north Edison</li>
          <li><a href="rahway-painter.html">Rahway, NJ painter</a> — historic downtown and suburbs</li>
          <li><a href="linden-painter.html">Linden, NJ painter</a> — rentals and residential</li>
          <li><a href="iselin-painter.html">Iselin, NJ painter</a> — Woodbridge Township hub</li>
          <li><a href="sayreville-painter.html">Sayreville, NJ painter</a> — Parlin, Morgan, waterfront</li>
          <li><a href="south-amboy-painter.html">South Amboy, NJ painter</a> — Raritan Bay area</li>
        </ul>
        <h2>Services you can request on the contact form</h2>
        <p><a href="interior-painting.html">Interior painting</a>, <a href="exterior-painting.html">exterior painting</a>, <a href="drywall-repair-prep.html">drywall repair</a>, <a href="trim-doors-ceilings.html">trim and ceilings</a>, <a href="accent-walls.html">accent walls</a>, <a href="deck-fence-staining.html">deck staining</a>, and <a href="basic-renovations.html">renovation finish</a> work. Not sure which category fits? Select "Not sure" on the form — Sal will help scope it on the call.</p>
      </div>
    </section>
    <section class="map-section section-shell">
      <div class="container">
        <div class="st-map-panel" style="max-width:100%;border-radius:var(--radius-lg);overflow:hidden;">
          <iframe src="${S.mapEmbed}" title="Sal's Painting on Google Maps" loading="lazy" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" style="width:100%;min-height:400px;border:0;"></iframe>
        </div>
      </div>
    </section>
    ${contactParallax("Fastest response", "Text photos for a quicker ballpark.", "Share the room, surface, and town — Sal can often narrow scope before the walkthrough.")}
  </main>
${foot()}`,
);

const galleryItems = GALLERY_ITEMS.map(
  ([n, cat, cap]) =>
    `<figure class="gallery-item" data-category="${cat}"><img src="${G(n)}" alt="${cap}" width="824" height="824" loading="lazy" decoding="async"><figcaption>${cap}</figcaption></figure>`,
).join("\n          ");

writeFileSync(
  join(ROOT, "gallery.html"),
  `${head({ title: P.gallery.title, desc: P.gallery.description, keywords: P.gallery.keywords, canonical: `${S.url}/gallery.html`, extraSchema: schemaScript(galleryPageSchema({ title: P.gallery.title, description: P.gallery.description, items: GALLERY_ITEMS.map(([n]) => n), captions: GALLERY_ITEMS.map(([, , cap]) => cap) })) })}
<body>
  <a class="skip-nav" href="#main-content">Skip to main content</a>
  <div id="site-header-include"></div>
  <main id="main-content">
    <section class="sp-hero sp-hero--panels hero" aria-label="Gallery">
      ${heroPanelsGallery(HERO_GALLERY_SETS[3])}
      <div class="sp-hero-overlay" aria-hidden="true"></div>
      <div class="container">
        <p class="breadcrumb-trail"><a href="/">Home</a> &rsaquo; Our Work</p>
        <h1>${P.gallery.h1}</h1>
        <p>Interior repaints, exterior refreshes, trim detail, and deck staining completed for local homeowners. Every image is from a completed Sal's Painting project.</p>
      </div>
    </section>
    <section class="section-shell">
      <div class="container sp-content" data-reveal style="max-width:900px;margin:0 auto 2rem;">
        <h2>What you'll see in this gallery</h2>
        <p>Photos are organized by project type — interior rooms, exterior siding and trim, detail work, deck staining, and renovation finishes across Carteret, Woodbridge, Edison, Perth Amboy, and nearby towns. Every image is from a completed Sal's Painting residential job in ${S.county}.</p>
        <h2>Interior painting projects</h2>
        <p>Living rooms, bedrooms, kitchens, and whole-home repaints with proper prep — patching, priming, and clean cut-in at ceilings and trim. See the <a href="interior-painting.html">interior painting service page</a> for scope details and <a href="carteret-painter.html">Carteret</a>, <a href="edison-painter.html">Edison</a>, and <a href="woodbridge-painter.html">Woodbridge</a> city pages.</p>
        <h2>Exterior house painting</h2>
        <p>Siding, trim, shutters, and curb-appeal refreshes built for New Jersey weather. Waterfront homes in <a href="perth-amboy-painter.html">Perth Amboy</a> and <a href="south-amboy-painter.html">South Amboy</a> often need extra prep on bay-facing elevations — see <a href="exterior-painting.html">exterior painting services</a>.</p>
        <h2>Trim, decks, and renovation finish</h2>
        <p>Detail work on <a href="trim-doors-ceilings.html">trim and doors</a>, <a href="deck-fence-staining.html">deck and fence staining</a>, and <a href="basic-renovations.html">post-renovation finish paint</a> after kitchen or bath updates. Use the filters below to browse by category.</p>
        <p>Need something similar at your home? <a href="contact.html">Request a quote</a>, check <a href="pricing.html">pricing ballparks</a>, or call <a href="tel:${S.tel}">${S.phone}</a> with a reference to the photo style you like.</p>
      </div>
    </section>
    <section class="section-shell gallery-section">
      <div class="container">
        <div class="gallery-filters" role="tablist" aria-label="Filter gallery">
          <button class="gallery-filter active" data-filter="all" aria-selected="true">All</button>
          <button class="gallery-filter" data-filter="interior" aria-selected="false">Interior</button>
          <button class="gallery-filter" data-filter="exterior" aria-selected="false">Exterior</button>
          <button class="gallery-filter" data-filter="trim" aria-selected="false">Trim</button>
          <button class="gallery-filter" data-filter="deck" aria-selected="false">Decks</button>
          <button class="gallery-filter" data-filter="renovation" aria-selected="false">Renovations</button>
        </div>
        <div class="gallery-grid">${galleryItems}</div>
        <div class="sp-content" data-reveal style="margin-top:2.5rem;max-width:900px;">
          <h2>Request a quote for similar work in your town</h2>
          <p>Sal paints across <a href="carteret-painter.html">Carteret</a>, <a href="woodbridge-painter.html">Woodbridge</a>, <a href="edison-painter.html">Edison</a>, <a href="perth-amboy-painter.html">Perth Amboy</a>, <a href="rahway-painter.html">Rahway</a>, <a href="linden-painter.html">Linden</a>, <a href="iselin-painter.html">Iselin</a>, <a href="sayreville-painter.html">Sayreville</a>, and <a href="south-amboy-painter.html">South Amboy</a>. Tell Sal which gallery style matches your project when you <a href="contact.html">contact</a> or call <a href="tel:${S.tel}">${S.phone}</a>.</p>
          <h2>Explore services behind these photos</h2>
          <p><a href="interior-painting.html">Interior painting</a> · <a href="exterior-painting.html">Exterior painting</a> · <a href="drywall-repair-prep.html">Drywall repair</a> · <a href="trim-doors-ceilings.html">Trim and doors</a> · <a href="accent-walls.html">Accent walls</a> · <a href="deck-fence-staining.html">Deck staining</a> · <a href="basic-renovations.html">Renovation finish</a> · <a href="pricing.html">Pricing</a> · <a href="service-areas.html">Service areas</a></p>
        </div>
      </div>
    </section>
    <section class="contact-section contact-section--parallax section-shell" data-parallax-overscan="0.30">
      <div class="container contact-inner" data-reveal>
        <p class="eyebrow">Like what you see?</p>
        <h2>Get a free estimate for your project.</h2>
        <a class="btn btn-primary btn-lg" href="contact.html">Request a Quote</a>
      </div>
    </section>
  </main>
${foot()}`,
);

writeFileSync(
  join(ROOT, "pricing.html"),
  `${head({ title: P.pricing.title, desc: P.pricing.description, keywords: P.pricing.keywords, canonical: `${S.url}/pricing.html`, extraSchema: schemaScript(pricingPageSchema({ title: P.pricing.title, description: P.pricing.description })) })}
<body>
  <a class="skip-nav" href="#main-content">Skip to main content</a>
  <div id="site-header-include"></div>
  <main id="main-content">
    <section class="sp-hero sp-hero--panels hero" aria-label="Pricing">
      ${heroPanelsGallery(HERO_GALLERY_SETS[5])}
      <div class="sp-hero-overlay" aria-hidden="true"></div>
      <div class="container">
        <p class="breadcrumb-trail"><a href="/">Home</a> &rsaquo; Pricing</p>
        <h1>${P.pricing.h1}</h1>
        <p>Ballpark ranges for common residential scopes. Every home is different — Sal provides a written quote after seeing the job or reviewing photos.</p>
      </div>
    </section>
    <section class="section-shell">
      <div class="container">
        <div class="section-heading" data-reveal>
          <p class="eyebrow">Transparent ballparks</p>
          <h2>What painting usually costs in Central NJ.</h2>
          <p class="pricing-lead">These are typical ranges for ${S.county} homes. Prep needs, ceiling height, and surface condition move the final number — Sal quotes honestly after assessment.</p>
        </div>
        ${contentMedia(CONTENT("pricing"), "House painting in Middlesex County NJ", "Typical residential painting scope — exact price after walkthrough")}
        <div class="pricing-grid" data-reveal>
          <article class="pricing-card"><h3>Interior — single room</h3><p class="pricing-range">$350 – $800+</p><p>Walls and ceiling, standard prep, one coat primer if needed plus two finish coats.</p></article>
          <article class="pricing-card"><h3>Interior — whole home</h3><p class="pricing-range">$2,500 – $8,000+</p><p>Depends on square footage, room count, prep, and whether trim/ceilings are included.</p></article>
          <article class="pricing-card"><h3>Exterior — average home</h3><p class="pricing-range">$3,500 – $9,000+</p><p>Siding and trim on a typical two-story. Power wash and scrape included in scope when needed.</p></article>
          <article class="pricing-card"><h3>Drywall repair</h3><p class="pricing-range">$150 – $500+</p><p>Small patches to larger skim areas — often bundled with a paint quote.</p></article>
          <article class="pricing-card"><h3>Deck / fence stain</h3><p class="pricing-range">$400 – $2,000+</p><p>Based on square footage, wood condition, and transparent vs solid stain.</p></article>
          <article class="pricing-card"><h3>Accent wall</h3><p class="pricing-range">$200 – $450</p><p>One feature wall including primer for color shifts.</p></article>
        </div>
        <div class="sp-content" data-reveal style="margin-top:2.5rem;">
          <h2>Interior painting prices in ${S.county}</h2>
          <p>Single bedrooms and standard living rooms often fall in the $350–$800 range with normal prep. Whole-home interiors scale with room count, ceiling height, and whether <a href="trim-doors-ceilings.html">trim and ceilings</a> are included. Dark-to-light color jumps and <a href="drywall-repair-prep.html">drywall repair</a> add labor — Sal lists them in the quote, not as surprise add-ons. <a href="interior-painting.html">Interior painting services →</a></p>
          <h2>Exterior house painting costs</h2>
          <p>Typical two-story homes in Carteret, Woodbridge, and Edison often land $3,500–$9,000+ depending on siding type, peeling scope, and how many elevations are included. Waterfront homes in Perth Amboy and South Amboy may need extra prep on trim and railings. <a href="exterior-painting.html">Exterior painting services →</a></p>
          <h2>Drywall repair, trim, accent walls, and decks</h2>
          <p>Small patches often $150–$500 when bundled with a room paint. <a href="accent-walls.html">Accent walls</a> typically $200–$450 for one feature wall with primer. <a href="deck-fence-staining.html">Deck and fence staining</a> runs $400–$2,000+ by square footage and wood condition. <a href="basic-renovations.html">Renovation finish packages</a> are quoted line-by-line after walkthrough.</p>
          <h2>What changes the final price</h2>
          <ul class="about-list">
            <li>Ceiling height and stair halls — ladder time adds labor</li>
            <li>Dark-to-light or bold color changes — extra primer coats</li>
            <li>Peeling exterior or failing stain — scrape and wash scope</li>
            <li>Occupied vs empty home — phasing room-by-room</li>
            <li>Plaster repair and skim work in older Rahway and Linden homes</li>
            <li>Waterfront salt exposure on Perth Amboy and South Amboy exteriors</li>
          </ul>
          <h2>Free estimates in every service area</h2>
          <p>Sal quotes <a href="carteret-painter.html">Carteret</a>, <a href="edison-painter.html">Edison</a>, <a href="woodbridge-painter.html">Woodbridge</a>, <a href="rahway-painter.html">Rahway</a>, and all <a href="service-areas.html">Middlesex County towns</a> on the same transparent model — written scope before work starts. <a href="service-guarantee.html">Workmanship guarantee</a> · <a href="contact.html">Request a quote</a> · <a href="tel:${S.tel}">${S.phone}</a>.</p>
          <p style="color:var(--muted);">All estimates are free. Payment upon completion. Cash, check, and major cards accepted.</p>
        </div>
      </div>
    </section>
    ${contactParallax("Your exact price", "Call Sal for a quote on your project.")}
  </main>
${foot()}`,
);

const cityCards = CITIES.map(
  ([slug, name, desc]) =>
    `<a class="service-card" href="${slug}.html" data-reveal><h3>${name}, NJ</h3><p>${desc}</p><span class="card-link-row">View ${name} painter page &rarr;</span></a>`,
).join("\n          ");

writeFileSync(
  join(ROOT, "service-areas.html"),
  `${head({ title: P["service-areas"].title, desc: P["service-areas"].description, keywords: P["service-areas"].keywords, canonical: `${S.url}/service-areas.html`, extraSchema: schemaScript(serviceAreasPageSchema({ title: P["service-areas"].title, description: P["service-areas"].description, citySlugs: CITIES.map(([s]) => s), faqs: [
          ["Where is Sal's Painting based?", `54 Charles St, ${S.city}, NJ 07008 — the hub for all ${S.county} scheduling.`],
          ["How far from Carteret do you travel?", "Roughly 25 miles — Edison, Sayreville, Rahway, Linden, and Union border towns are routinely served."],
          ["Do you charge extra for travel?", "No separate travel fee for towns listed on this page — scope and prep drive the quote."],
          ["Can I book an estimate in Woodbridge and Edison the same week?", "Often yes — Sal batches route-efficient estimates. Call with both addresses to plan."],
          ["Which town gets the fastest scheduling?", `${S.city} — home base jobs get priority when the calendar allows.`],
          ["Do you paint in Union County?", "Linden and Rahway are regular stops on the Middlesex / Union border. Call if you're nearby."],
        ] })) })}
<body>
  <a class="skip-nav" href="#main-content">Skip to main content</a>
  <div id="site-header-include"></div>
  <main id="main-content">
    <section class="sp-hero sp-hero--panels hero" aria-label="Service areas">
      ${heroPanelsGallery(HERO_GALLERY_SETS[8])}
      <div class="sp-hero-overlay" aria-hidden="true"></div>
      <div class="container">
        <p class="breadcrumb-trail"><a href="/">Home</a> &rsaquo; Service Areas</p>
        <h1>${P["service-areas"].h1}</h1>
        <p>Based in ${S.city} and serving homeowners within roughly 25 miles across ${S.county} and nearby Union County border towns.</p>
      </div>
    </section>
    <section class="section-shell">
      <div class="container">
        <div class="section-heading" data-reveal>
          <p class="eyebrow">Where we paint</p>
          <h2>Towns across the Carteret radius.</h2>
          <p>Each city page covers local neighborhoods, typical home styles, and painting considerations for that area. Not listed? Call — if you're near Middlesex County, you're probably in range.</p>
        </div>
        <div class="services-grid">${cityCards}</div>
        <div class="sp-content" data-reveal style="margin-top:2.5rem;max-width:900px;">
          <h2>How travel and scheduling work from Carteret</h2>
          <p>Sal routes estimates and jobs efficiently from 54 Charles St in ${S.city}. Nearby towns like <a href="perth-amboy-painter.html">Perth Amboy</a> and <a href="woodbridge-painter.html">Woodbridge</a> are often same-week for estimates. <a href="edison-painter.html">Edison</a>, <a href="sayreville-painter.html">Sayreville</a>, and <a href="rahway-painter.html">Rahway</a> are regular stops. ${S.city} homeowners get priority when scheduling allows.</p>
          <h2>Middlesex County towns — local painter pages</h2>
          <p>Each link below goes to a dedicated page with neighborhoods, typical home styles, popular services, and FAQs for that town.</p>
          <ul class="about-list">
            <li><a href="carteret-painter.html">Carteret, NJ</a> — Sal's home base on Charles St; interior, exterior, deck, and renovation work with priority local scheduling.</li>
            <li><a href="perth-amboy-painter.html">Perth Amboy, NJ</a> — Waterfront and inland homes; humidity-aware exterior prep and apartment turnovers.</li>
            <li><a href="woodbridge-painter.html">Woodbridge Township, NJ</a> — Colonia splits, Avenel townhomes, Fords ranches; vinyl siding and tall foyer interiors.</li>
            <li><a href="edison-painter.html">Edison, NJ</a> — Oak Tree colonials, Clara Barton ranches, home office accent walls, pre-listing refreshes.</li>
            <li><a href="rahway-painter.html">Rahway, NJ</a> — Historic downtown plaster and trim; suburban vinyl toward the Linden border.</li>
            <li><a href="linden-painter.html">Linden, NJ</a> — Rental turnovers, aluminum siding exteriors, multifamily hallways.</li>
            <li><a href="iselin-painter.html">Iselin, NJ</a> — Woodbridge Township section near Metropark; townhomes and Oak Tree Road corridor.</li>
            <li><a href="sayreville-painter.html">Sayreville, NJ</a> — Parlin splits, Morgan waterfront humidity, backyard deck staining.</li>
            <li><a href="south-amboy-painter.html">South Amboy, NJ</a> — Raritan Bay salt air on trim; downtown rentals and station-area townhomes.</li>
          </ul>
          <h2>Painting services available in every town</h2>
          <p><a href="interior-painting.html">Interior house painting</a> · <a href="exterior-painting.html">Exterior painting</a> · <a href="drywall-repair-prep.html">Drywall repair</a> · <a href="trim-doors-ceilings.html">Trim and ceilings</a> · <a href="accent-walls.html">Accent walls</a> · <a href="deck-fence-staining.html">Deck staining</a> · <a href="basic-renovations.html">Basic renovations</a></p>
          <h2>Not listed? You may still be in range</h2>
          <p>Sal serves homeowners within roughly 25 miles of Carteret across ${S.county} and nearby Union County border communities. Call <a href="tel:${S.tel}">${S.phone}</a> with your town — you'll get a straight yes or no. <a href="pricing.html">Pricing ballparks</a> · <a href="gallery.html">Project gallery</a> · <a href="contact.html">Contact form</a>.</p>
        </div>
      </div>
    </section>
    <section class="section-shell faq-section">
      <div class="container">
        <div class="section-heading" data-reveal>
          <p class="eyebrow">Service area FAQ</p>
          <h2>Common questions about where Sal paints</h2>
        </div>
        <div class="faq-list">${faqBlock([
          ["Where is Sal's Painting based?", `54 Charles St, ${S.city}, NJ 07008 — the hub for all ${S.county} scheduling.`],
          ["How far from Carteret do you travel?", "Roughly 25 miles — Edison, Sayreville, Rahway, Linden, and Union border towns are routinely served."],
          ["Do you charge extra for travel?", "No separate travel fee for towns listed on this page — scope and prep drive the quote."],
          ["Can I book an estimate in Woodbridge and Edison the same week?", "Often yes — Sal batches route-efficient estimates. Call with both addresses to plan."],
          ["Which town gets the fastest scheduling?", `${S.city} — home base jobs get priority when the calendar allows.`],
          ["Do you paint in Union County?", "Linden and Rahway are regular stops on the Middlesex / Union border. Call if you're nearby."],
        ], "areas")}</div>
      </div>
    </section>
    ${contactParallax("Not sure if you're in range?", "Call Sal — you'll get a straight answer.")}
  </main>
${foot()}`,
);

writeFileSync(
  join(ROOT, "service-guarantee.html"),
  `${head({ title: P["service-guarantee"].title, desc: P["service-guarantee"].description, keywords: P["service-guarantee"].keywords, canonical: `${S.url}/service-guarantee.html`, extraSchema: schemaScript(guaranteePageSchema({ title: P["service-guarantee"].title, description: P["service-guarantee"].description })) })}
<body>
  <a class="skip-nav" href="#main-content">Skip to main content</a>
  <div id="site-header-include"></div>
  <main id="main-content">
    <section class="sp-hero sp-hero--panels hero" aria-label="Service guarantee">
      ${heroPanelsGallery(HERO_GALLERY_SETS[7])}
      <div class="sp-hero-overlay" aria-hidden="true"></div>
      <div class="container">
        <p class="breadcrumb-trail"><a href="/">Home</a> &rsaquo; Service Guarantee</p>
        <h1>${P["service-guarantee"].h1}</h1>
        <p>Sal stands behind the prep, application, and cleanup on every job.</p>
      </div>
    </section>
    <section class="section-shell">
      <div class="container sp-layout">
        <div class="sp-content" data-reveal>
          <h2>What the guarantee covers</h2>
          <p>If something isn't right after the job — missed spot, rough line, or application issue — call Sal at ${S.phone}. Workmanship problems get corrected. That's the same person who quoted the job, not a warranty hotline.</p>
          ${contentMedia(CONTENT("service-guarantee"), "Quality painting work in Middlesex County NJ", "Prep, application, and cleanup — backed by Sal's workmanship guarantee")}
          <h2>What it doesn't cover</h2>
          <ul class="about-list">
            <li>Normal wear and tear after the job is complete</li>
            <li>Damage from moisture, leaks, or structural movement after painting</li>
            <li>Color change requests after approval</li>
            <li>Pre-existing conditions that were noted before work began</li>
          </ul>
          <h2>Before work starts</h2>
          <p>Sal walks the scope with you — prep, coats, sheen, and timing — so expectations are clear before the first drop cloth goes down. Questions? Ask before booking, not after.</p>
          <h2>Guarantee on interior and exterior painting</h2>
          <p>Whether the job is a single <a href="accent-walls.html">accent wall</a> in Edison, a whole-home <a href="interior-painting.html">interior repaint</a> in Woodbridge, or <a href="exterior-painting.html">exterior siding</a> in Perth Amboy, the same standard applies: proper prep, clean application, and correction if workmanship misses the mark. <a href="drywall-repair-prep.html">Drywall repair</a> integrated into paint jobs is covered as part of the agreed scope.</p>
          <h2>Deck staining and renovation finish work</h2>
          <p><a href="deck-fence-staining.html">Deck and fence staining</a> is guaranteed on application and prep — not on wood rot discovered after coating. <a href="basic-renovations.html">Renovation finish</a> jobs cover the surfaces listed in your written quote; structural or plumbing issues stay outside paint scope.</p>
          ${processStrip(["<strong>Scope in writing</strong> — Surfaces, prep, and coats agreed upfront.", "<strong>Walkthrough</strong> — Review lines, coverage, and cleanup together.", "<strong>Follow-up</strong> — Same phone number if touch-up is needed."], "Quality on every job")}
          <h2>Service areas covered by the guarantee</h2>
          <p>All ${S.county} towns Sal serves — <a href="carteret-painter.html">Carteret</a>, <a href="edison-painter.html">Edison</a>, <a href="woodbridge-painter.html">Woodbridge</a>, <a href="rahway-painter.html">Rahway</a>, and <a href="service-areas.html">every city on the service area map</a>. <a href="pricing.html">Pricing</a> · <a href="gallery.html">Gallery</a> · <a href="contact.html">Contact Sal</a> · <a href="tel:${S.tel}">${S.phone}</a> · <a href="about.html">About Sal</a></p>
        </div>
        <aside class="sp-sidebar" data-reveal>
          <div class="about-card">
            <h3>Questions about scope?</h3>
            <p>Ask before the job starts — Sal explains prep and limits honestly.</p>
            <a class="btn btn-primary btn-full" href="tel:${S.tel}">${S.phone}</a>
          </div>
        </aside>
      </div>
    </section>
    ${contactParallax("Ready to book?", "Get a free estimate with clear scope upfront.")}
  </main>
${foot()}`,
);

writeFileSync(
  join(ROOT, "thank-you.html"),
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You | ${S.name}</title>
  <meta name="robots" content="noindex, nofollow">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="site-header-include"></div>
  <main class="section-shell" style="min-height:50vh;display:flex;align-items:center;">
    <div class="container" style="text-align:center;max-width:560px;">
      <p class="eyebrow">Message received</p>
      <h1>Thanks — Sal will be in touch shortly.</h1>
      <p style="margin:1.5rem 0;color:var(--muted);">Need a faster response? Call or text directly with your town and project photos if you have them.</p>
      <a class="btn btn-primary btn-lg" href="tel:${S.tel}">${S.phone}</a>
      <p style="margin-top:1.5rem;"><a href="/">Back to homepage</a> · <a href="gallery.html">View our work</a></p>
    </div>
  </main>
  <div id="site-footer-include"></div>
  <script src="includes.js"></script>
  <script src="script.js"></script>
</body>
</html>`,
);

writeFileSync(
  join(ROOT, "404.html"),
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found | ${S.name}</title>
  <meta name="robots" content="noindex, nofollow">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="site-header-include"></div>
  <main class="section-shell" style="min-height:50vh;display:flex;align-items:center;">
    <div class="container" style="text-align:center;max-width:560px;">
      <p class="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p style="margin:1.5rem 0;color:var(--muted);">That link may be outdated. Try the homepage, service pages, or call Sal for help.</p>
      <a class="btn btn-primary" href="/">Go Home</a>
      <a class="btn btn-ghost" href="tel:${S.tel}" style="margin-left:12px;">${S.phone}</a>
      <p style="margin-top:1.25rem;font-size:0.9rem;"><a href="service-areas.html">Service areas</a> · <a href="contact.html">Contact</a></p>
    </div>
  </main>
  <div id="site-footer-include"></div>
  <script src="includes.js"></script>
  <script src="script.js"></script>
</body>
</html>`,
);

const urls = [
  "",
  "about.html",
  "contact.html",
  "gallery.html",
  "pricing.html",
  "service-areas.html",
  "service-guarantee.html",
  "interior-painting.html",
  "exterior-painting.html",
  "drywall-repair-prep.html",
  "trim-doors-ceilings.html",
  "accent-walls.html",
  "deck-fence-staining.html",
  "basic-renovations.html",
  ...CITIES.map(([s]) => `${s}.html`),
];

writeFileSync(
  join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${S.url}/${u}</loc><changefreq>monthly</changefreq><priority>${u === "" ? "1.0" : "0.8"}</priority></url>`).join("\n")}
</urlset>`,
);

console.log("Wrote remaining pages + sitemap");
