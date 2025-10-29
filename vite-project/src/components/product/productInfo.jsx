
import StarRating from "./starRating"

export default function ProductInfo({ product }) {

    return (
        <div className="product-page-info">
            <h4>{product.brand}</h4>
            <h2>{product.title}</h2>
            <p><StarRating value={product.rating}/></p>
            <h1>${product.price}</h1>
            <h3>Descriptions</h3>
            <p>{product.description}</p>
        </div>
    )
}