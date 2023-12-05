/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { navigate } from 'gatsby'
import { View, Text, Card } from '../../components/common'
import { userSongsDummy, SongsProps } from './constants'
import { Styles } from '../style'


const Render = () => {
  const [userSongs, setUserSongs] = useState(userSongsDummy)

  const renderSongCard = ({ title, date, lastUpdated, description, id }:SongsProps) => {

    return <Card variant="default" shadow onClick={()=> console.log(id)}>
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
  return <View css={Styles.borderWrapper}>
    <Text variant='h3' size='large' weight='regular' >
        User Songs
    </Text>
    <View css={Styles.fourCoulumsGrid}>
      {userSongs.map(a => renderSongCard(a))}
    </View>
  </View>
}

export default Render
