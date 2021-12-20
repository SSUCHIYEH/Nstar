import { getJSON } from "../api/index.js";
import {
    SET_PAGE_CONTENT,
    ADD_CART_ITEM,
    SET_PRODUCT_DETAIL
} from "../const/constants.js";

export const addCatItem = (dispatch,product) => {
    const item = {
        name:product.name,
        price: product.price,
        conten: product.conten,
        imgUrl_1:product.imgUrl_1,
        imgUrl_2:product.imgUrl_2,
        imgUrl_3:product.imgUrl_3
    };
    dispatch({
        type:ADD_CART_ITEM,
        payload:item,
    });

}

// export const removeCarItem = () => {

// }

export const setProductDetail = (dispatch, productId,productType) => {
    const products = getJSON(`/product/category/${productType}`,'set')
     const product = products.find(
        x => x.name === productId
    );
    dispatch({
        type: SET_PRODUCT_DETAIL,
        payload: {
            product
        }
    })
}

export const pageContentSet = (dispatch,title,products) => {
    dispatch({
        type:SET_PAGE_CONTENT,
        payload:{title,products}
    })
}