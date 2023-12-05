import React from 'react'
// import { ThemeProvider } from 'emotion-theming'
//import GlobalStyles from '@ion/components/GlobalStyles'
import { Global, css } from '@emotion/react'

interface RootWrapperProps {
  /** Site content */
  children: React.ReactNode
}

// <ThemeProvider theme={theme}>
// </ThemeProvider>

const RootWrapper = ({ children }: RootWrapperProps) => {
  return <>
    <Global
      styles={
        css(`
          body { 
            overflow-x: hidden !important;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            &::-webkit-scrollbar {
              background: #F2F3F3;
                
              position: absolute;
              width: 0.5rem; 
              height: 25.313rem;   
              border-radius: 3.75rem; 
            }
        
            &::-webkit-scrollbar-thumb {
              width: 0.5rem;
              height: 3.313rem;
              background: #B3B8B9;
              border-radius: 3.75rem;
            }
          }
        `)
      }
    />
    {children}
  </>
}

export default RootWrapper
