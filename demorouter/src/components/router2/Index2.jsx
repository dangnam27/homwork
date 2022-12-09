import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Category } from "./Category"
import { Product } from "./Product"

export const Index2 = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Category />} />
            <Route path='/product/:categoryID/:randomUrl' element={<Product />} />
        </Routes>
    </BrowserRouter>
}