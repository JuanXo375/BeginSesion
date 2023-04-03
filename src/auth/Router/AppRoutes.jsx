import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../Page/LoginPage'
import RegisterPage from '../Page/RegisterPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage/>}/>
      <Route path='register' element={<RegisterPage/>}/>
      
      <Route path='/*' element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}

export default AppRoutes
