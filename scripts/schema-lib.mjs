/**
 * Unified JSON-LD @graph for Sal's Painting — modeled on Knight Group schema_graph.py
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { S, G } from "./page-build-lib.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = S.url.replace(/\/$/, "");

export const IDS = {
  org: `${BASE}/#organization`,
  business: `${BASE}/#business`,
  founder: `${BASE}/#founder`,
  website: `${BASE}/#website`,
  pricingCatalog: `${BASE}/pricing.html#offer-catalog`,
};

export const AREA_SERVED = [
  { "@type": "City", "name": "Carteret, NJ" },
  { "@type": "City", "name": "Perth Amboy, NJ" },
  { "@type": "City", "name": "Woodbridge, NJ" },
  { "@type": "City", "name": "Rahway, NJ" },
  { "@type": "City", "name": "Edison, NJ" },
  { "@type": "City", "name": "Linden, NJ" },
  { "@type": "City", "name": "Iselin, NJ" },
  { "@type": "City", "name": "Sayreville, NJ" },
  { "@type": "City", "name": "South Amboy, NJ" },
  { "@type": "AdministrativeArea", "name": "Middlesex County, New Jersey" },
];

export const SERVICE_TYPES = {
  "interior-painting": "Interior house painting",
  "exterior-painting": "Exterior house painting",
  "drywall-repair-prep": "Drywall repair and painting",
  "trim-doors-ceilings": "Trim, door and ceiling painting",
  "accent-walls": "Accent wall painting",
  "deck-fence-staining": "Deck and fence staining",
  "basic-renovations": "Home renovation painting",
};

export const CITY_NAMES = {
  "carteret-painter": "Carteret",
  "perth-amboy-painter": "Perth Amboy",
  "woodbridge-painter": "Woodbridge",
  "rahway-painter": "Rahway",
  "edison-painter": "Edison",
  "linden-painter": "Linden",
  "iselin-painter": "Iselin",
  "sayreville-painter": "Sayreville",
  "south-amboy-painter": "South Amboy",
};

const REVIEWS = JSON.parse(readFileSync(join(ROOT, "data", "google-reviews.json"), "utf8"));

function stripHtml(html) {
  return String(html)
    .replace(/<a[^>]*>(.*?)<\/a>/gi, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function reviewNodes() {
  return (REVIEWS.reviews || []).slice(0, 6).map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    datePublished: r.date,
    reviewBody: r.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.stars || 5),
      bestRating: "5",
      worstRating: "1",
    },
  }));
}

function organizationEntity() {
  return {
    "@type": "Organization",
    "@id": IDS.org,
    name: S.name,
    alternateName: S.short,
    url: `${BASE}/`,
    logo: `${BASE}/Images/SalsLogo-512.webp`,
    image: `${BASE}/Images/SalsHeroImage.webp`,
    founder: { "@id": IDS.founder },
    sameAs: [S.facebook, S.googleProfile],
  };
}

function founderEntity() {
  return {
    "@type": "Person",
    "@id": IDS.founder,
    name: "Sal",
    jobTitle: "Owner",
    worksFor: { "@id": IDS.business },
    knowsAbout: [
      "Interior house painting",
      "Exterior house painting",
      "Drywall repair",
      "Deck staining",
      "Residential painting",
    ],
  };
}

function businessEntity({ includeReviews = false } = {}) {
  const entity = {
    "@type": ["HousePainter", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": IDS.business,
    name: S.name,
    alternateName: S.short,
    url: `${BASE}/`,
    telephone: "+1-727-644-7674",
    email: S.email,
    image: `${BASE}/Images/SalsHeroImage.webp`,
    logo: `${BASE}/Images/SalsLogo-512.webp`,
    description: "Residential house painter in Carteret, NJ serving Middlesex County.",
    priceRange: "$$",
    parentOrganization: { "@id": IDS.org },
    founder: { "@id": IDS.founder },
    address: {
      "@type": "PostalAddress",
      streetAddress: "54 Charles St",
      addressLocality: S.city,
      addressRegion: "NJ",
      postalCode: "07008",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.5858322,
      longitude: -74.2174052,
    },
    areaServed: AREA_SERVED,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "21:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-727-644-7674",
        contactType: "customer service",
        email: S.email,
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(REVIEWS.ratingValue || 5),
      reviewCount: String(REVIEWS.reviewCount || 14),
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [S.facebook, S.googleProfile],
  };
  if (includeReviews) entity.review = reviewNodes();
  return entity;
}

function websiteEntity() {
  return {
    "@type": "WebSite",
    "@id": IDS.website,
    url: `${BASE}/`,
    name: S.name,
    description: "Residential painting and renovations in Carteret and Middlesex County, NJ.",
    publisher: { "@id": IDS.business },
    inLanguage: "en-US",
  };
}

function breadcrumbEntity(url, crumbs) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

function webpageEntity({ url, title, description, pageType = "WebPage", mainEntityId, extra = {} }) {
  const pageTypes = pageType === "WebPage" ? "WebPage" : ["WebPage", pageType];
  return {
    "@type": pageTypes,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": IDS.website },
    about: { "@id": IDS.business },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    inLanguage: "en-US",
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
    ...extra,
  };
}

function serviceEntity({ url, name, description, serviceType, imageUrl, areaServed = AREA_SERVED, serviceId }) {
  return {
    "@type": "Service",
    "@id": serviceId || `${url}#service`,
    name,
    description,
    serviceType,
    provider: { "@id": IDS.business },
    url,
    image: imageUrl,
    areaServed,
    offers: {
      "@type": "Offer",
      url: `${BASE}/contact.html`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Free painting estimate",
      eligibleRegion: { "@type": "AdministrativeArea", name: "Middlesex County, New Jersey" },
    },
  };
}

export function faqEntity(url, faqs) {
  const items = (faqs || [])
    .map(([q, a]) => {
      const question = stripHtml(q);
      const answer = stripHtml(a);
      if (!question || !answer) return null;
      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      };
    })
    .filter(Boolean);
  if (!items.length) return null;
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: items,
  };
}

function pricingOfferCatalog() {
  return {
    "@type": "OfferCatalog",
    "@id": IDS.pricingCatalog,
    name: "Sal's Painting Price Guide",
    url: `${BASE}/pricing.html`,
    provider: { "@id": IDS.business },
    itemListElement: [
      offerItem("Interior — single room", "Interior room painting with standard prep", "350", "800"),
      offerItem("Interior — whole home", "Whole-home interior repaint", "2500", "8000"),
      offerItem("Exterior — average home", "Exterior siding and trim painting", "3500", "9000"),
      offerItem("Drywall repair", "Patching and skim before paint", "150", "500"),
      offerItem("Deck / fence stain", "Outdoor wood staining", "400", "2000"),
      offerItem("Accent wall", "Single feature wall with primer", "200", "450"),
    ],
  };
}

function offerItem(name, description, low, high) {
  return {
    "@type": "Offer",
    name,
    description,
    url: `${BASE}/pricing.html`,
    priceCurrency: "USD",
    itemOffered: {
      "@type": "Service",
      name,
      provider: { "@id": IDS.business },
    },
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      minPrice: low,
      maxPrice: high,
    },
  };
}

function baseGraph({ includeReviews = false } = {}) {
  return [organizationEntity(), founderEntity(), businessEntity({ includeReviews }), websiteEntity()];
}

function graphPayload(nodes) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}

export function schemaScript(nodes) {
  const json = JSON.stringify(graphPayload(nodes), null, 2);
  return `<script type="application/ld+json">\n${json}\n</script>`;
}

export function homePageSchema({ title, description }) {
  const url = `${BASE}/`;
  const crumbs = [{ name: "Home", item: url }];
  const heroImage = {
    "@type": "ImageObject",
    "@id": `${url}#primary-image`,
    url: `${BASE}/Images/SalsHeroImage.webp`,
    contentUrl: `${BASE}/Images/SalsHeroImage.webp`,
    name: "Sal's Painting — Carteret NJ house painter",
    description: "Residential painting in Carteret and Middlesex County, NJ.",
  };
  const homeFaqs = [
    ["Do you offer free estimates?", `Yes — call or text ${S.phone}, or use the contact form on this site.`],
    ["What areas do you serve?", `Carteret, Perth Amboy, Woodbridge, Edison, Rahway, Linden, Iselin, Sayreville, South Amboy, and ${S.county}.`],
    ["Do you handle drywall repair before painting?", "Yes. Patching, sanding, and priming are included when walls need prep."],
    ["Are evenings and weekends available?", "Yes — 7 days a week, 7 AM to 9 PM."],
  ];
  return [
    ...baseGraph({ includeReviews: true }),
    heroImage,
    breadcrumbEntity(url, crumbs),
    webpageEntity({
      url,
      title,
      description,
      mainEntityId: IDS.business,
      extra: { primaryImageOfPage: { "@id": heroImage["@id"] } },
    }),
    faqEntity(url, homeFaqs),
  ];
}

export function servicePageSchema({ slug, url, title, description, serviceName, imageNum, faqs }) {
  const crumbs = [
    { name: "Home", item: `${BASE}/` },
    { name: serviceName, item: url },
  ];
  const serviceId = `${url}#service`;
  const service = serviceEntity({
    url,
    name: serviceName,
    description,
    serviceType: SERVICE_TYPES[slug] || serviceName,
    imageUrl: `${BASE}/${G(imageNum).replace(/^\//, "")}`,
    serviceId,
  });
  return [
    ...baseGraph(),
    breadcrumbEntity(url, crumbs),
    service,
    webpageEntity({ url, title, description, mainEntityId: serviceId }),
    faqEntity(url, faqs),
  ];
}

export function cityPageSchema({ slug, url, title, description, faqs, imageNum }) {
  const cityName = CITY_NAMES[slug] || slug;
  const crumbs = [
    { name: "Home", item: `${BASE}/` },
    { name: "Service Areas", item: `${BASE}/service-areas.html` },
    { name: `${cityName}, NJ`, item: url },
  ];
  const serviceId = `${url}#service`;
  const service = serviceEntity({
    url,
    name: `House Painter in ${cityName}, NJ`,
    description,
    serviceType: "Residential house painting",
    imageUrl: imageNum ? `${BASE}/${G(imageNum).replace(/^\//, "")}` : `${BASE}/Images/SalsHeroImage.webp`,
    areaServed: [
      { "@type": "City", name: `${cityName}, NJ` },
      { "@type": "AdministrativeArea", name: "Middlesex County, New Jersey" },
    ],
    serviceId,
  });
  return [
    ...baseGraph(),
    breadcrumbEntity(url, crumbs),
    service,
    webpageEntity({ url, title, description, mainEntityId: serviceId }),
    faqEntity(url, faqs),
  ];
}

export function aboutPageSchema({ title, description }) {
  const url = `${BASE}/about.html`;
  const crumbs = [
    { name: "Home", item: `${BASE}/` },
    { name: "About", item: url },
  ];
  return [
    ...baseGraph(),
    breadcrumbEntity(url, crumbs),
    webpageEntity({
      url,
      title,
      description,
      pageType: "AboutPage",
      mainEntityId: IDS.founder,
    }),
  ];
}

export function contactPageSchema({ title, description, faqs }) {
  const url = `${BASE}/contact.html`;
  const crumbs = [
    { name: "Home", item: `${BASE}/` },
    { name: "Contact", item: url },
  ];
  return [
    ...baseGraph(),
    breadcrumbEntity(url, crumbs),
    webpageEntity({
      url,
      title,
      description,
      pageType: "ContactPage",
      mainEntityId: IDS.business,
      extra: {
        potentialAction: {
          "@type": "ContactAction",
          name: "Request a free painting estimate",
          target: {
            "@type": "EntryPoint",
            urlTemplate: url,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
        },
      },
    }),
    faqEntity(url, faqs),
  ];
}

export function galleryPageSchema({ title, description, items, captions = [] }) {
  const url = `${BASE}/gallery.html`;
  const crumbs = [
    { name: "Home", item: `${BASE}/` },
    { name: "Gallery", item: url },
  ];
  const galleryId = `${url}#gallery`;
  const imageRefs = items.map((n, i) => {
    const imageUrl = `${BASE}/${G(n).replace(/^\//, "")}`;
    return {
      image: {
        "@type": "ImageObject",
        "@id": `${url}#image-${n}`,
        url: imageUrl,
        contentUrl: imageUrl,
        name: captions[i] || `Painting project photo ${n}`,
      },
      ref: { "@id": `${url}#image-${n}` },
    };
  });
  const images = imageRefs.map((x) => x.image);
  const gallery = {
    "@type": "ImageGallery",
    "@id": galleryId,
    name: title,
    description,
    url,
    provider: { "@id": IDS.business },
    about: { "@id": IDS.business },
    image: imageRefs.map((x) => x.ref),
  };
  const itemList = {
    "@type": "ItemList",
    "@id": `${url}#project-list`,
    name: "Sal's Painting project gallery",
    itemListElement: items.map((n, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: captions[index] || `Project photo ${n}`,
      url: `${url}#image-${n}`,
    })),
  };
  return [
    ...baseGraph(),
    breadcrumbEntity(url, crumbs),
    gallery,
    itemList,
    ...images,
    webpageEntity({ url, title, description, mainEntityId: galleryId }),
  ];
}

export function pricingPageSchema({ title, description }) {
  const url = `${BASE}/pricing.html`;
  const crumbs = [
    { name: "Home", item: `${BASE}/` },
    { name: "Pricing", item: url },
  ];
  return [
    ...baseGraph(),
    breadcrumbEntity(url, crumbs),
    pricingOfferCatalog(),
    webpageEntity({ url, title, description, mainEntityId: IDS.pricingCatalog }),
  ];
}

export function serviceAreasPageSchema({ title, description, citySlugs, faqs }) {
  const url = `${BASE}/service-areas.html`;
  const crumbs = [
    { name: "Home", item: `${BASE}/` },
    { name: "Service Areas", item: url },
  ];
  const listId = `${url}#area-list`;
  const itemList = {
    "@type": "ItemList",
    "@id": listId,
    name: "Middlesex County painting service areas",
    itemListElement: citySlugs.map((slug, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${CITY_NAMES[slug] || slug}, NJ`,
      url: `${BASE}/${slug}.html`,
    })),
  };
  const service = serviceEntity({
    url,
    name: "Middlesex County house painting service areas",
    description,
    serviceType: "Residential painting service areas",
    imageUrl: `${BASE}/Images/SalsHeroImage.webp`,
    serviceId: `${url}#service`,
  });
  return [
    ...baseGraph(),
    breadcrumbEntity(url, crumbs),
    itemList,
    service,
    webpageEntity({ url, title, description, mainEntityId: listId }),
    faqEntity(url, faqs),
  ];
}

export function guaranteePageSchema({ title, description }) {
  const url = `${BASE}/service-guarantee.html`;
  const crumbs = [
    { name: "Home", item: `${BASE}/` },
    { name: "Service Guarantee", item: url },
  ];
  return [
    ...baseGraph(),
    breadcrumbEntity(url, crumbs),
    webpageEntity({ url, title, description, mainEntityId: IDS.business }),
  ];
}
