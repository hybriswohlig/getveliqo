# Liquid-Glass Cursor — Design

## Goal

Add a premium, lime-tinted liquid-glass cursor treatment to the homepage after the scroll-driven hero. It should give the dark content sections a subtle responsive depth without changing the hero sequence that is being worked on separately.

## Scope

- The treatment activates once the pointer enters the communication section (`#one-voice`) and remains available through the homepage's following content sections.
- The hero stays entirely untouched: no component, scroll logic, layout, or cursor behavior is altered there.
- It is enabled only for fine pointers with hover capability. Touch devices retain the native experience.
- Users requesting reduced motion receive no custom cursor treatment.

## Interaction design

- Render two fixed, non-interactive layers: a crisp 40 px lime ring centered on the native cursor and a 160 px ambient glass lens behind content and above section backgrounds.
- The lens follows the pointer with a small eased delay rather than tracking it rigidly.
- The ring tracks the pointer directly. The ambient lens is scaled modestly down on smaller desktop viewports and follows with a small eased delay.
- On dark sections, the lens uses a transparent lime wash, low-opacity backdrop blur, a faint light rim, and a restrained outer glow. On light sections, it switches to a near-transparent neutral glass material with only a lime edge, so it never muddies the page.
- When the pointer enters the eligible content area, fade and scale the lens in; fade it out when it returns to the hero or leaves the document.
- Over explicit interactive controls, increase the rim/glow slightly. Controls themselves do not move, scale, or change their existing event behavior.

## Architecture

- Create a small client-side `LiquidGlassCursor` component that owns pointer listeners, media-query eligibility, interpolation, and visibility state.
- Mount it at the homepage composition level, separate from `HeroSection`, so the hero's parallel work remains isolated.
- Identify eligible ranges with `data-liquid-glass-surface="dark|light"` attributes on the existing homepage sections rather than modifying the scroll scene.
- Use CSS custom properties for cursor position and intensity; CSS owns the visual rendering. JavaScript only updates state and coordinates via `requestAnimationFrame`.
- Add shared CSS only for the lens and media-query/reduced-motion fallback.

## Layering and accessibility

- `pointer-events: none` prevents interference with clicks, text selection, hover state, and scrolling.
- The lens stays in a dedicated fixed layer with a deliberately low-opacity material; it never accepts pointer events or changes the visual state of text and controls.
- It is `aria-hidden` and absent on coarse pointers and with `prefers-reduced-motion: reduce`.
- Keyboard navigation receives no synthetic effect; native focus treatment remains unchanged.

## Verification

- Confirm the hero appearance and scroll animation are unchanged before section 2.
- Confirm the lens enters smoothly at `#one-voice`, follows without jank, and disappears above it/on window blur.
- Verify buttons, links, selection, and navigation remain operable.
- Check desktop widths, mobile/touch fallback, and reduced-motion behavior.
