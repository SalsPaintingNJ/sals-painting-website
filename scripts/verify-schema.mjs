#!/usr/bin/env node
/**
 * Validate JSON-LD @graph coverage on Sal's Painting HTML pages.
 * Adapted from Knight Group scripts/verify-schema-graph.py
 */
import { readFileSync, readdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const REPORT = join(ROOT, "seo", "schema-verification-report.json");

const REQUIREMENTS = {
  "index.html": new Set([
    "Organization",
    "Person",
    "HousePainter",
    "LocalBusiness",
    "WebSite",
    "WebPage",
    "BreadcrumbList",
    "ContactPoint",
    "AggregateRating",
    "FAQPage",
    "ImageObject",
  ]),
  "about.html": new Set(["Organization", "Person", "AboutPage", "BreadcrumbList", "WebPage"]),
  "contact.html": new Set(["Organization", "ContactPage", "ContactPoint", "BreadcrumbList", "FAQPage"]),
  "gallery.html": new Set(["Organization", "ImageGallery", "ImageObject", "ItemList", "BreadcrumbList"]),
  "pricing.html": new Set(["Organization", "OfferCatalog", "Offer", "BreadcrumbList", "WebPage"]),
  "service-areas.html": new Set(["Organization", "ItemList", "Service", "BreadcrumbList", "FAQPage"]),
  "service-guarantee.html": new Set(["Organization", "WebPage", "BreadcrumbList"]),
};

const SERVICE_REQUIREMENTS = new Set([
  "Organization",
  "HousePainter",
  "WebSite",
  "WebPage",
  "Service",
  "BreadcrumbList",
  "FAQPage",
  "Offer",
]);

const CITY_REQUIREMENTS = new Set([
  "Organization",
  "HousePainter",
  "WebSite",
  "WebPage",
  "Service",
  "BreadcrumbList",
  "FAQPage",
]);

const SKIP = new Set(["404.html", "thank-you.html", "header.html", "footer.html", "privacy-policy.html"]);

const SERVICE_PAGES = new Set([
  "interior-painting.html",
  "exterior-painting.html",
  "drywall-repair-prep.html",
  "trim-doors-ceilings.html",
  "accent-walls.html",
  "deck-fence-staining.html",
  "basic-renovations.html",
]);

function collectTypes(node, types, seen = new WeakSet()) {
  if (!node || typeof node !== "object") return;
  if (seen.has(node)) return;
  seen.add(node);

  const nodeType = node["@type"];
  if (Array.isArray(nodeType)) nodeType.forEach((t) => types.add(t));
  else if (nodeType) types.add(nodeType);

  for (const value of Object.values(node)) {
    if (Array.isArray(value)) value.forEach((item) => collectTypes(item, types, seen));
    else collectTypes(value, types, seen);
  }
}

function loadTypes(path) {
  const html = readFileSync(path, "utf8");
  const issues = [];
  const types = new Set();
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/gi)].map((m) => m[1]);
  if (!blocks.length) {
    issues.push("missing JSON-LD block");
    return { types, issues };
  }
  if (blocks.length > 1) issues.push(`multiple JSON-LD blocks (${blocks.length}) — prefer single @graph`);

  for (const [index, block] of blocks.entries()) {
    let data;
    try {
      data = JSON.parse(block);
    } catch (err) {
      issues.push(`invalid JSON-LD block #${index + 1}: ${err.message}`);
      continue;
    }
    if (!data["@graph"] && !data["@type"]) issues.push("missing @graph or @type root");
    const nodes = data["@graph"] || [data];
    for (const node of nodes) collectTypes(node, types);
  }
  return { types, issues };
}

function main() {
  const report = [];
  let failures = 0;
  const targets = new Map(Object.entries(REQUIREMENTS));
  for (const file of readdirSync(ROOT).filter((f) => f.endsWith(".html") && !SKIP.has(f))) {
    if (targets.has(file)) continue;
    if (SERVICE_PAGES.has(file)) targets.set(file, SERVICE_REQUIREMENTS);
    else if (file.endsWith("-painter.html")) targets.set(file, CITY_REQUIREMENTS);
  }

  for (const [rel, required] of targets) {
    const path = join(ROOT, rel);
    const { types, issues } = loadTypes(path);
    const missing = [...required].filter((t) => !types.has(t)).sort();
    const ok = !issues.length && !missing.length;
    if (!ok) {
      failures++;
      console.log(`FAIL ${rel}`);
      issues.forEach((i) => console.log(`  - ${i}`));
      if (missing.length) console.log(`  - missing types: ${missing.join(", ")}`);
    } else {
      console.log(`OK   ${rel}`);
    }
    report.push({
      page: rel,
      status: ok ? "ok" : "fail",
      types: [...types].sort(),
      issues: [...issues, ...(missing.length ? [`missing types: ${missing.join(", ")}`] : [])],
    });
  }

  writeFileSync(REPORT, JSON.stringify({ pages: report, failed: failures }, null, 2));
  console.log(`\nReport: seo/schema-verification-report.json`);
  process.exit(failures ? 1 : 0);
}

main();
