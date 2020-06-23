import counterReducer from './counter';
import loginReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  counterReducer: counterReducer,
  loginReducer: loginReducer
})

export default allReducers;