/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { navigate } from 'gatsby'
import { View, Text, Card, Icon } from '@components/common'
import Back from '@components/common/assets/left-arrow.svg'
import { userSongsDummy, SongsProps } from './constants'
import { PrimaryStyles } from '@components/common/style'


const SongsFeed = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  return <View className='padding'>
    <View className='center-start'>
      <Icon img={<Back />} onClick={() => navigate(-1)} />
      <Text variant='h3' size='large' weight='regular' >
        {id} Song Title
      </Text>
      <Text variant='h4' size='large' weight='regular' >
        -lista de posibles nombres de la cancion
      </Text>
    </View>

    <View  className='border padding margin' >
      <Text variant='paragraph' size='large' weight='regular' >
        -Acordes divididos en secciones.
        boton para añadir secciones y lista de acordes
      </Text>
    </View>
    <View className='border padding margin' >
      <Text variant='paragraph' size='large' weight='regular' >
        -Comentarios Generales para cada cancion
      </Text>
    </View>
    <View className='border padding margin'>
      <Text variant='paragraph' size='small' weight='regular' >
        lista de grabaciones Control de versiones
        para grabacion general con sort de fechas y comentarios para cada uno
      </Text>
    </View>
    <View className='border padding margin'>
      <Text variant='paragraph' size='small' weight='regular' >
        Division de cancion en secciones o instrumentos (nice to have)
      </Text>
    </View>
  </View>
}

export default SongsFeed
