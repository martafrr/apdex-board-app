import { ADD_APP_TO_HOST } from './constants';

export const addAppToHost = ({ name, contributors, version, apdex, hosts }, hostName) => {
    return {
    type: ADD_APP_TO_HOST,
    payload: {
        hostName,
        appInfo: {
            name,
            contributors,
            version,
            apdex: parseInt(apdex), 
            hosts
        }
    }
}};