/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { View, Text, Card } from '../../components/common'
import { userSongsDummy, SongsProps } from './constants'
import { Styles } from '../style'

const RenderSongCard = ({ title, date, lastUpdated, description, id }: SongsProps) => {

  return <Card variant="default" shadow>
    <Text variant='label' size='medium' weight='bold' >
      {title}
    </Text>
    <Text variant='label' size='small' weight='regular'>
      {description}
    </Text>
    <Text variant='caption' size='small' weight='regular' >
      {date}
    </Text>
    <Text variant='caption' size='small' weight='regular'  >
      {lastUpdated}
    </Text>
  </Card >
}

const SongsFeed = () => {
  const [userSongs, setUserSongs] = useState(userSongsDummy)
  const navigate = useNavigate() //useMemo | usecallback

  return <View css={Styles.borderWrapper}>
    <Text variant='h3' size='large' weight='regular' >
      User Songs
    </Text>
    <View css={Styles.fourCoulumsGrid}>
      {
        userSongs.map(a =>
          <View onClick={() => navigate(a.id)}> 
            <RenderSongCard {...a} />
          </View>
        )
      }
    </View>
  </View>
}

export default SongsFeed
