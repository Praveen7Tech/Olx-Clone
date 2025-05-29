import { useEffect, useState } from "react";

const useCategoryFilter = (products, setFilterProducts)=>{
    const [categories, setCategories] = useState([])

      // filter based on category
  useEffect(() => {
    if (products && Array.isArray(products)) {
      const categories = [...new Set(products.map(pro => pro.category?.trim()))];
      setCategories(categories);
    }
  }, [products]);

  
  const filterCategory= (category)=>{
      const filteredProductsCat = products.filter(product =>
        product.category?.toLowerCase() === category.toLowerCase()
      )
      console.log("filter cat",category,"val",filteredProductsCat)
      setFilterProducts(filteredProductsCat)
    
  }

  return {categories, filterCategory}

}

export default useCategoryFilter;