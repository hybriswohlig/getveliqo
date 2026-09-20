# Liquid-Glass Cursor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a desktop-only liquid-glass cursor treatment to the homepage after the hero without changing hero behavior.

**Architecture:** A narrow client component owns browser events, media-query eligibility, and animation-frame updates. It renders a direct lime cursor ring plus an eased ambient lens; CSS defines their material and adapts it to dark and light sections. The server-rendered homepage only mounts this isolated component.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Playwright.

## Global Constraints

- Start only when the pointer enters `#one-voice`; leave `HeroSection` and hero scroll code untouched.
- Render only for `hover: hover` and `pointer: fine`; render nothing with `prefers-reduced-motion: reduce`.
- Keep the cursor layers non-interactive, low-opacity, and in a dedicated fixed layer that never alters content layout or input handling.
- Keep the native cursor visible; the 40 px lime ring tracks it directly and the 160 px ambient lens eases behind it.
- Use a lime-tinted lens on dark sections and near-neutral glass on light sections.

---

### Task 1: Add a focused browser regression test

**Files:**
- Create: `playwright.config.ts`
- Create: `tests/liquid-glass-cursor.spec.ts`

**Interfaces:**
- Consumes: the homepage at `/` and the future `[data-liquid-glass-cursor]` element.
- Produces: an executable browser check that proves the cursor is absent in the hero and activates in the communication section.

- [x] **Step 1: Write the failing test**

```ts
import { expect, test } from "playwright/test";

test("activates the liquid-glass cursor after the hero", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("[data-liquid-glass-cursor]")).toHaveCount(0);

  await page.locator("[data-scroll-range]").hover({ position: { x: 320, y: 240 } });
  await expect(page.locator("[data-liquid-glass-cursor]")).toHaveCount(0);

  await page.locator("#one-voice").scrollIntoViewIfNeeded();
  await page.locator("#one-voice").hover({ position: { x: 320, y: 240 } });

  await expect(page.locator("[data-liquid-glass-cursor]")).toBeVisible();
  await expect(page.locator("[data-liquid-glass-cursor-ring]")).toBeVisible();
  await expect(page.locator("[data-liquid-glass-cursor-lens]")).toBeVisible();
});

test.use({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });

test("does not render on touch devices", async ({ page }) => {
  await page.goto("/");
  await page.locator("#one-voice").scrollIntoViewIfNeeded();
  await page.mouse.move(320, 240);

  await expect(page.locator("[data-liquid-glass-cursor]")).toHaveCount(0);
});
```

- [x] **Step 2: Configure Playwright and verify red**

```ts
import { defineConfig } from "playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: { baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3001" },
  webServer: process.env.PLAYWRIGHT_BASE_URL ? undefined : { command: "npm run dev -- --port 3001", port: 3001, reuseExistingServer: true },
});
```

Run: `npx playwright test tests/liquid-glass-cursor.spec.ts` or, when another local Next instance is active, `PLAYWRIGHT_BASE_URL=http://localhost:<port> npx playwright test tests/liquid-glass-cursor.spec.ts`

Expected: FAIL because `[data-liquid-glass-cursor]` does not exist.

### Task 2: Implement the isolated cursor component

**Files:**
- Create: `components/home/liquid-glass-cursor.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `components/home/communication-section.tsx`
- Modify: `components/home/intro-section.tsx`
- Modify: `components/home/services/services-section.tsx`
- Modify: `components/layout/site-footer.tsx`

**Interfaces:**
- Consumes: `data-liquid-glass-surface` values, the `#one-voice` activation boundary, and the user’s pointer/media preferences.
- Produces: `LiquidGlassCursor`, mounted within the homepage but independent of `HeroSection`.

- [x] **Step 1: Implement eligibility and animation-frame ownership**

```tsx
"use client";

export function LiquidGlassCursor() {
  // Subscribe only when both media queries permit it. After the first eligible pointer event,
  // find the nearest data-liquid-glass-surface, then write x/y and material variables in one rAF loop.
  return null;
}
```

- [x] **Step 2: Render two decorative layers**

```tsx
return (
  <div data-liquid-glass-cursor aria-hidden="true" className="liquid-glass-cursor">
    <span data-liquid-glass-cursor-lens className="liquid-glass-cursor__lens" />
    <span data-liquid-glass-cursor-ring className="liquid-glass-cursor__ring" />
  </div>
);
```

- [x] **Step 3: Add CSS material and fallbacks**

```css
.liquid-glass-cursor { pointer-events: none; position: fixed; inset: 0; z-index: 20; }
.liquid-glass-cursor__lens { backdrop-filter: blur(12px) saturate(1.15); }
@media (hover: none), (pointer: coarse), (prefers-reduced-motion: reduce) {
  .liquid-glass-cursor { display: none; }
}
```

- [x] **Step 4: Mount it without changing the hero**

```tsx
<main>
  <HeroSection />
  <LiquidGlassCursor />
  <CommunicationSection />
</main>
```

- [x] **Step 5: Mark each existing post-hero surface with its material**

```tsx
<section id="one-voice" data-liquid-glass-surface="dark" />
<section id="ueber-uns" data-liquid-glass-surface="light" />
<section id="services" data-liquid-glass-surface="dark" />
<footer id="kontakt" data-liquid-glass-surface="light" />
```

- [x] **Step 6: Verify green**

Run: `npx playwright test tests/liquid-glass-cursor.spec.ts`

Expected: PASS with one passing test.

### Task 3: Validate rendering and quality gates

**Files:**
- Verify: `components/home/liquid-glass-cursor.tsx`
- Verify: `app/page.tsx`
- Verify: `app/globals.css`

**Interfaces:**
- Consumes: the completed cursor component and browser regression test.
- Produces: evidence that the feature builds, remains isolated from the hero, and is mechanically clean.

- [x] **Step 1: Run static checks**

Run: `npm run lint && npm run build`

Expected: both commands exit with status 0.

- [x] **Step 2: Inspect desktop and mobile behavior**

Run: `npx playwright test tests/liquid-glass-cursor.spec.ts`

Expected: the desktop activation test and the touch-device fallback test pass.

- [x] **Step 3: Run the UI detector**

Run: `node /Users/dariushk/.agents/skills/impeccable/scripts/detect.mjs --json components/home/liquid-glass-cursor.tsx app/page.tsx app/globals.css`

Expected: no unresolved high-severity detector finding.

## Plan Self-Review

- Spec coverage: Tasks 1–2 cover the section boundary, two-layer visual treatment, native cursor preservation, dark/light material, accessibility and hero isolation. Task 3 covers build, desktop/touch browser behavior, and the detector.
- Placeholder scan: no unresolved implementation placeholder is present; code snippets establish the component, selectors, test contract, and commands.
- Type consistency: the test selectors match the two layer attributes rendered by `LiquidGlassCursor`; the homepage imports and mounts that exact component.
