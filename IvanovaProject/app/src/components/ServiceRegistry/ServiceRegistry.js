import React from 'react';
import ProfileRegistryInputs from '../ProfileRegistryInputs';
import { connect } from 'react-redux';
import './ServiceRegistry.css';

const mapStateToProps = state => ({
  isSubmit: state.submitRegistry
})

const ServiceRegistry = (props) => (
  <div className="row">
   {!props.isSubmit ? <ProfileRegistryInputs/> : <ServiceRegistrySubmit/>}
  </div>
)

const ServiceRegistrySubmit = () => {
  return (
    <div className="col-auto service-registry" >
      <div className="submitedRegistry">
        Вы записаны!
      </div>
    </div>
  )
}


export default connect(mapStateToProps)(ServiceRegistry);