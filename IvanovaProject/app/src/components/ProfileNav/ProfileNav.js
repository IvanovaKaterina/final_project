import React, { useState } from 'react';
import ProfileReceptions from '../ProfileReceptions';
import ProfilePersonal from '../ProfilePersonal';
import ProfileLogin from '../ProfileLogin';
import './ProfileNav.css';

const REGISTRY_DATA = 'Запись на услуги';
const PERSONAL_DATA = 'Изменение личных данных';
const LOGIN_DATA = 'Изменение параметров входа';

const ProfileNav = () => {
  const [component, setComponent] = useState('');
  return(
    <div className="row profile-row">
      <div className="profile-row-nav">
          <div onClick={() => setComponent(REGISTRY_DATA)} className="profile-row-nav-row text-center">
              {REGISTRY_DATA}
          </div>
          <div onClick={() => setComponent(PERSONAL_DATA)} className="profile-row-nav-row text-center">
              {PERSONAL_DATA}
          </div>
          <div onClick={() => setComponent(LOGIN_DATA)} className="profile-row-nav-row text-center">
              {LOGIN_DATA}
          </div>
      </div>
      {(component === REGISTRY_DATA) && <ProfileReceptions/>}
      {(component === PERSONAL_DATA) && <ProfilePersonal/>}
      {(component === LOGIN_DATA) && <ProfileLogin/>}
      {!component && 'Пусто'}

    </div>  
  )
}

export default ProfileNav;