import { Container } from "@mui/material"
import { Link } from "react-router-dom"


const Index = () => {
  return (
    <Container>
      <h2>Welcome to ABC Building's maintenance ticket system.</h2>
      <h3>Please <Link to={'/Login'}>log in</Link> in or <Link to={'Register'}>register</Link></h3>
    </Container>
  )
}

export default Index