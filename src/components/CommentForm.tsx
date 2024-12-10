import { Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, TextField } from "@mui/material"
import { SyntheticEvent, useState } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"

const CommentsForm = (id:any) => {
    const [comment, setComment] = useState('')
    const [closeTicket, setCloseTicket] = useState('Active')
    const [redirect, setRedirect] = useState(false)

    const submit = async (e:SyntheticEvent) => {
      e.preventDefault()
      try {
        const response:any = await axios.patch(`http://localhost:5000/api/tickets/${id.id}`, {
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
                <FormControlLabel control={<Checkbox id={closeTicket} value={closeTicket} onChange={() => setCloseTicket('Inactive')} name="closeTicket" />} label="Close ticket" />
                <FormControl>
             <Button variant="contained" onClick={(e) => submit(e)}>Submit</Button>
        </FormControl>
             </FormGroup>
      </Container>
    )
  }
  
  export default CommentsForm