import { CHANGE_LAYOUT } from '../actions/constants';

export default (state=false, action) => {
    switch(action.type) {
        case CHANGE_LAYOUT: {
            return !state;
        }
        default:
            return state
    }
}