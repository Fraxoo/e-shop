import Header from "../components/header"
import "../styles/home.css"
import { useFetch } from "../hooks/useFetch"
import { useEffect, useState } from "react";
import { Product } from "../models/productModel";
import Loading from "../components/loading";
import ProductGrid from "../components/productGrid";
import Filter from "../components/filter";



export default function Home() {

    const [page, setPage] = useState(1);
    const { data, loading } = useFetch(`https://dummyjson.com/products?limit=20&skip=${(page - 1) * 20}`);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const productsData = data.map((product) => new Product(
            product.id,
            product.title,
            product.description,
            product.category,
            product.price,
            product.rating,
            product.brand,
            product.tags,
            product.availabilityStatus,
            product.reviews,
            product.images
        ));
        setProducts(productsData);        
    }, [data])

    


    if (loading) {
        return (
            <Loading />
        );

    } else {
        return (
            <div className="main">
                <Header />
                <Filter />
                <ProductGrid products={products}/>
            </div>
        )
    }

}