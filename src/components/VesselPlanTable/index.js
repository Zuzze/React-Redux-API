import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

//Editable table containing vessels and their containers
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    margin: 10
  },
});

let id = 0;
function createData(vessel, containers) {
  id += 1;
  return { id, vessel, containers,};
}

const data = [
  createData('vessel 1', [1, 2]),
  createData('vessel 2', [3]),
  createData('vessel 3', [5]),
];

function VesselPlanTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Vessels</TableCell>
            <TableCell>Containers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.vessel}</TableCell>
                <TableCell>{n.containers}</TableCell>
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