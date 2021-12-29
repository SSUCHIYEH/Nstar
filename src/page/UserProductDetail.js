import img_backIcon from "../assests/Icon/Forward_left.png";
import img_default from "../assests/product_default.png";
import img_userIcon from "../assests/Icon/account_104.png";
import img_like from "../assests/Icon/like.png";
import img_comment from "../assests/Icon/chat-bubble.png";
import ProductModifyModal from "../component/ProductModifyModal";

import { useState } from "react";

import { Link } from 'react-router-dom';
function UserProductDetail() {
    const [midifyModalShow, setModifyModalShow] = useState(false);

    return (
       

        <div className="UserProductDetail_container">
            {midifyModalShow?<ProductModifyModal changeShow={() => setModifyModalShow(false)}/>:""}
             
             
            <div className="UserProductDetail_containerBox">

            <Link to={"/userproductshop"}>
                <div className="display_flex">
                    <img alt="" className="img_26" src={img_backIcon} />
                    <p className="pl_16 font_black">回我的商店</p>
                </div>
            </Link>
            
            <div className="UserProductDetail_detail mt_24">
                <img alt="" className="img_480" src={img_default} />
                <div className="UserProductDetail_detail_description">
                    <div className="display_center">
                        <img alt="" className="img_36" src={img_userIcon} />
                        <p className="font_20 ml_16">becca1304</p>
                    </div>
                    <p className="font_24 mt_24">深紅棒球外套</p>
                    <p className="font_24 mt_24">NT240</p>
                    <div className="display_center mt_24">
                        <img alt="" className="img_26" src={img_like} />
                        <img alt="" className="img_26 ml_16" src={img_comment} />
                    </div>
                    <div className="UserProductDetail_info mt_24">
                        <div className="">尺寸</div>
                        <div className="">M</div>
                    </div>
                    <div className="UserProductDetail_info mt_16">
                        <div className="">品牌</div>
                        <div className="">無</div>
                    </div>
                    <div className="UserProductDetail_info mt_16">
                        <div className="">狀況</div>
                        <div className="">只穿過2次</div>
                    </div>
                    <div className="UserProductDetail_info mt_16">
                        <div className="">顏色</div>
                        <div className="">深紅</div>
                    </div>
                    <div className="UserProductDetail_info mt_16">
                        <div className="">標籤</div>
                        <div className="">復古、男友風</div>
                    </div>
                    <button onClick={() => setModifyModalShow(true)} className="btn_selected mt_16 w_240">編輯商品</button>

                </div>


            </div>
            </div>
        </div>


    );
}

export default UserProductDetail;