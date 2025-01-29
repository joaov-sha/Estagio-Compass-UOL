import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Search from './pages/Search/Search';
import Product from './pages/Product/Product';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/shoppingCart" element={<ShoppingCart/>}/>
      </Routes>
    </Router>
  )
}

export default App
