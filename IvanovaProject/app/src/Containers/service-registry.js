import React from 'react';
import '../myStyles.css';
import ServiceRegistryInputs from './service-registry-inputs';
import {connect} from "react-redux";


export class ServiceRegistry extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="row">
       {!this.props.isSubmit ? <ServiceRegistryInputs/>:<ServiceRegistrySubmit/>}
      </div>
    )
  }
}

export class ServiceRegistrySubmit extends React.Component {
    render() {
      return (
        <div className="col-auto service-registry" >
          <div className="submitedRegistry">
            Вы записаны!
          </div>
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    // serviceType: state.inputType,
    // serviceName: state.inputName,
    // serviceId: state.inputId,
    isSubmit: state.isSubmit,
  };
}

export default connect(mapStateToProps)(ServiceRegistry);