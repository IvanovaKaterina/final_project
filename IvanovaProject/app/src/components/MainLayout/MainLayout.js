import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer'
import { store } from '../../redux/store/configureStore';
import './MainLayout.less';


const mapStateToProps = state => ({
  isAuth: state.userAuth,
})
  
const MainLayout = (props) => {
  useEffect(() => {
    if (localStorage.getItem('authUser')) store.dispatch({type: 'USER_LOG_IN'})
  }, []);
  return(
    <div className="mycontainer">
      <div className="wrapper">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}


export default connect(mapStateToProps)(MainLayout);