import { Box, Button, Container } from '@mui/material'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuth } from '../app/authSlice';
import '../interceptors/axios'
import { setUser } from '../app/userSlice';
import { RootState } from '../app/store';

const UserOptions = () => {
  const user:any = useSelector((state:RootState) => state.user.user)
//   alert(JSON.stringify(user))
//   const dispatch = useDispatch();
  
//   useEffect(()=>{
//     (async () => {
//       try{
//         await axios.get('http://localhost:5000/api/users/authUser').then(
//           (data:any) =>
//         dispatch(setUser({
//           role:data.role,
//           firstName:data.firstName,
//           lastName:data.lastName,
//           email:data.email,
//           cellNumber:data.cellNumber,
//           phoneNumber:data.phoneNumber,
//           unit:data.unit,
//           department:data.department
//         })))
//         dispatch(setAuth(true))
//       } catch(error:any) {
//         dispatch(setAuth(false))
//         alert(error)
//       }
//     })();
//   }, []);

  return (
    <Container>
      <h3>Welcome</h3> 
      <br/>
      <br/>
      <br/>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Link to="/ViewAllTickets">
        <Button variant='contained'>View tickets</Button>
      </Link>
      {user.role !== 'Staff' &&
      <Link to='/CreateTicket'>
        <Button variant='contained'>New ticket</Button>
      </Link>}
      {user.role === 'Admin' &&
      <Link to="/ViewAllUsers">
        <Button variant='contained'>View users</Button>
      </Link>}
      {user.role === 'Admin' && 
      <Link to='/CreateUser'>
        <Button variant='contained'>New user</Button>
      </Link>}
      </Box>
    </Container>
  )
}

export default UserOptions