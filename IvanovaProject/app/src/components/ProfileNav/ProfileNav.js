import React, { useState } from 'react';
import ProfileReceptions from '../ProfileReceptions'
import ProfilePersonal from '../ProfilePersonal'
import ProfileLogin from '../ProfileLogin'
import './ProfileNav.less';

const REGISTRY_DATA = 'Запись на услуги';
const PERSONAL_DATA = 'Изменение личных данных';
const LOGIN_DATA = 'Изменение параметров входа';

const ProfileNav = () => {
  const [component, setComponent] = useState('Запись на услуги');
  return(
    <div className="row profile-row">
      <div className="profile-row-nav">
          <div onClick={setComponent(REGISTRY_DATA)} className="profile-row-nav-row text-center">
              {REGISTRY_DATA}
          </div>
          <div onClick={setComponent(PERSONAL_DATA)} className="profile-row-nav-row text-center">
              {PERSONAL_DATA}
          </div>
          <div onClick={setComponent(LOGIN_DATA)} className="profile-row-nav-row text-center">
              {LOGIN_DATA}
          </div>
      </div>
      {component === REGISTRY_DATA ? <ProfileReceptions/> : null}
      {component === PERSONAL_DATA ? <ProfilePersonal/> : null}
      {component === LOGIN_DATA ? <ProfileLogin/> : null}
    </div>  
  )
}

export default ProfileNav;