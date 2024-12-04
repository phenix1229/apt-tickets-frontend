import React, {useState} from 'react'
import { FormControl, FormGroup, TextField } from '@mui/material'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      </FormGroup>
    </FormControl>
  )
}

export default LoginForm