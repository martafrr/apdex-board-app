import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import hosts from './hostsReducer';

export default combineReducers({
	hosts,
	form: formReducer,
});
