import ProductItem from "./ProductItem";
import "./Products.css";
import {productData} from "../../productData";

const Products = () =>{
    return(
        <div className="product-wrapper">
            <h1>Product</h1>
            <div className="products">
                {/* {productData.map((product => {return(<ProductItem  key={product.productName} product={product} />);}))} */}
                
                {productData.map((product => (
                    <ProductItem key={product.productName} product={product}/>
                )))}
            </div>
        </div>
    );
}

export default Products;