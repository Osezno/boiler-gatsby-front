
type PaletteItem = {
  lightest: string;
  light: string;
  base: string;
  dark: string;
};

export type PaletteType = {
  gray:   PaletteItem;
  blue:   PaletteItem;
  red:    PaletteItem;
  orange: PaletteItem;
  yellow: PaletteItem;
  green:  PaletteItem;
  violet: PaletteItem;
  cyan:   PaletteItem;
  pink:   PaletteItem;
  black: PaletteItem;
  white: PaletteItem;
};

/**
 * Generate a palette from scales.
 *
 * `light` is typically used in dark mode for things like
 *  outline buttons, ghost buttons, etc.
 *
 * `base` is typically used for buttons, avatar colors, etc.
 *
 * @param scales
 */

function defaultGeneratePalette(): PaletteType {
  return {
    black: {
      lightest:'',
      light:'',
      base:'#000',
      dark:''
    },
    white: {
      lightest:'',
      light:'',
      base:'#fff',
      dark:''
    },
    gray: {
      lightest:'',
      light:'#e5e5e5',
      base:'#e5e5e5',
      dark:''
    },
    blue: {
      lightest:'',
      light:'',
      base:'',
      dark:''
    },
    red: {
      lightest: '',
      light: '',
      base: '',
      dark: ''
    },
    orange: {
      lightest: '',
      light: '',
      base: '',
      dark: ''
    },
    yellow: {
      lightest:'',
      light:'',
      base:'',
      dark:''
    },
    green: {
      lightest: '',
      light: '',
      base: '',
      dark: ''
    },
    violet: {
      lightest: '',
      light: '',
      base: '#8350ed',
      dark: ''
    },
    pink: {
      lightest:'',
      light: '',
      base: '',
      dark: ''
    },
    cyan: {
      lightest:'',
      light: '',
      base:'#c0f2f3',
      dark: ''
    }
  }
}


export const colors = defaultGeneratePalette()
