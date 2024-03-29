import React from 'react';
import ResponsiveTable from '../../components/responsiveTable';
import { fetchContainers } from '../../actions/containerActions'
import { connect } from 'react-redux'

class Containers extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(fetchContainers());
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    const { error, loading, containers } = this.props;
     
    if (error) {
      console.log(`Error! ${error.message}`)
      return <div>Something is not right, check console for details</div>;
    }

    if (loading) {
      console.log("loading");
      return <div></div>;
    }

    return (
      <div align="center" className="container">
        <h1>CONTAINERS</h1>
        <p>List of all containers to be shipped</p>
        <ResponsiveTable
          tableHeaders = {['Container ID', 'Container number']}
          tableData = {containers.map( c => [c.id, c.container_number])}
        />
      </div>
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