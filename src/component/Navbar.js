import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { StoreContext } from "../store"
import { Badge } from "antd";
import landind_page_img from '../assests/Icon/logo.png'
import search_icon from "../assests/Icon/loupe.png"
import like_icon from '../assests/Icon/like.png'
import account_icon from '../assests/Icon/account.png'
import cart_icon from '../assests/Icon/shopping-cart-outline.png'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



export default function NavBar() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userSignIn);
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

    useEffect(() => {
        console.log(localStorage.getItem('userInfo'));
    }, [])

    const hangleLogout = () => {
        dispatch(logout());
        history.push("/");
    }


    return (
        <div className="Header">
            <nav className="navbar" role='navigation'>
                <ul className="ul nav_list">
                    <li className="li li-logo nav_list_item" >
                        <NavItem to="/" >
                            <img alt="" className="nav-logo" src={landind_page_img} />
                        </NavItem>
                    </li>
                    <li className="li nav_list_item"><a href="/">women</a>
                        <ul className="ul nav_list dropdownlist">
                            <li className="li dropdownlist_item">
                                <NavItem to="/product/category/women_top" >top</NavItem>
                            </li>
                            <li className="li dropdownlist_item">
                                <NavItem to="/product/category/women_bottom" >bottom</NavItem>
                            </li>
                        </ul>
                    </li>
                    <li className="li nav_list_item"><a href="/">men</a>
                        <ul className="ul nav_list dropdownlist">
                            <li className="li dropdownlist_item"><NavItem to="/product/category/men_top" >top</NavItem></li>
                            <li className="li dropdownlist_item"><NavItem to="/product/category/men_bottom" >bottom</NavItem></li>
                        </ul>
                    </li>

                </ul>
                <ul className="ul nav_list">
                    <li className="li nav_list_item" >
                        <NavItem to="/favorite" >
                            <img alt="" className="navlist-icon" src={search_icon} />
                        </NavItem>
                    </li>
                    <li className="li nav_list_item">
                        <div onMouseEnter={toggle}>
                            <NavItem to="/usercart">

                                <img alt="" className="navlist-icon" src={cart_icon} />
                                {/* <Badge showZero={true} count={counts} size={"small"}>
                                </Badge> */}
                            </NavItem>
                        </div>
                    </li>
                    {
                        userInfo ?
                            <li className="li nav_list_item">
                                <a href="/"><img alt="" className="navlist-icon" src={account_icon} /></a>
                                <ul className="ul dropdownlist">
                                    <li className="li dropdownlist_item"><NavItem to="/userproductshop" >我的商店</NavItem></li>
                                    <li className="li dropdownlist_item"><NavItem to="/" >查看購買紀錄</NavItem></li>
                                    <li className="li dropdownlist_item"><NavItem to="/" >我的收藏</NavItem></li>
                                    <li className="li dropdownlist_item"><NavItem to="/" >帳號設定</NavItem></li>
                                    <li className="li dropdownlist_item"><a to="/" onClick={hangleLogout} >登出</a></li>
                                </ul>
                            </li>
                            :
                            <>
                                <li className="li nav_list_item">
                                    <a href="/login">Log in</a>
                                </li>
                                <li className="li  nav_list_item li-btn">
                                    <NavItem to="/signup" >Sign up</NavItem>
                                </li>
                            </>
                    }
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