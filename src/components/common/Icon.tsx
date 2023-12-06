/**
 * @autor Jose Carlos Gonzalez Hernandez <jose.carlos9123@gmail.com>
 *  *
 * 
*/
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { forwardRef } from 'react'

export type iconVariants = 'default'

const mainContainerStyle = css`
cursor:pointer;
filter: invert(42%) brightness(119%) contrast(119%);
&:hover {
  filter: none !important;
}
`
export interface iconProps extends React.HTMLAttributes<HTMLDivElement> {
    img?: React.ReactNode
    variant?: iconVariants
}

const Icon: React.ForwardRefRenderFunction<
    HTMLDivElement,
    iconProps
> = (
    {
        img,
        variant = 'default',
        ...rest
    }: iconProps,
) => {

        return (
            <div css={mainContainerStyle} {...rest} >
                {img}
            </div>
        )
    }

export { Icon }