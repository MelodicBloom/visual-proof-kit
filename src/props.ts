export type ProofProps = {
  repo: string;          // e.g. "wildfire-iridescent"
  tagline: string;       // one-line value prop
  homepage: string;      // live demo URL
  palette: [string, string, string, string]; // base, accent A, accent B, ink
};
export const defaultProps: ProofProps = {
  repo: 'visual-proof-kit',
  tagline: 'Tactile hero loops and OG cards for every MelodicBloom repo',
  homepage: 'https://github.com/MelodicBloom/visual-proof-kit',
  palette: ['#14121a', '#ff9ecf', '#7fe3d6', '#f4efe6'],
};
