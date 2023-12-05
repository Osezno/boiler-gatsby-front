/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { navigate } from 'gatsby'
import { View, Text, Card } from '@components/common'
import Back from '@components/common/assets/back_location.svg'
import { userSongsDummy, SongsProps } from './constants'
import { Styles } from '../style'


const SongsFeed = () => {
  const { id } = useParams();
  return <View css={Styles.borderWrapper}>
    
    <Text variant='h3' size='large' weight='regular' >
      {id}
    </Text>

  </View>
}

export default SongsFeed
