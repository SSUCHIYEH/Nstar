import img_userIcon from "../assests/Icon/account.png";
import { useState } from "react";
function OrderDetailModal(props) {
    const { changeShow, order } = props;

    const [sell, setSell] = useState(true);

    return (

        <div className="modal_order">
            {order ?
                <form className="modal_order_content">
                    <div onClick={changeShow}> <span className="close">&times;</span></div>

                    <p className="font_24">訂單編號 {order.id}</p>

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
                    {sell ?
                        <div>
                            <p className="font_20 mt_36">買家資訊</p>
                            <div className="display_center mt_36">
                                <img alt="" className="img_36" src={img_userIcon} />
                                <p className="font_20 ml_16">becca1304</p>
                            </div>
                        </div>
                        :
                        <p className="font_20 mt_36">宅配資訊</p>
                    }

                    <div>
                        <p className="float_r">運費60</p>
                        <p className="mt_36 font_gray">蔡瑀 098765432 台北市復興南路二段200巷03號2樓</p>
                    </div>
                    <div className="line mt_36"></div>
                    <p className="font_20 mt_36">付款資訊</p>
                    <p className="mt_36 font_gray">信用卡/蔡瑀 0987654321</p>
                    <div className="line mt_36"></div>
                    <div>
                        <p className="font_20 float_r">NT360</p>
                        <p className="font_20 mt_36">訂單總金額</p>
                    </div>

                </form>
                : null
            }



        </div>


    );
}

export default OrderDetailModal;