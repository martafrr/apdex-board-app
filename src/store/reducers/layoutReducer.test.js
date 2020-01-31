import layoutReducer from './layoutReducer';
import { CHANGE_LAYOUT } from '../actions/constants';

describe('Layout reducer', () => {
    const isAwesomeGrid = false;
    
    it('should return default state', () => {
        const newState = layoutReducer(isAwesomeGrid, {});
        
        expect(newState).toEqual(isAwesomeGrid)
    });

    it('should return new action.payload if CHANGE_LAYOUT type', () => {
        const newStateProperty = layoutReducer(undefined, {
            type: CHANGE_LAYOUT,
            payload: true
        });

        expect(newStateProperty).toEqual(true)
    });
});