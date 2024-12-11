
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridEventListener, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import axios from 'axios';
import '../interceptors/axios'
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTicket } from '../app/ticketSlice';



const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 220 },
  {
    field: 'openDate',
    headerName: 'Open date',
    width: 150,
  },
  {
    field: 'clientName',
    headerName: 'Client name',
    width: 150,
  },
  {
    field: 'clientLocation',
    headerName: 'Client location',
    width: 110,
  },
  {
    field: 'description',
    headerName: 'Description',
    sortable: false,
    width: 260,
  },
];











const custonToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  )
}
const rows:any = [];

export default function TicketsViewer() {
  const [redirect, setRedirect] = useState(false)
  const [tickets, setTickets] = useState([])
const dispatch = useDispatch();

useEffect(() => {
  (async ()=> { 
    try{
      await axios.get('http://localhost:5000/api/tickets/all')
    .then((response:any) => {
      const stringData:any = JSON.stringify(response.data)
      const editData =stringData.replaceAll("_id","id")
      setTickets(JSON.parse(editData))
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
} catch(error){}})();
}, []);

// const ticketRows =  () => {
//       const ticketsRow:object[] = []
//       for(const item of tickets){
//           ticketsRow.push({
//             item
//           });
//         }
//         return ticketsRow
//     }

  

  const rowClicked: GridEventListener<'rowClick'> = async (params) => {
    const {data} = await axios.get(`http://localhost:5000/api/tickets/${params.row.id}`)
    dispatch(setTicket(data))
    setRedirect(true)
    // alert(`Movie "${params.row.id}" clicked`);
  };


  if(redirect){
    return <Navigate to="/viewTicket" />
  }

  return (
    <Box sx={{ height: 400, width: '100%' }}>
        <br/>
        <br/>
      <DataGrid
        rows={tickets}
        columns={columns}
        onRowClick={rowClicked}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        slots={{toolbar:custonToolbar}}
      />
    </Box>
  );
}
