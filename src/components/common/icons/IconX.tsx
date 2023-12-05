/** @jsx jsx */
/** Do not edit this file directly. Edit the template in scripts/icon-template.ejs **/
import { jsx } from '@emotion/core'



export const IconX = ({
  color: providedColor = "",
  size: providedSize = 'md',
}): JSX.Element => {
  
  const size = providedSize
  const color = providedColor 

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      height={size}
      width={size}
    >
      <line x1='18' y1='6'
        x2='6' y2='18' />
      <line x1='6' y1='6'
        x2='18' y2='18' />
    </svg>
  )
}
