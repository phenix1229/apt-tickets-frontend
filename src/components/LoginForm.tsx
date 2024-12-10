import {SyntheticEvent, useState} from 'react'
import { Button, Container, FormControl, FormGroup, TextField } from '@mui/material'
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e:SyntheticEvent) => {
    e.preventDefault();
    try{
    const response:any = await axios.post('http://localhost:5000/api/users/login', {
      email,
      password
    }, {withCredentials:true})
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    setRedirect(true)
  } catch(error:any){
    alert(error.response.data.message)
  }
}

if(redirect){
    return <Navigate to="/userHome" />
  }

  return (
    <Container>
    <h2>Please log in</h2>
    <FormControl>
      <FormGroup>
      <TextField
        required
        margin='normal'
        id='email'
        label="Email"
        value={email}
        onChange={(Event) => setEmail(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='password'
        label="Password"
        value={password}
        onChange={(Event) => setPassword(Event.target.value)}
      />
      <Button variant="contained" onClick={(e)=>{submit(e)}}>Submit</Button>
      </FormGroup>
    </FormControl>
    </Container>
  )
}

export default LoginForm