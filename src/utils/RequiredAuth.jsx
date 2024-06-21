import React from 'react'
import useAuth from '../hooks/useAuth.jsx'
import { Navigate, Outlet } from 'react-router-dom'

const RequiredAuth = () => {

    const {auth} = useAuth()
    console.log(auth.tk);
    return(
        auth.tk ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default RequiredAuth;