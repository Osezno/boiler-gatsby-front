/**@jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import Theme from '../../theme'

export type CardDivVariant =
  | 'div'

const element: {[key in CardDivVariant]: string } = {
  div: 'div'
}

export type TRounded = 'xs' | 'md' | 'none'

export type CardVariantType =
  | 'simulator'
  | 'carousel'
  | 'press'
  | 'requirements'
  | 'steps'
  | 'collider'
  | 'post'
  | 'callToAction'
  | 'resultSimulation'
  | 'default'

export const Card : React.FC<CardProps> = ({
  variant,
  bgColor,
  rounded = 'xs',
  children,
  component,
  tag = 'div',
  shadow = true,
  ...other
}:CardProps): JSX.Element => {


  const Component = component || element[tag]

  const mainContainerStyle = css`
    background-color: ${Theme.colors.white.base };
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
    padding: 3%;
    cursor:pointer;
    box-shadow: ${shadow ? Theme.shadows.default:'none'};
    &:hover {
      background-color: ${Theme.colors.cyan.base };
    }
  `

  return (
    <Component
      css={mainContainerStyle}
      {...other}
    >
      { children}
    </Component>
  )
}

export type CardProps = {
  onClick    ?: React.MouseEventHandler 
  tag        ?: CardDivVariant
  shadow     ?: boolean
  variant    ?: CardVariantType
  bgColor    ?: string
  rounded    ?: TRounded 
  children   ?: React.ReactNode
  component  ?: React.FC<CardProps>
} 
