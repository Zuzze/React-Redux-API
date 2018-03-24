import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { combineReducers } from 'redux';
import { getVessels } from '../../modules/counter'
import './style.scss'

const LeavingVessels = props => (
    <div id="container">
      <h1>VESSELS</h1>
      <p>Count: {props.count}</p>
        <div id="vessels" onClick={props.getVessels}>{props.getVessels}</div>
    </div>
  )

  const mapStateToProps = state => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
  })

  export default LeavingVessels
