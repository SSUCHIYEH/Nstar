import AddToCart from "../component/AddToCart";
import chat from '../assests/Icon/chat-bubble.png';
import like from '../assests/Icon/like.png'
import Productlist from "../component/Productlist";
import anotherProduct from '../json/women_bottom.json';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { setProductDetail } from "../actions/productAction";
import { getProductById } from "../api/productAPI";
import { addToCart } from "../actions/productAction";

export default function ProductDetail() {
    const dispatch = useDispatch();
    const { product_id } = useParams();
    const [product, setProduct] = useState();
    const {cartItems} = useSelector((state)=> {
        console.log(state.product);
        return state.product
    });
    

    useEffect(async () => {
        if (product_id) {
            const resp = await getProductById(product_id);
            setProduct(resp.product);
        }
    }, [])

    const handleAddToCart = () => {
        dispatch(addToCart(product));

    }


    return (

        <>
            {product ?
                <>
                    <div className="productdetail_container">
                        <div className="productdetail_img">
                            <img alt="" className="productdetail_img_img" src={product.image} />
                        </div>
                        <div className="productdetail_detail">
                            <div className="productdetail_detail_detail">
                                <div className="productdetail_seller">
                                    <img className="productdetail_sellericon" src={product.owner.image} alt="" />
                                    <div className="productdetail_sellername">{product.owner.username}</div>
                                </div>
                                <div className="productdetail_title">{product.name}</div>
                                <div className="productdetail_price">NT {product.price}</div>
                                <div className="productdetail_button">
                                    <img className="productdetail_icon" src={like} alt="" />
                                    <img className="productdetail_icon" src={chat} alt="" />
                                </div>

                                <button className="addCart-button" onClick={handleAddToCart} >
                                    <span>加入購物車</span>
                                </button>

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
                                    <div className="productdetail_answer">{product.description}</div>
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
                    <Productlist products={anotherProduct} text="賣家其他商品" />
                </>
                : null
            }
        </>
    )

}