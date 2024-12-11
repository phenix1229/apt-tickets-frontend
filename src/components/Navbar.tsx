import React, { useEffect } from 'react'
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
  const dispatch = useDispatch()

  useEffect(()=>{
    (async () => {
      try{
        const {data}:any = await axios.get('http://localhost:5000/api/users/authUser')
        dispatch(setUser({
          role:data.role,
          firstName:data.firstName,
          lastName:data.lastName,
          email:data.email,
          cellNumber:data.cellNumber,
          phoneNumber:data.phoneNumber,
          unit:data.unit,
          department:data.department
        }))
        if(sessionStorage.user){
          dispatch(setAuth(true))
        }
      } catch(error:any) {
        alert(error.response.data.message)
      }
    })();
  }, []);

  const user:any = useSelector((state:RootState) => state.user.user)
  const auth:boolean = useSelector((state:RootState) => state.auth.value)

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
    }));
    window.sessionStorage.clear()
    // window.location.reload()
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
function dispatch(arg0: { payload: any; type: "user/setUser"; }) {
  throw new Error('Function not implemented.');
}

