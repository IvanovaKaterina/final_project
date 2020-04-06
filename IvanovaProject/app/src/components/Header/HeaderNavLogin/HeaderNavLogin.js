import React from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';
import { store } from '../../../redux/store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';
import './HeaderNavLogin.css';

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
  
  checkEmptyEmail = e => {
    if (!e.target.value) {
      this.setState({errorInputEmail: true});
    } else this.setState({errorInputEmail: false});
  }
  
  checkEmptyPass = e => {
    if (!e.target.value) {
      this.setState({errorInputPass: true});
    } else this.setState({errorInputPass: false});
  }
  
  sendLoginData = (loginemail, loginpass) => {
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
    .catch(() => this.setState({showAlert:true}))
  }
  
  handleCloseLogin = () => this.setState({ showLogin: false })
  
  handleShowLogin = () => this.setState({ showLogin: true })
  
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
                <label htmlFor="inputEmailLogin" className="">
                  Введите Ваш e-mail:{this.state.errorInputEmail ? <img src='../error.png' className="errorImg"/> : null}
                </label>
                <input type="email" className="form-control" id="inputEmailLogin" aria-describedby="emailHelp" placeholder="Enter email" onChange={
                  event => {
                    this.setState({loginEmail: event.target.value})
                    this.checkEmptyEmail(event);                      
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPasswordLogin">
                  Введите пароль:{this.state.errorInputPass ? <img src='../error.png' className="errorImg"/> : null}
                </label>
                <input type="password" className="form-control" id="inputPasswordLogin" placeholder="Password" onChange={
                  event => {
                    this.setState({loginPassword: event.target.value})
                    this.checkEmptyPass(event);                      
                  }}
                />
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

  export default HeaderNavLogin;