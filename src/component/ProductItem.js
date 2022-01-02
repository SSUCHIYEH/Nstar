import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export default function ProductItem({ product }) {
    const history = useHistory();
    const [user, setUser] = useState(false)
    useEffect(() => {
        if (history.location.pathname === "/userproductshop") {
            setUser(true);
        }
    }, []);

    const handleOnClickItem = () => {
        history.push(`/product/detail/${product.category}/${product.id}`);
    }
    return (
        <a className="card" onClick={handleOnClickItem}>
            <div className="card-img">
                <img src={product.image} alt="" />
            </div>
            {
                user ?
                    null
                    :
                    <>
                        <p className="card-name">{product.name}</p>
                        <p className="card-price">NT {product.price}</p>
                    </>

            }

        </a>
    )
}




/*
<Link className="card" to={`/product/detail/${product.category}/${product.id}`}>
            <div className="card-img">
            <img src={product.image} alt="" />
            </div>
            <p className="card-name">{product.name}</p>
            <p className="card-price">NT {product.price}</p>
        </Link>
 */