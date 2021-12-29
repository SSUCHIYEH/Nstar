import img_backIcon from "../assests/Icon/Forward_left.png";
import img_userIcon from "../assests/Icon/account_104.png";
import OrderDetailModal from "../component/OrderDetailModal";
import { useState } from "react";

import { Link } from 'react-router-dom';
function UserOrderQuery() {
    const [orderModalShow, setOrderModalShow] = useState(false);
    const [sell, setSell] = useState(true);

    return (

        <div className="UserOrderQuery_container">
            {orderModalShow?
            <OrderDetailModal changeShow={() => setOrderModalShow(false)}/>
            :""}
            {sell?
             <Link to={"/userproductshop"}>
                <div className="display_flex">
                    <img alt="" className="img_26" src={img_backIcon} />
                    <p className="pl_16 font_black">回我的商店</p>
                </div>
            </Link>
            :""}
           
            <div className="display_setCenter mt_36">
                <div className="UserOrderQuery_title">
                    {sell? <p className="mb_16">我的商店訂單</p>
                    :<p className="mb_16">我的購買紀錄</p>}
                   
                </div>
            </div>
            <div className="display_flex mt_36">
                <button className="UserOrderQuery_tabOn">待出貨</button>
                <button className="UserOrderQuery_tabOff ml_16">運送中</button>
                <button className="UserOrderQuery_tabOff ml_16">已完成</button>
            </div>
            {/* map */}
            <div className="UserOrderQuery_item mt_36">
                <p className="mb_16">訂單編號 OIEJFOI</p>
                <div className="display_center_between">
                    <div className="display_center">
                        <img alt="" className="img_36" src={img_userIcon} />
                        <p className="font_20 ml_16">becca1304</p>
                    </div>
                    <button onClick={() => setOrderModalShow(true)} className="btn_selected">查看詳情</button>
                    

                </div>
            </div>
             {/* map */}



        </div>


    );
}

export default UserOrderQuery;