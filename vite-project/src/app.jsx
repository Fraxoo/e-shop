import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="product/:id" element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    );
}