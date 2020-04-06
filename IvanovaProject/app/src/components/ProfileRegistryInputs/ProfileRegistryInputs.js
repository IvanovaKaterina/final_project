import React from 'react';
import { connect } from "react-redux";
import { Button, Alert } from 'react-bootstrap';
import './ProfileRegistryInputs.css';

const mapStateToProps = state => ({
  serviceType: state.inputService.typeservice,
  serviceName: state.inputService.nameservice,
  serviceId: state.inputService.idservice,
  isSubmit: state.submitRegistry,
  user: state.userAuth.user,
})

class ServiceRegistryInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      name: '',
      phone: '',
      serviceId: '',
      isSubmit: false,
      errorInputName: true,
      errorInputPhone: true,
      errorInputDate: true,
      showAlert: false,
    }
  }
  
  sendGuestData(userdate, username, userphone, serviceId) {
    let user = {
      date: userdate,
      name: username,
      phone: userphone,
      serviceId: serviceId,
    }
    fetch('https://harmony757.herokuapp.com/services/guest-registry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(() => this.setState({showAlert: true}))
  }

  sendUserData(userdate,serviceId) {
    let user = {
      userId: localStorage.getItem("authUser"),
      date: userdate,
      serviceId: serviceId,
    }
    fetch('https://harmony757.herokuapp.com/services/user-registry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(()=>this.setState({showAlert: true}))
  }

  checkEmptyName(e){
    if (!e.target.value) {
      this.setState({errorInputName: true});
    } else this.setState({errorInputName: false});
  }
  checkEmptyPhone(e){
    if (!e.target.value) {
      this.setState({errorInputPhone: true});
    } else this.setState({errorInputPhone: false});
  }
  checkEmptyDate(e){
    if (!e.target.value) {
      this.setState({errorInputDate: true});
    } else this.setState({errorInputDate: false});
  }

  componentDidMount(){
    this.setState({serviceId:this.props.serviceId})
  }

  render() {
    let inputs;
    if (!localStorage.getItem("authUser")) {inputs = 
    <>
      <div className="form-group">
        <label htmlFor="servicePersonNameRegistry">Ваше имя:{this.state.errorInputName ? <img src='../error.png' className="errorImg" alt='error'/> : null}</label>
        <input type="text" className="form-control" id="servicePersonNameRegistry" onChange={(e) => {
          this.setState({name: e.target.value})
          this.checkEmptyName(e)}}/>
      </div>
      <div className="form-group">
        <label htmlFor="servicePersonPhoneRegistry">Ваш номер телефона:{this.state.errorInputPhone ? <img src='../error.png' className="errorImg" alt='error'/> : null}</label>
        <input type="text" className="form-control" id="servicePersonPhoneRegistry" onChange={(e) => {
          this.setState({phone: e.target.value})
          this.checkEmptyPhone(e)}}/>
      </div>
    </>
    } else inputs = null;
    return (
      <>
        <style type="text/css">
          {`
            .btn-orangeButton {
              color: white;
              background-color: rgb(255, 163, 58);
              border-radius: 10px;
              margin: 0 auto;
              margin-bottom: 15px;
              width: 120px;
            }
          `}
      </style>
      <div className="col-auto service-registry" >
        <div className="service-registry-title text-center">
            Запись на услугу
        </div>
        <Alert show={this.state.showAlert} variant='success'>
          Вы успешно записались!
        </Alert>
        <div className="form-group">
          <label htmlFor="serviceTypeRegistry">Тип услуги:</label>
          <input type="text" className="form-control" id="serviceTypeRegistry" value={this.props.serviceType} readOnly/>
        </div>
        <div className="form-group">
          <label htmlFor="serviceNameRegistry">Название услуги:</label>
          <input type="text" className="form-control" id="serviceNameRegistry" value={this.props.serviceName} readOnly/>
        </div>
        {inputs}
        <div className="form-group">
          <label htmlFor="serviceDateRegistry">
            Выберите ориентировочную дату записи:{this.state.errorInputDate ? <img src='../error.png' className="errorImg" alt='error'/>: null}
          </label>
          <input type="datetime-local" className="form-control" id="serviceDateRegistry" onChange={(e) => {
            this.setState({date: e.target.value})
            this.checkEmptyDate(e)}}/>
        </div>
          <Button variant="orangeButton" onClick={() => {
            if (!this.state.errorInputName && !this.state.errorInputPhone && !this.state.errorInputDate && !localStorage.getItem("authUser")) {
              this.sendGuestData(this.state.date, this.state.name, this.state.phone, this.state.serviceId)}
            if (localStorage.getItem("authUser")) {
              if (!this.state.errorInputDate) {
                this.sendUserData(this.state.date, this.state.serviceId)
                }}}} >
            Записаться
          </Button>  
      </div>
      </>
    )
  }
}


export default connect(mapStateToProps)(ServiceRegistryInputs);