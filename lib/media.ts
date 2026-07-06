import { css } from 'styled-components';

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
} as const;

type SizeLabel = keyof typeof sizes;
type CssArgs = Parameters<typeof css>;
type MediaFn = (...args: CssArgs) => ReturnType<typeof css>;

export const media = (Object.keys(sizes) as SizeLabel[]).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args: CssArgs) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {} as Record<SizeLabel, MediaFn>);

export default media;
