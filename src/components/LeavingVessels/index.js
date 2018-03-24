import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { combineReducers } from 'redux';

//Editable table containing vessels and their containers
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
    margin: 10
  },
});

let id = 0;
function createData(vessel, containers) {
  id += 1;
  return { id, vessel, containers,};
}

const data = [];

function VesselPlanTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Vessel</TableCell>
            <TableCell>Leaving</TableCell>
            <TableCell>Arriving</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.containers}</TableCell>
                <TableCell>{n.vessel}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

VesselPlanTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VesselPlanTable);