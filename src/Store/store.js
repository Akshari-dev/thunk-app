import photosReducer from "./Reducers/photoReducer";
import thunk from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from 'redux'

const reducers=combineReducers({photos:photosReducer})
const middleware = applyMiddleware(thunk)

export default createStore(reducers,middleware)