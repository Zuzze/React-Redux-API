import React from 'react';
import { MenuItem, DropdownButton } from 'react-bootstrap';
import { addVesselPlan } from '../../actions/vesselPlanActions';
import { connect } from 'react-redux';
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
        errorTextVisible: false,
        selectedVesselId: null,
        selectedContainerId: null,
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

    addVesselPlanLocally(){
      if(this.state.selectedVesselId == null || this.state.selectedContainerId == null){
        this.setState({errorTextVisible: true});
        alert("Please select container and vessel");
        return;
      } else {
        this.setState({errorTextVisible: false});

        let currentVesselIds = this.props.vesselPlans.map( plan => plan.vessel_id);
        if(currentVesselIds.includes(this.state.selectedVesselId)){
          //update current value (to be replaced)
          addVesselPlan(this.state.selectedVesselId, this.state.selectedContainerId);
        } else {
          //add new item
          addVesselPlan(this.state.selectedVesselId, this.state.selectedContainerId);
        }
      }
    }

    /**
     * returns whether the container has already been assigned to vesselplan
     * containers in vessel plan cannot be assigned again to vessel plans
     * @param id : int
     */
    containerAssigned(id){
      for(let plan of this.props.vesselPlans){
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
          <p>Add unassigned containers to leaving vessels</p>
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
                  };
                  return null;
                })}; 
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
          {this.state.errorTextVisible ? <p className="errorText">Please select container and vessel</p> : null}
        </div>
      )}

}

const mapStateToProps = state => ({
  vessels: state.vessels.items,
  containers: state.containers.items,
  vesselPlans: state.vesselPlans.items
});


export default connect(mapStateToProps)(PlanForm);