import React from "react";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success/Success";

const App = () => {
  const user = true;
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default App;
