import { Link } from "react-router-dom"
import "../styles/header.css"


export default function Header() {
    return (
        <div className="header">
            <div className="header-top">
                <Link className="link" to={"/"}>
                    <h1>e-shop<span id="secondary">.</span></h1>
                </Link>
                <div className="header-top-right">
                    <i className="fa-regular fa-user"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            <div className="header-bottom mobile">
                <button type="button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input type="search" id="search" placeholder="Search Products ..." />
            </div>

        </div>
    )
}