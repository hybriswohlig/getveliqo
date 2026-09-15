import { chromium } from "playwright";

const url = process.argv[2] || "http://127.0.0.1:43127";
const out = process.argv[3] || "/tmp/veliqo-full.png";
const width = Number(process.argv[4] || 1440);
const height = Number(process.argv[5] || 900);

const browser = await chromium.launch({
  executablePath: "/usr/local/bin/google-chrome",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage({ viewport: { width, height } });
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1200);
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(`saved ${out}`);
