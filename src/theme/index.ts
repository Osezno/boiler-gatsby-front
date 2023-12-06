import { shadows } from './shadows'
import { colors } from './colors'
import { breakpoints, BreakPointType, generateMediaQueries } from './breakpoints'

const fontSizes = {
  0: '0.625rem',
  1: '0.75rem',
  2: '0.875rem',
  3: '1rem',
  4: '1.25rem',
  5: '1.5rem',
  6: '2.125rem',
  7: '3rem',
  8: '3.75rem',
  9: '6rem'
}

const lineHeights = {
  heading: '8.4rem',
  heading2: '6.825rem',
  heading3: '4.2rem',
  heading4: '2.975rem',
  heading5: '2.1rem',
  heading6: '1.75rem',
  body: 1.5,
  paragraph: '1.575rem',
  paragraph2: '1.4rem',
  button: '1.4rem',
  caption: '1.05rem',
  caption2: '0.875rem',
  subtitle: '1.925rem',
  subtitle2: '1.75rem',
  label: '1.225rem',
  label2: '1.05rem'
}
const fonts = {
  base: 'Grotta',
  secondary: 'Lato',
}

const spacer = 1

const spaces = {
  none: 0,
  xs: `${spacer * 0.25}rem`,
  sm: `${spacer * 0.5}rem`,
  md: `${spacer}rem`,
  lg: `${spacer * 1.5}rem`,
  xl: `${spacer * 3}rem`
}

export const Theme = {
    colors,
    breakpoints,
    mediaQueries: generateMediaQueries(breakpoints),
    shadows,
    fontSizes,
    fonts,
    lineHeights,
    spaces
  }

export default Theme