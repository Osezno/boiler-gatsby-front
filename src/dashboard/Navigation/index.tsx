/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { View, Text, Icon } from '@components/common'
import {routes} from '../routesConstants'
import Arrow from '@components/common/assets/right-arrow.svg'
import { Styles } from '@components/common/style'


const Navigation = () => {

  const navigate = useNavigate()
  return <View css={Styles.menuWrapper}>
    <View css={Styles.menuItems} onClick={()=> navigate(routes.account)}>
      <Text variant='label' size='small' weight='regular' >
        My account
      </Text>
      <Icon img={<Arrow />} />
    </View>
    <View css={Styles.menuItems} onClick={()=> navigate(routes.dashboard)}>
      <Text variant='label' size='small' weight='regular' >
        Dashboard
      </Text>
      <Icon img={<Arrow />} />
    </View>
    <View css={Styles.menuItems} onClick={()=> console.log("logout")}>
      <Text variant='label' size='small' weight='regular' >
        Log out
      </Text>
      <Icon img={<Arrow />} />
    </View>
  </View>
}

export default Navigation
