import {createStore, compose, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk";
import { userSignInReducer } from "./userReducer";

const initialState = {
    userSignIn : {
        userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
        remenber: true,
        error: '',
    }
}

const reducerApp = combineReducers({
    userSignIn:userSignInReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducerApp,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;