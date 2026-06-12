import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const skip = new Set(["404.html", "thank-you.html", "header.html", "footer.html", "privacy-policy.html"]);

let fails = 0;
for (const f of readdirSync(ROOT).filter((x) => x.endsWith(".html") && !skip.has(x))) {
  const c = readFileSync(join(ROOT, f), "utf8");
  const t = (c.match(/<title>([^<]+)<\/title>/) || [])[1]?.replace(/&amp;/g, "&") || "";
  const d = (c.match(/name="description" content="([^"]+)"/) || [])[1] || "";
  const issues = [];
  if (t.length > 60) issues.push(`title ${t.length}`);
  if (d.length > 150) issues.push(`desc ${d.length}`);
  if (issues.length) {
    console.log("FAIL", f, issues.join(", "), "\n ", t, "\n ", d);
    fails++;
  } else {
    console.log("OK", f, `T${t.length}`, `D${d.length}`);
  }
}
process.exit(fails ? 1 : 0);
