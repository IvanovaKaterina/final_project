import React, { useState, useEffect } from 'react';
import './Services.less';
import { Link } from 'react-router-dom';
import {servicesFetchData, typesFetchData, areasFetchData, clickToRegistryService } from '../../redux/actions/index';

const Services = () => {
  const [ areas, setAreas] = useState('');
  const [ types, setTypes] = useState('');
  const [ services, setServices] = useState('');

  useEffect(() => {
    setAreas(areasFetchData('https://harmony757.herokuapp.com/services-areas'));
    setTypes(typesFetchData('https://harmony757.herokuapp.com/services-types'));
    setServices(servicesFetchData('https://harmony757.herokuapp.com/services')); 
  }, []);

  return (
    <div className="row services-row">
        {areas.map(area => (
          <div className="col-md-auto services-row-col services-row-col1">
            <div key={area.name} className="services-row-col-title">{area.name}</div>
            {types.filter(type => type.area[0].name === area.name)
            .map(type => (
            <ul key={type.name}>{type.name}
              {services.filter(service => service.type[0].name === type.name)
              .map(service => (
                <li key={service.name}>
                  <Link to="/services/registry" className="service-registry-link" onClick={(e) => 
                    clickToRegistryService(e.target.getAttribute('data-type'), e.target.getAttribute('data-name'), e.target.getAttribute('data-id'))
                    } data-name={service.name} data-type={service.type[0].name} data-id={service._id}>
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

export default Services;