import dataBase from '../data/host-app-data.json';
import { mergeSort } from '../../utils/data-utils';
import { 
    ADD_APP_TO_HOST,
    REMOVE_APP_FROM_ONE_HOST,
    REMOVE_APP_FROM_ALL_HOSTS,
} from '../actions/constants';

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
        case ADD_APP_TO_HOST:
            return action.payload;
        
        case REMOVE_APP_FROM_ONE_HOST:
            return action.payload

        case REMOVE_APP_FROM_ALL_HOSTS:
            return action.payload;

        default:
            return state;
    }
}