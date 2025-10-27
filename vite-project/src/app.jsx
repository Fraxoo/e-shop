import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                {/* <Route path="account" element={<Account/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="products/:id" element={<Product/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}