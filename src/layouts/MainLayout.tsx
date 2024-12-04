import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ThemeProvider } from '@mui/material'
import theme from '../components/ui/Theme'

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Outlet />
    </ThemeProvider>
  )
}

export default MainLayout