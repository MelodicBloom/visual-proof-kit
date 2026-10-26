import {Composition, Still} from 'remotion';
import {HeroLoop} from './HeroLoop';
import {OgCard} from './OgCard';
import {defaultProps} from './props';
export const Root = () => (
  <>
    <Composition id="HeroLoop" component={HeroLoop} durationInFrames={240} fps={30} width={1280} height={720} defaultProps={defaultProps} />
    <Still id="OgCard" component={OgCard} width={1200} height={630} defaultProps={defaultProps} />
  </>
);
