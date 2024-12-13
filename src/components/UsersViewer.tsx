
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridEventListener, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import axios from 'axios';
import '../interceptors/axios'
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../app/usersSlice';
import { RootState } from '../app/store';
import { Container } from '@mui/material';
import { setSelectedUser } from '../app/selectedUserslice';



const columns: GridColDef<(typeof rows)[number]>[] = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 220 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'unit',
    headerName: 'Unit',
    width: 110,
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 90,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone number',
    width: 140,
  },
  {
    field: 'cellNumber',
    headerName: 'Cell number',
    width: 140,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 180,
  },
  {
    field: 'userStatus',
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

export default function UsersViewer() {
const [redirect, setRedirect] = useState(false)
const dispatch = useDispatch();
let users:any = useSelector((state:RootState) => state.users.users)

useEffect(() => {
  (async ()=> { 
      try{
        await axios.get('http://localhost:5000/api/users/all')
      .then((response:any) => {
        const stringData:any = JSON.stringify(response.data)
        const editData =stringData.replaceAll("_id","id")
        dispatch(setUsers(JSON.parse(editData)))
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    } catch(error){}
  })();
  }, []);

  
  const rowClicked: GridEventListener<'rowClick'> = async (params) => {
    dispatch(setSelectedUser(users.find((user:any) => user.id === `${params.row.id}`)))
    setRedirect(true)
  };


  if(redirect){
    return <Navigate to="/ViewUser" />
  }

  
  return (
    <Container>
        <h2>All* users are displayed by default, please use filters to customize your view</h2>
        <p>* Active and inactve</p>
    <Box sx={{ height: 400, width: '100%' }}>
        <br/>
        <br/>
      <DataGrid
        rows={users}
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
