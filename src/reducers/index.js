import { combineReducers } from 'redux'

// Reducers
import tweet from './tweet'

const AppReducer = combineReducers({
  tweet,
})

export default AppReducer
