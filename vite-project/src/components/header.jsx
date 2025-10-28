export default function Header() {
    return (
        <div className="header">
            <div className="header-top">
                <h1>e-shop<span id="secondary">.</span></h1>
                <div className="header-top-right">
                    <i class="fa-regular fa-user"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            <div className="header-bottom">
                <button type="button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input type="search" id="search" placeholder="Search Products ..." />
            </div>

        </div>
    )
}