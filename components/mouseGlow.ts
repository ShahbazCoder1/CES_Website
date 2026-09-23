import type { MouseEvent } from "react";

/* Cursor-tracking spotlight: the card root handles the move event,
   writes pointer coordinates as CSS custom properties, and the
   overlay (glowOverlay) paints a soft radial glow that follows. */

export function mouseGlow(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();

  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export const glowOverlay =
  "pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(240px_circle_at_var(--mx,50%)_var(--my,50%),rgba(var(--glow-rgb,111,168,255),0.15),transparent_70%)]";
