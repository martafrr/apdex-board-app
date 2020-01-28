import dataBase from '../data/host-app-data.json';
import { mergeSort } from '../../utils/data-utils';
import { GET_HOSTS_DATA, GET_HOST } from '../actions/constants';

const getHostsList = (data) => {
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
const initialState = getHostsList(dataBase);

export default (state=initialState, action) => {
    switch(action.type) {
        // TODO: NEEDED????
        case GET_HOST:
            return action.payload;
        default:
            return state;
    }
}