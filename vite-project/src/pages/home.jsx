import Header from "../components/header"
import "../styles/home.css"
import { useFetch } from "../hooks/useFetch"
import { useEffect, useState } from "react";
import { Product } from "../models/productModel";
import Loading from "../components/loading";



export default function Home() {

    const { data, loading } = useFetch(`https://dummyjson.com/products?limit=100`);
    const [products, setProducts] = useState([])


    useEffect(() => {
        const productsData = data.map((product) => new Product(
            product.id,
            product.title,
            product.description,
            product.category,
            product.price,
            product.brand,
            product.tags,
            product.availabilityStatus,
            product.reviews,
            product.images
        ));
        setProducts(productsData)
    }, [data])

    useEffect(() => {
        console.log(products);
    }, [products])


    if (loading) {
        return (
            <Loading/>
        );
        
    } else {
        return (
            <div>
                <Header />
            </div>
        )
    }

}