import img_login from "../assests/landing/login.png";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {signUpRegister} from '../actions/userAction';


function SignuUp() {
   const history = useHistory();
   const {userInfo} = useSelector(state => {
      console.log(state.userSignIn)
      return state.userSignIn})
   const dispatch = useDispatch();
   const { register, handleSubmit } = useForm();
   const onSubmit= async (value)=>{
      console.log(value.password === value.comfirm_password);
      if(value.password === value.comfirm_password){
         console.log(value);
        await dispatch(signUpRegister(value));
      }
   }
   useEffect(() => {
      if(userInfo) history.push("/");
   }, [userInfo])
    return (
        
      <div className="login_container">
      <div className="login_image">
         <img alt="" className="login_image_img" src={img_login} />
      </div>
      <div className="login_input">
         <form className="signup_form" onSubmit={handleSubmit(onSubmit)}>
            <p className="font_24">開始使用Nstar!</p>
            <p className="font_20 mt_32">帳號</p>
            <p><input className="input mt_8" {...register("name", { required: true })} placeholder="輸入您的密碼" required /></p>
            <p className="font_20 mt_32">電子郵件</p>
            <p><input className="input mt_8" {...register("email", { required: true })} placeholder="輸入您的電子郵件" required /></p>
            <p className="font_20 mt_32">密碼</p>
            <p><input className="input mt_8" {...register("password", { required: true })} placeholder="輸入您的密碼" required /></p>
            <p className="font_20 mt_32">確認密碼</p>
            <p><input className="input mt_8" {...register("comfirm_password", { required: true })} placeholder="輸入您的密碼" required /></p>
            <input className="btn_selected mt_32" type="submit" value="註冊"/>
            <div className="display_flex mt_8">
            <p className="font_gray">已經有帳號？</p>
            <Link to={"/login"}>
            <p  className="font_black">點我登入</p>
            </Link>
            </div>
         </form>
      </div>
   </div>
       
        
    );
  }
  
  export default SignuUp;