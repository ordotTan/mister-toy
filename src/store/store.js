
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux";

import thunk from "redux-thunk";

import toyReducer from './reducers/toyReducer.js'


const rootReducer = combineReducers({
    toyApp: toyReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

