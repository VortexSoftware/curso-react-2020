import { combineReducers } from 'redux';
import gastosReducer from './gastos/gastosReducer';

const rootReducer = combineReducers({
    gastosReducer
})


export default rootReducer