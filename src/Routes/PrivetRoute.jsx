import React from 'react'
import useAuth from '../Firebase/useAuth'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'

const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    
    if (loading) {
      return <div className='h-screen w-full flex justify-center items-center'>
        <PropagateLoader color="#36d7b7" />
      </div>
    }
    if (!user) {
        return <Navigate to={'/login'} state={location.pathname} replace={ true} />
    }

  return (
    <div>{children}</div>
  )
}

export default PrivetRoute