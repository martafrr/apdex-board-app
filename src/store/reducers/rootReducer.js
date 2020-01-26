import { combineReducers } from 'redux';
import data from '../data/host-app-data.json';

const appHostData = () =>  data;

export default combineReducers({
  	appHostData
});

