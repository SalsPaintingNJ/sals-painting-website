/** Unique SEO body sections per city page — imported by build-sals-site.mjs */

export const CITY_GALLERY = {
  "carteret-painter": 1,
  "perth-amboy-painter": 3,
  "woodbridge-painter": 4,
  "rahway-painter": 10,
  "edison-painter": 6,
  "linden-painter": 8,
  "iselin-painter": 2,
  "sayreville-painter": 7,
  "south-amboy-painter": 9,
};

export function citySections(city, S, G) {
  const n = CITY_GALLERY[city.slug] ?? 1;
  const maps = {
    "carteret-painter": [
      { h2: "Interior house painting in Carteret, NJ", p: `From ranches on Roosevelt Avenue to capes near the waterfront, Carteret interiors need prep that matches the room — nail holes, bathroom moisture, and ceiling yellowing after years of use. Sal handles <a href="interior-painting.html">whole-room and whole-home interior painting</a> with furniture covered and floors protected on every job.` },
      { h2: "Exterior painting for Carteret homes", p: `Arthur Kill exposure speeds peeling on south-facing trim. Sal inspects siding, soffits, and porch columns before quoting <a href="exterior-painting.html">exterior house painting</a> — scrape, wash, prime, and coat with NJ-rated acrylic. Many Carteret homeowners phase front-elevation work first when budgeting.` },
      { media: { n, alt: "Interior painting project Carteret NJ", caption: "Residential painting completed in Carteret — Middlesex County" } },
      { h2: "Drywall repair, trim, and decks in Carteret", list: [`<a href="drywall-repair-prep.html">Drywall patching</a> after anchors, leaks, and renovation cut-outs`, `<a href="trim-doors-ceilings.html">Trim, door, and ceiling</a> repaints with crisp cut-in`, `<a href="deck-fence-staining.html">Deck and fence staining</a> for backyard outdoor spaces`, `<a href="accent-walls.html">Accent walls</a> for quick room refreshes`, `<a href="basic-renovations.html">Renovation finish paint</a> after kitchen or bath updates`] },
      { h2: "Why Carteret homeowners hire Sal", p: `Sal lives and works from 54 Charles St — not a franchise crew dispatched from an hour away. You get the owner on the walkthrough, on the ladder, and on the follow-up call. See <a href="pricing.html">Carteret painting price ranges</a>, browse the <a href="gallery.html">project gallery</a>, and read the <a href="service-guarantee.html">workmanship guarantee</a> before you book.` },
      { h2: "Nearby towns Sal paints from Carteret", p: `Short drives to <a href="perth-amboy-painter.html">Perth Amboy</a>, <a href="woodbridge-painter.html">Woodbridge</a>, and <a href="rahway-painter.html">Rahway</a> make scheduling efficient. <a href="service-areas.html">View all Middlesex County service areas</a> or <a href="contact.html">request a Carteret estimate online</a>.` },
    ],
    "perth-amboy-painter": [
      { h2: "House painter serving Perth Amboy, NJ", p: `Perth Amboy's waterfront blocks and inland neighborhoods each need different prep — salt air on bay-facing trim, older paint layers downtown, and faster vinyl recoat cycles on post-war ranches. Sal's Painting serves Perth Amboy weekly from nearby Carteret with <a href="interior-painting.html">interior</a> and <a href="exterior-painting.html">exterior</a> scopes quoted honestly after inspection.` },
      { h2: "Interior painting in Perth Amboy apartments and homes", p: `Unit turnovers, hallway refreshes, and single-family room repaints are common Perth Amboy scopes. Landlords and owner-occupants call for <a href="basic-renovations.html">rental turnover packages</a> that bundle patch, prime, and paint. Occupied homes are done room-by-room when needed.` },
      { media: { n, alt: "Exterior painting Perth Amboy area NJ", caption: "Exterior siding refresh — Perth Amboy / Middlesex County project" } },
      { h2: "Waterfront exterior prep in Perth Amboy", p: `Homes near the Raritan Bay see chalking, rust on railings, and soft wood on porch trim. Sal uses rust-inhibiting primer on metal and moisture-smart systems on wood before topcoat. Pair exterior work with <a href="deck-fence-staining.html">deck or fence staining</a> when backyard wood is graying too.` },
      { h2: "Drywall and plaster repair in older Perth Amboy homes", p: `Pre-1978 surfaces may have multiple paint generations — Sal discusses safe prep when layers fail. <a href="drywall-repair-prep.html">Crack chasing, skim, and stain blocking</a> are quoted before color goes up so patches do not flash through.` },
      { h2: "Perth Amboy estimates and scheduling", p: `Free walkthroughs across Amboy Avenue, Bayview, and Hall Avenue corridors. Text photos to <a href="tel:7276447674">${S.phone}</a> for faster ballparks. Nearby: <a href="carteret-painter.html">Carteret</a>, <a href="south-amboy-painter.html">South Amboy</a>, <a href="woodbridge-painter.html">Woodbridge</a>. <a href="pricing.html">See NJ painting costs</a>.` },
    ],
    "woodbridge-painter": [
      { h2: "Painter in Woodbridge Township, NJ", p: `Woodbridge is one of Middlesex County's largest markets — Colonia splits, Avenel townhomes, Fords ranches, and Keasbey blocks each have different ladder access and prep needs. Sal routes Woodbridge jobs from Carteret for <a href="interior-painting.html">interior repaints</a>, <a href="exterior-painting.html">exterior siding work</a>, and <a href="drywall-repair-prep.html">drywall repair</a> after renovations.` },
      { h2: "Colonia, Avenel, and Fords interior painting", p: `Tall foyer walls on split-levels need height access planned upfront — Sal measures on walkthrough so quotes include ladder or pole work. Open kitchens in Colonia often pair wall color with <a href="trim-doors-ceilings.html">trim and ceiling refreshes</a> and an <a href="accent-walls.html">accent wall</a> in the adjoining living space.` },
      { media: { n, alt: "Exterior house painting Woodbridge Township NJ", caption: "Exterior repaint — Woodbridge Township residential home" } },
      { h2: "Vinyl and wood siding exterior painting", p: `Woodbridge's vinyl-sided ranches need proper wash and bond primer — not a quick roll over chalking siding. Wood trim on older Colonia homes may need scrape and spot-prime before the full elevation is coated. See <a href="gallery.html">exterior gallery photos</a> for similar Woodbridge-area jobs.` },
      { h2: "Iselin and Port Reading — same township, same painter", p: `Sal also serves the <a href="iselin-painter.html">Iselin section</a> of Woodbridge Township — dense townhomes near Metropark and Oak Tree Road corridors. Port Reading and Avenel rentals often need <a href="basic-renovations.html">fast turnover paint</a> between tenants.` },
      { h2: "Woodbridge painting costs and guarantee", p: `Every job gets a written scope — prep, coats, and which trim is included. <a href="pricing.html">Woodbridge ballparks</a> vary by room count and exterior elevation size. Sal stands behind workmanship — <a href="service-guarantee.html">read the guarantee</a> · <a href="contact.html">contact for a Woodbridge quote</a>.` },
    ],
    "rahway-painter": [
      { h2: "Rahway, NJ house painting services", p: `Rahway mixes Victorian-era homes near downtown with post-war suburbs toward Clark and Linden. Sal makes the drive from Carteret regularly for <a href="interior-painting.html">interior painting</a>, <a href="exterior-painting.html">exterior repaints</a>, and the <a href="drywall-repair-prep.html">plaster and drywall prep</a> older Rahway walls often need before color goes up.` },
      { h2: "Historic Rahway interiors — trim and high ceilings", p: `Wide baseboards, tall ceilings, and plaster walls near downtown Rahway need more cut-in time than a suburban ranch. Sal quotes <a href="trim-doors-ceilings.html">trim and ceiling work</a> together with wall color so the room reads finished. Stair halls and foyers are measured for access on the walkthrough.` },
      { media: { n, alt: "Renovation finish painting Rahway NJ", caption: "Renovation finish paint — Rahway area residential project" } },
      { h2: "Rahway exterior and porch painting", p: `Frame homes near the Rahway River need moisture-aware washing before exterior paint. Front porch columns, shutters, and railings are often bundled with siding for curb appeal — especially before listing. Spring through fall scheduling for <a href="exterior-painting.html">exterior work</a>.` },
      { h2: "Rahway neighborhoods on Sal's route", list: ["Downtown Rahway — older frame and brick homes", "Near Rahway Station — condos and multifamily turns", "Rahway River area — humidity-smart primer scopes", "North Rahway toward Linden — ranch repaints"] },
      { h2: "Get a Rahway painting estimate", p: `Call <a href="tel:7276447674">${S.phone}</a> with your Rahway address and photos. Nearby pages: <a href="linden-painter.html">Linden</a>, <a href="carteret-painter.html">Carteret</a>, <a href="edison-painter.html">Edison</a>. <a href="pricing.html">Pricing guide</a> · <a href="gallery.html">Gallery</a>.` },
    ],
    "edison-painter": [
      { h2: "Edison, NJ painting contractor — owner on site", p: `Edison's large colonials in Oak Tree, ranches in Clara Barton, and condos near Route 1 each need different scheduling and prep. Sal serves all Edison sections for <a href="interior-painting.html">interior house painting</a>, <a href="exterior-painting.html">exterior refreshes</a>, <a href="deck-fence-staining.html">deck staining</a>, and pre-listing spruce-ups.` },
      { h2: "Large open floor plans and tall walls in Edison", p: `Great rooms and two-story foyers in north Edison add labor per gallon — Sal quotes by square footage and prep, not vague per-day rates. <a href="accent-walls.html">Accent walls</a> behind home offices are a popular fast scope in Edison after remote-work room updates.` },
      { media: { n, alt: "Bedroom interior painting Edison NJ area", caption: "Bedroom repaint with ceiling — Edison / Middlesex County" } },
      { h2: "Pre-listing painting in Edison", p: `Sellers in Edison often bundle interior neutral refreshes with front-elevation <a href="exterior-painting.html">exterior touch-up</a> before listing. Sal phases work when your closing timeline is tight — front door, trim, and main living areas first.` },
      { h2: "Edison deck, fence, and exterior wood", p: `Backyard decks in Edison neighborhoods need spring-through-fall wash-and-stain windows. Sal won't coat wet wood or schedule coat days before rain. Pair with <a href="basic-renovations.html">light renovation finish</a> when a kitchen update leaves walls and trim needing integration.` },
      { h2: "Edison service area links", p: `Also painting <a href="woodbridge-painter.html">Woodbridge</a>, <a href="iselin-painter.html">Iselin</a>, and <a href="sayreville-painter.html">Sayreville</a>. <a href="service-areas.html">Full service area map</a> · <a href="pricing.html">Edison painting costs</a> · <a href="contact.html">Free estimate form</a>.` },
    ],
    "linden-painter": [
      { h2: "Linden, NJ residential painter", p: `Linden sits between Rahway and Elizabeth with dense multifamily downtown, aluminum-sided ranches near the airport, and steady landlord turnover work. Sal handles <a href="interior-painting.html">interior repaints</a>, <a href="exterior-painting.html">exterior aluminum and wood siding</a>, and <a href="basic-renovations.html">rental unit packages</a> across Linden.` },
      { h2: "Rental turnover painting in Linden", p: `Landlords call for unit-by-unit quotes — standard whites, patch from tenant damage, and <a href="trim-doors-ceilings.html">trim touch-up</a> between leases. Sal schedules evenings and weekends (7 AM – 9 PM) to work around tenant move-in dates.` },
      { media: { n, alt: "Kitchen hallway interior repaint Linden NJ area", caption: "Kitchen and hallway repaint — Linden / Middlesex County area" } },
      { h2: "Aluminum siding exterior painting in Linden", p: `Linden ranches with aluminum siding need clean, bond primer, and the right exterior acrylic — not a coat over chalking metal. Sal flags soft wood on porches and peeling on fascias before quoting.` },
      { h2: "Drywall repair for Linden homes and units", p: `Doorknob holes, anchor pulls, and old patch telegraphing through paint are fixed with <a href="drywall-repair-prep.html">skim and prime</a> before the room is rolled. Multifamily hallways quoted per linear foot and height.` },
      { h2: "Linden estimates — nearby towns", p: `Border service to <a href="rahway-painter.html">Rahway</a>, <a href="carteret-painter.html">Carteret</a>, and <a href="woodbridge-painter.html">Woodbridge</a>. <a href="pricing.html">Linden painting ballparks</a> · <a href="gallery.html">Project photos</a> · <a href="tel:7276447674">${S.phone}</a>.` },
    ],
    "iselin-painter": [
      { h2: "Iselin, NJ house painter — Woodbridge Township", p: `Iselin is a dense hub in Woodbridge Township — colonials and townhomes near Oak Tree Road and Metropark Station. Sal schedules Iselin in route blocks from Carteret for <a href="interior-painting.html">interior painting</a>, <a href="exterior-painting.html">exterior touch-ups</a>, and post-kitchen <a href="drywall-repair-prep.html">drywall repair</a>.` },
      { h2: "Townhome and condo interior painting in Iselin", p: `Efficient room-by-room workflow with furniture covered and floors protected. Open-plan updates after cabinet work often need wall color, <a href="trim-doors-ceilings.html">trim refresh</a>, and an <a href="accent-walls.html">accent wall</a> in the living area — quoted as one scope.` },
      { media: { n, alt: "Living room interior painting Iselin Woodbridge NJ", caption: "Living room walls and trim — Iselin / Woodbridge area" } },
      { h2: "Iselin exterior and HOA color checks", p: `Condo and townhome exteriors sometimes need HOA approval before color changes — bring guidelines to the estimate. Sal confirms colors before ordering materials. See also the full <a href="woodbridge-painter.html">Woodbridge Township painter page</a>.` },
      { h2: "Metropark area and Oak Tree Road corridor", p: `Station-area townhomes and dense residential streets off Route 1 are regular stops. Exterior jobs confirm parking and ladder access before quote day — no surprises when the crew arrives.` },
      { h2: "Book an Iselin painting estimate", p: `<a href="contact.html">Contact form</a> · <a href="pricing.html">Pricing</a> · <a href="edison-painter.html">Edison</a> · <a href="carteret-painter.html">Carteret</a> · <a href="service-guarantee.html">Guarantee</a> · Call <a href="tel:7276447674">${S.phone}</a>.` },
    ],
    "sayreville-painter": [
      { h2: "Sayreville, NJ painting — Parlin, Morgan, and beyond", p: `Sayreville stretches from Raritan Bay waterfront to inland Parlin suburbs. Flood-zone homes near Morgan need moisture-smart primers; inland splits follow standard suburban prep. Sal paints all Sayreville sections from nearby Carteret.` },
      { h2: "Interior painting in Sayreville splits and ranches", p: `<a href="interior-painting.html">Room and whole-home repaints</a> in Parlin and Sayreville proper — including finished basements after moisture checks. Sal won't coat over active water issues without addressing the source first.` },
      { media: { n, alt: "Deck staining Sayreville Parlin NJ", caption: "Deck staining — backyard outdoor wood in Sayreville area" } },
      { h2: "Deck staining and exterior work in Sayreville", p: `Backyard decks in Parlin and Morgan are popular spring scopes — wash, dry, prep gray wood, and apply penetrating or solid stain. Bay-facing <a href="exterior-painting.html">exterior elevations</a> need mildew-aware washing before paint.` },
      { h2: "Drywall repair after water and renovation", p: `Surface <a href="drywall-repair-prep.html">repair and repaint</a> yes after dry leaks; active plumbing must be fixed first. Post-renovation punch lists pair with <a href="basic-renovations.html">finish painting</a> when other trades are done.` },
      { h2: "Sayreville scheduling from Carteret", p: `Typically 15–25 minutes from Charles St depending on section. Neighbors: <a href="south-amboy-painter.html">South Amboy</a>, <a href="edison-painter.html">Edison</a>, <a href="perth-amboy-painter.html">Perth Amboy</a>. <a href="gallery.html">Gallery</a> · <a href="pricing.html">Costs</a>.` },
    ],
    "south-amboy-painter": [
      { h2: "South Amboy, NJ house painter near the Raritan Bay", p: `South Amboy combines waterfront redevelopment, downtown older stock, and newer townhomes near the train station. Sal serves South Amboy from Carteret — often 10–15 minutes — for <a href="interior-painting.html">interior painting</a>, bay-humidity <a href="exterior-painting.html">exterior work</a>, and rental turnovers.` },
      { h2: "Waterfront exterior painting in South Amboy", p: `Salt air attacks south- and west-facing trim and metal railings. Sal uses rust-inhibiting primer on metal and proper exterior acrylic on wood before topcoat. Partial elevation work is available when the body siding is still sound.` },
      { media: { n, alt: "Exterior trim shutter painting South Amboy NJ area", caption: "Exterior trim and shutter painting — waterfront-area home" } },
      { h2: "South Amboy interiors and new construction touch-up", p: `Builder-grade flat paint in newer station-area townhomes often needs a first real homeowner repaint — walls, trim, and doors quoted room-by-room. Downtown rentals get <a href="basic-renovations.html">fast turnover scopes</a>.` },
      { h2: "Bayshore neighborhoods Sal serves", list: ["Waterfront and Bayshore redevelopment", "Broadway and downtown South Amboy", "Near South Amboy Station — townhomes", "Conover Avenue residential blocks"] },
      { h2: "South Amboy free estimates", p: `Same-week estimates often available — text photos to <a href="tel:7276447674">${S.phone}</a>. Nearby: <a href="perth-amboy-painter.html">Perth Amboy</a>, <a href="sayreville-painter.html">Sayreville</a>, <a href="carteret-painter.html">Carteret</a>. <a href="service-areas.html">All service areas</a> · <a href="contact.html">Contact</a>.` },
    ],
  };
  return maps[city.slug] ?? [];
}

export const EXTRA_FAQS = {
  "carteret-painter": [
    ["What is the best way to book a Carteret painter?", "Call or text (727) 644-7674 with your street and scope — Carteret jobs get priority routing from Charles St."],
    ["Does Sal paint Carteret basements?", "Yes, when moisture conditions allow — Sal checks for active water before coating basement walls."],
  ],
  "perth-amboy-painter": [
    ["Can Sal paint Perth Amboy hallways and common areas?", "Yes — multifamily hallway and stairwell scopes are quoted per project."],
    ["Does Sal serve Perth Amboy waterfront condos?", "Yes — exterior scopes confirm HOA rules and elevation access first."],
  ],
  "woodbridge-painter": [
    ["Does Sal paint all Woodbridge Township sections?", "Yes — Colonia, Avenel, Fords, Keasbey, Port Reading, Iselin, and Woodbridge center."],
    ["Can I get a Woodbridge estimate from photos?", "Yes for smaller scopes — text room or exterior photos to speed up the ballpark."],
  ],
  "rahway-painter": [
    ["Does Sal paint Rahway condos near the train station?", "Yes — interior unit work and quoted exterior touch-ups where access allows."],
    ["How much is interior painting in Rahway?", "Varies by room size and prep — see the <a href=\"pricing.html\">pricing page</a> or call for a walkthrough quote."],
  ],
  "edison-painter": [
    ["Does Sal serve Oak Tree and north Edison?", "Yes — entire Edison township including Oak Tree, Clara Barton, and north Edison."],
    ["Can Sal paint my Edison home while I work from home?", "Yes — room-by-room scheduling minimizes disruption to your workspace."],
  ],
  "linden-painter": [
    ["Does Sal work with Linden property managers?", "Yes — repeat unit turns and hallway scopes for local landlords."],
    ["Can you paint Linden multifamily exteriors?", "Reachable elevations yes — quoted after access and height inspection."],
  ],
  "iselin-painter": [
    ["Is Iselin part of Woodbridge for scheduling?", "Yes — Iselin is Woodbridge Township; Sal serves both this page and the Woodbridge hub page."],
    ["Do you paint Iselin home offices and accent walls?", "Yes — popular quick scopes near Metropark and Oak Tree Road."],
  ],
  "sayreville-painter": [
    ["Does Sal stain fences in Sayreville?", "Yes — wood fence staining quoted with height, length, and wood condition."],
    ["Can you paint Sayreville basements?", "Yes after moisture check — Sal uses appropriate products for below-grade walls when dry."],
  ],
  "south-amboy-painter": [
    ["Does Sal paint South Amboy bay-facing railings?", "Yes — rust-aware prep on metal railings is standard on waterfront elevations."],
    ["How do I get a fast South Amboy quote?", "Text your address and photos to (727) 644-7674 — often same-week for estimates."],
  ],
};
