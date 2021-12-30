import { Button } from "antd";
import { useState, useEffect } from "react";
import CartItem from "../component/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from 'antd';
import { addProductToOrder, removeProductFromOrder } from '../actions/productAction';
import img_userIcon from "../assests/Icon/account.png";

export default function UserCart() {
    let [checkAll, setCheckAll] = useState(null);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    const { cartItems, orderProduct } = useSelector((state) => {
        console.log(state.product);
        return state.product
    });

    function TotalPrice() {
        return orderProduct.reduce((sum, item) => sum + item.price, 0)
    }

    function clickAllCheck(e) {
        let storeCheck = { ...checkAll };
        storeCheck[e.target.data] = !checkAll[e.target.data];
        if (storeCheck[e.target.data]) {
            dispatch(addProductToOrder(cartItems[e.target.data]))
        } else {
            dispatch(removeProductFromOrder())
        }
        setCheckAll(storeCheck);
    }

    // 計算訂單內商品的總價與數量
    useEffect(() => {
        if (orderProduct) {
            setPrice(TotalPrice());
            setCount(orderProduct.length);
        }
    }, [orderProduct])

    useEffect(async () => {
        if (cartItems) {
            let storeCheck = new Object();
            Object.keys(cartItems).forEach(seller => {
                storeCheck[seller] = false;
            })
            setCheckAll(storeCheck);
        }
    }, [])

    useEffect(() => {
        console.log(checkAll);
    }, [checkAll])

    if (cartItems) {
        return (

            <div className="container cartlist">
                <div className="cartlist_header">
                    <div className="cartlist_header_item">商品</div>
                    <div className="cartlist_header_item">價格</div>
                    <div className="cartlist_header_item">刪除</div>
                </div>

                {Object.keys(cartItems).map(seller => (
                    <div className="cartlist_sellerItem" key={seller}>
                        <div className="cartlist_sellerItem_header display_center">
                            <Checkbox defaultChecked={false} onChange={clickAllCheck} data={seller} className="cartlist_checkbox" />
                            <img alt="" className="img_36" src={img_userIcon} />
                            {/* <img src={cartItems[seller][0].owner.image} /> */}
                            <p className="ml_16">{seller}</p>
                        </div>
                        <div className="line mt_24"></div>
                        {
                            cartItems[seller].map(productItem => (
                                <>
                                    {
                                        checkAll ?
                                            < CartItem key={productItem.id} checkAll={checkAll[seller]} item={productItem} />
                                            : < CartItem key={productItem.id} checkAll={false} item={productItem} />
                                    }
                                </>
                            ))
                        }
                    </div>
                ))}

                <div className="cartlist_totle">
                    <div className="cartlist_totle_n"></div>
                    <div className="cartlist_totlebox">
                        <div className="cartlist_totlebox_detail">
                            <div className="cartlist_totlebox_detail_text">總金額:(共 {count} 件）</div>
                            <div className="cartlist_totlebox_detail_price">NT {price}</div>
                        </div>
                        <div className="cartlist_totlebox_btn">
                            <Button type="primary" className="cartlist_totlebox_btn_"
                                style={{ backgroundColor: 'black', borderColor: 'black' }}>
                                去買單
                            </Button>
                        </div>
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: 0, width: "100%" }}>
                </div>
            </div>
        )
    } else {
        return (
            <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div className="cart-noitem"><p>nothing in cart,Go shop your fashion!</p></div>
            </div>

        )
    }
}


// {
//     checkAll[seller] ?
//         < CartItem key={productItem.id} checkAll={true} item={productItem} />
//         : < CartItem key={productItem.id} checkAll={false} item={productItem} />
// }


{/* < CartItem key={productItem.id} checkAll={true} item={productItem} />
: < CartItem key={productItem.id} checkAll={false} item={productItem} /> */}