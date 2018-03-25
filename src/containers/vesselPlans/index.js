import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVesselPlans } from '../../actions/vesselPlanActions';
import { fetchContainers } from '../../actions/containerActions';
import { fetchVessels } from '../../actions/vesselActions';
import ResponsiveTable from '../../components/responsiveTable';
import PlanForm from '../../components/planForm';
require('./style.scss');

class VesselPlans extends Component {

  constructor(props){
    super(props);
    this.getContainerString = this.getContainerString.bind(this);
    this.getVesselName = this.getVesselName.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(fetchVesselPlans());
    this.props.dispatch(fetchContainers());
    this.props.dispatch(fetchVessels());
  }

  getVesselName(vesselId){
    for(let v of this.props.vessels){
      if(v.id === vesselId){
        return v.name;
      }
    }
  }

  /**
   * containerID corresponds also list index
   * @param planContainerIds 
   */
  getContainerString(planContainerIds){
    let containerString = ''
    for(let id of planContainerIds){
      for(let c of this.props.containers){
        if(c.id === id){
          containerString += c.container_number + ', ';
          break;
        }
      }
      
    }
    console.log(containerString);
    return containerString;
  }

  render() {
    console.log(this.props);
    const { error, loading, vesselPlans, vessels } = this.props;
    
    
    if (error) {
      console.log(`Error! ${error.message}`)
      return <div>Something is not right, check console for details</div>;
    }

    if (loading) {
      console.log("loading");
      return <div></div>;
    }

    return (
        <div align="center" className="container">
          <PlanForm/>
          <h3>VESSEL PLANS</h3>
           <p>Containers that are assigned to vessels</p>
          <ResponsiveTable
            tableData = {vesselPlans.map( p => [p.container_ids.toString(), p.vessel_id])}
            tableHeaders={['container (id)', 'vessel (id)']}
          />
        </div>
    )
  }
}

const mapStateToProps = state => ({
  vessels: state.vessels.items,
  containers: state.containers.items,
  vesselPlans: state.vesselPlans.items,
  loading: state.vesselPlans.loading,
  error: state.vesselPlans.error
});

export default connect(mapStateToProps)(VesselPlans)