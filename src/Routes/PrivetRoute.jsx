import React from 'react'
import useAuth from '../Firebase/useAuth'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    
    if (loading) {
        return <div class="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
            <span class="sr-only">Loading...</span>
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