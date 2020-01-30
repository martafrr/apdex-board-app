import dataBase from '../data/host-app-data.json';
import { mergeSort } from '../../utils/data-utils';
import { 
    GET_HOSTS_DATA,
    GET_HOST, 
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
        // TODO: NOT BEIGN USED
        case GET_HOST:
            return action.payload;
        
        case ADD_APP_TO_HOST: 
            const newAppArray = state[action.payload.hostName]
                .concat(action.payload.appInfo);
            const updatedHostList = {
                ...state,
            }
            updatedHostList[action.payload.hostName] = mergeSort(newAppArray);
            return updatedHostList;
        
        case REMOVE_APP_FROM_ONE_HOST:
            const { hostName, indexAppToRemove } = action.payload;
            const newAppsList = state[hostName]
                .slice(0, indexAppToRemove)
                .concat(
                    state[hostName].slice(indexAppToRemove+1)
                );
            return {
                ...state,
                [hostName]: newAppsList
            }

        case REMOVE_APP_FROM_ALL_HOSTS:
            console.log(action.payload)
            // TODO: !!!!!
            for(let host in state) {

            }
            return {
                state
            }

        default:
            return state;
    }
}