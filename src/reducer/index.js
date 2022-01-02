import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk";
import { userSignInReducer, userRegisterReducer, userLikeReducer } from "./userReducer";
import { productReducer } from "./productReducer";
import { SET_LOADING_FALSE, SET_LOADING_TRUE } from "../const/constants";


const loadingReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case SET_LOADING_FALSE:
            return {
                ...state,
                loading: false,
            };
        case SET_LOADING_TRUE:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

const initialState = {
    userSignIn: {
        userInfo: localStorage.getItem("userInfo")
            ? JSON.parse(localStorage.getItem("userInfo"))
            : null,
        remenber: true,
        error: '',
    },
    userSignUp: {
        userInfo: null,
        error: '',
    },
    product: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : null,
        product: null,
        orderProduct: null,
        orderDetail: null,
        reload: false,
    },
    load: {
        loading: false,
    },
    userLike: {
        like: localStorage.getItem("like")
            ? JSON.parse(localStorage.getItem("like"))
            : null
    }

}

const reducerApp = combineReducers({
    userSignIn: userSignInReducer,
    userSignUp: userRegisterReducer,
    product: productReducer,
    load: loadingReducer,
    userLike: userLikeReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducerApp,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;