import hostsReducer from './hostsReducer';
import { GET_HOST } from '../actions/constants';

describe('Hosts Reducer', () => {
    const hosts = [{name: 'host 1'}, {name: 'host 2'}, {name: 'host 3'}];
    
    it('should return default state', () => {
        const newState = hostsReducer(hosts, {});
        expect(newState).toEqual(hosts)
    });

    it('should return new state if receiving type', () => {
        const newState = hostsReducer(undefined, {
            type: GET_HOST,
            payload: hosts
        });
        expect(newState).toEqual(hosts)
    });
});