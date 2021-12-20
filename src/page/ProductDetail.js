import { useContext } from "react";
import { StoreContext } from "../store";
import AddToCart from "../component/AddToCart";
import chat from '../assests/Icon/chat-bubble.png';
import like from '../assests/Icon/like.png'
import Productlist from "../component/Productlist";
import anotherProduct from '../json/women_bottom.json';

export default function ProductDetail() {
    const { state: { productDetail: { product } } } = useContext(StoreContext);

    return (
        <>
            <div className="productdetail_container">
                <div className="productdetail_img">
                    <img alt="" className="productdetail_img_img" src={product.imgUrl_1} />
                </div>
                <div className="productdetail_detail">
                    <div className="productdetail_detail_detail">
                        <div className="productdetail_seller">
                            <img className="productdetail_sellericon" src={product.imgUrl_1} alt="" />
                            <div className="productdetail_sellername">{product.seller_name}</div>
                        </div>
                        <div className="productdetail_title">{product.name}</div>
                        <div className="productdetail_price">NT {product.price}</div>
                        <div className="productdetail_button">
                            <img className="productdetail_icon" src={like} alt="" />
                            <img className="productdetail_icon" src={chat} alt="" />
                        </div>
                        <AddToCart />
                        <div className="productdetail_information">
                            <div className="productdetail_item">尺寸</div>
                            <div className="productdetail_answer">{product.size}</div>
                        </div>
                        <div className="productdetail_information">
                            <div className="productdetail_item">品牌</div>
                            <div className="productdetail_answer">{product.brand}</div>
                        </div>
                        <div className="productdetail_information">
                            <div className="productdetail_item">狀況</div>
                            <div className="productdetail_answer">{product.content}</div>
                        </div>
                        <div className="productdetail_information">
                            <div className="productdetail_item">顏色</div>
                            <div className="productdetail_answer">{product.color}</div>
                        </div>
                        <div className="productdetail_information">
                            <div className="productdetail_item">標籤</div>
                            <div className="productdetail_answer">{product.tag}</div>
                        </div>



                    </div>
                </div>

            </div>
            <Productlist products={anotherProduct} text="賣家其他商品"/>
        </>
    )

}