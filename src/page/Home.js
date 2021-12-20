import NavBar from "../component/Navbar.js";
import { getJSON } from "../api";
import Productlist from "../component/Productlist.js";
import IntroOne from "../component/Intro_1.js";
import IntroTwo from "../component/Intro_2.js";
import Footer from "../component/Footer.js";
import { useEffect, useState } from "react";
import { getProductByCategory } from "../api/productAPI.js";

function Home({ match }) {
    let products = getJSON(match.url, "Nav")
    const [_productData, setProductData] = useState()
    useEffect(() => {

        getProductByCategory("men_top").then((resp) => {
            if(resp.data){
                console.log(resp);
                setProductData(resp.data);
            }
        }).catch((err)=>{
            console.log(err);
        });
    }, [])

    return (
        <>
            <IntroOne />
            {_productData?
            <Productlist products={_productData} text="或許你會喜歡" />
            :null}


            <IntroTwo />
            <div className="star productlist-title container">
                <p className="star-title">熱門帳號</p>
                <div className="star-bar">
                    <div className="star-item">
                        <img alt="" className="star-img" src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <p className="star-name">Becca1304</p>
                    </div>
                    <div className="star-item">
                        <img alt="" className="star-img" src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <p className="star-name">Becca1304</p>
                    </div>
                    <div className="star-item">
                        <img alt="" className="star-img" src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <p className="star-name">Becca1304</p>
                    </div>
                    <div className="star-item">
                        <img alt="" className="star-img" src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <p className="star-name">Becca1304</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;