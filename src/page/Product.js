import NavBar from "../component/Navbar.js";
import React, { useContext, useEffect } from "react";
import ProductDetail from "./ProductDetail";
import { StoreContext } from "../store/index.js";
import { setProductDetail } from "../actions/index.js";
import Footer from "../component/Footer.js";

function Product({ match }) {
    const { dispatch } = useContext(StoreContext);
    //setProductDetail(dispatch, productname, classify)
    useEffect(() => {
        
        setProductDetail(dispatch, match.params.productname, match.params.productclassify)
    },[]) // eslint-disable-line react-hooks/exhaustive-deps  
    return (
        <>
            <NavBar />
            <ProductDetail />
            <Footer />
        </>
    )
}




export default Product;

