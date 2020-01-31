import hostsReducer from './hostsReducer';
import { ADD_APP_TO_HOST } from '../actions/constants';

describe('Hosts reducer', () => {
    const hosts = {
        'host1': [{name: 'app1', apdex: 1}],
        'host2': [{name: 'app2', apdex: 1}],
        'host3': [{name: 'app3', apdex: 1}]
    };
    
    it('should return default state', () => {
        const newState = hostsReducer(hosts, {});

        expect(newState).toEqual(hosts)
    });

    it('should return new state if receiving ADD_APP_TO_HOST', () => {
        const payload = {
            'host1': [{name: 'app4', apdex: 100},{name: 'app1', apdex: 1}],
            'host2': [{name: 'app2', apdex: 1}],
            'host3': [{name: 'app3', apdex: 1}]
        };
        const action = {
            type: ADD_APP_TO_HOST,
            payload
        }
        const newState = hostsReducer(hosts, action);
        
        expect(newState).toEqual(payload)
    });
});