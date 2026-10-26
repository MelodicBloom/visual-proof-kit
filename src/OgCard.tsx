import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Material} from './Material';
import {Card} from './Card';
import {ProofProps} from './props';
export const OgCard = (p: ProofProps) => {
  const {width, height} = useVideoConfig();
  return <AbsoluteFill><Material p={p} t={0.12} w={width} h={height} /><Card p={p} t={0} scale={1.08} /></AbsoluteFill>;
};
