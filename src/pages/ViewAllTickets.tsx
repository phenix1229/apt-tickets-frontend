import { useEffect } from "react"
import TicketsViewer from "../components/TicketsViewer"
import '../interceptors/axios'
import { setAuth } from "../app/authSlice"
import { useDispatch } from "react-redux"

const ViewAllTickets = () => {
    // const user = useSelector((state:RootState) => state.user.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        (async () => {
          try{
            await axios.get('http://localhost:5000/api/users/authUser')
            
            dispatch(setAuth(true))
        } catch(error:any) {
            alert(error.response.message)
            dispatch(setAuth(false))
          }
        })();
      }, []);
    return (
        <TicketsViewer />
    )
}

export default ViewAllTickets
