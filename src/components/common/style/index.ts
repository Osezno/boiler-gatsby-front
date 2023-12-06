
import { css, keyframes } from '@emotion/react'
import Theme from '@theme/index'

const fadeUp = keyframes`
from {
  height:0;
  opacity:0;
},
to {
  opacity:1;
  height:164px;
}`

const unit = 6;


/**
* PrimaryStyle
* @author   Osezno
* Used for div alignments styles that need  paramaters like
  margins, paddings, borders, aligns, grid, box
*/

const PrimaryStyles = {
  marginTop: (int: number) => css`
    margin-top:${unit * int}px
  `,
  marginBottom: (int: number) => css`
    margin-bottom:${unit * int}px
  `,
  margin: (int: number) => css`
   margin:${unit * int}px
  `,
  paddingTop: (int: number) => css`
    padding-top:${unit * int}px
  `,
  paddingBottom: (int: number) => css`
    padding-bottom:${unit * int}px
  `,
  padding: (int: number) => css`
    padding:${unit * int}px
  `,
  simpleGrid: (gap: number, columns: number) => css`
    display: grid;
    grid-template-columns:${Array(columns).fill("1fr").join(" ")};
    grid-gap: ${unit * gap}px;
    column-gap:${unit * gap}px;
  `,
  complexGrid: (gap: number, columns: string) => css`
    display: grid;
    grid-template-columns:${columns};
    grid-gap: ${unit * gap}px;
    column-gap:${unit * gap}px;
  `,
}

/**
* SecoundaryStyles
* @author   Osezno
* Used for titles?
*/

/**
* MainStyles 
* @author   Osezno
* Used for very specific styles that may not be repeated
*/

const Styles = {
  wrapper: css`
      min-height: calc(100vh - 9.5);
      background-color: ${Theme.colors.white.base};
      & > div {      
        min-height: calc(100vh - 9.5vh);
        flex: 1;
        max-width: 1224px;
        width: 100%;
        box-sizing: border-box;
        @media (max-width: ${Theme.breakpoints.lg}) {
          width: 100%;
        }
      }   
    `,
  menuWrapper: css`
    background-color: ${Theme.colors.violet.lightest};
    border-right: 1px solid;
  `,
  menuItems: css`
    border-bottom: solid .5px;
    padding: 4px 12px 4px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor:pointer;
    &:hover{
      border-bottom: solid 1px;
    }
  `,
}

export { PrimaryStyles, Styles, }
