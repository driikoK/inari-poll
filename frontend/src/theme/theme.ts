import facepaint from 'facepaint';

const colors = {
  title: '#161430',
  background: '#0d0b1e',
  link: 'oklch(0.72 0.22 290)',
  yellow: '#ede824',
  gray: '#252246',
  surface: '#161430',
  surface2: '#1e1b3a',
  surface3: '#252246',
  border: 'rgba(255,255,255,0.07)',
  accent: 'oklch(0.72 0.22 290)',
  text: '#f0eefc',
  textMuted: 'rgba(240,238,252,0.45)',
  violet: 'oklch(0.65 0.22 290)',
  teal: 'oklch(0.7 0.16 185)',
  orange: 'oklch(0.72 0.2 35)',
  orangeLight: 'oklch(0.7 0.1 40)',
  red: 'oklch(0.65 0.22 20)',
  green: 'oklch(0.68 0.18 145)',
};

const font = {
  family: {
    montserrat: '"Space Grotesk", "Inter", sans-serif',
    head: '"Space Grotesk", sans-serif',
    body: '"Inter", sans-serif',
  },
};

export type TColors = keyof typeof colors;

const screens = {
  mobile: '@media(min-width: 320px)',
  tablet: '@media(min-width: 920px)',
  desktop: '@media(min-width: 1120px)',
};

const mq = facepaint([screens.mobile, screens.tablet, screens.desktop]);

const theme = {
  colors,
  font,
  screens,
  mq,
};

export default theme;

export type ThemeType = typeof theme;
