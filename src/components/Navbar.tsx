import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to=".\SignIn.tsx">Sign In</Link>
        <Link to=".\">Home</Link>
        <Link to=".\Users.tsx">Users</Link>
        <Link to=".\Tickets.tsx">Tickets</Link>
        <Link to=".\SignOut.tsx">Sign Out</Link>
      </div>
    </nav>
  )
}

export default Navbar