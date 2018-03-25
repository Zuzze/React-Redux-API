import React from 'react';
import { MenuItem, DropdownButton } from 'react-bootstrap';
import { fetchVesselPlans } from '../../actions/vesselPlanActions';
import { addVesselPlan } from '../../actions/vesselPlanActions';
import { VesselPlanReducer } from '../../reducers/vesselPlanReducer';
import { fetchContainers } from '../../actions/containerActions';
import { containerReducer } from '../../reducers/containerReducer';
import { fetchVessels } from '../../actions/apiActions';
import { vesselReducer } from '../../reducers/vesselReducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
require('./style.scss');

class PlanForm extends React.Component {

    constructor(props) {
      super(props);
      this.onVesselSelect = this.onVesselSelect.bind(this);
      this.onContainerSelect = this.onContainerSelect.bind(this);
      this.addVesselPlanLocally = this.addVesselPlanLocally.bind(this);
      
      this.state = { 
        vesselTitle: 'Select Vessel...',
        containerTitle: 'Select container...',
        selectedVesselId: null,
        selectedContainerId: null
      };
    }

    onVesselSelect(target) {
      this.setState({ vesselTitle: `${target.name} (ID: ${target.id})`});
      this.setState({selectedVesselId: target.id});
      console.log(this.state.selectedVesselId);
    }

    onContainerSelect(target) {
      this.setState({ containerTitle: `${target.container_number} (ID: ${target.id})` });
      this.setState({selectedContainerId: target.id});
      console.log(this.state.selectedContainerId);
    }

    handleSubmit = (event) => {
       //Make a network call somewhere
       event.preventDefault();
    }

    addVesselPlanLocally(){
      console.log("posting new vessel plans...");
        fetch('http://127.0.0.1:8000/vessel_plans', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            vessel_id: this.state.selectedVesselId,
            container_ids: [this.state.selectedContainerId],
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

    /**
     * returns whether the container has already been assigned to vesselplan
     * containers in vessel plan cannot be assigned again to vessel plans
     * @param id : int
     */
    containerAssigned(id){
      for(let plan of this.props.vesselPlans){
        console.log(plan.container_ids);
        if(plan.container_ids.includes(id)){
          return true;
        }
      }
      return false;
    }

    render() {
      return(
        <div>
          <h3>ADD CONTAINER TO VESSEL</h3>
          <form>
            <DropdownButton
              bsStyle="default"
              title={this.state.containerTitle}
              key="containerDropdown"
              id="containerlDropDown"
              >
              {this.props.containers.map( (obj, index) => {
                if(!this.containerAssigned(obj.id)){
                  return (
                    <MenuItem key={`container-dropdown-${index}`} eventKey={index} onSelect={() => this.onContainerSelect(obj) } >
                      {obj.container_number} (ID: {obj.id})
                    </MenuItem>
                  );
                } else
                   return;
                })
              } 
            </DropdownButton>
            <DropdownButton
              bsStyle="default"
              title={this.state.vesselTitle}
              key="VesselDropdown"
              id="vesselDropDown"
            >
              {this.props.vessels.map( (obj, index) => {
                return (
                  <MenuItem key={`vessel-dropdown-${index}`} eventKey={obj.id} onSelect={() => this.onVesselSelect(obj) } >
                    {obj.name} (ID: {obj.id})
                  </MenuItem>
                );
              })
            } 
            </DropdownButton>
            <input className="submitButton" type="submit" value="Add" onClick={this.addVesselPlanLocally}/>
          </form>
        </div>
      )}

}

const mapStateToProps = state => ({
  vessels: state.vessels.items,
  containers: state.containers.items,
  vesselPlans: state.vesselPlans.items
  //selectedVessel: state.selectedVessel,
  //selectedContainer: state.selectedContainer
  //loading: state.vesselPlans.loading,
  //error: state.vesselPlans.error
});

const mapActionsToProps = {

}

/*const mapDispatchToProps = dispatch => bindActionCreators({
    //selectVessel,
    //selectContainer
  }, dispatch)*/

export default connect(mapStateToProps)(PlanForm);