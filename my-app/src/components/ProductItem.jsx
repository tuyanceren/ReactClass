import "./ProductItem.css";

function ProductItem(props){
    const {imageUrl, productName, productPrice}= props;
    return(
        <div className="product-item">
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <div className="product-info">
                <h2>{productName}</h2>
                <span>{productPrice}₺</span>
            </div>
            
        </div>
    )
}

export default ProductItem;