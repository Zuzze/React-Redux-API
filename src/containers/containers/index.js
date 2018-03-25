import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import ResponsiveTable from '../../components/responsiveTable';
import { fetchContainers } from '../../actions/containerActions'
import { ContainerReducer } from '../../reducers/containerReducer'
import { connect } from 'react-redux'

class Containers extends React.Component {
  
    constructor(props){
      super(props);
    }
  
    componentDidMount(){
      this.props.dispatch(fetchContainers());
      console.log(this.props);
    }
  

    createContainerList(){
      fetch('http://127.0.0.1:8000/containers')
      .then(results => { return results.json()
      }).then(data => {
        console.log(data);
        this.tableData = data;
        let containers = data.map( (container) => {
          console.log(container.id);
          return(
            <li key={container.id}>{container.id} {container.container_number}</li>
          )
        })
        this.setState({containers: containers});
      })
    }


  render() {

    return (
      <div align="center" className="container">
        <h1>CONTAINERS</h1>
        <p>List of all containers to be shipped</p>
        <ResponsiveTable
          tableHeaders = {['Container ID', 'Container number']}
          tableData = {this.props.containers}
        />
      </div>
      

      /*
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
      </Paper>*/
    );
  }
}

//update changes in events
const mapStateToProps = state => ({
  containers: state.containers.items,
  loading: state.containers.loading,
  error: state.containers.error
});

export default connect(mapStateToProps)(Containers);