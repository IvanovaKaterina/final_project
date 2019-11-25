import React from 'react';
import '../myStyles.css';
import ProfileReceptions from '../Containers/profile-receptions'
import ProfilePersonal from '../Containers/profile-personal'
import ProfileLogin from '../Containers/profile-login'

class ProfileNav extends React.Component {
    state = {
        renderReceptions: true,
        renderPersonal: false,
        renderLogin: false,
    }

    renderHandler = (e) => {
        switch(e.target.innerText) {
            case 'Запись на услуги':
                this.setState({
                    renderReceptions: true,
                    renderPersonal: false,
                    renderLogin: false,
                })
                break;
            case 'Изменение личных данных':
                this.setState({
                    renderReceptions: false,
                    renderPersonal: true,
                    renderLogin: false,
                })
                break;
            case 'Изменение параметров входа':
                this.setState({
                    renderReceptions: false,
                    renderPersonal: false,
                    renderLogin: true,
                })
                break;
        }
    }

    render() {
        return(
          <div className="row profile-row">
            <div className="profile-row-nav">
                <div onClick={this.renderHandler} className="profile-row-nav-row text-center">
                    Запись на услуги
                </div>
                <div onClick={this.renderHandler} className="profile-row-nav-row text-center">
                    Изменение личных данных
                </div>
                <div onClick={this.renderHandler} className="profile-row-nav-row text-center">
                    Изменение параметров входа
                </div>
            </div>
            {this.state.renderReceptions ? <ProfileReceptions/> : null}
            {this.state.renderPersonal ? <ProfilePersonal/> : null}
            {this.state.renderLogin ? <ProfileLogin/> : null}
          </div>  

        )
    }
}

export default ProfileNav;