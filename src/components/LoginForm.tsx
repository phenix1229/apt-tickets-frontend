import {SyntheticEvent, useState} from 'react'
import { Button, FormControl, FormGroup, TextField } from '@mui/material'
// import { submitPost } from '../app/utils';
import axios from 'axios';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e:SyntheticEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users/login', {
      email,
      password
    })
  }

  return (
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
      {/* <Button variant="contained" onClick={async (Event:SyntheticEvent) => {Event.preventDefault(); submitPost("http://localhost:5000/api/users/login", await { */}
    </FormControl>
  )
}

export default LoginForm