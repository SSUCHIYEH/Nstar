import {createStore, compose, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk";
import { userSignInReducer,userRegisterReducer} from "./userReducer";
import { productReducer } from "./productReducer";
const initialState = {
    userSignIn : {
        userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
        remenber: true,
        error: '',
    },
    userSignUp:{
        userInfo: null,
        error: '',
    },
    product:{
        cartItems:localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : null,
        product:null,
        orderProduct:null,
        orderDtail:null,
    }
    
}

const reducerApp = combineReducers({
    userSignIn:userSignInReducer,
    userSignUp:userRegisterReducer,
    product:productReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducerApp,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;