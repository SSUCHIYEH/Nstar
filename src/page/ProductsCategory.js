import { useContext, useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../api/productAPI.js";
import Productlist from "../component/Productlist.js";
import { StoreContext } from "../store/index.js";



function ProductsCategory() {
    const [productData, setProductData] = useState();
    const {category} = useParams();
    
    useEffect(() => {
        getProductByCategory(category).then((resp)=>{
            if(resp.data){
                console.log(resp.data)
                setProductData(resp.data);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }, [category])

    return (
        <>
            {productData?
                <Productlist products={productData} />
            :   null 
            }
        </>

    )
}

export default ProductsCategory;