import React from 'react';
import {
  Link
} from "react-router-dom";
import '../myStyles.css';
import {connect} from "react-redux";
import { store } from '../store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, Alert } from 'react-bootstrap';

export class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <HeaderNav />
        </div>
      )
    }
}
 
class HeaderNav extends React.Component {

  constructor(props) {
    super(props);
    }
  
  logOut() {
    localStorage.removeItem('authUser');
    store.dispatch({type: 'USER_LOG_OUT'})
  }

  render() {
    return (
      <div className="header-nav-full header-nav row text-center">
        <Link to="/" className="header-name col-md-auto">Harmony</Link>
        <Link to="/services" className="header-nav-link header-nav-linkSmall col-md-auto">Услуги</Link>
        {!this.props.isAuth ? <HeaderNavRegistry/> : <Link to="/profile" className="header-nav-link header-nav-linkSmall col-md-auto">Личный кабинет</Link>}
        {!this.props.isAuth ? <HeaderNavLogin/> : <Link to="/" className="col-md-auto header-nav-link header-nav-linkSmall"><div onClick={()=>this.logOut()}>Выйти</div></Link>}
      </div>
    )
  }
}

class HeaderNavRegistry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showReg: false,
      errorInputName: true,
      errorInputPhone: true,
      errorInputEmail: true,
      errorInputPass: true,
      errorInputPassRep: true,
    };
  }

  sendUserData(username, useremail, userphone, userpassword) {

    let user = {
      name: username,
      phone: userphone,
      email: useremail,
      password: userpassword
    }

    fetch('https://harmony757.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

  };

  checkEmptyName(e){
    if (e.target.value === '') {
      return this.setState({errorInputName: true});
    } else return this.setState({errorInputName: false});
  }
  checkEmptyPhone(e){
    if (e.target.value === '') {
      return this.setState({errorInputPhone: true});
    } else return this.setState({errorInputPhone: false});
  }
  checkEmptyEmail(e){
    if (e.target.value === '') {
      return this.setState({errorInputEmail: true});
    } else return this.setState({errorInputEmail: false});
  }
  checkEmptyPass(e){
    if (e.target.value === '') {
      return this.setState({errorInputPass: true});
    } else return this.setState({errorInputPass: false});
  }
  checkEmptyPassRep(e){
    if (e.target.value === '') {
      return this.setState({errorInputPassRep: true});
    } else return this.setState({errorInputPassRep: false});
  }


  render() {
    const handleCloseReg = () => this.setState({showReg: false});
    const handleShowReg = () => this.setState({showReg: true});
    return(
      <>
        <a href = "#" className="header-nav-link header-nav-linkSmall col-md-auto" onClick={handleShowReg}>
          Зарегистрироваться
        </a>
        <Modal show={this.state.showReg} onHide={handleCloseReg}>
          <Modal.Header closeButton>
            <Modal.Title>Регистрация</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <div className="form-group">
                    <label htmlFor="inputName">Введите имя:{this.state.errorInputName ? <img src='../error.png' className="errorImg"></img> : null}
                    </label>
                    <input type="text" className="form-control" id="inputName" onChange={(e) => {
                      this.checkEmptyName(e);
                      this.setState({name: e.target.value})}}
                    /> 
                </div>
                <div className="form-group">
                    <label htmlFor="inputPhone">Ваш номер мобильного телефона:{this.state.errorInputPhone ? <img src='../error.png' className="errorImg"></img> : null}</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="Mobile phone" onChange={(e) => {
                      this.checkEmptyPhone(e);
                      this.setState({phone: e.target.value})}}
                      />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail" className="">Ваш e-mail:{this.state.errorInputEmail ? <img src='../error.png' className="errorImg"></img> : null}</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => {
                      this.checkEmptyEmail(e);
                      this.setState({email: e.target.value})}}
                      />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Введите пароль:{this.state.errorInputPass ? <img src='../error.png' className="errorImg"></img> : null}</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={(e) => {
                      this.checkEmptyPass(e);                      
                      this.setState({password: e.target.value})}}
                      />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPasswordRepeat">Повторите пароль:{this.state.errorInputPassRep ? <img src='../error.png' className="errorImg"></img> : null}</label>
                    <input type="password" className="form-control" id="inputPasswordRepeat" placeholder="Password" onChange={(e) => 
                      this.checkEmptyPassRep(e)}               
                    />
                </div>            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="orangeButton" onClick={()=>{
            if ((this.state.errorInputName && this.state.errorInputEmail && this.state.errorInputPhone && this.state.errorInputPass) === false) {
              handleCloseReg();
              this.sendUserData(this.state.name, this.state.email, this.state.phone, this.state.password);}
            }}>
              Готово
            </Button>
            <Button variant="greyButton" onClick={handleCloseReg}>
              Отмена
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

class HeaderNavLogin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      errorInputEmail: true,
      errorInputPass: true,
      showAlert: false,
  }
}

  checkEmptyEmail(e){
    if (e.target.value === '') {
      return this.setState({errorInputEmail: true});
    } else return this.setState({errorInputEmail: false});
  }
  checkEmptyPass(e){
    if (e.target.value === '') {
      return this.setState({errorInputPass: true});
    } else return this.setState({errorInputPass: false});
  }

  sendLoginData(loginemail, loginpass) {
    let user = {
      email: loginemail,
      password: loginpass,
    }

    fetch('https://harmony757.herokuapp.com/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(user)
    }).then(response => response.json())
    .then(res => {
      localStorage.setItem('authUser', res.userId);
      store.dispatch({type: "USER_LOG_IN"});
      this.handleCloseLogin();
    })
    .catch(()=>this.setState({showAlert:true}))
  }

  handleCloseLogin(){
    this.setState({showLogin: false});
  }
  handleShowLogin(){
    this.setState({showLogin: true});
  }

  render() {

    return(
      <>
      <style type="text/css">
      {`
        .btn-orangeButton {
          color: white;
          background-color: rgb(255, 163, 58);
          border-radius: 10px;
        }
        .btn-greyButton {
          color: white;
          background-color: grey;
          border-radius: 10px;
        }
        .btn-nav {
          color: rgb(117, 65, 65);
        }
        .btn-nav:hover {
          color: rgb(255, 163, 58);
        }
      `}
      </style>
        <a href = "#" className="header-nav-link header-nav-linkSmall col-md-auto" onClick={this.handleShowLogin.bind(this)}>
          Войти
        </a>
        <Modal show={this.state.showLogin} onHide={this.handleCloseLogin.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Вход</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Alert show={this.state.showAlert} variant='danger'>
              Введены неверные данные. Повторите попытку.
            </Alert>
                <div className="form-group">
                    <label htmlFor="inputEmailLogin" className="">Введите Ваш e-mail:{this.state.errorInputEmail ? <img src='../error.png' className="errorImg"></img> : null}</label>
                    <input type="email" className="form-control" id="inputEmailLogin" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => {
                      this.setState({loginEmail: e.target.value})
                      this.checkEmptyEmail(e);                      
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPasswordLogin">Введите пароль:{this.state.errorInputPass ? <img src='../error.png' className="errorImg"></img> : null}</label>
                    <input type="password" className="form-control" id="inputPasswordLogin" placeholder="Password" onChange={(e) => {
                      this.setState({loginPassword: e.target.value})
                      this.checkEmptyPass(e);                      
                    }}/>
                </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="orangeButton" onClick={()=>{
            if ((this.state.errorInputEmail && this.state.errorInputPass) === false) {
              this.setState({showAlert: false})
              this.sendLoginData(this.state.loginEmail, this.state.loginPassword);
            }}}>
              Войти
            </Button>
            <Button variant="greyButton" onClick={this.handleCloseLogin.bind(this)}>
              Отмена
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.userAuth,
  };
}



export default connect(mapStateToProps)(HeaderNav);