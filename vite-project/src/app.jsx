import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import CategoryProduct from "./pages/categoryProduct";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="product/:id" element={<Product/>}/>
                <Route path="category/:category" element={<CategoryProduct/>}/>
            </Routes>
        </BrowserRouter>
    );
}