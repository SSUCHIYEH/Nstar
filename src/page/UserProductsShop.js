import img_userIcon from "../assests/Icon/account_104.png";
import Productlist from "../component/Productlist";
import ProductCreateModal from "../component/ProductCreateModal";
import { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { getUserProduct } from "../api/userAPI";
import { productReducer } from "../reducer/productReducer";
import { useSelector,useDispatch } from "react-redux";
import Spinner from "../component/Spinner";
import { SET_LOADING_FALSE, SET_LOADING_TRUE } from "../const/constants";

function UserProductShop() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [addModalShow, setAddModalShow] = useState(false);
    const { userInfo } = useSelector(state => {
        console.log(state);
        return state.userSignIn
    });
    const { reload } = useSelector((state) => state.product);
    const [userProduct, setUserProduct] = useState(null);

    useEffect(() => {
        if (userInfo) {
            getUserProduct(userInfo.user_id).then(resp => {
                if (resp.status === 200) {
                    console.log(userProduct);
                    setUserProduct(resp.product)
                }
            }).catch((e)=>{
                console.log(e);
            })
        }
    }, [reload])

    useEffect(() => {
        if (userInfo) {
            dispatch({type:SET_LOADING_TRUE})
            getUserProduct(userInfo.user_id).then(resp => {
                if (resp.status === 200) {
                    console.log(resp.product);
                    setUserProduct(resp.product)
                }
                dispatch({type:SET_LOADING_FALSE})
            }).catch((e)=>{
                console.log(e);
                dispatch({type:SET_LOADING_FALSE})
            })
            console.log(userProduct);
        }else{
            history.push('/login');
        }
    }, [])

    return (

        <>
            {addModalShow ? <ProductCreateModal changeShow={() => setAddModalShow(false)} />
                : ""}

            <div className="UserProductShop_container">
                <div className="UserProductShop_container_userDetail">
                    <div className="UserProductShop_userDetail_top">
                        <div className="UserProductShop_user">
                            <img alt="" className="img_80" src={img_userIcon} />
                            <p className="font_36 pl_16">{userInfo.username}</p>
                        </div>
                        <div className="UserProductShop_btnBar">
                            <Link to={"/userorderquery/sell"}>
                                <button className="btn_unSelected">我的訂單</button>
                            </Link>

                            <div className="pl_24"><button onClick={() => setAddModalShow(true)} className="btn_selected">新增商品</button> </div>
                        </div>
                    </div>
                    <p className="mt_72">復古/90/牛仔/古著<br />歡迎私訊詢問</p>
                    {
                        userProduct ?
                            <Productlist products={userProduct} />
                            : <p className="mt_36">還沒有新增商品</p>

                    }
                </div>


            </div>

        </>


    );
}

export default UserProductShop;