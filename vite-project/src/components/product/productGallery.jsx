
import { useEffect, useState } from "react";
import { Product } from "../../models/productModel";




export default function ProductGallery({ product, index, setIndex }) {
    const [length, setLength] = useState(0);



    useEffect(() => {
        setLength(product.images.length)
        console.log(length);

    }, [product])

    if (length > 1) {
        return (
            <div className="product-gallery">
                <div className="product-gallery-full">
                    <button onClick={() => setIndex((prev) => prev === 0 ? length - 1 : prev - 1)} className="left-arrow">
                        <i className="fa-solid arrow fa-angle-left"></i>
                    </button>
                    <img src={product.images[index]} alt={product.title} />
                    <button onClick={() => setIndex((prev) => prev === length - 1 ? 0 : prev + 1)} className="right-arrow">
                        <i className="fa-solid arrow fa-angle-right"></i>
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
