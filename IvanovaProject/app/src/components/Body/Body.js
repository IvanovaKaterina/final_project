import React from 'react';
import './Body.css';

const Body = () => {
    return (
      <div className="body">
        <div className="body-title">
          HARMONY - ЦЕНТРЫ КРАСОТЫ №2
          <div className="body-subtitle">
            Сразу после центров красоты №1
          </div>        
        </div>        
        <AllBodyInfo />
      </div>
    )
}
  
const AllBodyInfo = () => {
    return (
      <div className="body-info row">
        <BodyInfo 
          header={'№2'}
          body={'Почти лидер рынка'}
          footer={'Но мы правда стараемся'}
        />
        <BodyInfo 
          header={'10 000+'}
          body={'Довольных клиентов'}
          footer={'Некоторые держатся 3 года'}
        />
        <BodyInfo 
          header={'50+'}
          body={'Профессионалов'}
          footer={'Все умнички'}
        />
        <BodyInfo 
          header={'3'}
          body={'Центра красоты'}
          footer={'И наш легион расширяется'}
        />
      </div>
    )
}
  
const BodyInfo = (props) => {
    return (
      <div className="body-info-leader body-info-info col-auto">
        <span className="body-info-header">{props.header}</span>
        <span className="body-info-body">{props.body}</span>
        <span className="body-info-footer">{props.footer}</span>
      </div>
    )
}

export default Body;