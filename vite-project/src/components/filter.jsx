import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "../styles/filter.css";
import { Link, useParams } from "react-router-dom";
import { Category } from "../models/categoryModel";

export default function Filter({ setCategory }) {
  const { data, loading } = useFetch("https://dummyjson.com/products/categories");
  const [categorys, setCategorys] = useState([]);
  const [categoryToShow, setCategoryToShow] = useState([]);
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (Array.isArray(data)) {
      const categorysData = data.map(
        (d) => new Category(d.name, d.slug)
      );
      // Ajoute "All" manuellement (sous forme d'objet aussi)
      setCategorys([new Category("All", "all"), ...categorysData]);
    }
  }, [data]);

  useEffect(() => {
    setCategoryToShow(categorys.slice(0, 6));
  }, [categorys]);

  useEffect(() => {
    if (!category) {
      setSelectedCategory("all");
    } else {
      setSelectedCategory(category);
    }
  }, [category]);

  return (
    <div className="home-filter">
      <div className="home-filter-top">
        <h3>Categories</h3>
        <Link className="go-to-category" to="/category">
          <p>See All</p>
        </Link>
      </div>

      <div className="home-filter-button">
        {categoryToShow.map((cat, i) => {
          const isSelected = cat.slug === selectedCategory;

          return (
            <Link
              key={i}
              to={cat.slug === "all" ? "/" : `/category/${cat.slug}`}
              className={isSelected ? "selected-button" : "not-selected-button"}
              onClick={() => setSelectedCategory(cat.slug)}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
