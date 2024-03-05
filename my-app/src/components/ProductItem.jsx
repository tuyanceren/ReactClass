import ProductInfo from "./ProductInfo";
import "./ProductItem.css";

function ProductItem({product}){
    //const {product}= props;
    const {imageUrl, productName, productPrice}= product;
    return(
        <div className="product-item">
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <ProductInfo >
                <h2>{productName}</h2>
                <span>{productPrice}₺</span> 
            </ProductInfo>
                
            
            
            
        </div>
    )
}

export default ProductItem;