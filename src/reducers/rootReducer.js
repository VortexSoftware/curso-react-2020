import { combineReducers } from 'redux';
import gastosReducer from './gastos/gastosReducer';
import appReducer from './app/appReducer';

const rootReducer = combineReducers({
    gastosReducer,
    appReducer
})


export default rootReducer