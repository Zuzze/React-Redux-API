import React, { Component } from 'react'
import ResponsiveTable from '../../components/responsiveTable'
require('./style.scss');

class VesselPlans extends Component {

  constructor(){
    super();
    this.state = {
      vesselPlans: [],
      selectedVessel: null,
      selectedContainers: []
    }
    this.selectVessel = this.selectVessel.bind(this);
    this.selectContainers = this.selectContainers.bind(this);
  }

  componentDidMount(){
    this.createVesselPlanList();
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
      if(vesselPlans.length > 0){
        this.setState({vesselPlans: vesselPlans});
      } else{
        this.setState({vesselPlans: 'No vessel plans have been created yet'});
      }
    })
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
        vessel_id: this.state.selectedVessel,
        container_ids: this.state.selectedContainers,
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

  selectVessel(event){
    console.log(event.target.value.toUpperCase());
    this.setState({selectVessel: event.target.value.toUpperCase()});
  }

  selectContainers(event){
    console.log(event.target.value.toUpperCase());
    let containers = [];
    containers.push(event.target.value.toUpperCase());
    this.setState({selectedContainers: containers});
  }
  
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <div align="center" className="container">
          <h1>ADD CONTAINER TO VESSEL</h1>
          <form>
            <label>
              Vessel
              <input type="text" name="vessel" value={this.state.selectedVessel} onChange={this.selectVessel} />
            </label>
            <label>
              Containers
              <input type="text" name="name" value={this.state.selectedContainers} onChange={this.selectContainers}/>
            </label>
            <input type="submit" value="Add" onClick={this.assignContainerToVessel}/>
          </form>

          <h1>CURRENT VESSEL PLANS</h1>
           <p>Containers that are assigned to vessels</p>
          <ResponsiveTable
            tableData={this.state.vesselPlans}
            tableHeaders={['Vessel (id)', 'containers (id)']}
          />
           
            {this.state.vesselPlans}
        </div>
    )
  }
}

export default VesselPlans