import img_userIcon from "../assests/Icon/account_104.png";
import Productlist from "../component/Productlist";
import ProductCreateModal from "../component/ProductCreateModal";
import { useState } from "react";
import { Link } from 'react-router-dom';
function UserProductShop() {
    const [addModalShow, setAddModalShow] = useState(false);


    return (

        <div>
            {addModalShow?<ProductCreateModal changeShow={() => setAddModalShow(false)}/>
            :""}

            <div className="UserProductShop_container">
                <div className="UserProductShop_container_userDetail">
                    <div className="UserProductShop_userDetail_top">
                        <div className="UserProductShop_user">
                            <img alt="" className="img_80" src={img_userIcon} />
                            <p className="font_36 pl_16">Becca1304</p>
                        </div>
                        <div className="UserProductShop_btnBar">
                            <Link to={"/userorderquery"}>
                                <button className="btn_unSelected">我的訂單</button>
                            </Link>
                            
                            <div className="pl_24"><button onClick={() => setAddModalShow(true)} className="btn_selected">新增商品</button> </div>
                        </div>
                    </div>
                    <p className="mt_72">復古/90/牛仔/古著<br />歡迎私訊詢問</p>
                </div>



            </div>
            {/* <Productlist/> */}
        </div>


    );
}

export default UserProductShop;