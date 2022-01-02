import img_userIcon from "../assests/Icon/account.png";
import CreditCardDetailModal from "../component/CreditCardDetailModal";
import ShipDetailModal from "../component/ShipDetailModal";
import { useState, useEffect } from "react";
import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../actions/productAction";
import { Card } from "antd";
import { ADD_CART_ITEM, CLEAN_CART_ITEMS } from "../const/constants";

function UserCheckout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { orderProduct, orderDetail } = useSelector(state => {
    console.log(state);
    return state.product
  })
  const { userInfo } = useSelector(state => state.userSignIn);
  const [byremit, setbyRemit] = useState(false);


  const [shipModalShow, setShipModalShow] = useState(false);
  const [creditModalShow, setCreditModalShow] = useState(false);

  //shipDetail
  const [shipName, setShipName] = useState("尚未填寫宅配資訊");
  const [shipPhone, setShipPhone] = useState("");
  const [shipAddress, setShipAddress] = useState("");

  //creditDetail
  const [creditName, setCreditName] = useState("尚未填寫信用卡資訊");
  const [creditNumber, setCreditNumber] = useState("");

  const handlePaymentClick = (value = !byremit) => {
    setbyRemit(value);
  }

  function TotalPrice() {
    return orderProduct.reduce((sum, item) => sum + item.price, 0)
  }


  async function handlePayTheCheck() {
    const product_item = createProductItems();
    const totalPrice = TotalPrice() + 60;
    const payment = byremit ? "信用卡付款" : "銀行轉帳";
    const order = {
      "id": "string",
      "finish": false,
      "payment": payment,
      "address": `${shipName} ${shipPhone} ${shipAddress}`,
      "totalprice": totalPrice,
      "user_sell_id": orderProduct[0].owner.id,
      "user_buy_id": userInfo.user_id,
      "product_items": product_item
    }
    await dispatch(createOrder(order, userInfo.user_id));
  }

  function createProductItems() {
    let data = [];
    orderProduct.forEach(item => {
      const product = {
        "category": item.category,
        "name": item.name,
        "size": item.size,
        "color": item.color,
        "tag": item.tag,
        "price": item.price,
        "image": item.image,
        "description": item.description
      }
      data.push(product);
    });
    return data;
  }

  useEffect(() => {
    console.log(orderDetail);
    if (orderDetail) {
      let cartData = JSON.parse(localStorage.getItem("cartItems"))
      delete cartData[orderProduct[0].owner.username];
      console.log(cartData)
      if (cartData) {
        localStorage.setItem("cartItems", JSON.stringify(cartData));
        dispatch({ type: ADD_CART_ITEM })
      } else {
        dispatch({ type: CLEAN_CART_ITEMS })
      }
      history.push('/usercart/usercheckoutsuccess')
    }
  }, [orderDetail])



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
          <p className="pl_16">{orderProduct[0].owner.username}</p>
        </div>
        <div className="line mb_36"></div>

        {/* map */}
        {
          orderProduct.map((item) => (
            <div className="display_center_between mb_36">
              <div className="display_center">
                <img alt="" className="img_64" src={item.image} />
                <p className="pl_16">{item.name}</p>
              </div>
              <p>{item.price}</p>
            </div>
          ))
        }

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
        {byremit ?
          ""
          :
          <div>
            <div className="line mt_36"></div>
            <button onClick={() => setCreditModalShow(true)} id="creditModalBtn" className="btn_unSelected mt_36">編輯信用卡資訊</button>
            <p className="font_gray mt_36">{creditName}{creditNumber}</p>
          </div>
        }
      </div>

      <div className="display_center_end">
        <div className="display_flex mt_24">
          <p className="font_20">訂單金額:(共{orderProduct.length}件商品含運費):</p>
          <p className="font_36">{TotalPrice() + 60}</p>

        </div>
      </div>
      <div className="display_center_end">
        <a onClick={handlePayTheCheck}>
          <button className="userCheckout_payBtn font_24 mt_24">結帳</button>
        </a>
      </div>

    </div>
  );
}

export default UserCheckout;

{/* <Link to={"/usercart/usercheckoutsuccess"}>
  <button className="userCheckout_payBtn font_24 mt_24">結帳</button>
</Link> */}