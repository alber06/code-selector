import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import codes from './codes'

const state = combineReducers({
  router: routerReducer,
  codes,
})

export default state
