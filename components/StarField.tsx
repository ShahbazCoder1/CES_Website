"use client";

import { useEffect, useState } from "react";

interface Star {
  left: number;
  top: number;
  size: number;
  opacity: number;
}

export default function StarField() {
  const [starsTop, setStarsTop] = useState<Star[]>([]);
  const [starsBottom, setStarsBottom] = useState<Star[]>([]);

  useEffect(() => {
    const field = (
      count: number,
      brighten: boolean
    ): Star[] => {
      return Array.from({ length: count }, () => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const s = Math.random() * 1.5 + 0.4;
        const o =
          (Math.random() * 0.5 + 0.15) *
          (brighten ? 1.3 : 1);

        return {
          left: x,
          top: y,
          size: s,
          opacity: o,
        };
      });
    };

    setStarsTop(field(70, false));
    setStarsBottom(field(90, true));
  }, []);

  return (
    <>
      <div
        id="stars-top"
        className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-[55%]"
      >
        {starsTop.map((star, index) => (
          <div
            key={`top-${index}`}
            style={{
              position: "absolute",
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: "50%",
              background: "#fff",
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div
        id="stars-bottom"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-[55%]"
      >
        {starsBottom.map((star, index) => (
          <div
            key={`bottom-${index}`}
            style={{
              position: "absolute",
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: "50%",
              background: "#fff",
              opacity: star.opacity,
            }}
          />
        ))}
      </div>
    </>
  );
}