
import { Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import deleteicon from '../assests/Icon/delete.png';


function CartItem({ item, checkAll }) {
     const [check, setCheck] = useState(true);
     useEffect(() => {
        console.log(checkAll);
        if(checkAll) {setCheck(true)}
        else {setCheck(false);}
     }, [checkAll])
    function onChange(e) {
        setCheck(!check);
    }
    return (
        <div className="cartlist_productItem mt_24">
            <Checkbox checked={check} type='checkbox' onChange={onChange} className="cartlist_checkbox"/>
            <div className='cartlist_productItem_col'>
                <div className="cartlist_productItem_img">
                    <img alt="" src={item.image} />
                </div>
                <span className="cartlist_productItem_item sm_mt_8">{item.name}</span>
            </div>
            <span className="cartlist_productItem_item">NT{item.price}</span>
            <div className="cartlist_productItem_icon">
                <img alt="" className="img_26" src={deleteicon} />
            </div>
        </div>

    );

}
export default CartItem;