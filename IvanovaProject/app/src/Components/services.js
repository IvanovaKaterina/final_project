import React from 'react';
import '../myStyles.css';
import {
  Link
} from "react-router-dom";
import {connect} from "react-redux";
import {servicesFetchData, typesFetchData, areasFetchData, clickToRegistryType, clickToRegistryName, clickToRegistryId} from "../actions/index"
import { store } from '../store/configureStore';

class Services extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServicesData("https://harmony757.herokuapp.com/services")
    this.props.fetchTypesData("https://harmony757.herokuapp.com/services-types")
    this.props.fetchAreasData("https://harmony757.herokuapp.com/services-areas")
  }

  dispatchBtnAction(e) {
    store.dispatch(clickToRegistryType(e.target.getAttribute('data-type')))
    store.dispatch(clickToRegistryName(e.target.getAttribute('data-name')))
    store.dispatch(clickToRegistryId(e.target.getAttribute('data-id')))
  }

  render() {
      return (
        <div className="row services-row">
            {this.props.areas
            .map(area => (
              <div className="col-md-auto services-row-col services-row-col1">
                <div key={area.name} className="services-row-col-title">{area.name}</div>
                {this.props.types
                .filter(type => type.area[0].name === area.name)
                .map(type => (
                <ul key={type.name}>{type.name}
                  {this.props.services
                  .filter(service => service.type[0].name === type.name)
                  .map(service => (
                    <li key={service.name}>
                      <Link to="/services/registry" className="service-registry-link" onClick={this.dispatchBtnAction} data-name={service.name} data-type={service.type[0].name} data-id={service._id}>
                        {service.name} {service.price}р.
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
              </div>
            ))}
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    services: state.services,
    types: state.types,
    areas: state.areas,
    servicetype: state.servicetype,
    servicename: state.servicename,
    serviceid: state.serviceid,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServicesData: url => {dispatch(servicesFetchData(url))},
    fetchTypesData: url => {dispatch(typesFetchData(url))},
    fetchAreasData: url => {dispatch(areasFetchData(url))},
    clickToRegistryType,
    clickToRegistryName,
    clickToRegistryId,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Services);