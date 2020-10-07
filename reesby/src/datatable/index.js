import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function Datatable({data}) {

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
 const classes = useStyles();


  return (
      <TableContainer component={Paper} style={{border: "1px solid rgb(0, 0, 0)"}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>

       
        <TableRow style={{border: "2px solid rgb(0, 0, 0)"}}>
        <TableCell>Client Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Industry</TableCell>
            <TableCell>Point of Contract</TableCell>
            <TableCell>Website</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>

        {data.map(el => {
            return (
              <TableRow key={el.clientId}>
                <TableCell>{el.clientName}</TableCell>
                <TableCell>{el.clientEmail}</TableCell>
                <TableCell>{el.clientWorkPhone}</TableCell>
                <TableCell>{el.clientIndustry}</TableCell>
                <TableCell>{el.clientContract}</TableCell>
                <TableCell>{el.clientWebsite}</TableCell>
              </TableRow>
            );
          })}

        </TableBody>
      </Table>
    </TableContainer>
  );
}

