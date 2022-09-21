import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '.'
import Login from '../pages/Auth'
import Register from '../pages/Auth/register'
import Home from '../pages/home'
import MyBooks from '../pages/mybooks'
import Tutorials from '../pages/tutorials'

const RoutingComponent = () => {
  return (
    <Routes>
      <Route path="/register" element={
        <AuthRoute>
          <Register />
        </AuthRoute>
      } />
      <Route path="/login" element={
        <AuthRoute>
          <Login />
        </AuthRoute>
      } />
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="/tutorials" element={
        <ProtectedRoute>
          <Tutorials />
        </ProtectedRoute>
      } />
      <Route path="/my-books" element={
        <ProtectedRoute>
          <MyBooks />
        </ProtectedRoute>
      } />
      <Route path="*" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default RoutingComponent