import configureStore from '../index';
import { mergeSort } from '../../utils/data-utils';
import { 
    ADD_APP_TO_HOST,
    REMOVE_APP_FROM_ONE_HOST,
    REMOVE_APP_FROM_ALL_HOSTS,
} from './constants';

const store = configureStore();

export const addAppToHost = ({ name, contributors, version, apdex, host }, hostName) => {
    const appInfo = {
        name,
        contributors,
        version,
        apdex: parseInt(apdex), 
        host,
    }
    const appArrayWithNewEntry = store.getState()
        .hosts[hostName]
        .concat(appInfo);
    const updatedHostList = {
        ...store.getState().hosts,
    }
    
    updatedHostList[hostName] = mergeSort(appArrayWithNewEntry);
    return {
        type: ADD_APP_TO_HOST,
        payload: updatedHostList
    };
};

export const removeAppFromHost = (indexAppToRemove, hostName) => {
    const newAppsList = store.getState().hosts[hostName]
    .slice(0, indexAppToRemove)
    .concat(
        store.getState().hosts[hostName].slice(indexAppToRemove+1)
    );

    return {
        type: REMOVE_APP_FROM_ONE_HOST,
        payload: {
            ...store.getState().hosts,
            [hostName]: newAppsList,
        }
    }
};

export const removeAppFromAllHosts = (appName) => {
    const cleanHostList = {};
    for(let host in store.getState().hosts) {
        for (let i = 0; i < store.getState().hosts[host].length; i++) {
            if(store.getState().hosts[host][i].name !== appName) {
                cleanHostList[host] ? 
                    cleanHostList[host].push(store.getState().hosts[host][i]) :
                    cleanHostList[host] = [store.getState().hosts[host][i]]
            }
        }
    }
    
    return {
        type: REMOVE_APP_FROM_ALL_HOSTS,
        payload: {
            ...cleanHostList
        },
    }
};