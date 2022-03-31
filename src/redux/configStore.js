import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import addingCard from "./modules/cardModule";
import thunk from "redux-thunk";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares)
const rootReducer = combineReducers({ addingCard });
const store = createStore(rootReducer, enhancer);

export default store;
