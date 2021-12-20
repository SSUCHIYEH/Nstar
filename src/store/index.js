import { createContext } from 'react';
import products from "../json/women_top.json";
import {
    SET_PAGE_CONTENT,
    ADD_CART_ITEM,
    SET_PRODUCT_DETAIL
} from "../const/constants.js";

export const StoreContext = createContext();

let cartItems = localStorage.getItem("cartItem")
console.log(localStorage.getItem("cartItem"))
if( cartItems !== 'undefined'){
    console.log(typeof cartItems === 'undefined')
    cartItems =  JSON.parse(localStorage.getItem("cartItem"))
}else{
    console.log(localStorage.getItem("cartItem"))
    console.log(typeof cartItems === 'undefined',false)
    cartItems = []
}


const initialState = {
    page: {
        title: "Taipop",
        products
    },
    navBar: {
        activeItem: '/'
    },
    cartItems,
    productDetail: {
        product: {}
    }
};

function reducer(state, action) {
    switch (action.type) {
        case SET_PAGE_CONTENT:
            return {
                ...state,
                page: action.payload
            };
        case ADD_CART_ITEM:
            const item = action.payload;
            const product = state.cartItems.find((x) => x.name === item.name);
            if (product) {
                return { ...state, cartItems };
            }
            cartItems = [...state.cartItems, item]
            return { ...state, cartItems }
        case SET_PRODUCT_DETAIL:
            return { ...state, productDetail: action.payload };
        default:
            return state;
    }
}

// export function StoreProvider(props) {
//     const [state, dispatch] = useReducerWithThunk(
//         reducer,
//         initialState,
//         "example"
//     )
//     const value = { state, dispatch }

//     return (
//         <StoreContext.Provider value={value}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

