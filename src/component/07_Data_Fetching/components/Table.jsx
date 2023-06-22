import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import TableData from './TableData';


const API = "https://jsonplaceholder.typicode.com/users";
export default function BasicTable() {
    const [Users, setUsers] = useState([]);

const fetchUsers = async (url) => {
    try {
        const responce = await fetch(url);
        const data = await responce.json();
        if (data.length > 0) {
            setUsers(data);
        }
        console.log(data);
        
    } catch (error) {
        console.log('Error', error);
    }
}
   useEffect(() => {
        fetchUsers(API);
    }, [])
    
  return (
    <Container sx={{marginTop:'50px'}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" >ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Website</TableCell>
          </TableRow>
        </TableHead>
      </Table>

      <TableData Users={Users}/>
    </TableContainer>
    </Container>
  );
}