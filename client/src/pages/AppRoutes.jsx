import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Upload from "./Upload/Upload"
import Products from "./Products/Products"
import ProductItem from "./ProductItem/ProductItem"

export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/products" element={<Products></Products>}/>
                <Route path="/products/:id" element={<ProductItem></ProductItem>}/>
                <Route path="/upload" element={<Upload></Upload>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
