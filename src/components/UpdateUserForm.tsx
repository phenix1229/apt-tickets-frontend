import { FormControl, InputLabel, Select, MenuItem, FormGroup, TextField, Container, Grid2, Button } from "@mui/material"
import { SyntheticEvent, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import axios from "axios"
import '../interceptors/axios'
import { Navigate } from "react-router-dom"

const UpdateUserForm = () => {
  const user:any = useSelector((state:RootState) => state.selectedUser.user);

  const [redirect, setRedirect] = useState(false)

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
    const [cellNumber, setCellNumber] = useState(user.cellNumber)
    const [email, setEmail] = useState(user.email)
    const [unit, setUnit] = useState(user.unit)
    const [department, setDepartment] = useState(user.department)
    const [userStatus, setUserStatus] = useState(user.userStatus)
    const [role, setRole] = useState(user.role)

    const submit = async (e:SyntheticEvent) => {
      e.preventDefault()
      await axios.put(`users/${user.email}`, {
      firstName,
      lastName,
      phoneNumber,
      cellNumber,
      email,
      unit,
      department,
      userStatus,
      role
    })
    setRedirect(true)
  }

    const Item = (label:string, id:string, value:string, onchange?:any) => {
        return (
          <TextField sx={{width:'100%'}}
            required
            margin='normal'
            id={id}
            label={label}
            defaultValue={value}
            onChange={onchange}
          />
        )
      }

      if(redirect){
        return <Navigate to="/ViewAllUsers" />
      }

  return (
    <div>
      <br/>
      <Container sx={{width:'50%'}}>
      <h2>User</h2>
      <br/>
        <FormGroup>
      <FormControl>
      <InputLabel id="roleLabel">Role</InputLabel>
        <Select sx={{width:'100%'}}
          required
          labelId='role'
          label='role'
          id='role'
          value={role}
          defaultValue={user.role}
          onChange={(Event) => setRole(Event.target.value)}
          >
          <MenuItem value={'Admin'}>Admin</MenuItem>
          <MenuItem value={'Staff'}>Staff</MenuItem>
          <MenuItem value={'Resident'}>Structural</MenuItem>
        </Select>
        </FormControl>
      {user.department && (<FormControl>
      <InputLabel id="departmentLabel">Department</InputLabel>
        <Select sx={{width:'100%'}}
          required
          labelId='department'
          label='department'
          id='department'
          value={department}
          defaultValue={user.department}
          onChange={(Event) => setDepartment(Event.target.value)}
          >
          <MenuItem value={'Electrical'}>Electrical</MenuItem>
          <MenuItem value={'Plumbing'}>Plumbing</MenuItem>
          <MenuItem value={'Structural'}>Structural</MenuItem>
        </Select>
        </FormControl>)}
      <FormControl>
      <InputLabel id="userStatusLabel">User status</InputLabel>
        <Select sx={{width:'100%'}}
          required
          labelId='userStatus'
          label='userStatus'
          id='userStatus'
          value={userStatus}
          defaultValue={user.userStatus}
          onChange={(Event) => setUserStatus(Event.target.value)}
          >
          <MenuItem value={'Active'}>Active</MenuItem>
          <MenuItem value={'Inactive'}>Inactive</MenuItem>
        </Select>
        </FormControl>
            </FormGroup>
      <Grid2 container rowSpacing={1} columnSpacing={1}>
        <Grid2 size={4}>
          {Item('First name', 'firstName', user.firstName, (e:any) => {setFirstName(e.target.value)})}
        </Grid2>
        <Grid2 size={4}>
          {Item('Last name', 'lastName', user.lastName, (e:any) => {setLastName(e.target.value)})}
        </Grid2>
        <Grid2 size={4}>
          {Item('Phone number', 'phoneNumber', user.phoneNumber, (e:any) => {setPhoneNumber(e.target.value)})}
        </Grid2>
        <Grid2 size={4}>
          {Item('Cell number', 'cellNumber', user.cellNumber, (e:any) => {setCellNumber(e.target.value)})}
        </Grid2>
        <Grid2 size={4}>
          {Item('Email', 'email', user.email, (e:any) => {setEmail(e.target.value)})}
        </Grid2>
        {user.unit &&(<Grid2 size={4}>
          {Item('Unit', 'unit', user.unit, (e:any) => {setUnit(e.target.value)})}
        </Grid2>)}
      </Grid2>
          {<Button variant="contained" style={{marginBottom:'8px'}} onClick={(e) => submit(e)}>Save</Button>}
        </Container>
    </div>
  )
}

export default UpdateUserForm