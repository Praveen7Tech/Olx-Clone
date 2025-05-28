import { useEffect, useState } from "react";
import { PRODUCT_API } from "../utils/constants";
import { doc, getDoc } from "firebase/firestore";
import { firebaseStore } from "../utils/firebase";

const useProductView = (productId) => {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      
      const data = await fetch(PRODUCT_API);
      const json = await data.json();
      const apiProduct = json.find((pro) => pro.id === Number(productId));

      if (apiProduct) {
        setProductInfo({ ...apiProduct, source: "api" });
      } else {
        // Fallback to Firestore
        const docRef = doc(firebaseStore, "products", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProductInfo({ id: docSnap.id, ...docSnap.data(), source: "firebase" });
        } else {
          console.warn("Product not found in API or Firestore");
        }
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  return productInfo;
};

export default useProductView;
