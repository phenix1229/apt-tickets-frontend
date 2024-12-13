import { FormControl, InputLabel, Select, MenuItem, FormGroup, TextField, Container, Grid2, Button } from "@mui/material"
import { SyntheticEvent, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import axios from "axios"
import '../interceptors/axios'
import { Navigate } from "react-router-dom"

const UpdateTicketForm = () => {
  const ticket:any = useSelector((state:RootState) => state.ticket.ticket);

  const [redirect, setRedirect] = useState(false)

    const [clientName, setClientName] = useState(ticket.clientName)
    const [clientPhone, setClientPhone] = useState(ticket.clientPhone)
    const [clientCell, setClientCell] = useState(ticket.clientCell)
    const [clientEmail, setClientEmail] = useState(ticket.clientEmail)
    const [clientLocation, setClientLocation] = useState(ticket.clientLocation)
    const [assignedDepartment, setAssignedDepartment] = useState(ticket.assignedDepartment)
    const [description, setDescription] = useState(ticket.description)

    const submit = async (e:SyntheticEvent) => {
      e.preventDefault()
      await axios.put(`tickets/${ticket.id}`, {
      clientName,
      clientPhone,
      clientCell,
      clientEmail,
      clientLocation,
      assignedDepartment,
      description
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
        return <Navigate to="/ViewAllTickets" />
      }

  return (
    <div>
      <br/>
      <Container sx={{width:'50%'}}>
      <h2>Ticket</h2>
      <br/>
        <FormGroup>
      <FormControl>
      <InputLabel id="assignedDepartmentLabel">Assigned department</InputLabel>
        <Select sx={{width:'100%'}}
          required
          labelId='assignedDepartment'
          label='assignedDepartment'
          id='assignedDepartment'
          value={assignedDepartment}
          defaultValue={ticket.assignedDepartment}
          onChange={(Event) => setAssignedDepartment(Event.target.value)}
          >
          <MenuItem value={'Electrical'}>Electrical</MenuItem>
          <MenuItem value={'Plumbing'}>Plumbing</MenuItem>
          <MenuItem value={'Structural'}>Structural</MenuItem>
        </Select>
        </FormControl>
            </FormGroup>
      <Grid2 container rowSpacing={1} columnSpacing={1}>
        <Grid2 size={4}>
          {Item('Client name', 'clientName', ticket.clientName, (e:any) => {setClientName(e.target.value)})}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client email', 'clientEmail', ticket.clientEmail, (e:any) => {setClientEmail(e.target.value)})}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client cell', 'clientCell', ticket.clientCell, (e:any) => {setClientCell(e.target.value)})}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client phone', 'clientPhone', ticket.clientPhone, (e:any) => {setClientPhone(e.target.value)})}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client location', 'clientLocation', ticket.clientLocation, (e:any) => {setClientLocation(e.target.value)})}
        </Grid2>
      </Grid2>
          <TextField sx={{width:'100%'}}
            multiline
            margin='normal'
            id='description'
            label="Description"
            value={ticket.description}
            onChange={(e:any) => {setDescription(e.target.value)}}
          />
          <Button variant="contained" style={{marginBottom:'8px'}} onClick={(e) => submit(e)}>Save</Button>
        </Container>
    </div>
  )
}

export default UpdateTicketForm