import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import hosts from './hostsReducer';
import isAwesomeGrid from './layoutReducer';

export default combineReducers({
	hosts,
	isAwesomeGrid,
	form: formReducer,
});
