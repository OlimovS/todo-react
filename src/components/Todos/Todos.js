import React, { Fragment, useState } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

import MakeTodo from '../MakeTodo/MakeTodo.js';

const useStyles = makeStyles({
  thead: {
    fontWeight: 'bold',
  },
});
function Todos(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseButton = (text) => {
    setOpen(false);
    console.log(text);
  }

  return (
    <Fragment>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
        <Typography variant='h4'>
         Todo List
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          ADD TODO
        </Button>
        </div>
        <MakeTodo
            open={open}
            handleClose={handleClose}
            handleCloseButton={handleCloseButton}
            />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.thead}>Completed</TableCell>
                <TableCell className={classes.thead}>Todo</TableCell>
                <TableCell className={classes.thead}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell>
                      <Checkbox
                          defaultChecked
                          color="primary"
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                  </TableCell>
                  <TableCell>Text about Todo</TableCell>
                  <TableCell><DeleteIcon /></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
    </Fragment>
  );
}

export default Todos;
