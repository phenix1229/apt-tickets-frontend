
import { Button, Container, FormControl, Grid2, TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import '../interceptors/axios'
import UpdateUserForm from '../components/UpdateUserForm'

const ViewUser = () => {
  const [editing, setEditing] = useState(false)
  const [redirect, setRedirect] = useState('')
  const selectedUser:any = useSelector((state:RootState) => state.selectedUser.user)

  const Item = (label:string, id:string, value:string) => {
    return (
      <TextField sx={{width:'100%'}}
              disabled
              margin='normal'
              id={id}
              label={label}
              value={value}
            />
    )
  }


  if(redirect === 'back'){
    return (<Navigate to={'/viewAllUsers'} />)
  }
  
  if(redirect === 'edit'){
    return (<Navigate to={'/AddComment'} />)
  }

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      {!editing && <Container sx={{width:'100%'}}>
      <h2>User</h2>
      <Grid2 container rowSpacing={1} columnSpacing={1}>
        <Grid2 size={4}>
          {Item('ID', 'id', selectedUser.id)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Role', 'role', selectedUser.role)}
        </Grid2>
        <Grid2 size={4}>
          {Item('First name', 'firstName', selectedUser.firstName)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Last name', 'lastName', selectedUser.lastName)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Cell number', 'cellNumber', selectedUser.cellNumber)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Phone number', 'phoneNumber', selectedUser.phoneNumber)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Email', 'email', selectedUser.email)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Unit', 'unit', selectedUser.unit)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Department', 'department', selectedUser.department)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Status', 'userStatus', selectedUser.userStatus)}
        </Grid2>
      </Grid2>
        </Container>}
        {editing === true && (
            <UpdateUserForm />
        )}
        <Container>
          {selectedUser.userStatus !== 'Inactive' && (
            <Button variant='contained' style={{marginBottom:"8px"}} onClick={() => {setEditing(!editing)}}>{editing === false ? 'Edit user' : 'Cancel'}</Button>
          )}
          </Container>
          {editing === false && (<FormControl>
            <Button variant='contained' onClick={() => {setRedirect('back')}}>Back</Button>
          </FormControl>)}

    </div>
  )
}

export default ViewUser