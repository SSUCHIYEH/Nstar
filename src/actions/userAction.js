import {
    USER_SUCCESS_LOGIN,
    USER_FAIL_LOGIN,
    USER_REMENBER_LOGIN,
    USER_LOGOUT,
    USER_SUCCESS_REGISTER,
    USER_FAIL_REGISTER,
} from '../const/constants';
import { useDispatch } from "react-redux";
import { registerWithEmailPassword, signInWithEmailPassword } from '../api/userAPI.js';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export const login = (userInfo) => async (dispatch) => {
    try {
        const resp = await signInWithEmailPassword(
            userInfo.email,
            userInfo.password
        );
        console.log(resp);
        if (resp.status === 200) {
            dispatch({
                type: USER_SUCCESS_LOGIN,
                payload: resp.user,
            })
            localStorage.setItem("userInfo", JSON.stringify(resp.user));
            return resp.user;
        } else {
            dispatch({
                type: USER_FAIL_LOGIN,
                payload: `${resp.status} error!
              ${resp.detail}`,
            });
            return null;
        }
    } catch (e) {
        console.log(e);
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT });
    localStorage.removeItem("userInfo");
}

export const signUpRegister = (userInfo) => async (dispatch) => {

    try {

        const resp = await registerWithEmailPassword(
            userInfo.name,
            userInfo.email,
            userInfo.password,
        );

        if (resp.status === 200) {
            console.log('200' + resp);
            dispatch({
                type: USER_SUCCESS_REGISTER,
                payload: resp.user,
            });
            localStorage.setItem("userInfo", JSON.stringify(resp.user));
            return resp.user;
        } else {
            console.log(`${resp.status} error! ${resp.detail}`);
            dispatch({
                type: USER_FAIL_REGISTER,
                payload: `${resp.status} error! ${resp.detail}`,
            })
            return null;
        }
    } catch (e) {
        dispatch({
            type: USER_FAIL_REGISTER,
            payload: e,
        });
        return null
    }
}