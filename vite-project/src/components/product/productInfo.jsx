


export default function ProductInfo({ product }) {

    return (
        <div className="product-page-info">
            <h3>{product.brand}</h3>
            <h2>{product.title}</h2>
            <p>{product.rating}</p>
            <h1>${product.price}</h1>
            <h3>Descriptions</h3>
            <p>{product.description}</p>
        </div>
    )
}