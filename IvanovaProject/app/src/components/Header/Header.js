import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { store } from '../../redux/store/configureStore';
import HeaderNavRegistry from '../Header/HeaderNavRegistry';
import HeaderNavLogin from '../Header/HeaderNavLogin';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.less';

const mapStateToProps = state => ({
    isAuth: state.userAuth
})
 
const Header = (props) => (
  <div className="header">
    <div className="header-nav-full header-nav row text-center">
      <Link to="/" className="header-name col-md-auto">Harmony</Link>
      <Link to="/services" className="header-nav-link header-nav-linkSmall col-md-auto">Услуги</Link>
      {!props.isAuth ? <HeaderNavRegistry/> : <Link to="/profile" className="header-nav-link header-nav-linkSmall col-md-auto">Личный кабинет</Link>}
      {!props.isAuth ? <HeaderNavLogin/> : 
        <Link to="/" className="col-md-auto header-nav-link header-nav-linkSmall">
          <div onClick={() => {
            localStorage.removeItem('authUser');
            store.dispatch({ type: 'USER_LOG_OUT' });
          }}>
            Выйти
          </div>
        </Link>
      }
    </div>
  </div>
)

export default connect(mapStateToProps)(Header);