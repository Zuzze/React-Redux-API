import React from 'react';
import { combineReducers } from 'redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync, 
  getVessels,
  getContainers
} from '../../modules/counter'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//Editable table containing vessels and their containers

export default class VesselPlanTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vessels: []
    }
  }
  
  componentDidMount() {
   this.state.vessels = this.props.decrement
   console.log(this.state.vessels);
  }

  loadData(){
    fetch('http://127.0.0.1:8000/vessels')
    .then((res) => { return res.json() })
    .then((data) => { 
        console.log(data);
        return data;
   })
  }

  render() {
    
    return (
      <div id="layout-content" className="layout-content-wrapper">
        {this.state.vessels.map(( vessel ) => {
          return (
            <tr key={vessel.id}>
              <td>{vessel.id}</td>
              <td>{vessel.name}</td>
            </tr>
          );
        })}
      </div>
    );
  }
}