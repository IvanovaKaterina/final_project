import React from 'react';
import '../myStyles.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <FooterAddress />
        <FooterSocial />
      </div>
    )
  }
}

class FooterAddress extends React.Component {
  render() {
    return (
      <div className="footer-addresses">
        <div className="footer-addresses-address">
          <div className="footer-addresses-address-street">Восстания 7</div>
          <div className="footer-addresses-address-phone">
            <img src="phone.png" alt="phone"></img>
            500-00-01
          </div>
          <div className="footer-addresses-address-metro">
            <img src="metro.png" alt="metro"></img>
            Площадь Восстания
          </div>
        </div>
        <div className="footer-addresses-address">
          <div className="footer-addresses-address-street">Гражданский 115</div>
          <div className="footer-addresses-address-phone">
            <img src="phone.png" alt="phone"></img>
            500-00-02
          </div>
          <div className="footer-addresses-address-metro">
            <img src="metro.png" alt="metro"></img>
            Василеостровская
          </div>
        </div>
        <div className="footer-addresses-address">
          <div className="footer-addresses-address-street">Есенина 83</div>
          <div className="footer-addresses-address-phone">
            <img src="phone.png" alt="phone"></img>
            500-00-03
          </div>
          <div className="footer-addresses-address-metro">
            <img src="metro.png" alt="metro"></img>
            Приморская
          </div>
        </div>
      </div>
    )
  }
}

class FooterSocial extends React.Component {
  render() {
    return (
      <div className="footer-social">
        Мы в социальных сетях
        <div className="footer-social-inst">
          <img src="instagram.png" alt="instagram"></img>
          @salon_harmony
        </div>
        <div className="footer-social-vk">
          <img src="vkontakte.png" alt="vk"></img>
          vk.com/salon_harmony
        </div>
        <div className="footer-addresses-address-phone">
            <img src="phone.png" alt="phone"></img>
            500-00-00
          </div>
      </div>
    )
  }
}

export default Footer;