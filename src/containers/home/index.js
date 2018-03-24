import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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
require('./style.scss');

class Home extends Component {

  constructor(){
    super();
    this.state = {
      vessels: [],
      containers: [],
      vesselPlans: []
    }
  }

  componentDidMount(){
    this.createVesselList();
    this.createContainerList();
    this.createVesselPlanList();
  }

  createVesselList() {
    fetch('http://127.0.0.1:8000/vessels')
    .then(results => { return results.json()
    }).then(data => {
      console.log(data);
      let vessels = data.map( (vessel) => {
        console.log(vessel.id);
        return(
          <li key={vessel.id}>{vessel.id} {vessel.name}</li>
        )
      })
      this.setState({vessels: vessels});
    })
  }

  createContainerList(){
    fetch('http://127.0.0.1:8000/containers')
    .then(results => { return results.json()
    }).then(data => {
      console.log(data);
      let containers = data.map( (container) => {
        console.log(container.id);
        return(
          <li key={container.id}>{container.id} {container.container_number}</li>
        )
      })
      this.setState({containers: containers});
    })
  }

  createVesselPlanList(){
    fetch('http://127.0.0.1:8000/vessel_plans')
    .then(results => { return results.json()
    }).then(data => {
      console.log(data);
      let vesselPlans = data.map( (plan) => {
        return(
          <li key={plan.vessel_id + plan.container_ids}>
            {plan.vessel_id} {plan.container_ids}
          </li>
        )
      })
      this.setState({vesselPlans: vesselPlans});
    })
  }

  render() {
    return (
      <div>
        <h1>VESSELS</h1>
        <ul>
          {this.state.vessels}
        </ul>

        <h1>CONTAINERS</h1>
        <ul>
          {this.state.containers}
        </ul>

        <h1>VESSEL PLANS</h1>
        <ul>
          {this.state.vesselPlans}
        </ul>
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
export default connect(mapStateToProps)(Home)