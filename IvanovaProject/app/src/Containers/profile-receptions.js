import React from 'react';
import '../myStyles.css';
import {connect} from 'react-redux'
import {usersToServicesFetchData} from "../actions/index"


class ProfileReceptions extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserToServicesData("https://harmony757.herokuapp.com/user/services")
  }

    render() {
        return(
          <div className="profile-row-col profile-reception profile">
            <div className="profile-title text-center mb-2 mt-2">
                Ваша запись на услуги
            </div>
            <div className="mb-3" id="reception-date">
              {this.props.data.map((item)=>(
                <div className="profile-reception-block">
                  <div className="profile-receptions-block-serviceName">
                  <span className="profile-reception-block-title">Название услуги:</span> {item.services[0].name}
                  </div>
                  <div className="profile-receptions-block-servicePrice">
                  <span className="profile-reception-block-title">Цена услуги:</span> {item.services[0].price}р.
                  </div>
                  <div className="profile-receptions-block-date">
                  <span className="profile-reception-block-title">Дата записи:</span> {item.date}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    data: state.usersToServices,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserToServicesData: url => {dispatch(usersToServicesFetchData(url))},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileReceptions)