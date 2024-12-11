
import { useSelector } from "react-redux"
import { RootState } from "../app/store"

// const ticket = useSelector((state: RootState) => state.ticket.ticket)
// const dispatch = useDispatch();

const ViewTicket = () => {
  const ticket = useSelector((state:RootState) => state.ticket.ticket)
  // useEffect(()=>{
  //   (async () => {
  //     try{
  //       const {data}:any = await axios.get(`http://localhost:5000/api/tickets/${_id}`)
  //       alert(ticket)
  //     } catch(error:any) {
  //       alert(error.response.data.message)
  //     }
  //   })();
  // }, []);
  // alert(ticket)
    return (
      <div>{JSON.stringify(ticket)}</div>
    )
  }
  
  export default ViewTicket