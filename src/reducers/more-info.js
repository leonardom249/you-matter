import {OPEN_MORE_INFO, CLOSE_MORE_INFO} from '../actions/more-info.js'

const initialState = {
    moreInfo: false
};

export default function reducer(state = initialState, action) {
    if (action.type === OPEN_MORE_INFO) {
        return Object.assign({}, state, {
            moreInfo: true
        });
    } else if (action.type === CLOSE_MORE_INFO) {
        return Object.assign({}, state, {
            moreInfo: false
        });
    } 
    return state;
}