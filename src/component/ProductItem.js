import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import LikeButton from './LikeButton';
export default function ProductItem({ product }) {
    console.log(product.id)
    const history = useHistory();
    const [user, setUser] = useState(false)
    useEffect(() => {
        if (history.location.pathname === "/userproductshop") {
            setUser(true);
        }
    }, []);

    const handleOnClickItem = () => {
        if (user) { history.push(`/userproductshop/detail/${product.id}`) }
        else { history.push(`/product/detail/${product.category}/${product.id}`); }
    }
    return (
        <>
            <a className="card" onClick={handleOnClickItem}>
                <div className="card-img">
                    <img src={product.image} alt="" />
                </div>
            </a>
            {
                user ?
                    null
                    :
                    <>
                        <div className='card_Info'>
                            <div>
                                <p className="card-text">{product.name}</p>
                                <p className="card-text">NT {product.price}</p>
                            </div>
                            <LikeButton product_id={product.id} />
                        </div>
                    </>

            }


        </>
    )
}