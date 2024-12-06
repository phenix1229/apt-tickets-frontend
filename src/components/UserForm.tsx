import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import {SyntheticEvent, useState} from 'react'
import { submitPost } from '../app/utils';
import { Navigate } from 'react-router-dom';

const CreateUserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [unit, setUnit] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  if(redirect){
    return <Navigate to="/login" />
  }

  return (
    <div>
      <br/>
      <br/>
      <br/>
    <FormControl>
      <InputLabel id='roleLabel'>Role</InputLabel>
      <Select
          required
          labelId='role'
          label='Role'
          id='role'
          value={role}
          onChange={(Event) => setRole(Event.target.value)}
          >
          <MenuItem value={'Admin'}>Admin</MenuItem>
          <MenuItem value={'Staff'}>Staff</MenuItem>
          <MenuItem value={'Resident'}>Resident</MenuItem>
        </Select>
      <FormGroup>
        <TextField
          required
          margin='normal'
          id='firstName'
          label="First name"
          value={firstName}
          onChange={(Event) => setFirstName(Event.target.value)}
        />
        <TextField
          required
          margin='normal'
          id='lastName'
          label="Last name"
          value={lastName}
          onChange={(Event) => setLastName(Event.target.value)}
        />
        <TextField
          required
          margin='normal'
          id='email'
          label="Email"
          value={email}
          onChange={(Event) => setEmail(Event.target.value)}
        />
        <TextField
          margin='normal'
          id='cellNumber'
          label="Cell number"
          value={cellNumber}
          onChange={(Event) => setCellNumber(Event.target.value)}
        />
        <TextField
          margin='normal'
          id='phoneNumber'
          label="Phone number"
          value={phoneNumber}
          onChange={(Event) => setPhoneNumber(Event.target.value)}
        />
        <TextField
          margin='normal'
          id='unit'
          label="Unit"
          value={unit}
          onChange={(Event) => setUnit(Event.target.value)}
        />
        <TextField
          margin='normal'
          id='department'
          label="Department"
          value={department}
          onChange={(Event) => setDepartment(Event.target.value)}
        />
        <TextField
          required
          margin='normal'
          id='password'
          label="Password"
          value={password}
          onChange={(Event) => setPassword(Event.target.value)}
        />
        <TextField
          required
          margin='normal'
          id='confirmPassword'
          label="Confirm password"
          value={confirmPassword}
          onChange={(Event) => setConfirmPassword(Event.target.value)}
        />
      </FormGroup>
      <Button variant='contained' onClick={async (Event:SyntheticEvent)=>{Event.preventDefault(); submitPost("http://localhost:5000/api/users", await {
        firstName,
        lastName,
        email,
        cellNumber,
        phoneNumber,
        unit,
        department,
        role,
        password
      });
      setRedirect(true)}}>
        Submit
      </Button>
    </FormControl>
    </div>
  )
}

export default CreateUserForm