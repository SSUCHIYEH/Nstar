import { useContext } from "react";
import NavBar from "../component/Navbar.js";
import Productlist from "../component/Productlist.js";
import { StoreContext } from "../store/index.js";
import Footer from "../component/Footer.js";


function Shop() {
    const { state: { page: { products } } } = useContext(StoreContext)
    return (
        <>
            <NavBar />
            <Productlist products={products} />
            <Footer />
        </>

    )
}

export default Shop;