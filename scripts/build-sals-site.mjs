import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import {
  S,
  G,
  HERO_GALLERY_SETS,
  esc,
  head,
  heroPanelsGallery,
  contactForm,
  faqBlock,
  renderSections,
  relatedChips,
  processStrip,
  contactParallax,
  foot,
} from "./page-build-lib.mjs";
import { citySections, EXTRA_FAQS, CITY_GALLERY } from "./city-sections.mjs";
import { SEO, validateAllSeo } from "./seo-meta.mjs";
import { servicePageSchema, cityPageSchema, schemaScript } from "./schema-lib.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
validateAllSeo();

const SERVICES = [
  {
    slug: "interior-painting",
    title: "Interior Painting",
    h1: "Interior Painting Services in Carteret & Middlesex County, NJ",
    meta: "Interior house painting in Carteret, NJ — walls, ceilings, bedrooms, kitchens, and whole-home repaints. Free estimates from Sal's Painting.",
    heroSet: 0,
    preview: "interior-painting",
    contentImg: 2,
    mediaAlt: "Living room interior painting in Carteret and Middlesex County NJ",
    mediaCaption: "Living room walls and trim — interior repaint completed in Middlesex County",
    desc: "Walls, ceilings, trim, bedrooms, kitchens, hallways, and full-room repaint work with proper prep.",
    relatedCities: [["carteret-painter.html", "Carteret"], ["edison-painter.html", "Edison"], ["woodbridge-painter.html", "Woodbridge"]],
    relatedServices: [["drywall-repair-prep.html", "Drywall Repair & Prep"], ["trim-doors-ceilings.html", "Trim, Doors & Ceilings"], ["accent-walls.html", "Accent Walls"]],
    sections: [
      { h2: "What interior painting actually includes", p: "Interior painting is more than rolling color on a wall. Sal's Painting preps surfaces first — patching nail holes, sanding rough spots, caulking gaps, and priming where the old finish is failing. That prep is what separates a paint job that lasts from one that peels in a season." },
      { h2: "Rooms and scopes Sal handles", list: ["Bedrooms, living rooms, and dining spaces", "Kitchens and hallways with trim detail", "Stairwells, ceilings, and accent walls", "Whole-home repaints during move-in or renovation"] },
      { media: { n: 2, alt: "Living room interior painting Carteret NJ", caption: "Living room interior repaint — walls, ceiling, and trim detail in Middlesex County" } },
      { note: "NJ humidity tip:", noteText: "Middlesex County homes near the Arthur Kill and Raritan Bay deal with moisture swings. Bathrooms, basements, and north-facing rooms often need moisture-resistant primer before topcoat — Sal flags that during the walkthrough." },
      { h2: "Interior painting in Carteret, Edison, and Woodbridge", p: "Sal's home base is <a href=\"carteret-painter.html\">Carteret</a>, with regular interior jobs in <a href=\"edison-painter.html\">Edison</a>, <a href=\"woodbridge-painter.html\">Woodbridge</a>, <a href=\"perth-amboy-painter.html\">Perth Amboy</a>, and <a href=\"rahway-painter.html\">Rahway</a>. Whether you need one bedroom refreshed or a whole-home repaint before listing, scope is quoted room-by-room so you know exactly what is included." },
      { h2: "Paint quality and finish choices", p: "Sal uses quality latex and acrylic paints suited for residential interiors. Eggshell and satin are common for walls; semi-gloss for <a href=\"trim-doors-ceilings.html\">trim, doors, and kitchens</a> where wipe-down matters. You'll discuss sheen and color before the job starts." },
      { h2: "Interior prep you can expect on every job", p: "Drop cloths on floors, furniture shifted or covered, outlets and switch plates removed or masked, and cut-in lines along ceilings and trim before rollers hit the field. Holes from picture hooks and old anchors get filled and sanded — often after <a href=\"drywall-repair-prep.html\">drywall repair</a> — so they don't flash through the new color." },
      { h2: "Whole-home and phased interior schedules", p: "Occupied homes are painted room-by-room when needed. Sal communicates which spaces are off-limits each day so you can keep living in the house during a multi-room project. Whole-home repaints before listing or after closing are scheduled with a clear day-by-day plan. See <a href=\"pricing.html\">interior painting price ranges</a> and more photos in the <a href=\"gallery.html\">project gallery</a>." },
      { h2: "Popular interior add-ons", p: "Many homeowners bundle interior walls with <a href=\"accent-walls.html\">accent wall painting</a>, ceiling repaints, or a <a href=\"basic-renovations.html\">post-renovation finish package</a> after kitchen or bath updates. One call covers prep, paint, and walkthrough with Sal directly." },
    ],
    process: [
      "<strong>Walkthrough or photos</strong> — Room count, ceiling height, current colors, and prep needs.",
      "<strong>Written quote</strong> — Scope lists prep, primer, coats, and which trim is included.",
      "<strong>Protected work</strong> — Floors covered, clean cut-in, final walkthrough with Sal on site.",
    ],
    faqs: [
      ["How much does interior painting cost in Carteret?", "Single rooms often start around $350–$800 depending on size, ceiling height, and prep. Whole-home interior jobs are quoted after a walkthrough. Call (727) 644-7674 or see our <a href=\"pricing.html\">pricing page</a> for ballparks."],
      ["Do you move furniture and cover floors?", "Yes. Furniture is shifted and covered, floors are protected, and fixtures are masked. Sal leaves the space clean when the job is done."],
      ["How long does a room take to paint?", "A standard bedroom with prep is often one day. Larger open-plan areas or whole-home jobs are scheduled across multiple days with a clear timeline upfront."],
      ["Can you paint over dark or bold colors?", "Yes, but it may need extra primer coats. Sal will tell you honestly if a color change needs more prep than a simple refresh."],
      ["Do you paint occupied homes in Edison and Woodbridge?", "Yes. Sal works around families and WFH schedules — evenings and weekends available 7 AM to 9 PM."],
      ["Is primer always included?", "Primer is included where surfaces need it — stains, patches, color shifts, or bare drywall. You'll see that in the quote, not as a surprise add-on."],
    ],
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    h1: "Exterior House Painting in Carteret & Central NJ",
    meta: "Exterior painting in Carteret, NJ — siding, trim, shutters, doors, and curb-appeal updates across Middlesex County. Free estimates.",
    heroSet: 1,
    preview: "exterior-painting",
    contentImg: 4,
    mediaAlt: "Exterior house painting Woodbridge Township Middlesex County NJ",
    mediaCaption: "Exterior siding and trim refresh — Woodbridge Township area home",
    desc: "Siding, trim, shutters, doors, and exterior surfaces that need a cleaner, longer-lasting finish.",
    relatedCities: [["perth-amboy-painter.html", "Perth Amboy"], ["south-amboy-painter.html", "South Amboy"], ["sayreville-painter.html", "Sayreville"]],
    relatedServices: [["deck-fence-staining.html", "Deck & Fence Staining"], ["trim-doors-ceilings.html", "Trim & Doors"], ["basic-renovations.html", "Basic Renovations"]],
    sections: [
      { h2: "Exterior painting built for New Jersey weather", p: "NJ exteriors take sun, rain, snow, and salt air depending on how close you are to the waterfront. Sal's Painting power-washes or scrapes failing paint, sands rough areas, primes bare wood or metal, and applies exterior-grade coatings rated for our climate." },
      { h2: "Common exterior scopes", list: ["Vinyl, wood, and fiber-cement siding", "Trim boards, soffits, and fascia", "Front doors, shutters, and porch columns", "Garage doors and railing paint/stain"] },
      { media: { n: 4, alt: "Exterior house painting Woodbridge NJ", caption: "Full exterior repaint — siding and trim on a Woodbridge Township home" } },
      { note: "Waterfront homes:", noteText: "Carteret, Perth Amboy, and South Amboy properties near the water see faster paint failure on south- and west-facing elevations. Sal inspects chalking, peeling, and soft wood before quoting — you won't get a quote that ignores bad substrate." },
      { h2: "Exterior painting near the Raritan Bay and Arthur Kill", p: "Waterfront towns like <a href=\"perth-amboy-painter.html\">Perth Amboy</a>, <a href=\"south-amboy-painter.html\">South Amboy</a>, and <a href=\"carteret-painter.html\">Carteret</a> need extra attention on south-facing siding and metal railings. Inland communities — <a href=\"edison-painter.html\">Edison</a>, <a href=\"woodbridge-painter.html\">Woodbridge</a>, <a href=\"sayreville-painter.html\">Sayreville</a> — still see heavy UV on second-story elevations. Sal quotes prep honestly for each exposure." },
      { h2: "Season and scheduling", p: "Exterior work runs spring through fall when temps and humidity allow proper cure times. Sal schedules around weather windows and communicates if a stretch of rain pushes a phase." },
      { h2: "Surface prep before the first coat", p: "Loose paint is scraped, mildew is washed, gaps are caulked, and bare wood gets primer. Metal railings near the bay may need rust-inhibiting primer. Sal won't coat over active chalking without addressing adhesion first." },
      { h2: "Curb appeal before you list", p: "Pre-listing exterior refreshes are common in Woodbridge and Edison — front elevation, door, and trim often make the biggest impact for buyers driving by. Pair with <a href=\"deck-fence-staining.html\">deck or fence staining</a> for backyard showing appeal. See <a href=\"pricing.html\">exterior painting ballparks</a> or browse <a href=\"gallery.html\">exterior project photos</a>." },
      { h2: "Exterior trim, shutters, and doors", p: "Focused curb-appeal packages often combine siding with <a href=\"trim-doors-ceilings.html\">front door and shutter painting</a> — a faster scope than a full house when the body color is still sound. Sal phases work so the street-facing elevation is done first when your timeline is tight." },
    ],
    process: [
      "<strong>Exterior inspection</strong> — Siding type, peeling areas, wood rot, and elevation exposure.",
      "<strong>Weather-aware schedule</strong> — Phases planned around dry windows and cure temps.",
      "<strong>Final walk</strong> — Touch-ups and cleanup before final payment.",
    ],
    faqs: [
      ["When is the best time to paint a house in NJ?", "Late spring through early fall is ideal — temps between 50°F and 85°F with low rain. Sal monitors the forecast and reschedules if conditions won't allow paint to cure properly."],
      ["Do you paint vinyl siding?", "Yes. Vinyl needs proper cleaning and the right exterior acrylic. Sal does not recommend painting vinyl that's still under manufacturer warranty without checking terms first."],
      ["How long does exterior paint last in Middlesex County?", "Quality exterior paint on properly prepped surfaces typically lasts 7–12 years depending on sun exposure, moisture, and surface type."],
      ["Is power washing included?", "Surface cleaning is part of prep on most exterior jobs. Heavy mildew or peeling may need extra scraping — scope is confirmed in the estimate."],
      ["Do you paint front doors and shutters?", "Yes — often bundled with siding or quoted as a focused curb-appeal package."],
      ["Can you match my HOA color requirements?", "Yes. Bring guidelines or approval letters — Sal confirms colors before ordering materials."],
    ],
  },
  {
    slug: "drywall-repair-prep",
    title: "Drywall Repair & Prep",
    h1: "Drywall Repair & Surface Prep in Carteret, NJ",
    meta: "Drywall repair, patching, sanding, and priming before painting in Carteret and Middlesex County. Sal's Painting handles prep right.",
    heroSet: 2,
    preview: "drywall-repair-prep",
    contentImg: 13,
    mediaAlt: "Whole room drywall prep and interior painting Middlesex County NJ",
    mediaCaption: "Room transformation after skim, prime, and interior paint — Carteret area",
    desc: "Patching, sanding, priming, and surface prep so paint goes on smooth and stays flat.",
    relatedCities: [["rahway-painter.html", "Rahway"], ["linden-painter.html", "Linden"], ["carteret-painter.html", "Carteret"]],
    relatedServices: [["interior-painting.html", "Interior Painting"], ["trim-doors-ceilings.html", "Trim & Ceilings"], ["basic-renovations.html", "Basic Renovations"]],
    sections: [
      { h2: "Why prep matters more than the paint brand", p: "A premium paint over a bad patch still shows every bump. Sal's Painting patches holes from anchors, doorknob impacts, and old renovations; tapes seams; feathers edges; sands smooth; and primes before color goes up." },
      { h2: "Drywall repair scopes", list: ["Small holes and nail pops", "Medium patches after fixture removal", "Crack repair along seams and corners", "Skim-coat areas with texture mismatch", "Water-stain blocking primer where needed"] },
      { media: { n: 13, alt: "Interior room after drywall repair and painting NJ", caption: "Whole-room finish after drywall prep — smooth walls ready for daily use" } },
      { note: "Older Middlesex homes:", noteText: "Pre-war and post-war homes in Rahway, Linden, and Woodbridge often have plaster-over-lath or multiple patch generations. Sal identifies when a quick patch is enough vs. when a larger skim is the honest fix." },
      { h2: "Drywall repair in Rahway, Linden, and older Middlesex homes", p: "Homes in <a href=\"rahway-painter.html\">Rahway</a>, <a href=\"linden-painter.html\">Linden</a>, and <a href=\"woodbridge-painter.html\">Woodbridge</a> often have plaster cracks, layered patches, or doorknob holes in hallways. Sal chases cracks, tapes seams, and skims where needed before <a href=\"interior-painting.html\">interior painting</a> starts — so repairs don't telegraph through the new color." },
      { h2: "Bundled with painting", p: "Most drywall repair is quoted as part of an interior paint job. Standalone patch work is available for touch-up scopes — call with photos for a faster ballpark. See <a href=\"pricing.html\">drywall repair price ranges</a>." },
      { h2: "After plumbers, electricians, or remodelers leave", p: "Cut-outs and patch boards are common after fixture swaps. Sal feathers joints, primes, and paints so the repair disappears — especially important on visible hallway and living room walls. Fits naturally into <a href=\"basic-renovations.html\">basic renovation finish</a> work after other trades." },
      { h2: "Stain blocking and water marks", p: "Active leaks must be fixed first. Once dry, stain-blocking primer stops tannin and nicotine from bleeding through topcoats. Sal explains what a paint-level fix can and cannot do on recurring cracks — then finishes with <a href=\"trim-doors-ceilings.html\">trim and ceiling</a> integration when the room is repainted." },
    ],
    process: [
      "<strong>Assess the wall</strong> — Photos or on-site check for movement cracks vs. simple holes.",
      "<strong>Patch and sand</strong> — Compound, tape, texture blend, primer.",
      "<strong>Paint integration</strong> — Full wall or room coat so patches don't flash.",
    ],
    faqs: [
      ["Can you fix ceiling cracks?", "Yes. Hairline cracks often need mesh tape and compound; structural movement cracks may return — Sal will explain what a paint-level fix can and can't do."],
      ["Do you texture match?", "Sal blends common orange-peel and knockdown textures where possible. Exact match on old custom textures may vary — you'll see the approach before work starts."],
      ["How long until I can paint after patching?", "Most patches need 24 hours dry time between coats and before primer. Sal builds that into the schedule."],
      ["Is drywall repair priced separately?", "It can be. Small punch-list patches are often rolled into a room paint quote; larger repair areas are line-itemed so you know the full scope."],
      ["Do you repair plaster walls in Rahway and Linden?", "Yes — plaster crack chasing and skim work are quoted with extra prep time when needed."],
      ["Can I text photos for a patch quote?", "Yes — (727) 644-7674 with wall photos speeds up ballparks for smaller scopes."],
    ],
  },
  {
    slug: "trim-doors-ceilings",
    title: "Trim, Doors & Ceilings",
    h1: "Trim, Door & Ceiling Painting in Middlesex County, NJ",
    meta: "Trim painting, door painting, and ceiling repaints in Carteret, NJ. Crisp lines and clean cut-in work from Sal's Painting.",
    heroSet: 3,
    preview: "trim-doors-ceilings",
    contentImg: 5,
    mediaAlt: "Trim and door painting with crisp cut-in lines Middlesex County NJ",
    mediaCaption: "Trim and door detail — sharp cut-in on baseboards and casings",
    desc: "Baseboards, crown moulding, doors, casings, and ceiling repaints with sharp lines.",
    relatedCities: [["woodbridge-painter.html", "Woodbridge"], ["iselin-painter.html", "Iselin"], ["edison-painter.html", "Edison"]],
    relatedServices: [["interior-painting.html", "Interior Painting"], ["accent-walls.html", "Accent Walls"], ["drywall-repair-prep.html", "Drywall Repair"]],
    sections: [
      { h2: "The details that define a finished room", p: "Walls get the attention, but trim and ceilings frame the space. Sal's Painting sands and deglosses old trim, caulks gaps, paints doors off hinges when needed, and cuts clean lines where wall meets ceiling." },
      { h2: "Trim and ceiling work", list: ["Baseboards, chair rail, and crown moulding", "Interior doors — slab and panel styles", "Window and door casings", "Ceiling repaints — flat white and color", "Handrails and built-in shelving"] },
      { media: { n: 5, alt: "Trim door and baseboard painting Middlesex County", caption: "Trim and door painting — clean edges where wall meets woodwork" } },
      { note: "Yellowed trim:", noteText: "Oil-based trim from the 1990s often yellows over time. Sal may recommend a deglosser and waterborne enamel for a whiter, harder finish that holds up to cleaning." },
      { h2: "Trim painting in Woodbridge, Iselin, and Edison", p: "Colonials and split-levels in <a href=\"woodbridge-painter.html\">Woodbridge</a>, <a href=\"iselin-painter.html\">Iselin</a>, and <a href=\"edison-painter.html\">Edison</a> often need baseboard and casing refreshes when walls get new color. Sal coordinates trim sheen with your <a href=\"interior-painting.html\">interior wall paint</a> so the room reads finished, not half-done." },
      { h2: "Spray vs brush on doors", p: "Panel doors with detail often get brush-and-roll; flat slab doors can be sprayed in a controlled setup for a factory-smooth finish. Sal picks the method that matches your doors and timeline." },
      { h2: "Ceiling-only repaints", p: "After smoke, leaks, or yellowing, ceilings can be refreshed without touching walls. Walls are masked, edges are cut cleanly, and flat or matte finishes hide roller texture on overhead surfaces." },
      { h2: "Two-tone and trim contrast schemes", p: "White trim against colored walls — or against an <a href=\"accent-walls.html\">accent wall</a> — is the classic Middlesex County look. Sal caulks the joint first so the contrast line stays crisp after the job cures. Patchy walls get <a href=\"drywall-repair-prep.html\">drywall prep</a> before trim is cut in." },
      { h2: "Exterior-facing doors and shutters", p: "Entry doors and shutters pair with <a href=\"exterior-painting.html\">exterior painting</a> scopes when curb appeal is the goal. Sal quotes door prep separately from whole-house exterior when you only need the front refreshed." },
    ],
    process: [
      "<strong>Sheen and color plan</strong> — Trim, doors, ceilings defined before materials ordered.",
      "<strong>Prep and degloss</strong> — Sand, caulk, prime stained or glossy trim as needed.",
      "<strong>Sharp cut-in</strong> — Brush work at edges, roll fields, rehang doors cleanly.",
    ],
    faqs: [
      ["Should trim be gloss or semi-gloss?", "Semi-gloss is standard on trim and doors for durability. Higher gloss shows imperfections more — Sal recommends sheen based on trim condition."],
      ["Do you paint both sides of doors?", "Yes, when quoted. Closet and passage doors are typically both sides; slab exterior-facing doors may vary — confirmed in the estimate."],
      ["Can you paint ceilings without painting walls?", "Yes. Ceiling-only repaints are common after leaks or smoke damage. Walls are masked and protected."],
      ["How do you handle stained wood trim?", "Stained trim can be painted but needs bonding primer and more prep. Sal assesses whether paint or stain refresh is the better path."],
      ["Do you remove doors to paint them?", "When practical, doors are painted off hinges in a controlled area for fewer drips and faster dry time."],
      ["Can you paint crown moulding in tall foyers?", "Yes — ladder and pole work included; very tall halls are noted in the quote upfront."],
    ],
  },
  {
    slug: "accent-walls",
    title: "Accent Walls",
    h1: "Accent Wall Painting in Carteret & Middlesex County, NJ",
    meta: "Custom accent wall painting for living rooms, bedrooms, and dining spaces in Carteret, NJ. Bold color done right.",
    heroSet: 4,
    preview: "accent-walls",
    contentImg: 11,
    mediaAlt: "Accent wall painting with trim detail Carteret Middlesex County NJ",
    mediaCaption: "Bold accent wall with trim detail — living space focal wall",
    desc: "Feature walls with bold color, clean edges, and proper primer for dramatic shifts.",
    relatedCities: [["edison-painter.html", "Edison"], ["carteret-painter.html", "Carteret"], ["perth-amboy-painter.html", "Perth Amboy"]],
    relatedServices: [["interior-painting.html", "Interior Painting"], ["trim-doors-ceilings.html", "Trim & Ceilings"], ["basic-renovations.html", "Basic Renovations"]],
    sections: [
      { h2: "One wall, big impact", p: "An accent wall anchors a room without repainting every surface. Sal's Painting helps you think through which wall catches natural light, how bold colors read in NJ north light vs south light, and what primer base a deep tone needs." },
      { h2: "Popular accent wall placements", list: ["Behind the bed in primary bedrooms", "Fireplace or TV walls in living rooms", "Dining room focal walls", "Entryway and staircase walls", "Home office video-call backgrounds"] },
      { media: { n: 11, alt: "Accent wall painting feature wall NJ", caption: "Accent wall and trim detail — saturated color with crisp adjacent edges" } },
      { note: "Color jump:", noteText: "Going from light beige to navy or forest green usually needs a tinted primer — otherwise you'll need four coats. Sal quotes coats honestly so the accent reads saturated, not muddy." },
      { h2: "Accent walls in Edison, Carteret, and Perth Amboy", p: "A single feature wall is one of the fastest <a href=\"interior-painting.html\">interior upgrades</a> Sal does in <a href=\"edison-painter.html\">Edison</a>, <a href=\"carteret-painter.html\">Carteret</a>, and <a href=\"perth-amboy-painter.html\">Perth Amboy</a>. Bedrooms, living rooms, and home offices each have a natural focal wall — Sal helps you pick it during the walkthrough." },
      { h2: "Beyond solid color", p: "Sal focuses on solid accent walls and two-tone schemes. Complex murals or wallpaper install are outside scope — but color blocking with crisp tape lines is absolutely in wheelhouse." },
      { h2: "Accent walls for home offices", p: "Edison and Woodbridge homeowners often refresh one wall behind a desk for video calls. A saturated accent with neutral surrounding walls is a fast, affordable upgrade — often paired with fresh <a href=\"trim-doors-ceilings.html\">trim and ceiling white</a>." },
      { h2: "Sampling and dry layout", p: "If you're between two shades, Sal can paint a sample board or small test area before committing to the full wall — especially helpful with north-facing rooms that read cooler. See <a href=\"pricing.html\">accent wall pricing</a> and similar work in the <a href=\"gallery.html\">gallery</a>." },
      { h2: "Accent walls after small renovations", p: "Kitchen or bath updates in <a href=\"basic-renovations.html\">basic renovation</a> scopes often end with one bold wall in the adjacent living space. Sal primes for the color jump so the accent reads clean against existing neutral walls." },
    ],
    process: [
      "<strong>Pick the wall</strong> — Focal wall with few openings usually works best.",
      "<strong>Prime for the color shift</strong> — Tinted primer when jumping dark or vivid.",
      "<strong>Crisp edges</strong> — Cut line at corners, ceiling, and adjacent walls.",
    ],
    faqs: [
      ["Which wall should be the accent?", "Usually the wall you face when entering the room, or the wall with the least doors and windows. Sal can walk the space during the estimate and suggest options."],
      ["Do accent walls cost less than a full room?", "Yes — one wall is a smaller scope than four. Prep and primer needs still apply for dark colors."],
      ["Can you match a color from a photo or swatch?", "Yes. Bring a chip, fan deck selection, or reference photo. Sal mixes to standard paint lines or matches at the store."],
      ["How soon can an accent wall be done?", "Many accent walls are a half-day to one-day job after prep. Scheduling is flexible — evenings and weekends available."],
      ["Do you do color blocking with two colors?", "Yes — horizontal or vertical splits with taped lines when layout is agreed upfront."],
      ["Will a dark accent make my room feel smaller?", "On one wall it usually adds depth. Sal can suggest mid-tone options if the room is already small or dim."],
    ],
  },
  {
    slug: "deck-fence-staining",
    title: "Deck & Fence Staining",
    h1: "Deck & Fence Staining in Carteret & Middlesex County, NJ",
    meta: "Deck staining and fence painting in Carteret, NJ. Protect outdoor wood from NJ weather with proper prep and stain.",
    heroSet: 5,
    preview: "deck-fence-staining",
    contentImg: 7,
    mediaAlt: "Deck staining project Sayreville and Middlesex County NJ",
    mediaCaption: "Deck boards and railings — outdoor wood stain and protection",
    desc: "Deck boards, railings, pergolas, and fence lines cleaned, prepped, and stained or painted.",
    relatedCities: [["sayreville-painter.html", "Sayreville"], ["woodbridge-painter.html", "Woodbridge"], ["carteret-painter.html", "Carteret"]],
    relatedServices: [["exterior-painting.html", "Exterior Painting"], ["basic-renovations.html", "Basic Renovations"], ["interior-painting.html", "Interior Painting"]],
    sections: [
      { h2: "Outdoor wood needs a system, not a quick coat", p: "Decks and fences in Middlesex County face UV, rain, and freeze-thaw cycles. Sal's Painting washes away mildew, lets wood dry, sands or brightens where needed, and applies penetrating stain or solid-color deck coating rated for foot traffic." },
      { h2: "Deck and fence scopes", list: ["Pressure-treated and cedar decks", "Porch floors and stair treads", "Wood and vinyl fence staining/painting", "Pergolas, gazebos, and railings", "Small patio structures and planters"] },
      { media: { n: 7, alt: "Deck staining Central NJ backyard", caption: "Deck staining — washed, prepped, and coated for NJ weather cycles" } },
      { note: "Deck season:", noteText: "Deck stain needs dry wood — typically 48 hours without rain after washing and before coating. Sal schedules around spring/summer dry windows; fall jobs need earlier cutoff before temps drop." },
      { h2: "Deck staining in Sayreville, Woodbridge, and Carteret", p: "Backyard decks in <a href=\"sayreville-painter.html\">Sayreville</a>, <a href=\"woodbridge-painter.html\">Woodbridge</a>, and <a href=\"carteret-painter.html\">Carteret</a> take a beating from sun and rain. Sal schedules wash days and coat days around the forecast — stain applied too early or before rain fails within a season." },
      { h2: "Transparent vs solid stain", p: "Transparent and semi-transparent stains show grain but need more frequent refresh. Solid stain or deck paint hides gray wood and lasts longer on horizontal surfaces. Sal recommends based on wood age and your maintenance preference." },
      { h2: "Fence lines and neighbor sides", p: "Side-by-side fences may need coordination with neighbors for access. Sal quotes reachable surfaces and notes if both sides are included. See fence examples in the <a href=\"gallery.html\">project gallery</a>." },
      { h2: "Railings and vertical surfaces", p: "Vertical pickets and railings often outlast horizontal deck boards. Sal may recommend different products for foot traffic vs. vertical wood on the same project. Pair deck work with <a href=\"exterior-painting.html\">exterior trim painting</a> when porch columns and railings need paint instead of stain." },
      { h2: "Deck and fence pricing", p: "Ballparks depend on square footage, wood condition, and product choice. See <a href=\"pricing.html\">deck and fence stain ranges</a> — photos of your deck or fence speed up phone quotes at <a href=\"tel:7276447674\">(727) 644-7674</a>." },
    ],
    process: [
      "<strong>Wash and dry</strong> — Mildew removal, dry window before stain.",
      "<strong>Prep gray wood</strong> — Sand or brighten as needed for adhesion.",
      "<strong>Coat and cure</strong> — Brush/roll stain, keep off surface until cured.",
    ],
    faqs: [
      ["How often should I restain a deck in NJ?", "Horizontal deck surfaces often need refresh every 2–4 years for transparent stain, 4–6 years for solid coatings — depending on sun and traffic."],
      ["Do you replace deck boards?", "Sal handles paint and stain prep, not structural carpentry. Rotten boards should be replaced before coating — Sal will flag soft spots during the estimate."],
      ["Can you stain a previously painted deck?", "Painted decks need stripping or sanding back to wood before stain penetrates. That's extra prep — quoted separately if needed."],
      ["Is fence staining priced per linear foot?", "Ballparks use height, board type, and condition. Photos and fence length help Sal quote faster over the phone."],
      ["What if rain is forecast?", "Sal reschedules wash and coat days — stain applied on wet wood or before rain fails quickly."],
      ["Do you stain pressure-treated lumber?", "Yes — often after a weathering period so stain penetrates. Sal confirms timing on new builds."],
    ],
  },
  {
    slug: "basic-renovations",
    title: "Basic Renovations",
    h1: "Basic Home Renovations with Painting in Carteret, NJ",
    meta: "Light renovation work paired with painting and drywall in Carteret and Middlesex County. Practical updates from Sal's Painting.",
    heroSet: 6,
    preview: "basic-renovations",
    contentImg: 10,
    mediaAlt: "Renovation finish painting Rahway Linden Middlesex County NJ",
    mediaCaption: "Post-renovation finish paint — walls and trim after kitchen or bath update",
    desc: "Practical renovation updates — patch, paint, and refresh without a full gut remodel.",
    relatedCities: [["linden-painter.html", "Linden"], ["rahway-painter.html", "Rahway"], ["iselin-painter.html", "Iselin"]],
    relatedServices: [["interior-painting.html", "Interior Painting"], ["drywall-repair-prep.html", "Drywall Repair"], ["exterior-painting.html", "Exterior Painting"]],
    sections: [
      { h2: "Renovation scope without the general-contractor overhead", p: "Sal's Painting handles the finish side of small renovations: patch damaged walls after fixture swaps, repaint rooms you're updating, refresh trim when floors get replaced, and tie together spaces after minor layout changes." },
      { h2: "Typical renovation pairings", list: ["Bathroom refresh — patch, prime, paint walls and ceiling", "Kitchen update — walls and trim after backsplash or cabinet work", "Rental turnover — punch-list repair and full repaint", "Basement finish touch-up — drywall seal and paint", "Pre-listing spruce-up — interior and curb-appeal exterior"] },
      { media: { n: 10, alt: "Renovation finish painting Rahway NJ", caption: "Renovation finish — whole-room paint after update work in Rahway area" } },
      { note: "What Sal doesn't do:", noteText: "Plumbing, electrical, tile, and structural work stay with licensed trades. Sal coordinates timing if your GC or plumber finishes first — then comes in for surfaces." },
      { h2: "Renovation painting in Rahway, Linden, and Iselin", p: "Rental turnovers in <a href=\"linden-painter.html\">Linden</a>, kitchen refreshes in <a href=\"rahway-painter.html\">Rahway</a>, and townhome updates in <a href=\"iselin-painter.html\">Iselin</a> all end with the same need: walls that look new. Sal handles <a href=\"drywall-repair-prep.html\">patch and skim</a>, primer, and <a href=\"interior-painting.html\">interior paint</a> in one scope." },
      { h2: "One call for the finish package", p: "Instead of hiring separate patch, paint, and trim crews, Sal bundles prep and paint so lines of responsibility are clear and the final walkthrough is with one person." },
      { h2: "Rental turnovers in Linden and Carteret", p: "Landlords often need fast unit turns — standard whites, patch from tenant damage, and <a href=\"trim-doors-ceilings.html\">trim touch-up</a>. Sal quotes per unit with repeat scheduling when you have multiple vacancies. <a href=\"carteret-painter.html\">Carteret</a> property owners get priority routing from Charles St." },
      { h2: "Pre-listing packages", p: "Sellers in <a href=\"edison-painter.html\">Edison</a> and <a href=\"woodbridge-painter.html\">Woodbridge</a> frequently bundle interior refresh with <a href=\"exterior-painting.html\">front-door and trim exterior</a> touch-up. Sal phases work if your closing timeline is tight. See <a href=\"pricing.html\">renovation ballparks</a> and <a href=\"service-guarantee.html\">workmanship guarantee</a>." },
      { h2: "Kitchen, bath, and basement finish paint", p: "After your plumber, electrician, or cabinet installer leaves, Sal patches cut-outs, primes stains, and rolls finish coats. Add an <a href=\"accent-walls.html\">accent wall</a> in the adjoining room when you want the update to feel intentional, not partial." },
    ],
    process: [
      "<strong>Scope walk</strong> — What trades finished, what surfaces need Sal.",
      "<strong>Punch-list quote</strong> — Repairs and paint listed line by line.",
      "<strong>Finish walkthrough</strong> — One contact before you pay.",
    ],
    faqs: [
      ["Can you handle a full bathroom remodel?", "Sal handles painting and drywall finish, not tile or fixture install. If your bathroom needs plumbing or tile, hire those trades first — then Sal finishes the surfaces."],
      ["Do you work with property managers?", "Yes. Rental turnovers and light renovation scopes in Carteret, Woodbridge, and Edison are common — text photos for faster scheduling."],
      ["How do renovation quotes work?", "Sal walks the space (or reviews photos), lists each surface and repair, and gives a written scope. No vague 'per day' pricing without a task list."],
      ["Are you available evenings and weekends?", "Yes — 7 days a week, 7 AM to 9 PM. Sal works around occupied homes and WFH schedules."],
      ["Can you match existing paint for a partial renovation?", "Sal color-matches or uses your spec when trim and walls need to tie into untouched rooms."],
      ["Do you coordinate with other contractors?", "Yes — Sal can schedule after flooring, cabinet, or electrical work is complete so surfaces aren't damaged after paint."],
    ],
  },
];

const CITIES = [
  {
    slug: "carteret-painter", name: "Carteret", h1: "House Painter in Carteret, NJ",
    meta: "Residential painter in Carteret, NJ — interior, exterior, drywall repair, and deck staining. Sal's Painting is based on Charles St. Free estimates.",
    heroSet: 0, contentImg: 8, teaserA: 9, teaserB: 10,
    intro: "Carteret is home base for Sal's Painting & Basic Renovations — 54 Charles St is where estimates start and trucks roll out from. From the waterfront neighborhoods near the Arthur Kill to the residential streets inland, Sal knows the housing stock: capes, ranches, colonials, and multi-families that need practical paint work without upsell drama.",
    neighborhoods: ["Charles Street corridor and downtown Carteret", "Carteret Waterfront Park area — salt-air exterior exposure", "Roosevelt Avenue and West Carteret residential blocks", "Near Noe Avenue commercial-to-residential pockets"],
    housing: "Carteret's mix of pre-war capes near the waterfront and post-war ranches inland means exterior jobs range from salt-exposed trim to standard vinyl siding refreshes. Interiors often need moisture-smart primer in basements and bathrooms facing the bay breeze.",
    note: "Carteret waterfront:", noteText: "Homes facing the Arthur Kill see faster exterior paint failure on trim and south-facing siding. Sal inspects for chalking and soft wood before quoting — partial prep is often enough without a full siding repaint.",
    nearby: ["perth-amboy-painter", "woodbridge-painter", "rahway-painter"],
    topServices: [["interior-painting.html", "Interior Painting", "Room repaints and whole-home color updates."], ["exterior-painting.html", "Exterior Painting", "Siding, trim, and waterfront elevation prep."], ["deck-fence-staining.html", "Deck Staining", "Backyard decks and fence lines in Carteret yards."]],
    faqs: [
      ["Is Sal's Painting based in Carteret?", "Yes. The business address is 54 Charles St, Carteret, NJ 07008. Carteret jobs get priority scheduling."],
      ["What painting services are available in Carteret?", "Interior and exterior painting, drywall repair, trim and doors, accent walls, deck staining, and basic renovation finish work."],
      ["How fast can you schedule in Carteret?", "Many estimates happen within a few days. Call or text (727) 644-7674 with your street and scope."],
      ["Do you offer free estimates in Carteret?", "Yes — always free. Walkthrough or photo-based for smaller scopes."],
      ["Do you paint Carteret multi-family units?", "Yes — landlords and owner-occupants both call for unit turns and hallway refresh work."],
      ["Is deck staining popular in Carteret?", "Yes — spring through early fall when wood is dry. Backyard decks and porches are common scopes."],
    ],
  },
  {
    slug: "perth-amboy-painter", name: "Perth Amboy", h1: "Painter in Perth Amboy, NJ",
    meta: "House painting in Perth Amboy, NJ — interior, exterior, and drywall repair across the waterfront and inland neighborhoods. Free estimates.",
    heroSet: 1, contentImg: 9, teaserA: 11, teaserB: 12,
    intro: "Perth Amboy mixes historic waterfront architecture with dense residential blocks — each with different paint challenges. Sal's Painting serves Perth Amboy from nearby Carteret with interior refreshes, exterior repaints on older clapboard and vinyl, and drywall repair in apartments and single-families alike.",
    neighborhoods: ["Waterfront and Bayview — humidity and salt exposure", "Amboy Avenue corridor — mixed residential and commercial", "Hall Avenue and south side colonials", "Near Perth Amboy High School residential grids"],
    housing: "Older frame homes near the Raritan waterfront often have detailed trim and multiple paint layers. Inland vinyl ranches need wash-and-recoat cycles on a predictable schedule.",
    note: "Historic Perth Amboy:", noteText: "Older homes near the Raritan waterfront often have multiple paint layers on trim. Lead-safe practices matter on pre-1978 surfaces — Sal discusses prep approach when layers are failing.",
    nearby: ["carteret-painter", "woodbridge-painter", "south-amboy-painter"],
    topServices: [["exterior-painting.html", "Exterior Painting", "Waterfront trim and siding prep."], ["drywall-repair-prep.html", "Drywall Repair", "Patch work in older apartments and homes."], ["interior-painting.html", "Interior Painting", "Unit turns and room refreshes."]],
    faqs: [
      ["Does Sal's Painting serve Perth Amboy?", "Yes. Perth Amboy is a core service area — regular weekly scheduling from Carteret."],
      ["Can you paint apartments and multi-units?", "Yes. Landlords and tenants both call for unit turnovers, hallways, and exterior touch-ups."],
      ["How much does interior painting cost in Perth Amboy?", "Room sizes vary — single bedrooms often $350–$800; whole units quoted on walkthrough. See <a href=\"pricing.html\">pricing</a> for ranges."],
      ["Do you handle exterior painting near the water?", "Yes. Extra attention to primer and coating on waterfront elevations — quoted after inspection."],
      ["How far is Sal from Perth Amboy?", "About 10–15 minutes from Charles St in Carteret depending on traffic."],
      ["Can you work weekends in Perth Amboy?", "Yes — 7 days a week, 7 AM to 9 PM."],
    ],
  },
  {
    slug: "woodbridge-painter", name: "Woodbridge", h1: "Painter in Woodbridge, NJ",
    meta: "Residential painting in Woodbridge Township, NJ — Colonia, Avenel, Iselin, and surrounding neighborhoods. Interior, exterior, and prep work.",
    heroSet: 2, contentImg: 10, teaserA: 13, teaserB: 14,
    intro: "Woodbridge Township is one of the largest markets in Middlesex County — from Colonia split-levels to Avenel townhomes and the busy corridors near Metropark. Sal's Painting handles interior repaints during renovations, exterior jobs on vinyl and wood siding, and the drywall patch work that comes with older suburban stock.",
    neighborhoods: ["Colonia — 1960s–80s ranches and splits", "Avenel and Port Reading — townhomes and singles", "Woodbridge proper near Main Street", "Fords and Keasbey — industrial-adjacent residential"],
    housing: "Split-levels with tall foyer walls are common in Colonia — ladder access is planned upfront. Townhomes near Metropark often need efficient room-by-room scheduling.",
    note: "Woodbridge splits:", noteText: "Two-story splits with tall foyer walls need ladder work and sometimes scaffolding — Sal quotes height access upfront so there are no day-of surprises.",
    nearby: ["carteret-painter", "iselin-painter", "edison-painter"],
    topServices: [["interior-painting.html", "Interior Painting", "Splits, ranches, and open floor plans."], ["trim-doors-ceilings.html", "Trim & Doors", "Yellowed trim updates in 80s builds."], ["exterior-painting.html", "Exterior Painting", "Vinyl and wood siding across the township."]],
    faqs: [
      ["What parts of Woodbridge do you serve?", "All of Woodbridge Township — Colonia, Avenel, Port Reading, Fords, Keasbey, and Woodbridge center."],
      ["Can you paint vinyl siding in Woodbridge?", "Yes. Proper wash, prime where needed, and exterior acrylic rated for vinyl."],
      ["Do you work in occupied homes?", "Yes. Furniture is moved and covered; Sal works room-by-room to minimize disruption."],
      ["How do I get a Woodbridge estimate?", "Call (727) 644-7674 or use the contact form with your Woodbridge neighborhood and scope."],
      ["Do you serve Iselin as part of Woodbridge?", "Yes — see the <a href=\"iselin-painter.html\">Iselin painter page</a> for that section specifically."],
      ["Can you handle tall foyer walls?", "Yes — height access is included in the quote when measured on walkthrough."],
    ],
  },
  {
    slug: "rahway-painter", name: "Rahway", h1: "Painter in Rahway, NJ",
    meta: "House painter in Rahway, NJ — interior painting, exterior painting, and drywall repair. Serving Rahway's historic and residential neighborhoods.",
    heroSet: 3, contentImg: 11, teaserA: 1, teaserB: 2,
    intro: "Rahway's mix of Victorian-era homes near downtown and post-war suburbs toward Clark and Linden means paint jobs range from detailed trim work on high ceilings to straightforward vinyl siding refreshes. Sal's Painting makes the drive from Carteret regularly for Rahway homeowners who want one contact from estimate to final coat.",
    neighborhoods: ["Downtown Rahway — older frame and brick homes", "Rahway River watershed area — moisture-aware prep", "Near Rahway Station — condos and multifamily", "North Rahway toward Linden border"],
    housing: "Plaster walls and wide baseboards appear frequently near downtown. Suburban ranches toward the Linden border are faster repaint scopes with less skim work.",
    note: "Rahway older homes:", noteText: "Plaster walls and wide baseboards are common near downtown. Sal budgets extra prep time for crack chasing and skim where plaster has moved — better than a quick roll that telegraphs every bump.",
    nearby: ["linden-painter", "carteret-painter", "woodbridge-painter"],
    topServices: [["drywall-repair-prep.html", "Drywall & Plaster Prep", "Crack repair and skim on older walls."], ["trim-doors-ceilings.html", "Trim & Ceilings", "High trim and ceiling detail downtown."], ["interior-painting.html", "Interior Painting", "Room and whole-home repaints."]],
    faqs: [
      ["Does Sal serve Rahway, NJ?", "Yes. Rahway is within the standard Middlesex County service radius from Carteret."],
      ["Can you paint high ceilings in older Rahway homes?", "Yes. Ladder and pole work included; very tall or stair hallways quoted with access noted."],
      ["Do you offer exterior painting in Rahway?", "Yes — siding, trim, porches, and fences. Seasonal scheduling spring through fall."],
      ["Are estimates free in Rahway?", "Yes. Call, text, or submit the online form."],
      ["Do you repair plaster cracks?", "Yes — with realistic expectations on movement cracks vs. cosmetic fixes."],
      ["How soon can Rahway jobs start?", "Often within 1–2 weeks of approval depending on season and scope."],
    ],
  },
  {
    slug: "edison-painter", name: "Edison", h1: "Painter in Edison, NJ",
    meta: "Painting contractor in Edison, NJ — interior, exterior, drywall repair, and deck staining. Serving Clara Barton, Oak Tree, and all Edison neighborhoods.",
    heroSet: 4, contentImg: 12, teaserA: 3, teaserB: 4,
    intro: "Edison is one of Central NJ's busiest residential markets — large colonials in Oak Tree, ranches in Clara Barton, and dense neighborhoods near Route 1. Sal's Painting serves Edison homeowners with interior repaints, exterior refreshes before listing, and the drywall repair that follows small renovation projects.",
    neighborhoods: ["Oak Tree and Nixon area — larger homes, tall walls", "Clara Barton section — ranches and splits", "Near Menlo Park Mall — townhomes and condos", "North Edison toward Metuchen border"],
    housing: "Large open floor plans in Oak Tree need more labor per gallon. Condos near Route 1 need efficient scheduling and HOA color checks on exteriors.",
    note: "Edison home offices:", noteText: "Post-pandemic home office refreshes are common in Edison — accent walls, trim touch-up, and ceiling brightening for video calls. Quick scopes often schedule within a week.",
    nearby: ["woodbridge-painter", "iselin-painter", "sayreville-painter"],
    topServices: [["accent-walls.html", "Accent Walls", "Home office and living room focal walls."], ["interior-painting.html", "Interior Painting", "Large colonials and open plans."], ["exterior-painting.html", "Exterior Painting", "Pre-listing curb appeal refreshes."]],
    faqs: [
      ["Do you paint homes in Edison, NJ?", "Yes. Edison is a regular service area throughout the township."],
      ["Can you handle large open floor plans?", "Yes. Great rooms and open kitchens need more labor — quoted by square footage and prep."],
      ["Do you paint decks in Edison?", "Yes. Deck and fence staining spring through early fall when wood is dry."],
      ["What's the best way to schedule an Edison estimate?", "Text photos and your Edison neighborhood to (727) 644-7674 for the fastest response."],
      ["Do you serve North Edison near Metuchen?", "Yes — entire township including north Edison sections."],
      ["Can you paint before I list my Edison home?", "Yes — interior and front-elevation exterior packages are common pre-listing scopes."],
    ],
  },
  {
    slug: "linden-painter", name: "Linden", h1: "Painter in Linden, NJ",
    meta: "Residential painter in Linden, NJ — interior and exterior painting, trim work, and drywall repair. Free estimates from Sal's Painting.",
    heroSet: 5, contentImg: 13, teaserA: 5, teaserB: 6,
    intro: "Linden sits between Rahway and Elizabeth with a mix of worker housing, post-war capes, and updated splits. Sal's Painting handles Linden interior jobs, exterior repaints on wood and aluminum siding, and rental turnovers for local landlords.",
    neighborhoods: ["Downtown Linden — dense multifamily", "Near Linden Airport — single-family blocks", "Tremley Point area", "Linden border toward Clark and Cranford"],
    housing: "Aluminum-sided ranches are common — proper bond primer matters. Multifamily turnovers need fast scheduling between tenants.",
    note: "Linden rentals:", noteText: "Landlords often need fast turnover paint — Sal can quote unit-by-unit with a standard white or agree on a palette for repeat business.",
    nearby: ["rahway-painter", "carteret-painter", "woodbridge-painter"],
    topServices: [["basic-renovations.html", "Rental Turnovers", "Fast unit repaint and patch packages."], ["exterior-painting.html", "Exterior Painting", "Aluminum and wood siding."], ["interior-painting.html", "Interior Painting", "Bedrooms, halls, and living areas."]],
    faqs: [
      ["Is Linden in your service area?", "Yes. Linden is within the Middlesex / Union border zone Sal serves regularly."],
      ["Do you paint aluminum siding?", "Yes. Proper clean, bond primer, and exterior coating — common on Linden ranches."],
      ["Can you work around tenant schedules?", "Yes. Evenings and weekends available 7 AM – 9 PM."],
      ["How much for a Linden apartment repaint?", "Depends on bedrooms and condition — photos help Sal ballpark before the walkthrough."],
      ["Do you handle multi-unit buildings?", "Yes — hallways and unit turns quoted per scope."],
      ["How do I book a Linden estimate?", "Call (727) 644-7674 or use the <a href=\"contact.html\">contact form</a>."],
    ],
  },
  {
    slug: "iselin-painter", name: "Iselin", h1: "Painter in Iselin, NJ",
    meta: "House painting in Iselin, NJ — interior, exterior, and drywall prep in Woodbridge Township's Iselin section. Free estimates.",
    heroSet: 6, contentImg: 14, teaserA: 7, teaserB: 8,
    intro: "Iselin is a dense, diverse residential hub in Woodbridge Township — colonials near Oak Tree Road, townhomes near the train station, and steady demand for interior refreshes and exterior touch-ups. Sal's Painting schedules Iselin jobs in efficient route blocks from Carteret.",
    neighborhoods: ["Oak Tree Road corridor", "Iselin near Metropark Station", "Colonia border sections", "Route 1 east residential pockets"],
    housing: "Townhomes and colonials dominate — parking and access for ladder trucks is confirmed before exterior work. Interior open-plan updates are common after kitchen refreshes.",
    note: "Iselin condos:", noteText: "HOA rules sometimes restrict exterior colors — Sal recommends checking association guidelines before booking exterior work in condo complexes.",
    nearby: ["woodbridge-painter", "edison-painter", "carteret-painter"],
    topServices: [["interior-painting.html", "Interior Painting", "Townhomes and colonials near Metropark."], ["accent-walls.html", "Accent Walls", "Quick focal-wall updates."], ["drywall-repair-prep.html", "Drywall Repair", "Patch after kitchen and bath updates."]],
    faqs: [
      ["Do you serve Iselin, NJ?", "Yes. Iselin is part of Woodbridge Township and a regular stop on Sal's route."],
      ["Can you paint interior townhomes?", "Yes. Furniture covered, floors protected, efficient room-by-room workflow."],
      ["Do you offer accent walls in Iselin?", "Yes — popular for living rooms and home offices."],
      ["How soon can you come to Iselin?", "Often within a few days for estimates; job start depends on scope and season."],
      ["Do you paint near Metropark?", "Yes — includes station-area townhomes and nearby streets."],
      ["Is Iselin the same as Woodbridge?", "Iselin is a section of Woodbridge Township — Sal serves both; see <a href=\"woodbridge-painter.html\">Woodbridge page</a> too."],
    ],
  },
  {
    slug: "sayreville-painter", name: "Sayreville", h1: "Painter in Sayreville, NJ",
    meta: "Painting services in Sayreville, NJ — interior, exterior, deck staining, and drywall repair. Serving Parlin, Morgan, and all Sayreville sections.",
    heroSet: 7, contentImg: 1, teaserA: 2, teaserB: 3,
    intro: "Sayreville stretches from the Raritan Bay waterfront to inland suburbs — flood-zone homes near Morgan need moisture-smart primers; Parlin splits need standard suburban prep. Sal's Painting serves Sayreville for interior repaints, exterior jobs, and deck staining on backyard outdoor living spaces.",
    neighborhoods: ["Parlin — suburban splits and ranches", "Morgan and waterfront — humidity exposure", "Sayreville proper near Main Street", "Near Cheesequake State Park residential"],
    housing: "Waterfront sections need mildew-aware washing on exteriors. Inland Parlin homes follow typical split-level repaint patterns with deck staining in spring.",
    note: "Sayreville basements:", noteText: "Finished basement repaints need moisture-check first — Sal won't coat over active water issues without addressing the source or using appropriate basement-rated products.",
    nearby: ["south-amboy-painter", "edison-painter", "perth-amboy-painter"],
    topServices: [["deck-fence-staining.html", "Deck Staining", "Backyard decks in Parlin and Morgan."], ["exterior-painting.html", "Exterior Painting", "Humidity-exposed elevations."], ["interior-painting.html", "Interior Painting", "Splits, ranches, and basements."]],
    faqs: [
      ["Does Sal's Painting work in Sayreville?", "Yes. Parlin, Morgan, and all Sayreville sections are in service area."],
      ["Can you stain decks in Sayreville?", "Yes. Spring through early fall when wood is dry and temps allow cure."],
      ["Do you repair drywall after water damage?", "Surface repair and repaint yes — active leaks need plumbing fixed first."],
      ["Free estimates in Sayreville?", "Always. Call (727) 644-7674 with your section of Sayreville."],
      ["Do you serve Parlin NJ?", "Yes — Parlin is part of Sayreville Borough."],
      ["How far is Sayreville from Carteret?", "Typically 15–25 minutes depending on section and traffic."],
    ],
  },
  {
    slug: "south-amboy-painter", name: "South Amboy", h1: "Painter in South Amboy, NJ",
    meta: "House painter in South Amboy, NJ — interior, exterior, and renovation painting near the Raritan Bay. Free estimates from Sal's Painting.",
    heroSet: 8, contentImg: 2, teaserA: 4, teaserB: 5,
    intro: "South Amboy is a compact waterfront city with older housing stock and newer development near the train station. Sal's Painting serves South Amboy from Carteret — a short hop across the county — for interior painting, exterior repaints fighting bay humidity, and quick rental turnovers.",
    neighborhoods: ["Waterfront and Bayshore redevelopment area", "Broadway and downtown South Amboy", "Near South Amboy Station", "Conover Avenue residential blocks"],
    housing: "Bay-facing trim and railings need rust-aware primers. Newer townhomes near the station often need first repaints after builder-grade finishes age.",
    note: "South Amboy salt air:", noteText: "Exterior trim on bay-facing homes may need more frequent maintenance. Sal uses rust-inhibiting primers on metal railings and proper exterior acrylic on wood trim.",
    nearby: ["perth-amboy-painter", "sayreville-painter", "carteret-painter"],
    topServices: [["exterior-painting.html", "Exterior Painting", "Bay-facing trim and siding."], ["interior-painting.html", "Interior Painting", "Downtown homes and rentals."], ["basic-renovations.html", "Renovation Finish", "Post-update paint packages."]],
    faqs: [
      ["Do you paint homes in South Amboy?", "Yes. South Amboy is a core waterfront community in Sal's service radius."],
      ["How far is Sal's Painting from South Amboy?", "Based in Carteret — typically 10–15 minutes depending on traffic."],
      ["Can you paint new construction in South Amboy?", "Finish painting and touch-up yes; full new-build GC work is outside scope."],
      ["Weekend availability in South Amboy?", "Yes — 7 days a week, 7 AM to 9 PM."],
      ["Do you handle waterfront exterior prep?", "Yes — extra inspection on south- and west-facing elevations."],
      ["Can I get a same-week estimate?", "Often yes — call (727) 644-7674 with your address and photos."],
    ],
  },
];

function writePage(name, html) {
  writeFileSync(join(ROOT, name), html, "utf8");
  console.log("Wrote", name);
}

for (const svc of SERVICES) {
  const seo = SEO.services[svc.slug];
  const hero = HERO_GALLERY_SETS[svc.heroSet % HERO_GALLERY_SETS.length];
  const content = renderSections(svc.sections);

  const pageUrl = `${S.url}/${svc.slug}.html`;
  const schema = schemaScript(
    servicePageSchema({
      slug: svc.slug,
      url: pageUrl,
      title: seo.title,
      description: seo.description,
      serviceName: svc.title,
      imageNum: svc.contentImg,
      faqs: svc.faqs,
    }),
  );

  writePage(
    `${svc.slug}.html`,
    `${head({ title: seo.title, desc: seo.description, keywords: seo.keywords, canonical: pageUrl, ogImage: `${S.url}/${G(svc.contentImg)}`, extraSchema: schema })}
<body>
  <a class="skip-nav" href="#main-content">Skip to main content</a>
  <div id="site-header-include"></div>
  <main id="main-content">
    <section class="sp-hero sp-hero--panels hero" aria-label="${esc(svc.title)}">
      ${heroPanelsGallery(hero)}
      <div class="sp-hero-overlay" aria-hidden="true"></div>
      <div class="container">
        <p class="eyebrow"><a href="/">Home</a> &rsaquo; Services &rsaquo; ${esc(svc.title)}</p>
        <h1>${seo.h1}</h1>
        <p>${svc.desc} Based in ${S.city}, serving ${S.county} and nearby Central NJ towns. Call Sal directly at <a href="tel:${S.tel}">${S.phone}</a>.</p>
      </div>
    </section>
    <section class="section-shell">
      <div class="container sp-layout">
        <div class="sp-content" data-reveal>
          ${content}
          ${processStrip(svc.process, `How ${svc.title.toLowerCase()} jobs run`)}
          <h2>${svc.title} across ${S.county}</h2>
          <p>Sal's Painting is owner-operated from ${S.city} — you get Sal on the ${svc.title.toLowerCase()} estimate, on the job, and on the follow-up call. Free estimates · <a href="service-guarantee.html">Workmanship guarantee</a> · <a href="pricing.html">${svc.title.toLowerCase()} pricing</a> · <a href="gallery.html">See related project photos</a> · <a href="contact.html">Contact form</a> · <a href="tel:${S.tel}">${S.phone}</a>.</p>
          ${relatedChips(svc.relatedServices, "Related services")}
          ${relatedChips(svc.relatedCities, "Popular service areas")}
        </div>
        <aside class="sp-sidebar">
          <div class="hero-card" aria-label="Get a free quote">
            <p class="card-eyebrow">Get a free quote</p>
            <h2 class="card-name">Talk to Sal Today</h2>
            <p class="card-note">Fill out the form and Sal will follow up about your project.</p>
            ${contactForm(svc.title, `${svc.title} quote - ${S.name}`)}
          </div>
        </aside>
      </div>
    </section>
    <section class="section-shell faq-section">
      <div class="container">
        <div class="section-heading" data-reveal>
          <p class="eyebrow">${esc(svc.title)} FAQ</p>
          <h2>Common questions about ${svc.title.toLowerCase()}</h2>
        </div>
        <div class="faq-list">${faqBlock(svc.faqs, svc.slug)}</div>
      </div>
    </section>
    ${contactParallax("Get your quote", `${esc(svc.title)} in ${S.county} — call Sal today.`, `Free estimates · 7 days a week · ${S.phone}`)}
  </main>
${foot()}`,
  );
}

const ALL_SERVICE_CHIPS = SERVICES.map((s) => [s.slug + ".html", s.title]);

for (const city of CITIES) {
  const seo = SEO.cities[city.slug];
  const hero = HERO_GALLERY_SETS[city.heroSet % HERO_GALLERY_SETS.length];
  const expandedSections = renderSections(citySections(city, S, G));
  const cityFaqs = [...city.faqs, ...(EXTRA_FAQS[city.slug] ?? [])];
  const galleryN = CITY_GALLERY[city.slug] ?? 1;
  const nearbyLinks = city.nearby
    .map((slug) => {
      const c = CITIES.find((x) => x.slug === slug);
      return c ? `<a href="${slug}.html">${c.name}</a>` : "";
    })
    .filter(Boolean)
    .join(", ");

  const pageUrl = `${S.url}/${city.slug}.html`;
  const schema = schemaScript(
    cityPageSchema({
      slug: city.slug,
      url: pageUrl,
      title: seo.title,
      description: seo.description,
      faqs: cityFaqs,
      imageNum: galleryN,
    }),
  );

  const topSvcHtml = city.topServices
    .map(
      ([href, title, blurb]) =>
        `<article class="sp-highlight-card"><h3><a href="${href}">${title}</a></h3><p>${blurb}</p></article>`,
    )
    .join("\n            ");

  writePage(
    `${city.slug}.html`,
    `${head({ title: seo.title, desc: seo.description, keywords: seo.keywords, canonical: pageUrl, ogImage: `${S.url}/${G(galleryN)}`, extraSchema: schema })}
<body>
  <a class="skip-nav" href="#main-content">Skip to main content</a>
  <div id="site-header-include"></div>
  <main id="main-content">
    <section class="sp-hero sp-hero--panels hero" aria-label="${esc(city.name)} painter">
      ${heroPanelsGallery(hero)}
      <div class="sp-hero-overlay" aria-hidden="true"></div>
      <div class="container">
        <p class="breadcrumb-trail"><a href="/">Home</a> &rsaquo; <a href="service-areas.html">Service Areas</a> &rsaquo; ${esc(city.name)}</p>
        <h1>${seo.h1}</h1>
        <p>Interior painting, exterior painting, drywall repair, and deck staining in ${city.name} — direct owner service from nearby ${S.city}.</p>
      </div>
    </section>
    <section class="section-shell">
      <div class="container sp-layout">
        <div class="sp-content" data-reveal>
          <h2>${city.name} — local homes, one owner on the job</h2>
          <p>${city.intro}</p>
          <p>${city.housing} Sal plans prep, access, and materials for the way ${city.name} homes are actually built — not a one-size template from out of county.</p>
          <p>Call <a href="tel:${S.tel}">${S.phone}</a> for ${city.name} scheduling or <a href="contact.html">send a quote request</a>.</p>
          ${expandedSections}
          <h2>${city.name} neighborhoods Sal serves</h2>
          <ul class="about-list">${city.neighborhoods.map((n) => `<li>${n}</li>`).join("")}</ul>
          <div class="city-local-note"><strong>${city.note}</strong> ${city.noteText}</div>
          <h2>Top painting services in ${city.name}</h2>
          <div class="sp-highlight-grid">${topSvcHtml}</div>
          <h2>All painting services in ${city.name}, NJ</h2>
          <ul class="about-list">
            ${SERVICES.map((s) => `<li><a href="${s.slug}.html">${s.title}</a> — available for ${city.name} homeowners and landlords</li>`).join("\n            ")}
          </ul>
          <h2>House painting costs in ${city.name}</h2>
          <p>Single rooms, whole homes, exteriors, and deck scopes are quoted after walkthrough or photos. See the <a href="pricing.html">${S.county} painting price guide</a> for ballparks, then call Sal for a written ${city.name} quote tied to your actual prep needs.</p>
          ${processStrip(
            [
              `<strong>Call or text</strong> — Share your ${city.name} address and what needs painting or repair.`,
              `<strong>Walkthrough or photos</strong> — Sal confirms prep needs and gives a straight quote.`,
              `<strong>Job done right</strong> — Clean lines, protected floors, walkthrough before payment.`,
            ],
            `Scheduling a ${city.name} painting job`,
          )}
          <h2>Why ${city.name} homeowners choose Sal's Painting</h2>
          <p>Owner-operated from ${S.city} since 2015 — direct contact, free estimates, protected floors, and a <a href="service-guarantee.html">workmanship guarantee</a>. Browse the <a href="gallery.html">project gallery</a> for interior, exterior, trim, and deck work across ${S.county}.</p>
          ${relatedChips(city.nearby.map((slug) => { const c = CITIES.find((x) => x.slug === slug); return c ? [slug + ".html", c.name] : null; }).filter(Boolean), `Nearby ${S.county} towns`)}
          ${relatedChips(ALL_SERVICE_CHIPS, "All painting services")}
        </div>
        <aside class="sp-sidebar" data-reveal>
          <div class="about-card">
            <h3>Free ${city.name} estimate</h3>
            <p>${S.county} painting — owner on site.</p>
            <a class="btn btn-primary btn-full" href="tel:${S.tel}">${S.phone}</a>
            <a class="btn btn-ghost btn-full" href="contact.html" style="margin-top:12px;">Contact form</a>
            <p style="margin-top:14px;font-size:0.85rem;color:var(--muted);">Based in ${S.city} · Free estimates</p>
          </div>
        </aside>
      </div>
    </section>
    <section class="section-shell faq-section">
      <div class="container">
        <div class="section-heading" data-reveal>
          <p class="eyebrow">${city.name} painting FAQ</p>
          <h2>Common questions from ${city.name} homeowners</h2>
        </div>
        <div class="faq-list">${faqBlock(cityFaqs, city.slug)}</div>
      </div>
    </section>
    <section class="areas-strip"><div class="container"><p class="eyebrow">Nearby areas</p><p>Based in <strong>${S.city}</strong> and serving ${city.name}, ${nearbyLinks}, and communities across ${S.county}. <a href="service-areas.html">See all service areas &rarr;</a></p></div></section>
    ${contactParallax("Get your quote", `${city.name} house painter — call Sal today.`, `Interior, exterior, drywall, and deck work across ${S.county}.`)}
  </main>
${foot()}`,
  );
}

console.log("Service and city pages complete.");
