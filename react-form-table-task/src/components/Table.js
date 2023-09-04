import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';

const CustomTable = ({ data, deleteData }) => {
  const navigate = useNavigate();

  const updateData = (index) => {
    navigate(`/form/${index}`);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Middle Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone No</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((rowData, index) => (
              <TableRow key={index}>
                <TableCell>{rowData.firstname}</TableCell>
                <TableCell>{rowData.middlename}</TableCell>
                <TableCell>{rowData.lastname}</TableCell>
                <TableCell>{rowData.address}</TableCell>
                <TableCell>{rowData.phone}</TableCell>
                <TableCell>{rowData.email}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => updateData(index)}>
                    Update
                  </Button>
                  <Button variant="contained" color="error" onClick={() => deleteData(index)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={() => navigate('/form')}>
        Add
      </Button>
    </>
  );
};

export default CustomTable;
