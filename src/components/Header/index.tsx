/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { View, Text } from '../common'
import { HeaderStyles as style } from './style'

const Header = () => {
  return (
    <View id='Header' css={style.HeaderWrapper}>
      <View css={style.Header}>
        <Text variant='caption' size='small' weight='medium' css={style.TxtHeader} >
          GROVEGROUND
        </Text>
      </View>
    </View>
  )
}

export default Header

