import { useState } from "react"; // useState should be use in func !
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";
import Counter from "./Counter";

const ProductItem =({product})=>{
    //const {product}= props;
    const {imageUrl, productName, productPrice}= product;
    //let title =productName;
    const [title, setTitle] = useState(productName)
    const [counter, setCounter] = useState(productPrice);
   
    const clickHandler =() =>{
        //title="güncellendi.";
        setTitle("güncellendi.");
    };
     /*
    const myButton = document.createElement("button");
    myButton.addEventListener("click",function(){
        console.log("sepete eklendi.")
    });
    */
    return(
        <div className="product-item">
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <ProductInfo >
                <h2>{title}</h2>
                <Counter productPrice={productPrice} counter={counter} setCounter={setCounter}> 
                    <span>{counter}₺</span> 
                </Counter>

                <br />
                <br />
                <button onClick={clickHandler}>güncelle</button>
            </ProductInfo>
                
            
            
            
        </div>
    )
}

export default ProductItem;