/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

import { navigate } from 'gatsby'
import { View, Text, Card } from '@components/common'
import Back from '@components/common/assets/left-arrow.svg'
import { userSongsDummy, SongsProps } from './constants'
import { Styles } from '../style'


const SongsFeed = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  return <View css={Styles.borderWrapper}>
    <Back css={Styles.back} onClick={()=>navigate(-1)} />
    <Text variant='h3' size='large' weight='regular' >
      {id}
    </Text>

  </View>
}

export default SongsFeed
