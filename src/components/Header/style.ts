import { css } from '@emotion/react'
import Theme from '../../theme'

const HeaderStyles = {
    wrapper:css`
      width: 100%;
      position:relative
      max-width:100%;
      height:3.875rem; 
      max-height: 3.875rem;
      background-color: ${Theme.colors.black.base};
      display:flex;
      flex-direction: row-reverse;
      box-sizing:border-box;
      align-items:center;
      justify-content:space-between;
      padding:0 8.2% 0 8.2%;
      @media(min-width:1400px){
        position: fixed;
        bottom: 0;
      }
      @media(max-width: 1280px) and (min-width:960px){
        padding:0 3% 0 3%;
        height:4.5rem; 
        max-height: 4.5rem;
      }
      @media(max-width: ${Theme.breakpoints.lg}){
        height: 19.5rem;
        padding: 2rem 1rem 2rem 1rem;
        max-height: 19.5rem;
        flex-direction: column;
        justify-content:center;
        align-items: flex-start;
      }
    `,
    mainWrapper:css` 
      display:flex;
      align-items: center;
      flex-direction:row;
      justify-content: space-between;
      width:56%;
      @media(min-width: 1500px){
        border-left: 0.5px solid ${Theme.colors.black.base};
      }
      @media(max-width: ${Theme.breakpoints.lg}){
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
      }
    `,
    icon:css` 
      transition: all .2s ease-in-out;
      cursor:pointer;
      padding-left: 2rem;
      @media(max-width: 1280px) and (min-width:960px){
        padding-left: 1rem;
      }
      :hover { 
        transform: scale(1.1); 
      }
    `,
    switch:css` 
      width: 100%;
      @media(min-width: ${Theme.breakpoints.lg}){
        display:flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        width: 75%;
      }
    `,
    address:css` 
      margin-top: ${Theme.spaces.lg}; 
      margin-bottom: ${Theme.spaces.lg}; 
      color:${Theme.colors.black.base};
      @media(min-width: ${Theme.breakpoints.lg}) and (max-width: 1500px) {
        padding-right: 2rem;
        border-right: 0.5px solid ${Theme.colors.black.base};
      }
    `,
    privacyNotice:css` 
      cursor:pointer;
      transition: all .2s ease-in-out;
      padding-left:2rem;
      @media(max-width: ${Theme.breakpoints.lg}){
        margin-top: ${Theme.spaces.lg};
        height: 3.25rem;
        border-bottom: .5px solid  ${Theme.colors.black.base} ;
      }
      :hover { 
        transform: scale(1.05); 
      }
   `,
    socialWrapper:css`
      display:flex;
      align-items: center;
      flex-direction:row;
      justify-content: space-between;
      @media(max-width: ${Theme.breakpoints.lg}){
        height: 4.25rem;
        width: 100%;
        justify-content:flex-start;
        border-bottom: .5px solid  ${Theme.colors.black.base};
      }
      
    `,
    iconsWrapper:css`
      display:flex;
      align-items: center;
      flex-direction:row;
      justify-content: space-between;
      @media(max-width: ${Theme.breakpoints.lg}){
        height: 4.25rem;
        border-bottom: .5px solid  ${Theme.colors.black.base} ;
        width: 100%;
        justify-content:flex-start;
        border-bottom: .5px solid  ${Theme.colors.black.base};
      }
    `,
    notice:css`
      color: ${Theme.colors.black.base} !important;
    `,
    white:css`
      cursor:pointer;
      color: ${Theme.colors.black.base} !important;
      transition: all .2s ease-in-out;
      text-decoration: none;
      :hover { 
        transform: scale(1.025); 
      }
    `,
    HeaderWrapper: css`
      background-color: ${Theme.colors.violet.base};
    `,
    Header: css`
      max-width: 76.5rem;
      display: flex;
      align-items: center;
      width: 100%;
      min-height: 32px;
      margin auto;
    `,
    TxtHeader: css`
      font-size: 12px;
      color: ${Theme.colors.white.base} !important;
      font-family: 'Lato';
    `,
    line: css`
      width: 100%;
      height: 0.063rem;
      background-color: ${Theme.colors.black.base};
      display: block;
      margin-bottom: 0.625rem;
    `,
    cloud: css`
      color:white;
    `
}

export { HeaderStyles }

