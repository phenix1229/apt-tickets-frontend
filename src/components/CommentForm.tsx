import { Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, TextField } from "@mui/material"
import { SyntheticEvent, useState } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"

const CommentsForm = () => {
    const [comment, setComment] = useState('')
    const [closeTicket, setCloseTicket] = useState('Active')
    const [redirect, setRedirect] = useState(false)
    const ticket:any = useSelector((state:RootState) => state.ticket.ticket)
    const user:any = useSelector((state:RootState) => state.user.user)

    const submit = async (e:SyntheticEvent) => {
      e.preventDefault()
      if(ticket.ticketStatus === 'Inactive'){
        return alert('Ticket is inactive and cannot be commented on')
      }
      try {
        alert(`${user.firstName} ${user.lastName}`)
        const response:any = await axios.patch(`http://localhost:5000/api/tickets/${ticket.id}`, {
          firstName:user.firstName,
          lastName:user.lastName,
          comment,
          ticketStatus:closeTicket
        })
        alert(JSON.stringify(response.data.message));
        setRedirect(true)
      }
     catch(error:any){
      alert(JSON.stringify(error.response.data.message))
    }
  }

if(redirect){
  return <Navigate to={"/ViewTicket"} />
}

    return (
      <Container>
        <br/>
        <br/>
        <br/>
        <h2>Please enter new comment</h2>
            <TextField 
                required
                multiline
                margin='normal'
                id='comment'
                label="Comment"
                value={comment}
                onChange={(Event) => setComment(Event.target.value)}
                />
             <FormGroup>
                <FormControlLabel control={<Checkbox id={closeTicket} value={closeTicket} onChange={() => {setCloseTicket('Inactive')}} name="closeTicket" />} label="Close ticket" />
                  <Container>

                <FormControl>
             <Button variant="contained" style={{marginBottom:'8px'}} onClick={(e) => submit(e)}>Submit</Button>
             <Button variant="contained" onClick={() => setRedirect(true)}>Cancel</Button>
        </FormControl>
                  </Container>
             </FormGroup>
      </Container>
    )
  }
  
  export default CommentsForm