import React from 'react'
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
import VesselPlanTable from './../../components/VesselPlanTable'
import LeavingVessels from './../../components/LeavingVessels'
import './style.scss'

  const Home = props => (
    <div id="container">

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
    </div>
  )

const mapStateToProps = state => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
  })
  
  const mapDispatchToProps = dispatch => bindActionCreators({
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
  }, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home)