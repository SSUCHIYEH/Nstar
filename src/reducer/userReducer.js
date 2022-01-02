import {
    USER_SUCCESS_LOGIN,
    USER_FAIL_LOGIN,
    USER_REMENBER_LOGIN,
    USER_LOGOUT,
    USER_SUCCESS_REGISTER,
    USER_FAIL_REGISTER,
    GET_USER_LIKE,
    REMOVE_USER_LIKE,
} from '../const/constants';

export const userSignInReducer = (state = {
    userInfo: null,
    remenber: true,
    error: '',
}, action) => {
    switch (action.type) {
        case USER_SUCCESS_LOGIN:
            return {
                ...state,
                userInfo: action.payload,
                error: ''
            }
        case USER_FAIL_LOGIN:
            return {
                ...state,
                userInfo: null,
                error: action.payload
            }
        case USER_REMENBER_LOGIN:
            return {
                ...state,
                remenber: action.payload,
            }
        case USER_LOGOUT:
            return {
                ...state,
                userInfo: null,
            }
        default:
            return state;
    }
}

export const userRegisterReducer = (state = {
    userInfo: null,
    error: '',
}, action) => {
    switch (action.type) {
        case USER_SUCCESS_REGISTER:
            return {
                ...state,
                userInfo: action.payload,
                error: '',
            };
        case USER_FAIL_REGISTER:
            return {
                ...state,
                userInfo: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const userLikeReducer = (state = {
    like: null,
}, action) => {
    switch (action.type) {
        case GET_USER_LIKE:
            return {
                ...state,
                like: action.payload,
            };
        case REMOVE_USER_LIKE:
            return {
                ...state,
                like: null,
            }
        default:
            return state
    }
}