import {
    USER_SUCCESS_LOGIN,
    USER_FAIL_LOGIN,
    USER_REMENBER_LOGIN,
    USER_LOGOUT,
} from '../const/constants';
import { useDispatch} from "react-redux";
import {signInWithEmailPassword} from '../api/userAPI.js';

export const login = (userInfo) => async(dispatch) => {
    try{
        const resp = await signInWithEmailPassword(
            userInfo.email,
            userInfo.password
        );
        console.log(resp);
        if(resp.status === 200) {
            dispatch({
                type:USER_SUCCESS_LOGIN,
                payload:resp.user,
            })
            localStorage.setItem("userInfo", JSON.stringify(resp.user));
            return resp.user;
        }else {
            dispatch({
              type: USER_FAIL_LOGIN,
              payload: `${resp.status} error!
              ${resp.detail}`,
            });
            return null;
          }
    }catch(e){
        console.log(e);
    }
}

export const logout= () =>async(dispatch)=>{
    dispatch({type:USER_LOGOUT});
    localStorage.removeItem("userInfo");
}