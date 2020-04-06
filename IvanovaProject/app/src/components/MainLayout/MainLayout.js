import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userLogedIn } from '../../redux/reducers/userAuth';
import Footer from '../Footer'
import './MainLayout.css';

const mapDispatchToProps = dispatch => ({
  userLogedIn: () => dispatch(userLogedIn())
})

const MainLayout = (props) => {
  if (localStorage.getItem('authUser')) props.userLogedIn();
  return(
    <div className="mycontainer">
      <div className="wrapper">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}


export default connect(null, mapDispatchToProps)(MainLayout)