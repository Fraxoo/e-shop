import Header from "../components/header"
import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom";
import "../styles/category.css";

export default function CategoryPage() {

    const { data, loading } = useFetch("https://dummyjson.com/products/categories");
    const [categorys, setCategorys] = useState([]);


    useEffect(() => {
        const categorysData = data.map((d) => ({
            name: d.name,
            slugs: d.slugs
        }));
        setCategorys(["All", ...categorysData]);

    }, [data]);

    useEffect(() => {
        console.log(categorys);
        console.log(categorys);


    }, [categorys])


    return (

        <div className="main">
            <Header />
            <div className="category-page">
                {categorys.map((category) => {
                    return (
                        <Link className="category-page-link" to={category.slugs === "All" ? "/" : `/category/${category.slugs}`}>
                            <p>{category}</p>
                        </Link>

                    )
                })}
            </div>
        </div>
    )
}