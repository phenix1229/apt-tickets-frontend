import { Container } from '@mui/material'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setAuth } from '../app/authSlice';
import '../interceptors/axios'
import { setUser } from '../app/userSlice';
import UserOptions from '../components/UserOptions';

const UserHome = () => {
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
        dispatch(setAuth(true))
      } catch(error:any) {
        dispatch(setAuth(false))
      }
    })();
  }, []);

  return (
    <Container>
      <UserOptions />
    </Container>
  )
}

export default UserHome