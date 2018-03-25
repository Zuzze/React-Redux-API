import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchVessels } from '../../actions/apiActions'
import { VesselReducer } from '../../reducers/vesselReducer'
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