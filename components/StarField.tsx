interface Star {
  left: number;
  top: number;
  size: number;
  opacity: number;
}

const generateField = (
  count: number,
  brighten: boolean,
  seed: number
): Star[] => {
  return Array.from({ length: count }, (_, i) => {
    const n1 = Math.abs(Math.sin(seed + i * 12.9898)) * 10000;
    const x = Number(((n1 - Math.floor(n1)) * 100).toFixed(2));

    const n2 = Math.abs(Math.sin(seed + i * 78.233)) * 10000;
    const y = Number(((n2 - Math.floor(n2)) * 100).toFixed(2));

    const n3 = Math.abs(Math.sin(seed + i * 45.164)) * 10000;
    const s = Number((((n3 - Math.floor(n3)) * 1.5) + 0.4).toFixed(2));

    const n4 = Math.abs(Math.sin(seed + i * 93.371)) * 10000;
    const o = Number((((n4 - Math.floor(n4)) * 0.5 + 0.15) * (brighten ? 1.3 : 1)).toFixed(2));

    return {
      left: x,
      top: y,
      size: s,
      opacity: o,
    };
  });
};

const starsTop = generateField(70, false, 1);
const starsBottom = generateField(90, true, 2);

export default function StarField() {

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