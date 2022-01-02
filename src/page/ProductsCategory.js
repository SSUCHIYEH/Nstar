import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../api/productAPI.js";
import Productlist from "../component/Productlist.js";
import { SET_LOADING_FALSE, SET_LOADING_TRUE } from "../const/constants.js";



function ProductsCategory() {
    const [productData, setProductData] = useState();
    const { category } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_LOADING_TRUE })
        getProductByCategory(category).then((resp) => {
            if (resp.data) {
                console.log(resp.data)
                setProductData(resp.data);
                dispatch({ type: SET_LOADING_FALSE })
            }
        }).catch((err) => {
            console.log(err);
            dispatch({ type: SET_LOADING_FALSE })
        })
    }, [category])

    return (
        <>
            {productData ?
                <Productlist products={productData} />
                : null
            }
        </>

    )
}

export default ProductsCategory;