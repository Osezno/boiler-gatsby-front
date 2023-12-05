
import { css, keyframes } from '@emotion/react'
import Theme from '../theme'

const fadeUp = keyframes`
from {
  height:0;
  opacity:0;
},
to {
  opacity:1;
  height:164px;
}`

const Styles = {
  wrapper: css`
      min-height: calc(100vh - 90px);
      display: grid;
      grid-template-columns: 2fr 10fr;
      grid-gap: 2px;
      grid-auto-rows: minmax(20px, auto);
      flex-direction: column;
      background-color: #f6f6ff;
      align-items: center;
      justify-content: flex-start;
      & > div {
        flex: 1;
        max-width: 1224px;
        width: 100%;
        padding:10px;
        box-sizing: border-box;
        @media (max-width: 800px) {
          width: 100%;
        }
      }   
    `,
  borderWrapper: css`
    min-height: calc(100vh - 90px);
    border: 1px solid;
  `,
  title: css`
     color:${Theme.colors.black.base};
     font-size:15px;
  `,
  fourCoulumsGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    column-gap: 15px;
  `,
  back: css`
    cursor:pointer;
  `
}

export { Styles }
