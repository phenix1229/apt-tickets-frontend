
import { Box, Container, FormControl, FormGroup, Grid2, InputLabel, MenuItem, Paper, Select, styled, TextField } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import React from 'react'

const ViewTicket = () => {
  const ticket:any = useSelector((state:RootState) => state.ticket.ticket)

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

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <h3>Ticket</h3>
      <br/>
      <Container sx={{width:'50%'}}>
      <Grid2 container rowSpacing={1} columnSpacing={1}>
        <Grid2 size={4}>
          {Item('ID', 'id', ticket.id,)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client name', 'clientName', ticket.clientName,)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client email', 'clientEmail', ticket.clientEmail,)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client cell', 'clientCell', ticket.clientCell,)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Client phone', 'clientPhone', ticket.clientPhone,)}
        </Grid2>
        <Grid2 size={4}>
          {Item('Clent location', 'clientLocation', ticket.clientLocation,)}
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
          <>
          {ticket.updateComments.length > 0 && 
            updates(ticket.updateComments)
          }
          </>
        </Container>
    </div>
  )
}

export default ViewTicket