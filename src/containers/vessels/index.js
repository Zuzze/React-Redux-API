import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs'; 
import { Button } from 'react-bootstrap';
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
//import {vessels} from '../../modules/vessels'
import VesselPlanTable from './../../components/VesselPlanTable';
import LeavingVessels from './../../components/LeavingVessels';
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

  constructor(props){
    super(props);
    this.vessels = [];
    this.state = {
      vessels: [],
    }
  }

  componentDidMount(){
    this.createVesselList();
  }

  createVesselList() {
    fetch('http://127.0.0.1:8000/vessels')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.vessels = data; 
    });
    console.log(this.vessels);
  }
  
  render() {
    return (
      <div className="container" align="center">
        <h1>VESSELS</h1>
        <p>List of leaving vessels</p>
        <ResponsiveTable 
          tableData = {this.vessels}
          tableHeaders = {['Vessel ID', 'Vessel Name']}
        />
      </div>
    )
  }
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
  


//transform component to container
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