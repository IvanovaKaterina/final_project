import React from 'react';
import '../myStyles.css';

class Masters extends React.Component {
  render() {
    return (
      <div className="masters">
        <MasterHair />
        <MasterNail />
        <MasterFace />
      </div>
    )
  }
}
  
class MasterHair extends React.Component {
  render() {
    return (
      <div className="masters-hair master">
        <div className="masters-body">
          <div className="masters-title masters-body-text">Мастер парикмахер</div>
          <div className="masters-text masters-body-text">Сделает вашу причёску незабываемой. Все киски обзавидуются!</div>
          <div className="masters-category masters-body-text">
            <span className="masters-category-level">Категория: 5 разряд</span>
            <span className="masters-category-years">Стаж работы: 15 лет</span>
            <span className="masters-category-clients">Довольных клиентов: 3763</span>
          </div>
        </div>
        <div className="masters-image masters-image-hair"><img src="cat1.jpg" alt="cat"></img></div>
      </div>
    )
  }
}
  
class MasterNail extends React.Component {
  render() {
    return (
      <div className="masters-nail master">
        <div className="masters-body">
          <div className="masters-title masters-body-text">Мастер по коготочкам</div>
          <div className="masters-text masters-body-text">Коготочки - визитная карточка любой кисы. Наш мастер освежит ваш образ!</div>
          <div className="masters-category masters-body-text">
            <span className="masters-category-level">Категория: 3 разряд</span>
            <span className="masters-category-years">Стаж работы: 7 лет</span>
            <span className="masters-category-clients">Довольных клиентов: 2789</span>
          </div>
        </div>
        <div className="masters-image masters-image-nail"><img src="cat4.jpg" alt="cat"></img></div>
      </div>
    )
  }
}
  
class MasterFace extends React.Component {
  render() {
    return (
      <div className="masters-face master">
        <div className="masters-body">
          <div className="masters-title masters-body-text">Мастер визажист</div>
          <div className="masters-text masters-body-text">Квалифицированный визажист подберёт косметику специально для Вас или на Ваш вкус.</div>
          <div className="masters-category masters-body-text">
            <span className="masters-category-level">Категория: 1 разряд</span>
            <span className="masters-category-years">Стаж работы: 3 года</span>
            <span className="masters-category-clients">Довольных клиентов: 1476</span>
          </div>
        </div>
        <div className="masters-image masters-image-face"><img src="cat3.jpg" alt="cat"></img></div>
      </div>
    )
  }
}

export default Masters;