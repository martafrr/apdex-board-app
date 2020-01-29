import hostsReducer from './hostsReducer';
import { GET_HOST, ADD_APP_TO_HOST } from '../actions/constants';

describe('Hosts Reducer', () => {
    const hosts = {
        'host1': [{name: 'app1', apdex: 1}],
        'host2': [{name: 'app2', apdex: 1}],
        'host3': [{name: 'app3', apdex: 1}]
    };
    
    it('should return default state', () => {
        const newState = hostsReducer(hosts, {});
        expect(newState).toEqual(hosts)
    });

    it('should return new action.payload if GET_HOST type', () => {
        const newStateProperty = hostsReducer(undefined, {
            type: GET_HOST,
            payload: hosts
        });
        expect(newStateProperty).toEqual(hosts)
    });

    it('should return new state if receiving type', () => {
        const action = {
            type: ADD_APP_TO_HOST,
            payload: {
                appInfo: {name: 'app4', apdex: 100}, 
                hostName: 'host1'
            }
        }
        const newState = hostsReducer(hosts, action);
        expect(newState['host1']).toEqual([ 
            {name: 'app4', apdex: 100},
            {name: 'app1', apdex: 1}
        ])
    });
});