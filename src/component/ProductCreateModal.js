import img_default from "../assests/product_default.png";
import ImageUpload from 'image-upload-react';
import 'image-upload-react/dist/index.css';
import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProductByUserId } from "../actions/userAction"
import { postImageUpload } from "../api/userAPI";
import axios from '../api/index'

function ProductCreateModal(props) {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const { changeShow } = props;
    const [imageSrc, setImageSrc] = useState(img_default);
    const { userInfo } = useSelector((state) => state.userSignIn);
    const [topOption, setTopOption] = useState("top");
    const [menOption, setMenOption] = useState("women");

    // useEffect(() => {
    //     console.log(imageSrc)
    // }, [imageSrc])

    const selectFemaleOrMale = (e) => {
        console.log(e.target.value);
        setMenOption(e.target.value);
    }

    const selectTopOrBottom = (e) => {
        console.log(e.target.value);
        setTopOption(e.target.value);
    }

    const handleImageSelect = (e) => {
        setImageSrc(URL.createObjectURL(e.target.files[0]));
    }

    const inputImage = async (file) => {
        console.log(file);
    }


    const onSubmit = async (value) => {
        //const imageResp = await postImageUpload(value.image);
        let formData = new FormData();
        formData.append("file", value.image[0]);
        const imageResp = await postImageUpload(formData)

        if (imageResp.status === 200) {
            const product = {
                "category": String(menOption + "_" + topOption),
                "name": value.name,
                "price": value.price,
                
                "image": imageResp.url,
                "description": value.description,
                "owner_id": userInfo.user_id,
                "size": value.size,
                "color": value.color,
                "tag": value.tag,
            }
            console.log(product);
            const resp = await dispatch(createProductByUserId(userInfo.user_id, product));
            if (resp) {
                changeShow();
            }
        }


    }

    return (

        <div className="modal_add">
            <form onSubmit={handleSubmit(onSubmit)} className="modal_add_content">
                <p className="font_24">新增商品</p>
                <div className="modal_add_contentbox mt_36">
                    <div >
                        <ImageUpload
                            handleImageSelect={handleImageSelect}
                            imageSrc={imageSrc}
                            setImageSrc={setImageSrc}
                            style={{
                                width: 268,
                                height: 268,
                            }}
                        />
                        <input
                            onChange={inputImage}
                            style={{
                                width: 200,
                                height: 42,
                            }}
                            accept="image/*" className="btn_unSelected mt_8" type="file" {...register("image")} alt="上傳圖片" />
                        <button className="btn_unSelected mt_8">上傳圖片</button>
                        <input className="input mt_36 w_268" type="text" {...register("name", { required: true })} placeholder="商品名稱" />
                        <input className="input mt_36 w_268 mb_36" type="number" {...register("price", { required: true })} placeholder="商品價格" />
                    </div>
                    <div className="modal_add_box2">
                        <input className="input  w_268" type="text" {...register("size", { required: true })} placeholder="尺寸" />
                        <input className="input mt_36 w_268" type="text" {...register("brand", { required: false })} placeholder="品牌" />
                        <input className="input mt_36 w_268" type="text" {...register("description", { required: true })} placeholder="狀況" />
                        <input className="input mt_36 w_268" type="text" {...register("color", { required: true })} placeholder="顏色" />
                        <input className="input mt_36 w_268" type="text" {...register("tag", { required: true })} placeholder="標籤" />
                        <p className="mt_36">選擇商品類別</p>
                        <select onChange={selectFemaleOrMale} className="select mt_24">
                            <option value="women">Women</option>
                            <option value="men">Men</option>
                        </select>
                        <select onChange={selectTopOrBottom} className="select ml_16 mt_24">
                            <option className="" value="top">top</option>
                            <option className="" value="bottom">bottom</option>
                        </select>

                        <div className="display_flex mt_80 display_center_end">
                            <button onClick={changeShow} className="btn_unSelected">取消</button>
                            <input type="submit" id="" className="btn_selected ml_24" value="確認" />

                        </div>
                    </div>
                </div>

            </form>


        </div>


    );
}

export default ProductCreateModal;