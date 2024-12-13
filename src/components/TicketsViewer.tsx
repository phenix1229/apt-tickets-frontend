
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridEventListener, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import axios from 'axios';
import '../interceptors/axios'
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTicket } from '../app/ticketSlice';
import { setTickets } from '../app/ticketsSlice';
import { RootState } from '../app/store';
import { Container } from '@mui/material';



const columns: GridColDef<(typeof rows)[number]>[] = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 220 },
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
  {
    field: 'ticketStatus',
    headerName: 'Status',
    width: 70,
  }
];



const customToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  )
}
const rows:any = [];

export default function TicketsViewer() {
const [redirect, setRedirect] = useState(false)
const dispatch = useDispatch();
let user:any = useSelector((state:RootState) => state.user.user);
let tickets:any = useSelector((state:RootState) => state.tickets.tickets);

useEffect(() => {
  (async ()=> { 
    if(user.role === "Resident"){
      try{
        await axios.get(`tickets/byEmail/${user.email}`)
      .then((response:any) => {
        const stringData:any = JSON.stringify(response.data)
        const editData =stringData.replaceAll("_id","id")
        dispatch(setTickets(JSON.parse(editData)))
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    } catch(error){}
  }
    if(user.role === "Staff"){
      try{
        await axios.get(`tickets/byDepartment/${user.department}`)
      .then((response:any) => {
        const stringData:any = JSON.stringify(response.data)
        const editData =stringData.replaceAll("_id","id")
        dispatch(setTickets(JSON.parse(editData)))
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    } catch(error){ alert(error)}
  } 
  if(user.role === "Admin"){
    try{
      await axios.get('tickets/all')
    .then((response:any) => {
      const stringData:any = JSON.stringify(response.data)
      const editData =stringData.replaceAll("_id","id")
      dispatch(setTickets(JSON.parse(editData)))
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  } catch(error){}
  }})();
  }, []);

  
  const rowClicked: GridEventListener<'rowClick'> = async (params) => {
    dispatch(setTicket(tickets.find((ticket:any) => ticket.id === `${params.row.id}`)))
    setRedirect(true)
  };


  if(redirect){
    return <Navigate to="/viewTicket" />
  }

  
  return (
    <Container>
        <h2>All* tickets are displayed by default, please use filters to customize your view</h2>
        <p>* Active and inactve</p>
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
        slots={{toolbar:customToolbar}}
      />
    </Box>
    </Container>
  );
}
