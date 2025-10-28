import ProductCard from "./productCard";
import { Link } from "react-router-dom";


export default function ProductGrid({ products }) {
    return (
        <div className="product-grid">
            {products.map((product) => (
                <Link className="nav-link" key={product.id} to={`/product/${product.id}`}>
                    <ProductCard key={product.id} product={product} />
                </Link>
            ))}
        </div>
    )
}