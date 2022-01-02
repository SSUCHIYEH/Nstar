import img_userIcon from "../assests/Icon/account.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function OrderDetailModal(props) {
    const { type } = useParams();
    const { changeShow, order } = props;

    const [sell, setSell] = useState(true);
    useEffect(() => {
        console.log(order);
    }, [])
    return (

        <div className="modal_order">
            {order ?
                <form className="modal_order_content">
                    <div onClick={changeShow}> <span className="close">&times;</span></div>

                    <p className="font_24">訂單編號 {order.id.slice(0, 8)}</p>

                    {
                        order.product_items.map((item) => (
                            <div className="display_center_between mb_36 mt_48">
                                <div className="display_center ">
                                    <img alt="" className="img_36" src={item.image} />
                                    <p className="pl_16">{item.name}</p>
                                </div>
                                <p>NT{item.price}</p>
                            </div>
                        ))
                    }

                    {/* map */}

                    <div className="line mt_36"></div>
                    {   type === "sell" ?
                    
                        <div>
                            <p className="font_20 mt_36">買家資訊</p>
                            <div className="display_center mt_36">
                                <img alt="" className="img_36" src={img_userIcon} />
                                <p className="font_20 ml_16">{order.user_buy.username}</p>
                            </div>
                        </div>
                        :
                        <div>
                            <p className="font_20 mt_36">宅配資訊</p>
                        </div>
                    }

                    <div>
                        <p className="float_r">運費60</p>
                        <p className="mt_36 font_gray">{order.address}</p>
                    </div>
                    <div className="line mt_36"></div>
                    <p className="font_20 mt_36">付款資訊</p>
                    <p className="mt_36 font_gray">{order.payment}</p>
                    <div className="line mt_36"></div>
                    <div>
                        <p className="font_20 float_r">NT{order.totalprice}</p>
                        <p className="font_20 mt_36">訂單總金額</p>
                    </div>

                </form>
                : null
            }



        </div>


    );
}

export default OrderDetailModal;