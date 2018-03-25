import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    getVessels,
    getContainers,
    getVesselPlans,
    createVesselPlans,
    getVesselTable
  } from '../../modules/counter'
  import { fetchVessels } from '../../actions/apiActions'
  import { VesselReducer } from '../../reducers/vesselReducer'
//import {vessels} from '../../modules/vessels'
import ResponsiveTable from './../../components/responsiveTable';
require('./style.scss');

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Vessels extends Component {

  /*constructor(props){
    super(props);
    this.vessels = [];
    this.state = {
      vessels: [],
    }
  }*/

  componentDidMount(){
    this.props.dispatch(fetchVessels());
    console.log(this.props);
  }
  
  render() {
    console.log(this.props);
    const { error, loading, vessels } = this.props;
    
    
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container" align="center">
        <h1>VESSELS</h1>
        <p>List of leaving vessels</p>
        <ResponsiveTable 
          tableData = {this.props.vessels}
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

const mapActionsToProps = {
 
}
 
    /*<div id="container">
    
        <button onClick={props.getVessels}>VESSELS</button>
        <button onClick={props.getContainers}>CONTAINERS</button>
        <button onClick={props.getVesselPlans}>VESSEL PLANS</button>
        <button onClick={props.createVesselPlans}>ADD VESSEL PLAN</button>
        
        <div id="content">
          {props.getVesselTable}
        </div>
          
          <h1>Home</h1>
          <p>Count: {props.count}</p>
      
          <p>
            <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
            <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
          </p>
      
          <p>
            <button onClick={props.getVessels} disabled={props.isDecrementing}>FETCH</button>
            <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
          </p>
      
          <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
    
    
          <button id="getData" onClick={props.createVesselPlans}>POST DATA </button>
          <VesselPlanTable/>
          <LeavingVessels/>
        </div>*/
  


/*transform component to container
function mapStateToProps(state){
    return {
      vessels: state.vessels,
      //vesselPlans: state.vesselPlans
    };
    //count: state.counter.count
}
  
/*function mapDispatchToProps( )dispatch => bindActionCreators({
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    getVessels,
    getContainers,
    getVesselPlans,
    createVesselPlans,
    getVesselTable,
    changePage: () => push('/about-us')
  }, dispatch)*/


//connect container stuff to component
//export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default connect(mapStateToProps)(Vessels)