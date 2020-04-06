import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <FooterAddresses />
      <FooterSocial />
    </div>
  )
}

const FooterAddresses = () => {
  return (
    <div className="footer-addresses">
      <FooterAddress
        street={'Восстания 7'}
        phone={'500-00-01'}
        metro={'Площадь Восстания'}
      />
      <FooterAddress
        street={'Гражданский 115'}
        phone={'500-00-02'}
        metro={'Василеостровская'}
      />
      <FooterAddress
        street={'Есенина 83'}
        phone={'500-00-03'}
        metro={'Приморская'}
      />
    </div>
  )
}

const FooterAddress = (props) => {
  return (
    <div className="footer-addresses-address">
      <div className="footer-addresses-address-street">
        {props.street}
      </div>
      <div className="footer-addresses-address-phone">
        <img src="phone.png" alt="phone"/>
        {props.phone}
      </div>
      <div className="footer-addresses-address-metro">
        <img src="metro.png" alt="metro"/>
        {props.metro}
      </div>
    </div>
  )
}

const FooterSocial = () => {
  return (
    <div className="footer-social">
      Мы в социальных сетях
      <div className="footer-social-inst">
        <img src="instagram.png" alt="instagram"/>
        @salon_harmony
      </div>
      <div className="footer-social-vk">
        <img src="vkontakte.png" alt="vk"/>
        vk.com/salon_harmony
      </div>
      <div className="footer-addresses-address-phone">
        <img src="phone.png" alt="phone"/>
        500-00-00
      </div>
    </div>
  )
}

export default Footer;