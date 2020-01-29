import { ADD_APP_TO_HOST, REMOVE_APP_FROM_HOST } from './constants';

export const addAppToHost = ({ name, contributors, version, apdex, hosts }, hostName) => ({
    type: ADD_APP_TO_HOST,
    payload: {
        hostName,
        appInfo: {
            name,
            contributors,
            version,
            apdex: parseInt(apdex), 
            hosts,
        }
    }
});

export const removeAppFromHost = (indexAppToRemove, app, hostName) => ({
    type: REMOVE_APP_FROM_HOST,
    payload: {
        indexAppToRemove,
        app,
        hostName,
    }
});