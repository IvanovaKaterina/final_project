import { combineReducers } from 'redux'
import services from './services'
import types from './types'
import areas from './areas'
import {inputType, inputName, inputId} from './inputs'
import isSubmit from './submitreg'
import userAuth from './userAuth'
import userChangedData from './userData'
import usersToServices from './usersToServices'

export const rootReducer = combineReducers({
    services,
    types,
    areas,
    inputType,
    inputName,
    inputId,
    isSubmit,
    userAuth,
    userChangedData,
    usersToServices,
  })