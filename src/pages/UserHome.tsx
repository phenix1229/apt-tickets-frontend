import { Container } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setAuth } from '../app/authSlice';
import '../interceptors/axios'
import { setUser } from '../app/userSlice';

const UserHome = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  
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
        setMessage(`Welcome ${data.firstName}`);
        dispatch(setAuth(true))
      } catch(error:any) {
        dispatch(setAuth(false))
      }
    })();
  }, []);

  return (
    <Container>
      <h3>{message}</h3>
    </Container>
  )
}

export default UserHome