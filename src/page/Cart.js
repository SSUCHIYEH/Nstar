import { Button } from "antd";
import { useContext } from "react";
import { StoreContext } from "../store";
import NavBar from "../component/Navbar.js";
import CartItem from "../component/CartItem";
import Footer from "../component/Footer";
export default function Cart() {

    const { state: { cartItems } } = useContext(StoreContext);

    if (cartItems.length > 0) {
        function TotalPrice() {
            return cartItems.reduce((sum, item) => sum + item.price, 0)
        }
       
        return (

            <div style={{position:'relative',paddingTop:'92px',minHeight:'100vh'}}> 
                <NavBar />
                <div className="cartlist_title">
                    <div className="cartlist_title_item">商品</div>
                    <div className="cartlist_title_price">價格</div>
                    <div className="cartlist_title_delete">刪除</div>
                </div>

                {cartItems.map(item => <CartItem item={item} />)}


                <div className="cartlist_totle">
                    <div className="cartlist_totle_n"></div>
                    <div className="cartlist_totlebox">
                        <div className="cartlist_totlebox_detail">
                            <div className="cartlist_totlebox_detail_text">總金額:（共{cartItems.length}件）</div>
                            <div className="cartlist_totlebox_detail_price">NT{TotalPrice()}</div>
                        </div>
                        <div className="cartlist_totlebox_btn">
                            <Button type="primary" className="cartlist_totlebox_btn_" 
                                style={{ backgroundColor: 'black', borderColor: 'black' }}>
                                去買單！
                            </Button>
                        </div>
                    </div>
                </div>
                <div style={{position:'absolute',bottom:0,width:"100%"}}>
                <Footer />
                </div>
            </div>
        )
    } else {
        return (
            <div style={{ height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <NavBar />
                <div className="cart-noitem"><p>nothing in cart,Go shop your fashion!</p></div>
                <Footer />
            </div>

        )
    }


}