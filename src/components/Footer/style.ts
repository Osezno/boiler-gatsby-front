import { css } from '@emotion/react'
import Theme from '../../theme'

const FooterStyles = {
   
    footerWrapper: css`
      background-color: ${Theme.colors.black.base};
    `,
    footer: css`
      text-align: center;
      max-width: 76.5rem;
      width: 100%;
      min-height: 25px;
      margin auto;
    `,
    TxtFooter: css`
      font-size: 12px;
      color: ${Theme.colors.white.base};
      font-family: 'Lato';
    `,
    line: css`
      width: 100%;
      height: 0.063rem;
      background-color: ${Theme.colors.white.base};
      display: block;
      margin-bottom: 0.625rem;
    `,
    cloud: css`
      color:white;
    `
}

export { FooterStyles }

