import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
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
         //const resp = await signInWithEmailPassword(value.email, value.password);
         await dispatch(login(value)); 
      }catch (e) {
         console.log(e);
      }
   };
    
   useEffect(() => {
      if(userInfo) history.push("/");
   }, [userInfo])

   return (
      <div>
         <p>登入頁面</p>
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} />
            <input {...register("password")} />
            <input type="submit" />
         </form>
      </div>
   );
}

export default LogIn;