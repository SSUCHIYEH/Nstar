import img_backIcon from "../assests/Icon/Forward_left.png";
import img_doneIcon from "../assests/Icon/Done.png";
import img_userIcon from "../assests/Icon/account.png";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeProductFromOrder } from "../actions/productAction";
import { deleteProduct } from "../api/productAPI";
function UserCheckoutSuccess() {
   const { orderDetail, orderProduct } = useSelector(state => state.product)
   const dispatch = useDispatch();

   async function _handledeleteProduct() {
      for (let i in orderProduct) {
         const resp = await deleteProduct(orderProduct[i].id);
         console.log(resp);
      }
   }

   useEffect(() => {
      console.log(orderDetail);
   }, [orderDetail])
   useEffect(() => {
      _handledeleteProduct();
      dispatch(removeProductFromOrder());
   }, [])
   return (

      <div className="UserCheckoutSuccess_container">
         <Link to={"/"}>
            <div className="display_flex">
               <img alt="" className="img_26" src={img_backIcon} />
               <p className="pl_16 font_black">回首頁</p>
            </div>
         </Link>
         <div className="display_setCenter">

            <div className="display_flex mt_24">
               <img alt="" className="img_26" src={img_doneIcon} />
               <p className="pl_16">您已完成訂單!</p>
            </div>

            <div className="UserCheckoutSuccess_successDetail mt_24">

               <p className="font_20">商品內容</p>
               <div className="display_center mt_36">
                  <img alt="" className="img_36" src={img_userIcon} />
                  <p className="pl_16">abc1234</p>
               </div>
               <div className="line mt_36"></div>

               {
               orderDetail.product_items.map((item)=>(
               <div className="display_center_between mt_36">
                  <div className="display_center">
                     <img alt="" className="img_36" src={item.image} />
                     <p className="pl_16">{item.name}</p>
                  </div>
                  <p>{item.price}</p>
               </div>
               ))}

               <div className="line mt_36"></div>
               <p className="font_20 mt_36">宅配資訊</p>

               <div className="userCheckout_shipDetail mt_36">
                  <p className="font_gray">ppp ppp ppp</p>
                  <p>運費60</p>
               </div>
               <div className="line mt_36"></div>
               <p className="font_20 mt_36">付款資訊</p>
               <p className="font_gray mt_36">銀行轉帳</p>
               <div className="line mt_36"></div>
               <div className="userCheckout_shipDetail mt_36">
                  <p className="font_20">訂單總金額</p>
                  <p className="font_20">NT{orderDetail.totalprice}</p>
               </div>


            </div>
         </div>
      </div>


   );
}

export default UserCheckoutSuccess;