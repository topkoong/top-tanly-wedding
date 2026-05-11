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
  {
    name: "mobile-390",
    width: 390,
    height: 1200,
    isMobile: true,
  },
  {
    name: "tablet-768",
    width: 768,
    height: 1200,
    isMobile: false,
  },
  {
    name: "desktop-1440",
    width: 1440,
    height: 1200,
    isMobile: false,
  },
];

async function waitForPageToSettle(page) {
  // Wait for fonts.
  await page.evaluate(async () => {
    if (document.fonts) {
      await document.fonts.ready;
    }
  });

  // Scroll through the whole page to trigger lazy loading / fade-in sections.
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 500;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 80);
    });
  });

  // Return to top before screenshot.
  await page.evaluate(() => window.scrollTo(0, 0));

  // Let layout settle after scroll.
  await page.waitForTimeout(800);
}

for (const viewport of viewports) {
  fs.mkdirSync(`docs/screenshots/${viewport.name}`, { recursive: true });
}

const browser = await chromium.launch();

for (const viewport of viewports) {
  const context = await browser.newContext({
    viewport: {
      width: viewport.width,
      height: viewport.height,
    },
    deviceScaleFactor: 1,
    isMobile: viewport.isMobile,
  });

  const page = await context.newPage();

  // Disable animations/transitions to avoid half-rendered screenshots.
  await page.addStyleTag({
    content: `
      *,
      *::before,
      *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        scroll-behavior: auto !important;
      }
    `,
  });

  for (const route of routes) {
    const url = `${baseUrl}${route.path}`;
    const outputPath = `docs/screenshots/${viewport.name}/${route.name}.png`;

    console.log(`Capturing ${viewport.name}: ${url}`);

    await page.goto(url, {
      waitUntil: "networkidle",
      timeout: 60000,
    });

    await waitForPageToSettle(page);

    await page.screenshot({
      path: outputPath,
      fullPage: true,
    });
  }

  await context.close();
}

await browser.close();

console.log("Done. Full-page screenshots saved under docs/screenshots/");
