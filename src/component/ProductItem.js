import { Link } from 'react-router-dom';
export default function ProductItem({product}) {
    return (
        <Link className="card" to={`/product/detail/${product.category}/${product.id}`}>
            <div className="card-img">
            <img src={product.image} alt="" />
            </div>
            <p className="card-name">{product.name}</p>
            <p className="card-price">NT {product.price}</p>
        </Link>
    )
}