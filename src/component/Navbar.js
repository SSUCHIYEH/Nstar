import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { StoreContext } from "../store"
import { Badge } from "antd";
import landind_page_img from '../assests/Icon/logo.png';
import img_bars from "../assests/Icon/bars.png";
import search_icon from "../assests/Icon/loupe.png"
import like_icon from '../assests/Icon/like.png'
import account_icon from '../assests/Icon/account.png'
import cart_icon from '../assests/Icon/shopping-cart-outline.png'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { useHistory } from "react-router-dom/";




export default function NavBar() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userSignIn);
    //const { state: { cartItems } } = useContext(StoreContext);
    const [active, setAcitve] = useState(false);
    const [ClassName, setClassname] = useState("collapse hide");

    //漢堡選單
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
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
                                <ul className="ul dropdownlist m-_100">
                                    <li className="li dropdownlist_item"><NavItem to="/userproductshop" >我的商店</NavItem></li>
                                    <li className="li dropdownlist_item"><NavItem to="/userorderquery/buy" >查看購買紀錄</NavItem></li>
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
                <ul className="hamburger hamburger_p" onClick={toggleHamburger}>
                    <img alt="" className="img_26" src={img_bars} />
                </ul>


            </nav>


            {/* 375的header */}
            <nav className="nav_375" role='navigation'>
                <ul className="display_center_between">

                    <li>
                        <NavItem to="/" >
                            <img alt="" className="img_logoSmall" src={landind_page_img} />
                        </NavItem>

                    </li>
                    <li className="display_flex">
                        <li className="">
                            <img alt="" className="img_26" src={search_icon} />
                        </li>
                        <li className="ml_24">
                            <div onMouseEnter={toggle}>
                                <NavItem to="/usercart">
                                    <img alt="" className="img_26" src={cart_icon} />
                                </NavItem>
                            </div>
                        </li>
                        <li className="ml_24">
                            <img alt="" className="img_26" src={img_bars} onClick={toggleHamburger} />
                        </li>
                    </li>
                </ul>
                {hamburgerOpen ?
                    <ul className="mt_36 h_full">
                        <li>
                            <p className="font_20 font_weight_500">women</p>
                            <li className="w_180 mt_16 ml_36">
                                <li onClick={toggleHamburger}>
                                    <NavItem to="/product/category/women_top" ><p className="font_black">top</p></NavItem>
                                </li>
                                <div className="line mt_8"></div>
                            </li>
                            <li className="w_180 mt_16 ml_36">
                                <li onClick={toggleHamburger}>
                                    <NavItem to="/product/category/women_bottom" ><p className="font_black">bottom</p></NavItem>
                                </li>
                                <div className="line mt_8"></div>
                            </li>
                        </li>
                        <li className="mt_36">
                            <p className="font_20 font_weight_500">men</p>
                            <li className="w_180 mt_16 ml_36">
                                <li className="" onClick={toggleHamburger} >
                                    <NavItem to="/product/category/men_top" ><p className="font_black">top</p></NavItem>
                                </li>
                                <div className="line mt_8"></div>
                            </li>
                            <li className="w_180 mt_16 ml_36">
                                <li onClick={toggleHamburger}>
                                    <NavItem to="/product/category/men_bottom" ><p className="font_black">bottom</p></NavItem>
                                </li>
                                <div className="line mt_8"></div>
                            </li>
                        </li>
                        {userInfo ?
                            <li className="mt_36 ">
                                <li className="font_20 font_weight_500">我的帳號</li>
                                <li className="w_180 mt_16 ml_36">
                                    <li onClick={toggleHamburger}>
                                        <NavItem to="/userproductshop" ><p className="font_black">我的商店</p></NavItem>
                                    </li>
                                    <div className="line mt_8"></div>
                                </li>
                                <li className="w_180 mt_16 ml_36">
                                    <li onClick={toggleHamburger}>
                                        <NavItem to="/userorderquery" ><p className="font_black">查看購買紀錄</p></NavItem>
                                    </li>
                                    <div className="line mt_8"></div>
                                </li>
                                <li className="w_180 mt_16 ml_36">
                                    <li onClick={toggleHamburger}>
                                        <NavItem to="/" ><p className="font_black">我的收藏</p></NavItem>
                                    </li>
                                    <div className="line mt_8"></div>
                                </li>
                                <li className="w_180 mt_16 ml_36">
                                    <li onClick={toggleHamburger}>
                                        <NavItem to="/" ><p className="font_black">帳號設定</p></NavItem>
                                    </li>
                                    <div className="line mt_8"></div>
                                </li>
                                <li className="w_180 mt_16 ml_36">
                                    <li onClick={toggleHamburger}>
                                        <a to="/" onClick={hangleLogout} ><p className="font_black">登出</p></a>
                                    </li>
                                    <div className="line mt_8"></div>
                                </li>
                                
                            </li>
                            :
                            <div className="display_center_between ml_36 mt_48 w_230">
                            <li>
                                <button className="btn_unSelected">
                                    <a href="/login" className="font_black font_hover_y">Log in</a>
                                    </button>
                            </li>
                            <li>
                            <button className="btn_selected">
                                <a href="/login" className="font_white">Sign up</a>
                                </button>
                            </li>

                        </div>

                            }
                    </ul>
                    :
                    ""
                }

            </nav>

        </div>
    )

}



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