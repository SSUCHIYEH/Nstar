
import { useEffect, useContext } from "react";
import { addCatItem } from "../actions";
import { StoreContext } from "../store";
import { addToCart } from "../actions/productAction";
import { useDispatch } from "react-redux";

export default function AddToCart (product) {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

    return(
        <button className="addCart-button" onClick={handleAddToCart} >
            <span>加入購物車</span>
        </button>
    )
}