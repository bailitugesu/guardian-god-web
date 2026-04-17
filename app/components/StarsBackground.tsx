"use client";

const STARS = Array.from({ length: 80 }, (_, i) => {
  // deterministic pseudo-random from index
  const x = ((i * 2654435761) % 10000) / 100;
  const y = ((i * 2246822519) % 10000) / 100;
  const size = (((i * 1234567891) % 100) / 100) * 2 + 1;
  const opacity = (((i * 987654321) % 100) / 100) * 0.5 + 0.2;
  const duration = (((i * 1111111111) % 100) / 100) * 3 + 2;
  return { x, y, size, opacity, duration };
});

export default function StarsBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {STARS.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${(i * 0.1) % 3}s`,
          }}
        />
      ))}
    </div>
  );
}
