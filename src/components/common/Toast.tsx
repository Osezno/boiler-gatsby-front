/**@jsx jsx */
/* import { css, jsx, SerializedStyles,keyframes } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { View } from './View'
import { Text } from './Text'
import { IconX } from './icons'

import Theme from '../../theme'

const colors : colortype ={
  'success':{
    color:'#fff', 
    background:'#1C8537'
  },
  'warning':{
    color:'#021215', 
    background:'#E9D453'
  },
  'error':{
    color:'#fff', 
    background:'#D6411C'
  }
}
const fadeUp = keyframes`
from,0%, to {
  opacity: 1;
  transform: translateY(0)
},
0%, {
  opacity: 0;
  transform: translateY(-100%)
}
`
const fadeDown = keyframes`
from,0%, to {
  opacity: 0;
  transform: translateY(-100%)
 
},
0%, {
  opacity: 1;
  transform: translateY(0)
}
`

const toastStyles = (background:string, isMobileScreen:boolean ) : SerializedStyles => {
  return css(`
  display: flex;
  justify-content: left;
  align-items: center;
  background:${background};
  height:15px;
  z-index: 1;
  border-radius: ${isMobileScreen? '0px' :' 11px'};
  padding: 10px;
`)
}


const Toast = ({
  title,
  isOpen,
  type,
  isMobileScreen,
  handleClick
}:ToastProps): JSX.Element => {

  const [open, setOpen] = useState(false)
  const [init, setInit] = useState(true)
  const CloseButton = ({ ...rest }) => {
    return (
      <IconX 
        css={{ cursor: 'pointer', width: 25, height: 25 }}
        {...rest}
      /> )
  }

  const close = () => {
    if (handleClick){
      handleClick()
    } 
    setOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      setOpen(true)
      setInit(false)
    }
    else setOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <View css={css`
      animation: ${ open ? fadeUp: fadeDown} 4s ease;
      opacity:${ open ?'1': '0'};
      visibility:${ init ? 'hidden': 'visible'};
      position:absolute;
      min-width:${isMobileScreen ? '100%': '375px'};
      right: ${isMobileScreen ? '0' : '30px'};
      top: ${isMobileScreen ?'0px': '30px'};
      z-index: 100;
      `}
    >
      <View id={'toastContainer'} css={toastStyles( colors[type].background, 
        isMobileScreen as boolean)} >
        <Text
          variant='subtitle'
          css={{ 
            textAlign: 'center',
            color: colors[type].color, 
            fontSize:`${Theme.fontSizes[0]}`, 
            fontWeight: 600,
            textTransform: 'uppercase',
            lineHeight:'18px'
          }}> 
          {title}
        </Text>
        <CloseButton
          onClick={()=> close()}
          color={colors[type].color}
          css={[
            {
              position: 'absolute',
              top: 5,
              right:10
            }
          ]}
        />
      </View>
    </View>
  )
}
export type colorProp = {
  color: string, 
  background:string
}

export type colortype = {
  [success: string]: colorProp,
   warning: colorProp,
   error: colorProp,
}
export type ToastProps = {
  handleClick?: () => void
  title: string | JSX.Element;
  isOpen:boolean,
  type: string
  isMobileScreen?: boolean;
  time?: number;
} 

export { Toast } */
