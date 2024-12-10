
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import '../interceptors/axios'

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 220 },
  {
    field: 'openDate',
    headerName: 'Open date',
    width: 150,
    // editable: true,
  },
  {
    field: 'clientName',
    headerName: 'Client name',
    width: 150,
    // editable: true,
  },
  {
    field: 'clientLocation',
    headerName: 'Client location',
    // type: 'number',
    width: 110,
    // editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 260,
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows:object[] = [];

const ticketRows = async () => {
    const {data}:any = await axios.get('http://localhost:5000/api/tickets/all')
    for(const ticket of data){
        rows.push({
            id:ticket._id,
            openDate:ticket.openDate,
            clientName:ticket.clientName,
            clientLocation:ticket.clientLocation,
            description:ticket.description
        })
    }
}
ticketRows()
export default function TicketsViewer() {
  return (
    
    <Box sx={{ height: 400, width: '100%' }}>
        <br/>
        <br/>
        {/* <br/> */}
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
