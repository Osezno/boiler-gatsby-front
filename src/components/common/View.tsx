/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { forwardRef } from 'react'
  
export type ContainerVariants = 'span' | 'ul' | 'head' | 'section' | 'article' | 'div' | 'li'
const element = {
  div     : 'div',
  ul      : 'ul',
  li      : 'li',
  head    : 'head',  
  span    : 'span',
  section : 'section',  
  article : 'article'
}

export interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  variant?: ContainerVariants
  ref?: React.Ref<HTMLDivElement>
  // component?: (props: ViewProps) => JSX.Element
}

const ViewRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ViewProps
> = (
  {
    children,
    variant = 'div',
    ...rest
    // component,
  }: ViewProps,
  ref: React.Ref<HTMLDivElement>
) => {
  // const Component = component || element[variant]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = element[variant]

  return (
    <Component {...rest} ref={ref}>
      {children}
    </Component>
  )
}

export const View: React.ComponentType<ViewProps> = forwardRef(ViewRef)
