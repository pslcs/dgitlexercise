import { combineReducers } from 'redux';
import checkReducer from './checkReducer';
import saveReducer from './saveReducer';
import overlayReducer from './overlayReducer';

export default combineReducers({
 checkReducer,
 saveReducer,
 overlayReducer
});