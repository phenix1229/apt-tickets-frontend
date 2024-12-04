import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Button, Toolbar, useScrollTrigger } from '@mui/material'

function ElevationScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

const Navbar = () => {
  return (
    <ElevationScroll>
    <AppBar>
      <Toolbar>
        <Link to=".\">
          <Button variant='contained' disableElevation>Home</Button>
        </Link>
        <Link to=".\Login">
        <Button variant='contained' disableElevation>Login</Button>
        </Link>
        <Link to=".\Users.tsx">
        <Button variant='contained' disableElevation>Users</Button>
        </Link>
        <Link to=".\Tickets.tsx">
        <Button variant='contained' disableElevation>Tickets</Button>
        </Link>
        <Link to=".\SignOut.tsx">
        <Button variant='contained' disableElevation>Sign Out</Button>
        </Link>
      </Toolbar>
    </AppBar>
    </ElevationScroll>
  )
}

export default Navbar
