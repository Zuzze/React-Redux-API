import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVesselPlans } from '../../actions/vesselPlanActions';
import { VesselPlanReducer } from '../../reducers/vesselPlanReducer';
import { fetchContainers } from '../../actions/containerActions';
import { containerReducer } from '../../reducers/containerReducer';
import { fetchVessels } from '../../actions/apiActions';
import { vesselReducer } from '../../reducers/vesselReducer';
import ResponsiveTable from '../../components/responsiveTable';
import PlanForm from '../../components/planForm';
require('./style.scss');

class VesselPlans extends Component {

  componentDidMount(){
    this.props.dispatch(fetchVesselPlans());
    this.props.dispatch(fetchContainers());
    this.props.dispatch(fetchVessels());
    console.log(this.props);
  }

  assignContainerToVessel(event){
    console.log(this.state.selectedVessel);
    console.log(this.state.selectedContainers);
    console.log("posting new vessel plans...")
    fetch('http://127.0.0.1:8000/vessel_plans', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        vessel_id: 1,
        container_ids: 2,
        })
    })
    //this.createVesselPlanList();
  }

  createVesselPlanAssignList(vesselId, containerIds){
    console.log("posting new vessel plans...");
    fetch('http://127.0.0.1:8000/vessel_plans', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        vessel_id: 1,
        container_ids: [2],
        })
    })
    this.createVesselPlanList();
  }
  
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  getTableData(){
    let vesselList = []
    let containersList = []
    this.props.vesselPlans.map( plan => {
      vesselList.push(plan.vessel_id);
      let containerString = "";
      plan.container_ids.map( container => {
        containerString += container.value + ", ";
      });
    });
    console.log(vesselList);
    console.log(containersList);
    return [vesselList, containersList]
  }


  render() {
    console.log(this.props);
    const { error, loading, vesselPlans, vessels, containers } = this.props;
    
    
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
        <div align="center" className="container">
          <PlanForm/>
          <h1>VESSEL PLANS</h1>
           <p>Containers that are assigned to vessels</p>
          <ResponsiveTable
            tableData={this.props.vesselPlans}
            tableHeaders={['Vessel (id)', 'containers (id)']}
          />
        </div>
    )
  }
}

const mapStateToProps = state => ({
  vesselPlans: state.vesselPlans.items,
  loading: state.vesselPlans.loading,
  error: state.vesselPlans.error
});

export default connect(mapStateToProps)(VesselPlans)