import img_userIcon from "../assests/Icon/account.png";
import CreditCardDetailModal from "../component/CreditCardDetailModal";
import ShipDetailModal from "../component/ShipDetailModal";
import { useState } from "react";
import React from "react";
import { Link } from 'react-router-dom';


function UserCheckout() {


  const [byremit, setbyRemit] = useState(false);
  const handlePaymentClick = (value = !byremit) => {
    setbyRemit(value);
  }

  const [shipModalShow, setShipModalShow] = useState(false);
  const [creditModalShow, setCreditModalShow] = useState(false);

  //shipDetail
  const [shipName, setShipName] = useState("尚未填寫宅配資訊");
  const [shipPhone, setShipPhone] = useState("");
  const [shipAddress, setShipAddress] = useState("");

  //creditDetail
  const [creditName, setCreditName] = useState("尚未填寫信用卡資訊");
  const [creditNumber, setCreditNumber] = useState("");







  return (


    <div className="userCheckout_container">

      {shipModalShow ? <ShipDetailModal
        changeShow={() => setShipModalShow(false)}
        changeShipName={(e) => { setShipName(e.target.value) }}
        changeShipPhone={(e) => { setShipPhone(e.target.value) }}
        changeShipAddress={(e) => { setShipAddress(e.target.value) }}
      /> : ""}

      {creditModalShow ? <CreditCardDetailModal
        changeCreditShow={() => setCreditModalShow(false)}
        changeCreditName={(e) => { setCreditName(e.target.value) }}
        changeCreditNumber={(e) => { setCreditNumber(e.target.value) }}
      /> : ""}
      {/* <CreditCardDetailModal /> */}
      <p className="font_24 mb_24">訂單詳情</p>
      <div className="userCheckout_order">
        <div className="display_center mb_36">
          <img alt="" className="img_36" src={img_userIcon} />
          <p className="pl_16">abc1234</p>
        </div>
        <div className="line mb_36"></div>

        {/* map */}
        <div className="display_center_between mb_36">
          <div className="display_center">
            <img alt="" className="img_64" src={img_userIcon} />
            <p className="pl_16">素色大學T</p>
          </div>
          <p>NT130</p>
        </div>
        {/* map */}

        <div className="line mb_36"></div>
        <p className="font_20 mb_36">宅配資訊</p>
        <button onClick={() => setShipModalShow(true)} id="shipModalBtn" className="btn_unSelected">編輯宅配資訊</button>

        <div className="userCheckout_shipDetail mt_36">
          <div className="font_gray">{shipName} {shipPhone} {shipAddress}</div>
          <div>運費60</div>
        </div>


      </div>
      <p className="font_24 mb_24 mt_48">付款詳情</p>

      <div className="userCheckout_payment">
        <div className="userCheckout_payment_switch">
          <p className="font_20">付款方式</p>
          <div className="userCheckout_switchItem">
            <div className="userCheckout_switch_a">
              <button id="remitBtn" onClick={() => handlePaymentClick(true)} className={byremit ? "btn_selected" : "btn_unSelected"}>銀行轉帳</button>
            </div>
            <div className="userCheckout_switch_b">
              <button id="creditBtn" onClick={() => handlePaymentClick(false)} className={byremit ? "btn_unSelected" : "btn_selected"}>信用卡/金融卡</button>
            </div>
          </div>

        </div>
        { byremit ? 
           ""
          : 
          <div>
           <div className="line mt_36"></div>
           <button  onClick={() => setCreditModalShow(true)} id="creditModalBtn" className="btn_unSelected mt_36">編輯信用卡資訊</button>
           <p className="font_gray mt_36">{creditName}{creditNumber}</p>
           </div> 
        }
      </div>

      <div className="display_center_end">
        <div className="display_flex mt_24">
          <p className="font_20">訂單金額:(共2件商品含運費):</p>
          <p className="font_36">360</p>

        </div>
      </div>
      <div className="display_center_end">
      <Link to={"/usercart/usercheckoutsuccess"}>
        <button className="userCheckout_payBtn font_24 mt_24">結帳</button>
        </Link>
      </div>

    </div>
  );
}

export default UserCheckout;