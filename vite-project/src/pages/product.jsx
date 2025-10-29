import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../models/productModel";
import Loading from "../components/loading";
import ProductGallery from "../components/product/productGallery";
import "../styles/product.css"



export default function ProductPage() {

    const { id } = useParams();
    const idNumber = Number(id);

    const { data, loading } = useFetch(`https://dummyjson.com/products/${idNumber}`);

    const [product, setProduct] = useState(null);

    const [index,setIndex] = useState(0)

    useEffect(() => {
        console.log(product);

    }, [product])

    useEffect(() => {
        if(!data || !data.id || !data.images)return;
        const productData = new Product(
            data.id,
            data.title,
            data.description,
            data.category,
            data.price,
            data.rating,
            data.brand,
            data.tags,
            data.availabilityStatus,
            data.reviews,
            data.images
        )
        setProduct(productData);
    }, [data])


    if (loading) {
        return (
            <Loading />
        );

    } else {
        return (
            <div>
                <ProductGallery product={product} index={index} setIndex={setIndex}/>
            </div>
        )
    }
}