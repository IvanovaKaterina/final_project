import React from 'react';
import { connect } from 'react-redux';
import { userFetchData } from '../../redux/reducers/userAuth';
import { Button, Alert } from 'react-bootstrap';
import { store } from '../../redux/store/configureStore';
import './ProfilePersonal.css';

const mapStateToProps = state => ({
  user: state.userAuth,
})

const mapDispatchToProps = dispatch => ({
  fetchUserData: url => dispatch(userFetchData(url))
})

class ProfilePersonal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      phone: this.props.user.phone,
      dateOfBirth: this.props.user.dateOfBirth,
      errorInputName: false,
      errorInputPhone: false,
      showAlert: false,
    };
  }
  componentDidMount() {
    this.props.fetchUserData("https://harmony757.herokuapp.com/userdata");
  }
  
  changePersonalData(url) {
    let user = {};
    user = {
      userId: localStorage.getItem('authUser'),
      name: this.state.name,
      phone: this.state.phone,
      dateOfBirth: this.state.dateOfBirth,
    }
      fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        mode: 'cors',
        body: JSON.stringify(user)
      })
      .then(response => {
        if(!response.ok) {
          throw new Error (response.statusText)
        }
        return response})
      .then(this.setState({ showAlert: true }))
    store.dispatch({ type:'USER_FETCH_DATA_SUCCESS', user });       
  }
  checkEmptyName(e){
    if (e.target.value === '') {
      this.setState({ errorInputName: true });
    } else this.setState({ errorInputName: false });
  }
  checkEmptyPhone(e){
    if (e.target.value === '') {
      this.setState({ errorInputPhone: true });
    } else this.setState({ errorInputPhone: false });
  }
  render() {
    return(
      <>
        <style type="text/css">
          {`
            .btn-orangeButton {
              float: right;
              color: white;
              background-color: rgb(255, 163, 58);
              border-radius: 10px;
              margin-bottom: 10px;
            }
          `}
        </style>
        <div className="profile-row-col profile-personalData profile">
          <div className="profile-title text-center mb-2 mt-2">
            Изменение личных данных
          </div>
          <Alert show={this.state.showAlert} variant='success'>
            Личные данные успешно изменены!
          </Alert>
          <div className="form-group">
            <label htmlFor="profileName">Ваше имя:{this.state.errorInputName ? <img src='../error.png' className="errorImg"/>: null}</label>
            <input type="text" className="form-control profile-form" id="profileName" placeholder="Введите имя" defaultValue={this.props.user.name} onChange={(e) => {
              this.setState({ name: e.target.value })
              this.checkEmptyName(e)}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profilePhone">Ваш телефон:{this.state.errorInputPhone ? <img src='../error.png' className="errorImg"/> : null}</label>
            <input type="text" className="form-control profile-form" id="profilePhone" placeholder="Введите номер телефона" defaultValue={this.props.user.phone} onChange={(e) => {
              this.setState({ phone: e.target.value })
              this.checkEmptyPhone(e)}} 
            />
          </div>
          <div className="form-group">
             <label htmlFor="dateOfBirth">Дата рождения:</label>
             <input type="date" className="form-control profile-form" id="dateOfBirth" placeholder="ДД.ММ.ГГГГ" onChange={(e) => {this.setState({ dateOfBirth: e.target.value })}} defaultValue={this.props.user.dateOfBirth}/>
          </div>
          <Button variant="orangeButton" onClick={() => {
            if (!this.state.errorInputName && !this.state.errorInputPhone) {this.changePersonalData('https://harmony757.herokuapp.com/userdata')}}} >
            Изменить
          </Button>        
        </div>      
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePersonal)