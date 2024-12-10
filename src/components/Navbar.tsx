import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AppBar, Button, Toolbar, useScrollTrigger } from '@mui/material'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { setAuth } from '../app/authSlice';
import { setUser } from '../app/userSlice';

function ElevationScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

const Navbar = () => {
  const auth = useSelector((state:RootState) => state.auth.value);
  const user = useSelector((state:RootState) => state.user.user)
  const dispatch = useDispatch()

  const logout = async () => {
    await axios.post('http://localhost:5000/api/users/logout', {}, {withCredentials:true});
    axios.defaults.headers.common['Authorization'] = '';
    dispatch(setAuth(false));
    dispatch(setUser({
      role:'',
      firstName:'',
      lastName:'',
      email:'',
      cellNumber:'',
      phoneNumber:'',
      unit:'',
      department:''
    }))
    return <Navigate to="/" />
  }

  return (
    <ElevationScroll>
    <AppBar>
      <Toolbar>
        {!auth && <Link to="./">
          <Button variant='contained' disableElevation>Home</Button>
        </Link>}
        {auth && <Link to="./userHome">
          <Button variant='contained' disableElevation>Home</Button>
        </Link>}
        {!auth && <Link to="./Login">
        <Button variant='contained' disableElevation>Login</Button>
        </Link>}
        {!auth && <Link to="./Register">
        <Button variant='contained' disableElevation>Register</Button>
        </Link>}
        {auth && <Link to="./Users.tsx">
        <Button variant='contained' disableElevation>Users</Button>
        </Link>}
        {user.role === 'Admin' && <Link to="/ViewAllTickets">
        <Button variant='contained' disableElevation>Tickets</Button>
        </Link>}
        {auth && <Link to="/" onClick={ logout}>
        <Button variant='contained' disableElevation>Logout</Button>
        </Link>}
      </Toolbar>
    </AppBar>
    </ElevationScroll>
  )
}

export default Navbar
