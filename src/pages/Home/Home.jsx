
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/HeroSection/Hero";
import React from "react";

const Home = ({setIsLogin, products, filterProducts, setFilterProducts }) => {
  return (
    <div>
       <Navbar
        setIsLogin={setIsLogin}
        products={products}
        filterProducts={filterProducts}
        setFilterProducts={setFilterProducts}
      />
       <Hero
        products={products}
        filterProducts={filterProducts}
      />
    </div>
  );
};

export default Home;
