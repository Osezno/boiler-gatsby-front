/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Routes, HashRouter, Route, Navigate, Outlet } from 'react-router-dom'
import { navigate } from 'gatsby'
import { View, Text } from '../components/common'
import Navigation from './Navigation'
import { Styles } from './style'
/* 
 -identar
 -comentar

 -Feed de canciones ().
 -Comentarios para cada cancion
 -Division de cancion en secciones, con comentarios
  acordes y grabaciones con nombre.
 -lista de grabaciones Control de versiones 
  para grabacion general
 
 

 -lista de posibles nombres de la cancion */

const DashbboardPage = () => {
  return (
    <View css={Styles.wrapper}>
      <Navigation />
      <Outlet />
    </View>)
}

export default DashbboardPage
