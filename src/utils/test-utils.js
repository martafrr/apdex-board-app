import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/reducers/rootReducer';
import { middleware } from '../store';

export const findByTestAtr = (component, atr) => {
    const wrapper = component.find(`[data-test='${atr}']`);
    return wrapper;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};
