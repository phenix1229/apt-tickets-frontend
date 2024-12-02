// import { useState } from 'react'
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import UserHome from './pages/UserHome'
import StaffHome from './pages/StaffHome'
import AdminHome from './pages/AdminHome'
import CreateTicket from './pages/CreateTicket'
import CreateUser from './pages/CreateUser'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/signIn' element={<SignIn />}/>
      <Route path='/userHome' element={<UserHome />}/>
      <Route path='/staffHome' element={<StaffHome />}/>
      <Route path='/adminHome' element={<AdminHome />}/>
      <Route path='/createTicket' element={<CreateTicket />}/>
      <Route path='/createUser' element={<CreateUser />}/>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
