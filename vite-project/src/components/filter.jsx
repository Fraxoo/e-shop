import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import "../styles/filter.css"
import { Link } from "react-router-dom";


export default function Filter({ setCategory }) {

    const { data, loading } = useFetch("https://dummyjson.com/products/categories");
    const [categorys, setCategorys] = useState([])

    const [categoryToShow, setCategoryToShow] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("All")

    useEffect(() => {
        const categorysData = data.map((d) => {
            return d.name
        })
        setCategorys(categorysData);
    }, [data]);

    useEffect(() => {
        setCategoryToShow(["All", ...categorys.slice(0, 5)]);
    }, [categorys])


    return (
        <div className="home-filter">
            <div className="home-filter-top">
                <h3>Categories</h3>
                <p>See All</p>
            </div>
            <div className="home-filter-button">
                {categoryToShow.map((category, i) => {
                    if (category === selectedCategory) {
                        return (
                            <Link key={i} className="selected-button" to={`category/${category}`}>
                                <button>{category}</button>
                            </Link>
                        )
                    } else {
                        return (
                            <Link key={i} className="not-selected-button" to={`category/${category}`}>
                                <button>{category}</button>
                            </Link>
                        )
                    }
                })}
            </div>
        </div>
    )
}