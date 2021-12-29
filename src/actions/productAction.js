import reactRouterConfig from 'react-router-config';
import { getProductById } from '../api/productAPI';
import {
    SET_PAGE_CONTENT,
    ADD_CART_ITEM,
    ADD_TO_ORDER,
    REMOVE_FROM_ORDER,
} from '../const/constants';

export const setProductDetail = (product) => async (dispatch) => {
    try {
        const resp = await getProductById(product.id);
        if (resp.status === 200) {
            return {
                type: SET_PAGE_CONTENT,
                payload: product,
            }
        } else {
            console.log(resp);
            return null
        }

    } catch (e) {
        console.log(e);
        return null
    }

}

export const addToCart = (product) => {
    const username = product.owner.username;
    let data = []
    if (!localStorage.getItem("cartItems")) {
        data.push(product);
        let new_Item = new Object();
        new_Item[`${username}`] = data;
        localStorage.setItem("cartItems", JSON.stringify(new_Item));
        console.log(new_Item);

    } else {
        let cartData = JSON.parse((localStorage.getItem("cartItems")));
        if (cartData[`${username}`]) {
            const findCart = cartData[`${username}`].find((el) => el.id === product.id);
            if(!findCart) {
                cartData[`${username}`].push(product);
                localStorage.setItem("cartItems", JSON.stringify(cartData));
            }
        } else {
            data.push(product)
;           cartData[`${username}`] = data;
            localStorage.setItem("cartItems", JSON.stringify(cartData));
        }
    }
    // dispatch({ type: ADD_CART_ITEM });
    return { type: ADD_CART_ITEM }
}

export const addProductToOrder = (orderProduct) => {
    return{
        type:ADD_TO_ORDER,
        payload: orderProduct,
    }
}
export const removeProductFromOrder = () => {
    return{
        type:REMOVE_FROM_ORDER,
        payload:null,
    }
}