import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Search from "../pages/Search/Search";
import Product from "../pages/Product/Product";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import ProtectedRoute from "../components/ProtectedRoute"; // Importa o componente de proteção

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} />
        <Route path="/product" element={<ProtectedRoute><Product /></ProtectedRoute>} />
        <Route path="/shoppingCart" element={<ProtectedRoute><ShoppingCart /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
