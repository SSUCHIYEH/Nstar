import ProductItem from "./ProductItem";
import { Col,Row } from "antd";

export default function Productlist({ products, text }) {
    return (
        <div className="container">
            <div className="productlist">
                <p className="productlist-title">{text}</p>
                <Row gutter={52} className="productlist-row">
                    {products.map(product => (
                        <Col span={6} key={product.id}>
                        <ProductItem product={product} /> 
                        </Col>
                    ))}

                </Row>
            </div>
        </div>
        


    )
}