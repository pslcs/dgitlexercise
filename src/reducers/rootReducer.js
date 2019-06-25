import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import checkReducer from './checkReducer';

export default combineReducers({
 simpleReducer,
 checkReducer
});