import SellProductCard from "../../components/Cards/SellProductCard"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import "./SellProduct"
import React from 'react'

const SellProduct = () => {
  return (
    <div>
        <Navbar/>
        <SellProductCard/>
        <Footer/>
    </div>
  )
}

export default SellProduct
