
import { Checkbox } from 'antd';
import deleteicon from '../assests//Icon/delete.png';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

function CartItem({ item }) {
    return (
        <div className="cartlist_content">
            <Checkbox onChange={onChange} className="cartlist_content_checkbox"></Checkbox>
            <div className="cartlist_content_img">
                <img className="cartlist_content_img_" alt="" src={item.imgUrl_1} />
            </div>

            <div className="cartlist_content_item">{item.name}</div>
            <div className="cartlist_content_price">NT{item.price}</div>
            <div className="cartlist_content_delete">
                <img className="cartlist_content_delete_icon" alt="" src={deleteicon} />
            </div>
        </div>

    );

}
export default CartItem;