// Home.jsx
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/HeroSection/Hero";
import React from "react";

const Home = ({setIsLogin }) => {
  return (
    <div>
      <Navbar setIsLogin={setIsLogin} />
      <Hero/>
    </div>
  );
};

export default Home;
