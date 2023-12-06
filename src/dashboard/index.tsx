/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Routes, HashRouter, Route, Navigate, Outlet } from 'react-router-dom'
import { navigate } from 'gatsby'
import { View, Text } from '../components/common'
import Navigation from './Navigation'
import { Styles, PrimaryStyles } from '@style/index'
/* 
 -Requests
 -StateManager
 -husky and lerna

 -Feed de canciones ().
*/

const DashbboardPage = () => {
  const wrapperStyle=[PrimaryStyles.complexGrid(1,"2fr 10fr"),Styles.wrapper]
  return (
    <View css={wrapperStyle}>
      <Navigation />
      <Outlet />
    </View>)
}

export default DashbboardPage
