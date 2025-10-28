import { Link } from "react-router-dom";
import { Product } from "../models/productModel";

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <div className="product-card-img">
                <img src={product.images[0]} alt={product.title} />
            </div>
            <div className="product-card-bottom">
                <h2>{product.title}</h2>
                <p className="desktop">{product.rating}</p>
                <h1>${product.price}</h1>
            </div>
        </div>
    )
}