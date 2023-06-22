import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'


const TableData = ({Users}) => {
    return (
        <>
            <TableBody>
                {Users.map((row) => {
                    const {id, name, email, phone, website} = row;
                    const  { street,  city, zipcode} = row.address; 
                    return (
                    <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {id}
                        </TableCell>
                        <TableCell align="right">{name}</TableCell>
                        <TableCell align="right">{email}</TableCell>
                        <TableCell align="right">{street}, {city}</TableCell>
                        <TableCell align="right">{phone}</TableCell>
                        <TableCell align="right">{website}</TableCell>
                    </TableRow>
                )})}
            </TableBody>

        </>
    )
}

export default TableData;
