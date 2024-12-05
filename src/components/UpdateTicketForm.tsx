import { FormControl, InputLabel, Select, MenuItem, FormGroup, TextField } from "@mui/material"
import { useState } from "react"

const UpdateTicketForm = () => {
    const [clientName, setClientName] = useState('')
    const [clientPhone, setClientPhone] = useState('')
    const [cleintCell, setClientCell] = useState('')
    const [clientEmail, setClientEmail] = useState('')
    const [clientLocation, setClientLocation] = useState('')
    const [assignedDepartment, setAssignedDepartment] = useState('')
    const [description, setDescription] = useState('')

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <FormControl>
      <InputLabel id="assignedDepartmentLabel">Assigned department</InputLabel>
        <Select
          required
          labelId='assignedDepartment'
          label='assignedDepartment'
          id='assignedDepartment'
          value={assignedDepartment}
          onChange={(Event) => setAssignedDepartment(Event.target.value)}
          >
          <MenuItem value={'Electrical'}>Electrical</MenuItem>
          <MenuItem value={'Plumbing'}>Plumbing</MenuItem>
          <MenuItem value={'Structural'}>Structural</MenuItem>
        </Select>
        <FormGroup>
          <TextField 
            required
            margin='normal'
            id='clientName'
            label="Client name"
            value={clientName}
            onChange={(Event) => setClientName(Event.target.value)}
          />
          <TextField
            margin='normal'
            id='clientPhone'
            label="Client phone"
            value={clientPhone}
            onChange={(Event) => setClientPhone(Event.target.value)}
          />
          <TextField
            margin='normal'
            id='clientCell'
            label="Client cell"
            value={cleintCell}
            onChange={(Event) => setClientCell(Event.target.value)}
          />
          <TextField 
            required
            margin='normal'
            id='clientEmail'
            label="Client email"
            value={clientEmail}
            onChange={(Event) => setClientEmail(Event.target.value)}
          />
          <TextField 
            required
            margin='normal'
            id='clientLocation'
            label="Client location"
            value={clientLocation}
            onChange={(Event) => setClientLocation(Event.target.value)}
          />
          <TextField 
            required
            multiline
            margin='normal'
            id='description'
            label="Description"
            value={description}
            onChange={(Event) => setDescription(Event.target.value)}
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}

export default UpdateTicketForm