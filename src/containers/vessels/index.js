import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchVessels } from '../../actions/vesselActions'
import ResponsiveTable from './../../components/responsiveTable';
require('./style.scss');


class Vessels extends Component {


  componentDidMount(){
    this.props.dispatch(fetchVessels()); 
    console.log(this.props);

  }
  
  render() {
    console.log(this.props);
    const { error, loading, vessels } = this.props;
    
    if (error) {
      console.log(`Error! ${error.message}`)
      return <div>Something is not right, check console for details</div>;
    }

    if (loading) {
      console.log("loading");
      return <div></div>;
    }

    return (
      <div className="container" align="center">
        <h1>VESSELS</h1>
        <p>List of leaving vessels</p>
        <ResponsiveTable 
          tableData = {vessels.map( v => [v.id, v.name])}
          tableHeaders = {['Vessel ID', 'Vessel Name']}
        />
      </div>
    )
  }
}

//update changes in events
const mapStateToProps = state => ({
  vessels: state.vessels.items,
  loading: state.vessels.loading,
  error: state.vessels.error
});

export default connect(mapStateToProps)(Vessels)