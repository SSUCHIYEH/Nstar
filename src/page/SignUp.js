import img_login from "../assests/landing/login.png";
import { Link } from 'react-router-dom';

function SignuUp() {
    return (
        
      <div className="login_container">
      <div className="login_image">
         <img alt="" className="login_image_img" src={img_login} />
      </div>
      <div className="login_input">
         <form className="signup_form">
            <p className="font_24">開始使用Nstar!</p>
            <p className="font_20 mt_32">帳號</p>
            <p><input className="input mt_8" type="password" name="userName" placeholder="輸入您的密碼" required /></p>
            <p className="font_20 mt_32">電子郵件</p>
            <p><input className="input mt_8" type="text" name="userEmail" placeholder="輸入您的電子郵件" required /></p>
            <p className="font_20 mt_32">密碼</p>
            <p><input className="input mt_8" type="password" name="userPassword" placeholder="輸入您的密碼" required /></p>
            <p className="font_20 mt_32">確認密碼</p>
            <p><input className="input mt_8" type="password" name="userPassword" placeholder="輸入您的密碼" required /></p>
            <Link to={"/"}>
            <div className="btn_selected mt_32">註冊</div>
            </Link>
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