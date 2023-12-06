import React, { useEffect } from 'react'
import { css, keyframes, Global } from '@emotion/react'
import PageSkeleton from '../components/PageSkeleton'
import {globalStyles} from '@style/global'
import EntryPoint from '../components/'

const IndexPage = () => {
 
    return (
        <PageSkeleton>
            <Global styles={globalStyles} />
            <EntryPoint />
        </PageSkeleton>
    )
}

export default IndexPage
