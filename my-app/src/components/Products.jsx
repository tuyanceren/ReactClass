import ProductItem from "./ProductItem";
import "./Products.css";
function Products(){
    return(
        <div className="product-wrapper">
            <h1>Product</h1>
            <div className="products">
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    );
}

export default Products;