import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../models/productModel";
import Loading from "../components/loading";



export default function ProductPage() {

    const { id } = useParams();
    const idNumber = Number(id);


    const { data, loading } = useFetch(`https://dummyjson.com/products/${idNumber}`);

    const [product, setProduct] = useState([]);

    useEffect(() => {
        console.log(product);

    }, [product])

    useEffect(() => {
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
                <p>yo</p>
            </div>
        )
    }
}