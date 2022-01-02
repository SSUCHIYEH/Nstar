import img_backIcon from "../assests/Icon/Forward_left.png";
import img_userIcon from "../assests/Icon/account_104.png";
import OrderDetailModal from "../component/OrderDetailModal";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBuyOrder, getSellOrder } from "../api/productAPI";
import { useSelector } from "react-redux";

function UserOrderQuery() {
    const { type } = useParams();
    const { userInfo } = useSelector(state => state.userSignIn)
    const [orderModalShow, setOrderModalShow] = useState(false);
    const [sell, setSell] = useState(true);
    const [order, setOrder] = useState(null);
    const [orderDetail, setOrderDetail] = useState()

    const handleSetModelDetail = (orderData) => {
        setOrderDetail(orderData);
        setOrderModalShow(true);
    }

    useEffect(() => {
        if (type === "sell") {
            getSellOrder(userInfo.user_id).then((resp) => {
                if (resp.status === 200) {
                    setOrder(resp.order);
                }
            }).catch((e) => {
                console.log(e);
            })
        } else {
            getBuyOrder(userInfo.user_id).then((resp) => {
                if (resp.status === 200) {
                    setOrder(resp.order);
                }
            }).catch((e) => {
                console.log(e);
            })
        }
    }, [])

    return (

        <div className="UserOrderQuery_container">
            {orderModalShow ?
                <OrderDetailModal changeShow={() => setOrderModalShow(false)} order={orderDetail} />
                : ""}
            {type === "sell" ?
                <Link to={"/userproductshop"}>
                    <div className="display_flex">
                        <img alt="" className="img_26" src={img_backIcon} />
                        <p className="pl_16 font_black">回我的商店</p>
                    </div>
                </Link>
                : ""}

            <div className="display_setCenter mt_36">
                <div className="UserOrderQuery_title">
                    {type === "sell" ? <p className="mb_16">我的商店訂單</p>
                        : <p className="mb_16">我的購買紀錄</p>}

                </div>
            </div>
            <div className="display_flex mt_36">
                <button className="UserOrderQuery_tabOn">待出貨</button>
                <button className="UserOrderQuery_tabOff ml_16">運送中</button>
                <button className="UserOrderQuery_tabOff ml_16">已完成</button>
            </div>

            {
                order ?
                    <>
                        {order.map((item) => (
                            <div className="UserOrderQuery_item mt_36">
                                <p className="mb_16">訂單編號 {order.id}</p>
                                <div className="display_center_between">
                                    <div className="display_center">
                                        {
                                            type === "sell" ?
                                                <>
                                                    <img alt="" className="img_36" src={img_userIcon} />
                                                    <p className="font_20 ml_16">{order.user_buy}</p>
                                                </>
                                                :
                                                <>
                                                    <img alt="" className="img_36" src={img_userIcon} />
                                                    <p className="font_20 ml_16">{order.user_sell}</p>
                                                </>
                                        }

                                    </div>
                                    <button onClick={handleSetModelDetail} className="btn_selected">查看詳情</button>


                                </div>
                            </div>
                        ))}
                    </>
                    : null
            }

        </div>


    );
}

export default UserOrderQuery;