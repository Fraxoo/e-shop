import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import "../styles/filter.css"
import { Link, useParams } from "react-router-dom";


export default function Filter({ setCategory }) {

    const { data, loading } = useFetch("https://dummyjson.com/products/categories");
    const [categorys, setCategorys] = useState([])

    const [categoryToShow, setCategoryToShow] = useState([]);

    const { category } = useParams();

    const [selectedCategory, setSelectedCategory] = useState([])

    useEffect(() => {
        const categorysData = data.map((d) => {
            return d.name
        })
        setCategorys(categorysData);
    }, [data]);

    useEffect(() => {
        setCategoryToShow(["All", ...categorys.slice(0, 5)]);
    }, [categorys])

    useEffect(() => {
        if (!category) {
            setSelectedCategory("All")
        } else {
            setSelectedCategory(category)

        }
    }, [category])


    return (
        <div className="home-filter">
            <div className="home-filter-top">
                <h3>Categories</h3>
                <Link to={`/category`}>
                    <p>See All</p>
                </Link>
            </div>

            <div className="home-filter-button">
                {categoryToShow.map((category, i) => {
                    const isSelected = category === selectedCategory;

                    return (
                        <Link
                            key={i}
                            to={category === "All" ? "/" : `/category/${category}`}
                            className={isSelected ? "selected-button" : "not-selected-button"}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Link>

                    );
                })}
            </div>
        </div>
    );
}