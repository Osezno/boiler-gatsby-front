
import { css } from '@emotion/react'
import GrottaLigth from '@components/fonts/static/Grotta-Light.woff2'
import GrottaRegular from '@components/fonts/static/Grotta-Regular.woff2'
import GrottaBold from '@components/fonts/static/Grotta-Bold.woff2'
import GrottaMedium from '@components/fonts/static/Grotta-Medium.woff2'
import LatoRegularW from '@components/fonts/static/Lato-Regular2.woff2'
import LatoBoldW from '@components/fonts/static/Lato-Bold.woff2'
import Theme from '@theme/index'

/**
*  globalStyle
* @author   Osezno
* Used for classname styles 
*/

export const globalStyles =  css` 
  .center {
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
  .center-start {
    display:flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
  }
  .border{
    border: solid 1px;
  }
  .padding{
    padding: 12px;
  }
  .margin{
    margin: 6px;
  }

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