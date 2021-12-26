import img_login from "../assests/landing/login.png";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import { signInWithEmailPassword } from "../api/userAPI";
import { useHistory } from "react-router-dom";


function LogIn() {
   const history = useHistory();
   const {userInfo} = useSelector(state => {
      console.log(state.userSignIn)
      return state.userSignIn})
   const dispatch = useDispatch();
   const { register, handleSubmit } = useForm();

   const onSubmit = async (value) => {
      try{
         console.log(value);
         await dispatch(login(value)); 
      }catch (e) {
         console.log(e);
      }
   };
    
   useEffect(() => {
      if(userInfo) history.push("/");
   }, [userInfo])
   return (

      <div className="login_container">
         <div className="login_image">
            <img alt="" className="login_image_img" src={img_login} />
         </div>
         <div className="login_input">
            <form onSubmit={handleSubmit(onSubmit)} className="login_form">
               <p className="font_24">歡迎回到Nstar!</p>
               <p className="font_20 mt_48">電子郵件</p>
               <p><input {...register("email", { required: true })} className="input mt_16" type="text"  placeholder="輸入您的電子郵件"  /></p>
               <p className="font_20 mt_48">密碼</p>
               <p><input className="input mt_16" {...register("password", { required: true })} type="password"  placeholder="輸入您的密碼"/></p>
               {/* <Link to={"/"}>
               <div className="btn_selected mt_48">登入</div>
               </Link> */}
               <input className="btn_selected mt_48" type="submit" value="登入"/>
               <div className="display_flex mt_16">
               <p className="font_gray">還沒有帳號？</p>
               <Link to={"/signup"}>
               <p className="font_black">點我註冊</p>
               </Link>
               </div>
            </form>
         </div>
      </div>
   );
}

export default LogIn;