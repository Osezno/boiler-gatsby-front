/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { View } from '../common'
import { FooterStyles as style } from './style'

const Footer = () => {
  return (
    <View id='footer' css={style.footerWrapper}>
      <View css={style.footer}>
        <span css={style.line}></span>
        <span css={style.TxtFooter}>
        Ofrecemos mejores oportunidades para financiar sueños 
          <span css={style.cloud}> ☁ </span> Copyright © 2023
        Todos los derechos reservados ION
        </span>
      </View>
    </View>
  )
}

export default Footer

