import React from 'react';
import '../myStyles.css';
import {
  Link
} from "react-router-dom";
import { Button } from 'react-bootstrap';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo row">
        <LogoImage />
      </div>
    )
  }
}
  
class LogoImage extends React.Component {
  render() {
    return (
      <div className="logo-image">
        <LogoImageText />
      </div>
    )
  }
}
 
class LogoImageText extends React.Component {
  render() {
    return (
      <div className="logo-image-text">
        <LogoImageTextTitle/>
        <LogoImageTextInfo/>
        {/* <LogoImageTextButton/> */}
      </div>
    )
  }
}
  
class LogoImageTextTitle extends React.Component {
  render() {
    return (
      <div className="logo-image-text-title">
        СУПЕР ПРЕДЛОЖЕНИЕ ТОЛЬКО ДЛЯ МИЛЫХ "КОТИКОВ"
      </div>
    )
  }
}
  
class LogoImageTextInfo extends React.Component {
  render() {
    return (
      <div className="logo-image-text-info">
        Женская стрижка от 1000р + маникюр в ПОДАРОК!
      </div>
    )
  }
}
  
class LogoImageTextButton extends React.Component {
  render() {
    return (
      <>
      <style type="text/css">
      {`
        .btn-orangeButtonLogo {
          color: white;
          background-color: rgb(255, 163, 58);
          border-radius: 10px;
          margin-top: 15px;
        }
      `}
      </style>
      <Link to="/services/registry"><Button variant="orangeButtonLogo">Записаться</Button></Link>
      </>
    )
  }
}

export default Logo;