import { chromium } from "@playwright/test";

const widths = [320, 390, 430, 768, 1440];
const base = process.env.QA_URL || "http://localhost:3000";
const browser = await chromium.launch({ headless: true });
const failures = [];
for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(base, { waitUntil: "networkidle" });
  const checks = await page.evaluate((viewportWidth) => ({
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 20,
    h1: Boolean(document.querySelector("h1")),
    image: [...document.images].every((img) => img.complete && img.naturalWidth > 0),
    action: Boolean(document.querySelector('a[href="tel:+14146009705"]')),
    nav: viewportWidth <= 800 ? Boolean(document.querySelector(".menu-button")) : Boolean(document.querySelector(".desktop-nav")),
  }), width);
  for (const [name, pass] of Object.entries(checks)) if (name === "overflow" ? pass : !pass) failures.push(`${width}px: ${name}`);
  await page.close();
}
const meta = await browser.newPage();
await meta.goto(base, { waitUntil: "networkidle" });
const metadata = await meta.evaluate(() => ({ title: document.title, robots: document.querySelector('meta[name="robots"]')?.content, og: document.querySelector('meta[property="og:image"]')?.content }));
if (!metadata.title || !metadata.robots?.includes("noindex") || !metadata.og) failures.push("metadata: title/robots/og");
await browser.close();
if (failures.length) { console.error("QA FAIL", failures.join(", ")); process.exit(1); }
console.log(`QA PASS: ${widths.length} viewports; overflow, images, H1, actions, nav, metadata, robots, and OG verified.`);
