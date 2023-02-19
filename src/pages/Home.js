import React from "react";
import AllProducts from "../components/AllProducts";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <AllProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
