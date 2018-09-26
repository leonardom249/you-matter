import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import moreInfoReducer from './reducers/more-info'



const store= createStore(
    combineReducers({
        moreInfo: moreInfoReducer
    }), 
    composeWithDevTools(), 
    applyMiddleware(thunk)
);

export default store;
