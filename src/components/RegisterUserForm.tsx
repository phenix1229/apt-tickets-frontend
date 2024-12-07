import { Button, FormControl, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import {SyntheticEvent, useState} from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';


const RegisterUserForm = () => {
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


    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();
        if(role ==="Admin"){
          await axios.post('http://localhost:5000/api/users/register', 
              {
              firstName,
              lastName,
              email,
              cellNumber,
              phoneNumber,
              role,
              password
          }
      );
        }
        if(role ==="Staff"){
          await axios.post('http://localhost:5000/api/users/register', 
              {
              firstName,
              lastName,
              email,
              cellNumber,
              phoneNumber,
              department,
              role,
              password
          }
      );
        }
        if(role ==="Resident"){
          await axios.post('http://localhost:5000/api/users/register', 
              {
              firstName,
              lastName,
              email,
              cellNumber,
              phoneNumber,
              unit,
              role,
              password
          }
      );
        }
    setRedirect(true)
    }

  if(redirect){
    return <Navigate to="/login" />
  }

  return (
    <div>
      <br/>
      <br/>
      <br/>
    <FormGroup>
      <FormControl>

      <InputLabel id='role'>Role</InputLabel>
      <Select
          required
          labelId='role'
          label='Role'
          id='role'
          value={role}
          onChange={async (Event) => {await setRole(Event.target.value); }}
          >
          <MenuItem value={'Admin'}>Admin</MenuItem>
          <MenuItem value={'Staff'}>Staff</MenuItem>
          <MenuItem value={'Resident'}>Resident</MenuItem>
        </Select>
      </FormControl>
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
        {role === "Resident" ? (<TextField
          margin='normal'
          id='unit'
          label="Unit"
          value={unit}
          onChange={(Event) => setUnit(Event.target.value)}
        />) : ''}

        {role === "Staff" ? (
<FormControl>
          <InputLabel id='department'>Department</InputLabel>
      <Select
          labelId='department'
          label='Department'
          id='department'
          value={department}
          onChange={(Event) => setDepartment(Event.target.value)}
          >
          <MenuItem value={'Electrical'}>Electrical</MenuItem>
          <MenuItem value={'Plumbing'}>Plumbing</MenuItem>
          <MenuItem value={'Structural'}>Structural</MenuItem>
        </Select>
        </FormControl>
        ) : ''}
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
        <Button variant="contained" onClick={(e)=>{submit(e)}}>Submit</Button>
      </FormGroup>
    </div>
  )
}

export default RegisterUserForm