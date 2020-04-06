import { combineReducers } from 'redux';
import services from './services';
import types from './types';
import areas from './areas';
import inputService from './inputs';
import isSubmit from './submitRegistry';
import userAuth from './userAuth';
import userChangedData from './userChangedData';
import usersToServices from './usersToServices';

const rootReducer = combineReducers({
  services,
  types,
  areas,
  inputService,
  isSubmit,
  userAuth,
  userChangedData,
  usersToServices,
})

export default rootReducer;