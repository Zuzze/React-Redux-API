import React from 'react';
import { MenuItem, DropdownButton } from 'react-bootstrap';
import { fetchVesselPlans } from '../../actions/vesselPlanActions';
//import { selectVessel, selectContainer } from '../../actions/planFormActions';
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
      this.addVesselPlan = this.addVesselPlan.bind(this);
      
      this.state = { 
        vesselTitle: 'Select Vessel...',
        containerTitle: 'Select container...',
        selectedVesselId: null,
        selectedContainerId: null
      };
    }

    onVesselSelect(target) {
      console.log(target);
      this.setState({ vesselTitle: `${target.name} (ID: ${target.id})`});
      this.setState({selectedVesselId: target.id});
      console.log(this.state.selectedVesselId);
      //this.props.passTargetToParent(target);
    }

    onContainerSelect(target) {
      console.log(target);
      this.setState({ containerTitle: `${target.container_number} (ID: ${target.id})` });
      this.setState({selectedContainerId: target.id});
      console.log(this.state.selectedContainerId);
    }

    handleSubmit = (event) => {
       //Make a network call somewhere
       event.preventDefault();
    }

    addVesselPlan(){
      console.log(this.state.selectedVesselId);
      console.log(this.state.selectedContainerId);
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

    render() {
      return(
        <div>
          <h3>ADD CONTAINER TO VESSEL</h3>
          <form>
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

            <DropdownButton
              bsStyle="default"
              title={this.state.containerTitle}
              key="containerDropdown"
              id="containerlDropDown"
              >
              {this.props.containers.map( (obj, index) => {
                    return (
                      <MenuItem key={`container-dropdown-${index}`} eventKey={index} onSelect={() => this.onContainerSelect(obj) } >
                        {obj.container_number} (ID: {obj.id})
                      </MenuItem>
                    );
                  })
                } 
            </DropdownButton>
            <input className="submitButton" type="submit" value="Add" onClick={this.addVesselPlan}/>
          </form>
        </div>
      )}

}

const mapStateToProps = state => ({
  vessels: state.vessels.items,
  containers: state.containers.items,
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