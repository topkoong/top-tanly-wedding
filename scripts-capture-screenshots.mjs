import { chromium } from "playwright";
import fs from "fs";

const baseUrl =
  process.env.BASE_URL || "https://topkoong.github.io/top-tanly-wedding";

const routes = [
  { name: "home", path: "/" },
  { name: "schedule", path: "/schedule/" },
  { name: "venue", path: "/venue/" },
  { name: "gallery", path: "/gallery/" },
  { name: "faq", path: "/faq/" },
  { name: "line", path: "/line/" },

  { name: "en-home", path: "/en/" },
  { name: "en-schedule", path: "/en/schedule/" },
  { name: "en-venue", path: "/en/venue/" },
  { name: "en-gallery", path: "/en/gallery/" },
  { name: "en-faq", path: "/en/faq/" },
  { name: "en-line", path: "/en/line/" },
];

const viewports = [
  { name: "mobile", width: 390, height: 1200 },
  { name: "tablet", width: 768, height: 1200 },
  { name: "desktop", width: 1440, height: 1200 },
];

for (const viewport of viewports) {
  fs.mkdirSync(`docs/screenshots/${viewport.name}`, { recursive: true });
}

const browser = await chromium.launch();

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport: {
      width: viewport.width,
      height: viewport.height,
    },
    deviceScaleFactor: 1,
  });

  for (const route of routes) {
    const url = `${baseUrl}${route.path}`;
    const outputPath = `docs/screenshots/${viewport.name}/${route.name}.png`;

    console.log(`Capturing ${viewport.name}: ${url}`);

    await page.goto(url, {
      waitUntil: "networkidle",
      timeout: 60000,
    });

    await page.screenshot({
      path: outputPath,
      fullPage: true,
    });
  }

  await page.close();
}

await browser.close();

console.log("Done. Screenshots saved under docs/screenshots/");
