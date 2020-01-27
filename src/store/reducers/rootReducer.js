import { combineReducers } from 'redux';
import data from '../data/host-app-data.json';
import { mergeSort } from '../../utils/data-utils';

const hostData = () => {
    const hostsList = {};
    for (let app of data) {
        for (let host of app.host) {
            if(hostsList[host]) {
                hostsList[host].push(app);
            } else {
                hostsList[host] = [app];
            }
        };
    };
    for (let host in hostsList) {        
        hostsList[host] = mergeSort(hostsList[host]);
    }
    return hostsList;
}

export default combineReducers({
  	hostData
});

