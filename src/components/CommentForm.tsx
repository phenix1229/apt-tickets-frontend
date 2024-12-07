import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, TextField } from "@mui/material"
import { useState } from "react"

const CommentsForm = () => {
    const [comment, setComment] = useState('')
    const [closeTicket, setCloseTicket] = useState('')
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <FormControl>
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
                <FormControlLabel control={<Checkbox id={closeTicket} value={closeTicket} onChange={(Event) => setCloseTicket(Event.target.value)} name="closeTicket" />} label="Close ticket" />
             </FormGroup>
             <Button variant="contained" onClick={()=>{}}>Submit</Button>
        </FormControl>
      </div>
    )
  }
  
  export default CommentsForm