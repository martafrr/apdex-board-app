import { apiMiddleware } from 'redux-api-middleware';
import configureMockStore from 'redux-mock-store';
import { 
    addAppToHost,
    removeAppFromHost,
    removeAppFromAllHosts,
} from './hostActions';
import { initialState } from '../reducers/hostsReducer';
import { 
    ADD_APP_TO_HOST,
    REMOVE_APP_FROM_ONE_HOST,
    REMOVE_APP_FROM_ALL_HOSTS,
} from './constants';

const createStore = configureMockStore([apiMiddleware]);
let store;

describe('addAppToHost actions', () => {
    beforeEach(() => {
        store = createStore(initialState);
    });

    it('addAppToHost should return expected payload', () => {
        const mockProps = { 
            name: 'App 4',
            contributors: 'Melisa', 
            version: '1', 
            apdex: '100', 
            host: 'host2'
        }
        const hostName = '7e6272f7-098e.dakota.biz';

        store.dispatch(addAppToHost(mockProps, hostName));
        const actions = store.getActions();
        const expectedApp = {
            name: 'App 4',
            contributors: 'Melisa', 
            version: '1', 
            apdex: 100, 
            host: 'host2'
        }

        expect(actions[0].type).toEqual(ADD_APP_TO_HOST);    
        expect(actions[0].payload[hostName][0]).toEqual(expectedApp);    
    });

    it('removeAppFromHost should return expected payload', () => {
        const indexAppToRemove = 0;
        const hostName = '7e6272f7-098e.dakota.biz';
        const beforeAction = store.getState()[hostName].length;

        store.dispatch(removeAppFromHost(indexAppToRemove, hostName));
        const actions = store.getActions();
        
        expect(actions[0].type).toEqual(REMOVE_APP_FROM_ONE_HOST);  
        expect(actions[0].payload[hostName].length).toEqual(beforeAction-1)
    });

    it('removeAppFromAllHosts should return expected payload', () => {
        const appName = 'Small Fresh Pants - Kautzer - Boyer, and Sons';

        store.dispatch(removeAppFromAllHosts(appName));
        const actions = store.getActions();
        
        expect(actions[0].type).toEqual(REMOVE_APP_FROM_ALL_HOSTS);  
        expect(actions[0].payload['7e6272f7-098e.dakota.biz'][0].name)
            .not.toEqual(appName);
    });
});