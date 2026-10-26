import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {Material} from './Material';
import {Card} from './Card';
import {ProofProps} from './props';
export const HeroLoop = (p: ProofProps) => {
  const f = useCurrentFrame(); const {durationInFrames, width, height} = useVideoConfig();
  const t = f / durationInFrames; // seamless: t=1 ≡ t=0
  return <AbsoluteFill><Material p={p} t={t} w={width} h={height} /><Card p={p} t={t} /></AbsoluteFill>;
};
