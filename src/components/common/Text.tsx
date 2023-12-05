/** @jsx jsx */

import * as React from 'react'
import { jsx, css, SerializedStyles } from '@emotion/react'
import Theme from '../../theme'

const newfontSizes: newFontType = {
  button:{
    large:['1.25rem','1.75rem'],
    medium:['1rem','1.5rem'],
    small:['.75rem','1rem']
  },
  label:{
    large:['1rem', '1.5rem'],
    medium:['1rem', '1.5rem'],
    small:['.75rem', '1rem']
  },
  caption:['.75rem', '1rem'],
  paragraph:{
    large:['1.25rem','1.75rem'],
    medium:['1rem','1.5rem'],
    small:['1rem','1.5rem']
  },
  display:{
    desktop:{
      large:['5rem','6rem'],
      medium:['3.75rem','4.5rem'],
      small:['3.75rem','4.5rem']
    },
    mobile:{
      large:['3.75rem','4.5rem'],
      medium:['2.5rem','3rem'],
      small:['2.5rem','3rem']
    }
  }
}

const newHeadings = {
  h4:{
    desktop:['1.5rem','2rem'],
    mobile:['1.25rem','1.75rem']
  },
  h3:{
    desktop:['2rem','2.5rem'],
    mobile:['1.5rem','2rem']
  },
  h2:{
    desktop:['2.75rem','3.5rem'],
    mobile:['1.75rem','2.25rem']
  },
  h1:{
    desktop:['3.25rem','4.25rem'],
    mobile:['2rem','2.5rem']
  }
}


export const getVariantsStyles = (variant: TextVariants2,
  size: sizeVariants)
: SerializedStyles | null => {
  switch (variant) {
  case 'display':
    const { desktop, mobile } = newfontSizes.display
    return css({
      fontSize:mobile[size][0],
      lineHeight:mobile[size][1],
      letterSpacing: '0em',
      [Theme.mediaQueries.lg]: {
        fontSize:desktop[size][0],
        lineHeight:desktop[size][1]
      }
    })
  case 'paragraph':
    const { paragraph } = newfontSizes
    return css({
      fontFamily: Theme.fonts.secondary,
      fontSize: paragraph[size][0],
      lineHeight: paragraph[size][1],
      letterSpacing: '0em'
    })
  
  case 'h1':
    const { h1 } = newHeadings
    return css({
      fontSize:h1.mobile[0],
      lineHeight: h1.mobile[1],
      letterSpacing: '0em',
      [Theme.mediaQueries.lg]: {
        fontSize:h1.desktop[0],
        lineHeight:h1.desktop[1]
      }
    })
  case 'h2':
    const { h2 } = newHeadings
    return css({
      fontSize:h2.mobile[0],
      lineHeight: h2.mobile[1],
      letterSpacing: '0em',
      [Theme.mediaQueries.lg]: {
        fontSize:h2.desktop[0],
        lineHeight:h2.desktop[1]
      }
    })
  case 'h3':
    const { h3 } = newHeadings
    return css({
      fontSize:h3.mobile[0],
      lineHeight: h3.mobile[1],
      letterSpacing: '0em',
      [Theme.mediaQueries.lg]: {
        fontSize:h3.desktop[0],
        lineHeight:h3.desktop[1]
      }
    })
  case 'h4':
    const { h4 } = newHeadings
    return css({
      fontSize:h4.mobile[0],
      lineHeight: h4.mobile[1],
      letterSpacing: '0em',
      [Theme.mediaQueries.lg]: {
        fontSize:h4.desktop[0],
        lineHeight:h4.desktop[1]
      }
    })
  case 'caption':
    const { caption } = newfontSizes
    return css({
      fontFamily:Theme.fonts.secondary,
      letterSpacing: '0.02em',
      fontSize:caption[0],
      lineHeight:caption[1]
    })
  case 'label':
    const { label } = newfontSizes
    return css({
      fontFamily:Theme.fonts.secondary,
      textTransform: 'uppercase',
      fontSize:label[size][0],
      lineHeight:label[size][1],
      letterSpacing: '0.01em'
    })
  case 'button':
    const { button } = newfontSizes
    return css({
      fontFamily:Theme.fonts.secondary,
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize:button[size][0],
      lineHeight:button[size][1],
      letterSpacing: '0.02em'
    })
  
  }

  return null
}

export type TextVariants2 =
  | 'hidden'
  | 'paragraph'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1'
  | 'display'
  | 'button'
  | 'caption'
  | 'label'

export type TagVariants2 = 
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'li'

export type sizeVariants = 
  | 'large'
  | 'medium'
  | 'small'

export type sizeObj = {[key in sizeVariants]: string[]}
export type newFontType = {
  button:sizeObj,
  label:sizeObj,
  caption: string[],
  paragraph:sizeObj,
  display:{
    desktop:sizeObj,
    mobile:sizeObj
  }
}
export type weightVariants = 
  | 'regular'
  | 'bold'
  | 'medium'

const element: { [key in TextVariants2]: string } = {
  display: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  paragraph: 'p',
  hidden: 'span',
  button: 'span',
  caption: 'p',
  label: 'p'
}

const newWeights = {
  'regular': 400,
  'medium': 500,
  'bold': 700
}

const basicStyles = (weight: weightVariants) => ({
  base: css({
    boxSizing: 'border-box',
    margin: 0,
    fontWeight: newWeights[weight],
    lineHeight: Theme.lineHeights.body,
    fontFamily: Theme.fonts.base,
    color: Theme.colors.black.base,
    fontSize: Theme.fontSizes[1],
    WebkitFontSmoothing: 'antialiased',
    WebkitTextSizeAdjust: 'none'
  }),
  noGutter: css({
    marginBottom: 0
  }),
  noWrap: css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }),
  left: css({
    textAlign: 'left'
  }),
  right: css({
    textAlign: 'right'
  }),
  center: css({
    textAlign: 'center'
  }),
  justify: css({
    textAlign: 'justify'
  })
})

export interface TextsProps extends React.HTMLAttributes<HTMLElement> {
  /** The text style */
  variant?: TextVariants2;
  tag?: TagVariants2;
  size?: sizeVariants;
  weight?: weightVariants;
  /** Use text-overflow: ellipsis styling when set to false */
  wrap?: boolean;
  /** Use muted colors */
  muted?: boolean;
  /** Set to false to remove any bottom margins */
  gutter?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  justify?: boolean;
  component?: React.FC<TextsProps>;
}

export const Text: React.FC<TextsProps> = ({
  variant = 'paragraph',
  size = 'large',
  weight = 'medium',
  tag,
  wrap = true,
  gutter = true,
  muted,
  component,
  left,
  right,
  center,
  justify,
  ...other
}: TextsProps) => {
  const Component = component ? component : (!tag ? element[variant] : tag)
 

  const variantStyles = React.useMemo(() => getVariantsStyles(variant, size), [
    variant,
    size
  ])

  const styles = React.useMemo(() => basicStyles(weight), [weight])

  return <Component
    css={[
      styles.base,
      !wrap && styles.noWrap,
      variantStyles,
      !gutter && styles.noGutter,
      left && styles.left,
      right && styles.right,
      center && styles.center,
      justify && styles.justify
    ]}
    {...other}
  />
}
