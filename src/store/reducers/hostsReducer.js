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
            const appArrayWithNewEntry = state[action.payload.hostName]
                .concat(action.payload.appInfo);
            const updatedHostState = {
                ...state,
            }
            updatedHostState[action.payload.hostName] = mergeSort(appArrayWithNewEntry);
            return updatedHostState;
        
        case REMOVE_APP_FROM_ONE_HOST:
            const { hostName, indexAppToRemove } = action.payload;
            let newAppsList = state[hostName]
                .slice(0, indexAppToRemove)
                .concat(
                    state[hostName].slice(indexAppToRemove+1)
                );
            return {
                ...state,
                [hostName]: newAppsList
            }

        case REMOVE_APP_FROM_ALL_HOSTS:
            const cleanHostList = {};
            const appToRemove = action.payload.appName;

            for(let host in state) {
                for (let i = 0; i < state[host].length; i++) {
                    if(state[host][i].name !== appToRemove) {
                        cleanHostList[host] ? 
                            cleanHostList[host].push(state[host][i]) :
                            cleanHostList[host] = [state[host][i]]
                    }
                }
            }
            return cleanHostList;

        default:
            return state;
    }
}