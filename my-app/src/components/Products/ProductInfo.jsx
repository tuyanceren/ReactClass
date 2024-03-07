const ProductInfo =(props) =>{
    return <div className="product-info">
        <span className="ad">www.ad.com</span>
        {props.children};

    </div>;

}

export default ProductInfo;