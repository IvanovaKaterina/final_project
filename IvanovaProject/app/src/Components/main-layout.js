import React from 'react';
import '../myStyles.css';
import Footer from './footer.js'
import { store } from '../store/configureStore';
import {connect} from "react-redux";

class MainLayout extends React.Component {

componentDidMount() {
  if (localStorage.getItem('authUser') != undefined) {
    store.dispatch({type: 'USER_LOG_IN'})
  }
}

  render() {
  return(
    <div className="mycontainer">
      <div className="wrapper">
        {this.props.children}
      </div>
      <Footer />
    </div>
  )};
}

const mapStateToProps = state => {
  return {
    isAuth: state.userAuth,
  };
}

export default connect(mapStateToProps)(MainLayout);