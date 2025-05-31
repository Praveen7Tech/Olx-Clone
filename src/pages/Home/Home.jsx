
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/HeroSection/Hero";
import React from "react";
import Footer from "../../components/Footer/Footer";

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
      <Footer/>
    </div>
  );
};

export default Home;
