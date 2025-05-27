import React, { useEffect, useState } from "react";
import { PRODUCT_API } from "../utils/constants";

const useProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const data = await fetch(PRODUCT_API);
      const json = await data.json();
      setProducts(json);
      console.log("products ", json);
    } catch (error) {
      console.log(error);
    }
  };
  return {products}
};

export default useProducts;
