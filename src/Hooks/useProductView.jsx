
import React, { useEffect, useState } from 'react'
import { PRODUCT_API } from '../utils/constants'

const useProductView = (productId) => {

    const [productInfo, setProductInfo] = useState(null)

    useEffect(()=>{
        fetchProductDetails()
    },[])

    const fetchProductDetails = async()=>{
        try {
            const data = await fetch(PRODUCT_API)
            const json = await data.json()
             const product = json.find((pro) => pro.id === Number(productId))
            setProductInfo(product)
            console.log("id",productId)
            console.log("piro",product)
            
        } catch (error) {
            console.log(error)
        }
    }

  return  productInfo 
}

export default useProductView
