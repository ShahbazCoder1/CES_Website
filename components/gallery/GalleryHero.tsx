interface GalleryHeroProps {
  totalBooks?: number;
}

export default function GalleryHero({ totalBooks = 4 }: GalleryHeroProps) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
      {/* Section Label */}
      <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] text-[var(--ces-text-secondary)]">
        PHOTO ALBUMS
      </p>

      {/* Main Headline */}
      <h1 className="text-3xl font-medium tracking-tight text-[var(--ces-text-primary)] sm:text-5xl lg:text-6xl">
        CES Gallery
      </h1>

      {/* Sub-caption */}
      <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-[var(--ces-text-muted)] sm:text-base">
        Browse photos from our events, workshops, hackathons, and competitions.
        <br />
        Choose a book from the shelf to start exploring.
      </p>

      {/* Simple metadata indicator */}
      <div className="mt-5 flex items-center gap-3 font-mono text-xs text-[var(--ces-text-secondary)]/80">
        <span>{totalBooks} Books</span>
        <span className="text-white/20">•</span>
        <span>2024–2026</span>
      </div>
    </div>
  );
}
