import {
    USER_SUCCESS_LOGIN,
    USER_FAIL_LOGIN,
    USER_REMENBER_LOGIN,
} from '../const/constants';


const intialstate ={
    userInfo:null,
    remenber: true,
    error:''
};

export const userSignInReducer = ( state = intialstate, action) => {
    switch(action.type) {
        case USER_SUCCESS_LOGIN:
            return{
                ...state,
                userInfo:action.payload,
                error:''
            }
            case USER_FAIL_LOGIN:
                return{
                    ...state,
                    userInfo: null,
                    error: action.payload
                }
            case USER_REMENBER_LOGIN:
                return{
                    ...state,
                    remenber: action.payload,
                }
        default:
            return state;
    }
}