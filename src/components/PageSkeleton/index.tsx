/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'

import Header from '../Header'
import Footer from '../Footer'


interface LayoutProps {
  /** Page content */
  children?: JSX.Element | JSX.Element[]
  linkPersonalized?: boolean
}

const Main = ({ children }: LayoutProps) => <main>{ children }</main>

const PageSkeleton = ({ children, linkPersonalized }: LayoutProps) => {
  return <>
    <Header  />
    <Main>{children}</Main>
    <Footer />
  </>
}

export default PageSkeleton
