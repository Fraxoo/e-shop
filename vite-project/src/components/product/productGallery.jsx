
import { Product } from "../../models/productModel";




export default function ProductGallery({ product, index , setIndex}) {

    if (!product || !product.images || product.images.length === 0) {
        return null;
    } else {
        const length = product.images.length;
        if (length > 1) {
            return (
                <div className="product-gallery">
                    <div className="product-gallery-full">
                        <button className="left-arrow">
                            <i class="fa-solid arrow fa-angle-left"></i>
                        </button>
                        <img src={product.images[index]} alt={product.title} />
                        <button className="right-arrow">
                            <i class="fa-solid arrow fa-angle-right"></i>
                        </button>
                    </div>
                    <div className="product-gallery-bottom">
                        {product.images.map((image, i) => {
                            if (i === index) {
                                return (
                                    <div key={i} className="product-gallery-focus">
                                        <img src={image} alt={product.title} />
                                    </div>
                                );
                            } else {
                                return (
                                    <div onClick={() => setIndex(i)} key={i}>
                                        <img src={image} alt={product.title} />
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>

            )
        } else {
            return (
                <div className="product-gallery">
                    <div className="product-gallery-full">
                        <img src={product.images[index]} alt={product.title} />
                    </div>
                </div>
            )
        }
    }
}