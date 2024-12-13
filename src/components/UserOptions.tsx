import { Box, Button, Container } from '@mui/material'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../app/store';

const UserOptions = () => {
  const user:any = useSelector((state:RootState) => state.user.user)

  return (
    <Container>
      <h3>{`Welcome ${user.firstName}`}</h3> 
      <br/>
      <br/>
      <br/>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Link to="/ViewAllTickets">
        <Button variant='contained'>View tickets</Button>
      </Link>
      {user.role !== 'Staff' &&
      <Link to='/CreateTicket'>
        <Button variant='contained'>New ticket</Button>
      </Link>}
      {user.role === 'Admin' &&
      <Link to="/ViewAllUsers">
        <Button variant='contained'>View users</Button>
      </Link>}
      {user.role === 'Admin' && 
      <Link to='/CreateUser'>
        <Button variant='contained'>New user</Button>
      </Link>}
      </Box>
    </Container>
  )
}

export default UserOptions