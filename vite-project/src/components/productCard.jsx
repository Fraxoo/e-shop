import { Link } from "react-router-dom";
import { Product } from "../models/productModel";

export default function ProductCard({product}){
    return(
        <div className="product-card">
            <img src={product.image} alt={product.title}/>
            <h2>{product.title}</h2>
            <p>{product.rating}</p>
            <h1>${product.price}</h1>
        </div>
    )
}