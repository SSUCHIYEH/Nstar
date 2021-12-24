import img_login from "../assests/landing/login.png";
import { Link } from 'react-router-dom';

function LogIn() {
   return (

      <div className="login_container">
         <div className="login_image">
            <img alt="" className="login_image_img" src={img_login} />
         </div>
         <div className="login_input">
            <form className="login_form">
               <p className="font_24">歡迎回到Nstar!</p>
               <p className="font_20 mt_48">電子郵件</p>
               <p><input className="input mt_16" type="text" name="userEmail" placeholder="輸入您的電子郵件" required /></p>
               <p className="font_20 mt_48">密碼</p>
               <p><input className="input mt_16" type="password" name="userPassword" placeholder="輸入您的密碼" required /></p>
               <Link to={"/"}>
               <div className="btn_selected mt_48">登入</div>
               </Link>
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