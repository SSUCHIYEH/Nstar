import ProductItem from "./ProductItem";
import { Col,Row } from "antd";

export default function Productlist({ products, text }) {
    return (
        <div className="productlist_container">
            <div className="productlist">
            
                <p className="productlist-title">{text}</p>
                <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 52 }} className="productlist-row">
                    {products.map(product => (
                        <Col lg={{span:6}} md={{span:12}} sm={{span:12}} xs={{span:12}} key={product.id}>
                        <ProductItem product={product} /> 
                        </Col>
                    ))}

                </Row>
            </div>
        </div>
        


    )
}