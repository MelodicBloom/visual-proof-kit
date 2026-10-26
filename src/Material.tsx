import React from 'react';
import {ProofProps} from './props';
// Shared "material" layer: grain + thin-film iridescent sheen + soft paper fibers.
// t is a loop phase in [0,1); everything is driven by sin/cos(2πt) so frame 0 == last frame + 1.
export const Material: React.FC<{p: ProofProps; t: number; w: number; h: number}> = ({p, t, w, h}) => {
  const [base, a, b, ink] = p.palette;
  const TAU = Math.PI * 2;
  const blobs = [0, 1, 2].map((i) => {
    const ph = TAU * t + (i * TAU) / 3;
    return {x: w * (0.5 + 0.28 * Math.cos(ph)), y: h * (0.5 + 0.22 * Math.sin(ph * 1 + i)), r: Math.min(w, h) * (0.45 + 0.06 * Math.sin(ph)), c: [a, b, ink][i]};
  });
  const hue = Math.round(360 * t);
  return (
    <svg width={w} height={h} style={{position: 'absolute', inset: 0}}>
      <defs>
        <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={3} /><feColorMatrix values="0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0.18 0" /></filter>
        <filter id="blur"><feGaussianBlur stdDeviation={60} /></filter>
        <filter id="fiber"><feTurbulence type="turbulence" baseFrequency="0.004 0.08" numOctaves="3" seed={9} /><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0" /></filter>
        <linearGradient id="film" gradientTransform={`rotate(${25 + 20 * Math.sin(TAU * t)})`}>
          <stop offset="0" stopColor={`hsl(${hue},90%,70%)`} stopOpacity="0.0" />
          <stop offset="0.45" stopColor={`hsl(${(hue + 120) % 360},90%,75%)`} stopOpacity="0.22" />
          <stop offset="0.55" stopColor={`hsl(${(hue + 220) % 360},90%,75%)`} stopOpacity="0.22" />
          <stop offset="1" stopColor={`hsl(${(hue + 300) % 360},90%,70%)`} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill={base} />
      <g filter="url(#blur)" opacity={0.55}>{blobs.map((bl, i) => <circle key={i} cx={bl.x} cy={bl.y} r={bl.r * 0.6} fill={bl.c} />)}</g>
      <rect width={w} height={h} fill="url(#film)" style={{mixBlendMode: 'screen'}} />
      <rect width={w} height={h} filter="url(#fiber)" />
      <rect width={w} height={h} filter="url(#grain)" style={{mixBlendMode: 'overlay'}} />
    </svg>
  );
};
