import { useState, useContext, useEffect } from "react";
import NavItem from "./NavItem";
import { StoreContext } from "../store"
import { Badge } from "antd";
import landind_page_img from '../assests/Icon/logo.png'
import search_icon from "../assests/Icon/loupe.png"
import like_icon from '../assests/Icon/like.png'
import cart_icon from '../assests/Icon/shopping-cart-outline.png'
import { useSelector } from "react-redux";


export default function NavBar() {
    let cartItems = useSelector((state) => state.reducer.cartItems);
    //const { state: { cartItems } } = useContext(StoreContext);
    const [active, setAcitve] = useState(false);
    const [ClassName, setClassname] = useState("collapse hide");
    // let counts = cartItems.length;

    function toggle() {
        setAcitve(!active)
    }
    useEffect(() => {
        if (active) {
            setClassname("collapse")

        } else {
            setTimeout(() => {
                setClassname("collapse hide")
            }, 100);

        }
    }, [active])


    return (
        <div className="Header">
            <nav className="nav2" role='navigation'>
                <ul className="ul">
                    <li className="li li-logo" >
                        <NavItem to="/" >
                            <img alt="" className="nav-logo" src={landind_page_img} />
                        </NavItem>
                    </li>
                    <li className="li"><a href="/">women</a>
                        <ul className="ul">
                            <li className="li">
                                <NavItem to="/product/category/women_top" >top</NavItem>
                            </li>
                            <li className="li">
                                <NavItem to="/product/category/women_bottom" >bottom</NavItem>
                            </li>
                        </ul>
                    </li>
                    <li className="li"><a href="/">men</a>
                        <ul className="ul">
                            <li className="li"><NavItem to="/product/category/men_top" >top</NavItem></li>
                            <li className="li"><NavItem to="/product/category/men_bottom" >bottom</NavItem></li>
                        </ul>
                    </li>

                </ul>
                <ul className="ul">
                    <li className="li" >
                        <NavItem to="/favorite" >
                            <img alt="" className="navlist-icon" src={search_icon} />
                        </NavItem>
                    </li>
                    <li className="li" >
                        <NavItem to="/favorite" > <img alt="" className="navlist-icon" src={like_icon} /></NavItem>
                    </li>
                    <li className="li">
                        <div onMouseEnter={toggle}>
                            <NavItem to="/usercart">

                                <img alt="" className="navlist-icon" src={cart_icon} />
                                {/* <Badge showZero={true} count={counts} size={"small"}>
                                </Badge> */}
                            </NavItem>
                        </div>
                    </li>
                    <li className="li"><a href="/">Log in</a></li>
                    <li className="li li-btn">
                        <NavItem to="/product/category/women_bottom" >Sign up</NavItem>
                    </li>
                </ul>

            </nav>

            {/* {
                counts > 0 ?
                    <div onMouseLeave={toggle} className={ClassName}>
                        {cartItems.map(product => (
                            <div className="collapse-item">
                                <img alt=""className="collapse-item-img" src={product.imgUrl_1} />
                                <p className="collapse-item-name">{product.name}</p>
                                <p className="collapse-item-price">NT {product.price}</p>
                            </div>
                        ))}
                        <div className="collapse-bottom">
                            <p className="collapse-total" >共{counts}件商品</p>
                            <span className="collapse-button">
                                <NavItem to="/usercart">
                                    查看我的購物車
                                </NavItem>
                            </span>
                        </div>
                    </div>

                    :
                    <div onMouseLeave={toggle} className={ClassName}>
                        <p>目前購物車沒有商品</p>
                        <div className="collapse-bottom">
                            <p className="collapse-total" >共{counts}件商品</p>
                            <span className="collapse-button">
                                <NavItem to="/usercart">
                                    查看我的購物車
                                </NavItem>
                            </span>
                        </div>
                    </div>

            } */}
        </div>
    )

}