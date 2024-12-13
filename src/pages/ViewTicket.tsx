
import { Button, Container, FormControl, Grid2, TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import React, { useState } from 'react'
import UpdateTicket from './UpdateTicket'
import { Navigate } from 'react-router-dom'
import '../interceptors/axios'

const ViewTicket = () => {
  const [editing, setEditing] = useState(false)
  const [redirect, setRedirect] = useState('')
  const ticket:any = useSelector((state:RootState) => state.ticket.ticket)
  const user:any = useSelector((state:RootState) => state.user.user)

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

  const updates = (arr:any) => {
    return (
      <ul className='noBullets'>
        {arr.map((item:any, index:any) => (
          <React.Fragment key={index}>
            <li>
            <TextField sx={{width:'100%'}}
              disabled
              multiline
              margin='normal'
              id={`update ${index}`}
              label={`Update---${item.updateDate}---${item.updateTime}---${item.updatedBy}`}
              value={item.comment}
            />
            </li>
          </React.Fragment>
        ))}
      </ul>
    );
  }

  if(redirect === 'back'){
    return (<Navigate to={'/ViewAllTickets'} />)
  }
  
  if(redirect === 'comment'){
    return (<Navigate to={'/AddComment'} />)
  }

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      {!editing && <Container sx={{width:'50%'}}>
      <h2>Ticket</h2>
      <Grid2 container rowSpacing={1} columnSpacing={1}>
        <Grid2 size={4}>
          {Item('ID', 'id', ticket.id)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client name', 'clientName', ticket.clientName)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client email', 'clientEmail', ticket.clientEmail)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client cell', 'clientCell', ticket.clientCell)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client phone', 'clientPhone', ticket.clientPhone)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client location', 'clientLocation', ticket.clientLocation)}
        </Grid2>
      </Grid2>
          <TextField sx={{width:'100%'}}
            disabled
            multiline
            margin='normal'
            id='description'
            label="Description"
            value={ticket.description}
          />
          {ticket.updateComments.length > 0 && 
            updates(ticket.updateComments)
          }
            <FormControl>

              {ticket.ticketStatus === 'Active' && (
                <Button variant='contained' style={{marginBottom:'8px'}} onClick={() => setRedirect('comment')}>Add comment</Button>
              )}
          {/* {user.role === 'Staff' && (
            <Button variant='contained' onClick={() => {setRedirect('back')}}>Back</Button>
          )} */}
            </FormControl>
        </Container>}
        <Container>
        {(user.role !== 'Staff' && editing) && (
          <UpdateTicket />
        )}
          {(user.role !== 'Staff' && ticket.ticketStatus !== 'Inactive') && (
            <Button variant='contained' style={{marginBottom:"8px"}} onClick={() => {setEditing(!editing)}}>{editing === false ? 'Edit ticket' : 'Cancel'}</Button>
          )}
          </Container>
          <FormControl>
          {/* {user.role === 'Staff' && ( */}
            <Button variant='contained' onClick={() => {setRedirect('back')}}>Back</Button>
          {/* )} */}
          </FormControl>

    </div>
  )
}

export default ViewTicket