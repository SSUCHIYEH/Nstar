import img_default from "../assests/product_default.png";
function ProductCreateModal(props) {
    const {changeShow}=props;

    return (

        <div className="modal_add">
            <form className="modal_add_content">
                <p className="font_24">新增商品</p>
                <div className="modal_add_contentbox mt_36">
                    <div >
                        <img alt="" className="" src={img_default} />
                        <button className="btn_unSelected mt_8">上傳圖片</button>
                        <input className="input mt_36 w_268" type="text" name="" placeholder="商品名稱" />
                        <input className="input mt_36 w_268" type="text" name="" placeholder="商品價格" />
                    </div>
                    <div className="modal_add_box2">
                        <input className="input ç w_268" type="text" name="" placeholder="尺寸" />
                        <input className="input mt_36 w_268" type="text" name="" placeholder="品牌" />
                        <input className="input mt_36 w_268" type="text" name="" placeholder="狀況" />
                        <input className="input mt_36 w_268" type="text" name="" placeholder="顏色" />
                        <input className="input mt_36 w_268" type="text" name="" placeholder="標籤" />
                        <div className="display_flex mt_80 display_center_end">
                        <button onClick={changeShow}className="btn_unSelected">取消</button>
                        <input type="submit" id="" className="btn_selected ml_24" value="確認"/>

                        </div>
                    </div>
                </div>




            </form>

        </div>


    );
}

export default ProductCreateModal;