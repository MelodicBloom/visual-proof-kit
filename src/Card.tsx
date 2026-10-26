import React from 'react';
import {ProofProps} from './props';
export const Card: React.FC<{p: ProofProps; t: number; scale?: number}> = ({p, t, scale = 1}) => {
  const [base, a, b, ink] = p.palette;
  const TAU = Math.PI * 2;
  const tilt = 3 * Math.sin(TAU * t), lift = 6 * Math.cos(TAU * t);
  const sheen = 50 + 40 * Math.sin(TAU * t);
  const host = p.homepage.replace(/^https?:\/\//, '').replace(/\/$/, '');
  return (
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"DejaVu Sans", "Inter", system-ui, sans-serif'}}>
      <div style={{width: 900 * scale, padding: `${56 * scale}px ${64 * scale}px`, borderRadius: 28 * scale, transform: `perspective(1400px) rotateX(${tilt}deg) rotateY(${-tilt * 1.4}deg) translateY(${lift}px)`,
        background: `linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04)), radial-gradient(circle at ${sheen}% 0%, ${a}55, transparent 60%)`,
        border: '1.5px solid rgba(255,255,255,0.28)', boxShadow: `0 ${30 * scale}px ${80 * scale}px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -${10 * scale}px ${30 * scale}px ${b}33`, backdropFilter: 'blur(18px)', color: ink}}>
        <div style={{fontSize: 20 * scale, letterSpacing: 4 * scale, textTransform: 'uppercase', opacity: 0.75}}>MelodicBloom /</div>
        <div style={{fontSize: 84 * scale, fontWeight: 800, lineHeight: 1.02, marginTop: 8 * scale, backgroundImage: `linear-gradient(${90 + 60 * Math.sin(TAU * t)}deg, ${ink}, ${a}, ${b}, ${ink})`, WebkitBackgroundClip: 'text', color: 'transparent'}}>{p.repo}</div>
        <div style={{fontSize: 30 * scale, lineHeight: 1.3, marginTop: 20 * scale, opacity: 0.92, maxWidth: 780 * scale}}>{p.tagline}</div>
        <div style={{marginTop: 32 * scale, display: 'inline-flex', alignItems: 'center', gap: 12 * scale, padding: `${10 * scale}px ${18 * scale}px`, borderRadius: 999, background: `${base}cc`, border: `1px solid ${a}88`, fontSize: 22 * scale}}>
          <span style={{width: 12 * scale, height: 12 * scale, borderRadius: 99, background: b, boxShadow: `0 0 ${12 + 8 * Math.sin(TAU * t * 2)}px ${b}`}} />live · {host}
        </div>
      </div>
    </div>
  );
};
