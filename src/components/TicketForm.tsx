import { Button, Container, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import { Navigate } from 'react-router-dom'
import '../interceptors/axios'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const TicketForm = () => {
  const user = useSelector((state:RootState) => state.user.user)

  const [redirect, setRedirect] = useState(false)
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientCell, setClientCell] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientLocation, setClientLocation] = useState('')
  const [assignedDepartment, setAssignedDepartment] = useState('')
  const [description, setDescription] = useState('')

  const submit = async (e:SyntheticEvent) => {
    e.preventDefault()
    try{
      if(user.role === 'Resident'){
        await axios.post('tickets', {
        openedBy:`${user.firstName} ${user.lastName}`,
        clientName:`${user.firstName} ${user.lastName}`,
        clientPhone:user.phoneNumber,
        clientCell:user.cellNumber,
        clientEmail:user.email,
        clientLocation:user.unit,
        assignedDepartment,
        description,
      })
      alert('Ticket created successfully')
    }
      if(user.role === 'Admin'){
        await axios.post('tickets', {
          openedBy:`${user.firstName} ${user.lastName}`,
          clientName,
          clientPhone:`+1${clientPhone}`,
          clientCell:`+1${clientCell}`,
          clientEmail,
          clientLocation,
          assignedDepartment,
          description,
        })
        alert('Ticket created successfully')
      }
      setRedirect(true)
    } catch (error){alert(error)}
  }

  if(redirect){
    return(
      <Navigate to={'/UserHome'} />
    )
  }

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <Container>
      {user.role === 'Admin' && (
        <>
      <FormGroup>
        <FormControl>
      <InputLabel id="assignedDepartmentLabel">Assigned department</InputLabel>
        <Select
          required
          labelId='assignedDepartment'
          label='assignedDepartment'
          id='assignedDepartment'
          value={assignedDepartment}
          onChange={(e) => setAssignedDepartment(e.target.value)}
          >
          <MenuItem value={'Electrical'}>Electrical</MenuItem>
          <MenuItem value={'Plumbing'}>Plumbing</MenuItem>
          <MenuItem value={'Structural'}>Structural</MenuItem>
        </Select>
        </FormControl>
          <TextField 
            required
            margin='normal'
            id='clientName'
            label="Client name"
            value={clientName}
            onChange={(e) => {setClientName(e.target.value)}}
          />
          <TextField
            margin='normal'
            id='clientPhone'
            label="Client phone"
            value={clientPhone}
            helperText='Enter format (###)###-####'
            onChange={(e) => {setClientPhone(e.target.value)}}
          />
          <TextField
            margin='normal'
            id='clientCell'
            label="Client cell"
            value={clientCell}
            helperText='Enter format (###)###-####'
            onChange={(e) => {setClientCell(e.target.value)}}
          />
          <TextField 
            required
            margin='normal'
            id='clientEmail'
            label="Client email"
            value={clientEmail}
            onChange={(e) => {setClientEmail(e.target.value)}}
          />
          <TextField 
            required
            margin='normal'
            id='clientLocation'
            label="Client location"
            value={clientLocation}
            onChange={(e) => {setClientLocation(e.target.value)}}
          />
          </FormGroup>
          </>
          )}
          <FormControl>
          <FormGroup>
          <TextField 
            required
            multiline
            margin='normal'
            id='description'
            label="Description"
            value={description}
            onChange={(e) => {setDescription(e.target.value)}}
          />
          {user.role === 'Resident' && (<FormControl>
            <FormLabel id="assignedDepartmentLabel">Issue</FormLabel>
            <RadioGroup
              name="assignedDepartment"
              value={assignedDepartment}
              onChange={(e) => {setAssignedDepartment(e.target.value)}}
            >
              <FormControlLabel value="Electrical" control={<Radio />} label="Switch, outlet, light, appliance" />
              <FormControlLabel value="Plumbing" control={<Radio />} label="Leak, clogged drain/toilet, leaky faucet" />
              <FormControlLabel value="Structural" control={<Radio />} label="Floor, wall, other" />
            </RadioGroup>
          </FormControl>)}
          <Button variant='contained' style={{marginBottom:'8px'}} onClick={(e:SyntheticEvent) => {submit(e)}}>Submit</Button>
          <Button variant='contained' onClick={() => {setRedirect(true)}}>Cancel</Button>
        </FormGroup>
      </FormControl>
      </Container>
    </div>
  )
}

export default TicketForm