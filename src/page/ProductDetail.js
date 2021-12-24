import AddToCart from "../component/AddToCart";
import chat from '../assests/Icon/chat-bubble.png';
import like from '../assests/Icon/like.png'
import Productlist from "../component/Productlist";
import anotherProduct from '../json/women_bottom.json';

export default function ProductDetail() {
    return (
        <>
            <div className="productdetail_container">
                <div className="productdetail_img">
                    <img alt="" className="productdetail_img_img" src="" />
                </div>
                <div className="productdetail_detail">
                    <div className="productdetail_detail_detail">
                        <div className="productdetail_seller">
                            <img className="productdetail_sellericon" src="" alt="" />
                            <div className="productdetail_sellername">Becca</div>
                        </div>
                        <div className="productdetail_title">好看衣服</div>
                        <div className="productdetail_price">NT 200</div>
                        <div className="productdetail_button">
                            <img className="productdetail_icon" src={like} alt="" />
                            <img className="productdetail_icon" src={chat} alt="" />
                        </div>
                        <div className="productdetail_information">
                            <div className="productdetail_item">尺寸</div>
                            <div className="productdetail_answer">M</div>
                        </div>
                        <div className="productdetail_information">
                            <div className="productdetail_item">品牌</div>
                            <div className="productdetail_answer">無</div>
                        </div>
                        <div className="productdetail_information">
                            <div className="productdetail_item">狀況</div>
                            <div className="productdetail_answer">讚</div>
                        </div>
                        <div className="productdetail_information">
                            <div className="productdetail_item">顏色</div>
                            <div className="productdetail_answer">黃色</div>
                        </div>
                        <div className="productdetail_information">
                            <div className="productdetail_item">標籤</div>
                            <div className="productdetail_answer">男友風</div>
                        </div>



                    </div>
                </div>

            </div>
            <Productlist products={anotherProduct} text="賣家其他商品"/>
        </>
    )

}