import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Index from './pages/Index'
import Login from './pages/Login'
import UserHome from './pages/UserHome'
import CreateTicket from './pages/CreateTicket'
import CreateUser from './pages/CreateUser'
import UpdateTicket from './pages/UpdateTicket'
import AddComment from './pages/AddComment'
import Register from './pages/Register'
import ViewTicket from './pages/ViewTicket'
import ViewAllTickets from './pages/ViewAllTickets'
import ViewAllUsers from './pages/ViewAllUsers'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Index />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/userHome' element={<UserHome />}/>
        <Route path='/createTicket' element={<CreateTicket />}/>
        <Route path='/createUser' element={<CreateUser />}/>
        <Route path='/updateTicket' element={<UpdateTicket />}/>
        <Route path='/addComment' element={<AddComment />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/viewTicket' element={<ViewTicket />}/>
        <Route path='/viewAllTickets' element={<ViewAllTickets />}/>
        <Route path='/viewAllUsers' element={<ViewAllUsers />}/>
      </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
