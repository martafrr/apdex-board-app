import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

export const middleware = [thunk];

export default () => {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}

// TODO /  check: export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
// TODO /  check:export const store = createStoreWithMiddleware(rootReducer)
