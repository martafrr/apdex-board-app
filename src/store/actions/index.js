import { 
    ADD_APP_TO_HOST,
    REMOVE_APP_FROM_ONE_HOST,
    REMOVE_APP_FROM_ALL_HOSTS,
} from './constants';

export const addAppToHost = ({ name, contributors, version, apdex, host }, hostName) => ({
    type: ADD_APP_TO_HOST,
    payload: {
        hostName,
        appInfo: {
            name,
            contributors,
            version,
            apdex: parseInt(apdex), 
            host,
        }
    }
});

export const removeAppFromHost = (indexAppToRemove, app, hostName) => ({
    type: REMOVE_APP_FROM_ONE_HOST,
    payload: {
        indexAppToRemove: parseInt(indexAppToRemove),
        app,
        hostName,
    }
});

export const removeAppFromAllHosts = (appToRemove) => ({
    type: REMOVE_APP_FROM_ALL_HOSTS,
    payload: {
        appToRemove
    }
});