import React from 'react';
import './HeaderNavRegistry.less';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal } from 'react-bootstrap';

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

  checkEmptyName = e => {
    if (!e.target.value) {
      this.setState({errorInputName: true});
    } else this.setState({errorInputName: false});
  }

  checkEmptyPhone = e => {
    if (!e.target.value) {
      this.setState({errorInputPhone: true});
    } else this.setState({errorInputPhone: false});
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

  checkEmptyPassRep = e => {
    if (!e.target.value) {
      this.setState({errorInputPassRep: true});
    } else this.setState({errorInputPassRep: false});
  }

  handleCloseReg = () => this.setState({ showReg: false });

  handleShowReg = () => this.setState({ showReg: true });

  render() {
    return(
      <>
        <a href = "#" className="header-nav-link header-nav-linkSmall col-md-auto" onClick={this.handleCloseReg.bind(this)}>
          Зарегистрироваться
        </a>
        <Modal show={this.state.showReg} onHide={this.handleCloseReg.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Регистрация</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="inputName">
                Введите имя: {this.state.errorInputName ? <img src='../error.png' className="errorImg" alt="error"/> : null}
              </label>
              <input type="text" className="form-control" id="inputName" onChange={
                event => {
                  this.checkEmptyName(event);
                  this.setState({name: event.target.value})
                }}
              /> 
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">
                Ваш номер мобильного телефона: {this.state.errorInputPhone ? <img src='../error.png' className="errorImg" alt="error"/> : null}
              </label>
              <input type="text" className="form-control" id="inputPhone" placeholder="Mobile phone" onChange={
                event => {
                  this.checkEmptyPhone(event);
                  this.setState({phone: event.target.value})
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail" className="">
                Ваш e-mail: {this.state.errorInputEmail ? <img src='../error.png' className="errorImg" alt="error"/> : null}
              </label>
              <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" onChange={
                event => {
                  this.checkEmptyEmail(event);
                  this.setState({email: event.target.value})
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">
                Введите пароль: {this.state.errorInputPass ? <img src='../error.png' className="errorImg" alt="error"/> : null}
              </label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={
                event => {
                  this.checkEmptyPass(event);                      
                  this.setState({password: event.target.value})
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPasswordRepeat">
                Повторите пароль: {this.state.errorInputPassRep ? <img src='../error.png' className="errorImg" alt="error"/> : null}
              </label>
              <input type="password" className="form-control" id="inputPasswordRepeat" placeholder="Password" onChange={
                event => this.checkEmptyPassRep(event)}               
              />
            </div>            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="orangeButton" onClick={() => {
              if ((this.state.errorInputName && this.state.errorInputEmail && this.state.errorInputPhone && this.state.errorInputPass) === false) {
                this.handleCloseReg.bind(this);
                this.sendUserData(this.state.name, this.state.email, this.state.phone, this.state.password);}
              }}>
              Готово
            </Button>
            <Button variant="greyButton" onClick={this.handleCloseReg.bind(this)}>
              Отмена
            </Button>
          </Modal.Footer>
        </Modal> 
      </>
    )
  }
}

export default HeaderNavRegistry;