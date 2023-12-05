/* eslint-disable max-len */
import React from 'react'
import { css, Global } from '@emotion/react'


const fontFace = css`

  @font-face {
    font-family: 'Grotta';
    src:url(${GrottaLigth}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }


  @font-face {
    font-family: 'Grotta';
    src: url(${GrottaRegular}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Grotta';
    src:url(${GrottaMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Grotta';
    src: url(${GrottaBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato';
    src:url(${LatoRegularW}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato';
    src:url(${LatoBoldW}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

`

const FontFace = (): JSX.Element => <Global styles={fontFace} />

export default FontFace
