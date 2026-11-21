
function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function PostCover({ seed, className }: { seed: string; className?: string }) {
  const rnd = mulberry32(hash(seed));
  const dots = Array.from({ length: 34 }, () => ({
    x: rnd() * 400,
    y: rnd() * 240,
    r: rnd() * 5 + 1.5,
    stain: rnd() < 0.16,
  }));
  const links: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const d = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
      if (d < 70) links.push({ x1: dots[i].x, y1: dots[i].y, x2: dots[j].x, y2: dots[j].y });
    }
  }
  return (
    <svg viewBox="0 0 400 240" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="240" fill="#eef2ef" />
      <g stroke="#12685e" strokeOpacity="0.18" strokeWidth="1">
        {links.map((l, i) => (
          <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
        ))}
      </g>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.stain ? "#c0426a" : "#12685e"} fillOpacity={d.stain ? 0.55 : 0.4} />
      ))}
    </svg>
  );
}
