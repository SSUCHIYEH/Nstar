import {
    ADD_CART_ITEM,
    SET_PAGE_CONTENT,
    ADD_TO_ORDER,
    REMOVE_FROM_ORDER,
    ORDER_CREATE_SUCCESS,
    CLEAN_CART_ITEMS
} from '../const/constants';

export const productReducer = (state = {
    cartItems: null,
    product: null,
    orderProduct: null,
    orderDtail: null
}, action) => {
    switch (action.type) {
        case CLEAN_CART_ITEMS:
            return {
                ...state,
                cartItems: null,
            }
        case ADD_CART_ITEM:
            if (localStorage.getItem("cartItems")) {
                return {
                    ...state,
                    cartItems: JSON.parse(localStorage.getItem("cartItems")),
                }
            } else {
                return {
                    ...state,
                    cartItems: null,
                }
            }

        case SET_PAGE_CONTENT:
            return {
                ...state,
                product: action.payload,
            }
        case ADD_TO_ORDER:
            return {
                ...state,
                orderProduct: action.payload,
            }
        case REMOVE_FROM_ORDER:
            return {
                ...state,
                orderProduct: action.payload,
            }
        case ORDER_CREATE_SUCCESS:
            console.log(action)
            return {
                ...state,
                orderDtail: action.payload,
            }

        default:
            return state
    }
}