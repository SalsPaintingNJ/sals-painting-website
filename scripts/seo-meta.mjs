/**
 * SEO titles, meta descriptions, and H1s for salspaintingrenovation.com
 *
 * Keyword strategy (2026 local painting SEO + Google Trends):
 * - High-intent: "house painter [city]", "interior/exterior house painters [area]"
 * - Transactional: "free estimate", "free painting estimate", "house painting cost"
 * - Local: Middlesex County NJ, Carteret + radius cities
 * - Seasonal note: exterior/deck peak Mar–Aug; interior steady year-round
 *
 * Limits: title ≤ 60 chars · meta description ≤ 150 chars
 */

/** @param {string} s */
export function seoLen(s) {
  return [...s].length;
}

/** @param {{ title: string, description: string, slug?: string }} entry */
export function assertSeo(entry) {
  const t = seoLen(entry.title);
  const d = seoLen(entry.description);
  if (t > 60) throw new Error(`SEO title too long (${t}/60)${entry.slug ? ` [${entry.slug}]` : ""}: ${entry.title}`);
  if (d > 150) throw new Error(`SEO description too long (${d}/150)${entry.slug ? ` [${entry.slug}]` : ""}: ${entry.description}`);
}

const B = "Sal's Painting";

export const SEO = {
  home: {
    slug: "home",
    title: `House Painter Carteret NJ | ${B}`,
    description:
      "Carteret house painter serving Middlesex County, NJ. Interior, exterior, drywall, decks & trim. Free estimates—owner on every job.",
    h1: "House Painter in Carteret, NJ",
    heroLead:
      "Residential house painting across Middlesex County. Interior, exterior, drywall repair, deck staining & renovations—free estimates from Sal.",
    keywords:
      "house painter carteret nj, painters near me middlesex county, interior painting carteret, exterior house painting nj, free painting estimate",
  },

  services: {
    "interior-painting": {
      slug: "interior-painting",
      title: `Interior House Painters NJ | ${B}`,
      description:
        "Interior house painting in Carteret & Middlesex County, NJ. Walls, ceilings, trim & whole-home repaints. Free estimates—call Sal.",
      h1: "Interior House Painters in Middlesex County, NJ",
      keywords: "interior house painters nj, interior painting carteret, room painting middlesex county, house painters near me, free interior painting estimate",
    },
    "exterior-painting": {
      slug: "exterior-painting",
      title: `Exterior House Painters NJ | ${B}`,
      description:
        "Exterior house painting in Middlesex County, NJ. Siding, trim, shutters & doors—prep built for NJ weather. Free estimate from Sal.",
      h1: "Exterior House Painters in Middlesex County, NJ",
      keywords: "exterior house painters nj, exterior painting middlesex county, siding painters carteret, house painting nj, curb appeal painting",
    },
    "drywall-repair-prep": {
      slug: "drywall-repair-prep",
      title: `Drywall Repair & Painting NJ | ${B}`,
      description:
        "Drywall repair, patching & priming before paint in Carteret & Middlesex County, NJ. Smooth walls, honest prep. Free estimates.",
      h1: "Drywall Repair & Painting in Carteret, NJ",
      keywords: "drywall repair painting nj, wall patching carteret, drywall prep before paint, plaster repair middlesex county, interior prep painter",
    },
    "trim-doors-ceilings": {
      slug: "trim-doors-ceilings",
      title: `Trim & Door Painting NJ | ${B}`,
      description:
        "Trim, door & ceiling painting in Middlesex County, NJ. Crisp cut-in on baseboards, casings & ceilings. Free estimates from Sal.",
      h1: "Trim, Door & Ceiling Painting in NJ",
      keywords: "trim painting nj, door painting carteret, ceiling painters middlesex county, baseboard painting, interior trim painter",
    },
    "accent-walls": {
      slug: "accent-walls",
      title: `Accent Wall Painting NJ | ${B}`,
      description:
        "Accent wall painting in Carteret & Middlesex County, NJ. Bold color, tinted primer & clean edges. Free estimates—call Sal today.",
      h1: "Accent Wall Painting in Middlesex County, NJ",
      keywords: "accent wall painting nj, feature wall painter carteret, bold wall color middlesex county, bedroom accent wall, living room accent wall",
    },
    "deck-fence-staining": {
      slug: "deck-fence-staining",
      title: `Deck & Fence Staining NJ | ${B}`,
      description:
        "Deck & fence staining in Middlesex County, NJ. Wash, prep & coat outdoor wood for NJ weather. Free estimates from Sal's Painting.",
      h1: "Deck & Fence Staining in Middlesex County, NJ",
      keywords: "deck staining nj, fence staining middlesex county, deck painters carteret, outdoor wood staining, backyard deck painting",
    },
    "basic-renovations": {
      slug: "basic-renovations",
      title: `Renovation Painting NJ | ${B}`,
      description:
        "Renovation finish painting in Middlesex County, NJ. Patch, paint & refresh after kitchen, bath & rental updates. Free quotes from Sal.",
      h1: "Home Renovation Painting in Carteret, NJ",
      keywords: "renovation painting nj, rental turnover painting, kitchen paint after remodel, pre listing painting carteret, light renovation painter",
    },
  },

  cities: {
    "carteret-painter": {
      slug: "carteret-painter",
      title: `House Painter Carteret NJ | ${B}`,
      description:
        "House painter in Carteret, NJ—interior, exterior, drywall & deck staining. Based on Charles St. Free estimates. Owner on every job.",
      h1: "House Painter in Carteret, NJ",
      keywords: "house painter carteret nj, painters carteret, interior painting carteret, exterior painting carteret nj, painting contractor charles st",
    },
    "perth-amboy-painter": {
      slug: "perth-amboy-painter",
      title: `House Painter Perth Amboy NJ | ${B}`,
      description:
        "House painter in Perth Amboy, NJ. Interior, exterior & drywall for waterfront & inland homes. Free estimates from nearby Carteret.",
      h1: "House Painter in Perth Amboy, NJ",
      keywords: "house painter perth amboy nj, painters perth amboy, waterfront house painting, interior painter perth amboy, exterior painting nj",
    },
    "woodbridge-painter": {
      slug: "woodbridge-painter",
      title: `House Painter Woodbridge NJ | ${B}`,
      description:
        "House painter in Woodbridge Township, NJ—Colonia, Avenel, Fords & Iselin. Interior, exterior & prep work. Free estimates from Sal.",
      h1: "House Painter in Woodbridge, NJ",
      keywords: "house painter woodbridge nj, painters colonia nj, avenel house painter, woodbridge township painting, interior exterior painter nj",
    },
    "rahway-painter": {
      slug: "rahway-painter",
      title: `House Painter Rahway NJ | ${B}`,
      description:
        "House painter in Rahway, NJ. Interior, exterior & plaster repair for historic & suburban homes. Free estimates—call Sal today.",
      h1: "House Painter in Rahway, NJ",
      keywords: "house painter rahway nj, painters rahway, plaster repair painting rahway, interior painting rahway nj, historic home painter",
    },
    "edison-painter": {
      slug: "edison-painter",
      title: `House Painter Edison NJ | ${B}`,
      description:
        "House painter in Edison, NJ. Interior, exterior, drywall & deck staining—Oak Tree, Clara Barton & all neighborhoods. Free estimates.",
      h1: "House Painter in Edison, NJ",
      keywords: "house painter edison nj, painters edison, oak tree painter edison, interior painting edison nj, exterior house painting edison",
    },
    "linden-painter": {
      slug: "linden-painter",
      title: `House Painter Linden NJ | ${B}`,
      description:
        "House painter in Linden, NJ. Interior & exterior painting, rental turnovers & aluminum siding. Free estimates from Sal's Painting.",
      h1: "House Painter in Linden, NJ",
      keywords: "house painter linden nj, painters linden, rental painting linden, aluminum siding painter linden nj, apartment painter linden",
    },
    "iselin-painter": {
      slug: "iselin-painter",
      title: `House Painter Iselin NJ | ${B}`,
      description:
        "House painter in Iselin, NJ—Woodbridge Township. Townhomes, colonials & Metropark area. Interior, exterior & drywall. Free estimates.",
      h1: "House Painter in Iselin, NJ",
      keywords: "house painter iselin nj, painters iselin, metropark painter, woodbridge iselin painting, townhome painter iselin nj",
    },
    "sayreville-painter": {
      slug: "sayreville-painter",
      title: `House Painter Sayreville NJ | ${B}`,
      description:
        "House painter in Sayreville, NJ—Parlin, Morgan & waterfront sections. Interior, exterior, decks & drywall. Free estimates from Sal.",
      h1: "House Painter in Sayreville, NJ",
      keywords: "house painter sayreville nj, painters parlin nj, deck staining sayreville, interior painting sayreville nj, morgan nj painter",
    },
    "south-amboy-painter": {
      slug: "south-amboy-painter",
      title: `House Painter South Amboy NJ | ${B}`,
      description:
        "House painter in South Amboy, NJ near the Raritan Bay. Interior, exterior & renovation finish. Salt-air prep. Free estimates.",
      h1: "House Painter in South Amboy, NJ",
      keywords: "house painter south amboy nj, painters south amboy, waterfront exterior painting, raritan bay house painter, interior painting south amboy",
    },
  },

  pages: {
    about: {
      slug: "about",
      title: `About Sal | Carteret NJ House Painter`,
      description:
        "Meet Sal—owner of Sal's Painting in Carteret, NJ. Residential painting across Middlesex County since 2015. Direct contact, free estimates.",
      h1: "About Sal — Carteret's House Painter",
      keywords: "sals painting carteret, about house painter nj, residential painter middlesex county, local painting contractor carteret",
    },
    contact: {
      slug: "contact",
      title: `Free Painting Estimate NJ | ${B}`,
      description:
        "Free painting estimate in Middlesex County, NJ. Interior, exterior, drywall & decks. Call (727) 644-7674 or send the contact form today.",
      h1: "Get a Free Painting Estimate in NJ",
      keywords: "free painting estimate nj, contact house painter carteret, painting quote middlesex county, painters near me estimate",
    },
    gallery: {
      slug: "gallery",
      title: `Painting Gallery | Middlesex County NJ`,
      description:
        "Real painting projects in Middlesex County, NJ—interior, exterior, trim, decks & renovations by Sal's Painting in Carteret & nearby towns.",
      h1: "Painting Project Gallery — Middlesex County, NJ",
      keywords: "painting gallery nj, house painting photos middlesex county, interior exterior project gallery, carteret painting projects",
    },
    pricing: {
      slug: "pricing",
      title: `House Painting Cost NJ | Price Guide`,
      description:
        "House painting prices in Middlesex County, NJ—rooms, exteriors, drywall & decks. Ballpark ranges & free written quotes from Sal's Painting.",
      h1: "House Painting Cost in Middlesex County, NJ",
      keywords: "house painting cost nj, painting prices middlesex county, interior painting cost carteret, exterior painting prices nj, deck staining cost",
    },
    "service-areas": {
      slug: "service-areas",
      title: `Painters Near Me | Middlesex County NJ`,
      description:
        "Sal's Painting serves Carteret, Edison, Woodbridge, Perth Amboy, Rahway, Linden & more in Middlesex County, NJ. Free estimates within 25 miles.",
      h1: "House Painters Serving Middlesex County, NJ",
      keywords: "painters near me middlesex county nj, painting service areas carteret, local house painters nj, painters edison woodbridge rahway",
    },
    "service-guarantee": {
      slug: "service-guarantee",
      title: `Painting Guarantee | ${B} NJ`,
      description:
        "Workmanship guarantee on interior & exterior painting in Middlesex County, NJ. Clear written scope before work—call Sal with any concerns.",
      h1: "Sal's Painting Workmanship Guarantee",
      keywords: "painting guarantee nj, house painter warranty middlesex county, workmanship guarantee painting, sal painting guarantee",
    },
  },
};

/** Validate all entries at build time */
export function validateAllSeo() {
  assertSeo({ ...SEO.home, slug: "home" });
  for (const entry of Object.values(SEO.services)) assertSeo(entry);
  for (const entry of Object.values(SEO.cities)) assertSeo(entry);
  for (const entry of Object.values(SEO.pages)) assertSeo(entry);
}
