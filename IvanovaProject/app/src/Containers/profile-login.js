import React from 'react';
import '../myStyles.css';
import {connect} from 'react-redux'
import { Button, Alert } from 'react-bootstrap';
import { store } from '../store/configureStore';

class ProfileLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          errorInputEmail: true,
          errorInputNewPass: true,
          showAlert: false,
        };
      }

      changeLoginData(url) {
        let user = {};
        user = {
            userId: localStorage.getItem('authUser'),
            email: this.state.email,
            password: this.state.passwordNew,
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
                return response;
            }).then(()=>this.setState({showAlert: true}));
        store.dispatch({type:'USER_FETCH_DATA_SUCCESS', user});       
    }

    checkEmptyEmail(e){
        if (e.target.value === '') {
          return this.setState({errorInputEmail: true});
        } else return this.setState({errorInputEmail: false});
      }
    checkEmptyNewPass(e){
        if (e.target.value === '') {
          return this.setState({errorInputNewPass: true});
        } else return this.setState({errorInputNewPass: false});
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
                margin-bottom: 15px;
              }
            `}
            </style>
          <div className="profile-row-col profile-login profile">
            <div className="profile-title text-center mb-2 mt-2">
                Изменение параметров входа
            </div>
            <Alert show={this.state.showAlert} variant='success'>
              Параметры входа успешно изменены!
            </Alert>
            <div className="form-group">
                <label htmlFor="profileEmail">Введите новый e-mail:{this.state.errorInputEmail ? <img src='../error.png' className="errorImg"></img> : null}</label>
                <input type="email" className="form-control profile-form" id="profileEmail" aria-describedby="emailHelp" placeholder="Enter new email" onChange={(e)=>{
                    this.setState({email:e.target.value})
                    this.checkEmptyEmail(e)}}/>
            </div>
            <div className="form-group">
                <label htmlFor="profileNewPassword">Введите новый пароль:{this.state.errorInputNewPass ? <img src='../error.png' className="errorImg"></img> : null}</label>
                <input type="password" className="form-control profile-form" id="profileNewPassword" placeholder="Repeat password" onChange={(e)=>{
                    this.setState({passwordNew:e.target.value})
                    this.checkEmptyNewPass(e)}}/>
            </div>
            <Button variant="orangeButton" onClick={()=>{
                if ((this.state.errorInputEmail && this.state.errorInputNewPass) === false) {this.changeLoginData('https://harmony757.herokuapp.com/userdata')}}} >
              Изменить
            </Button>
          </div>
          </>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.userAuth.user,
    }
}

export default connect(mapStateToProps)(ProfileLogin)