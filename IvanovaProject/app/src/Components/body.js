import React from 'react';
import '../myStyles.css';

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <BodyTitle />
        <BodyInfo />
      </div>
    )
  }
}
  
class BodyTitle extends React.Component {
  render() {
    return (
      <div className="body-title">
        HARMONY - ЦЕНТРЫ КРАСОТЫ №2
        <BodySubtitle/>
      </div>
    )
  }
}
  
class BodySubtitle extends React.Component {
  render() {
    return (
      <div className="body-subtitle">
        Сразу после центров красоты №1
      </div>
    )
  }
}
  
class BodyInfo extends React.Component {
  render() {
    return (
      <div className="body-info row">
        <BodyInfoLeader />
        <BodyInfoClients />
        <BodyInfoMasters />
        <BodyInfoCenters />
      </div>
    )
  }
}
  
class BodyInfoLeader extends React.Component {
  render() {
    return (
      <div className="body-info-leader body-info-info col-auto">
        <span className="body-info-header">№2</span>
        <span className="body-info-body">Почти лидер рынка</span>
        <span className="body-info-footer">Но мы правда стараемся</span>
      </div>
    )
  }
}
  
class BodyInfoClients extends React.Component {
  render() {
    return (
      <div className="body-info-clients body-info-info col-auto">
        <span className="body-info-header">10 000+</span>
        <span className="body-info-body">Довольных клиентов</span>
        <span className="body-info-footer">Некоторые держатся 3 года</span>
      </div>
    )
  }
}
  
class BodyInfoMasters extends React.Component {
  render() {
    return (
      <div className="body-info-profs body-info-info col-auto">
        <span className="body-info-header">50+</span>
        <span className="body-info-body">Профессионалов</span>
        <span className="body-info-footer">Все умнички</span>
      </div>
    )
  }
}
  
class BodyInfoCenters extends React.Component {
  render() {
    return (
      <div className="body-info-centers body-info-info col-auto">
        <span className="body-info-header">3</span>
        <span className="body-info-body">Центра красоты</span>
        <span className="body-info-footer">И наш легион расширяется</span>
      </div>
    )
  }
}

export default Body;