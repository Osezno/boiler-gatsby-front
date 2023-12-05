
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Routes, HashRouter, Route, Navigate } from 'react-router-dom'
import { dashboardRoutes } from '../dashboard/routes'

const EntryPoint = () => {
    const [windowLoaded, setWindowLoaded] = useState(false)

    useEffect(() => {
        setWindowLoaded(true)
    }, [])

    const renderRoutes = (): JSX.Element => <>
        {dashboardRoutes()}
        {/*  {pymeRoutes()} */}
    </>

    if (!windowLoaded) return null
    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/dashboard'} />} />
                <Route path={'/dashboard'}>
                    {renderRoutes()}
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default EntryPoint