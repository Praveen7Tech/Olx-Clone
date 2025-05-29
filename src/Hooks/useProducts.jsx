import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firebaseStore } from "../utils/firebase";
import { PRODUCT_API } from "../utils/constants";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([])

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        // data from your API
        const apiRes = await fetch(PRODUCT_API);
        const apiData = await apiRes.json();

        // data from Firebase
        const snapshot = await getDocs(collection(firebaseStore, "products"));
        const firebaseData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        const combined = [...firebaseData, ...apiData];
        setProducts(combined);
        setFilterProducts(combined)

      } catch (error) {
        console.error( error);
      }
    };

    fetchAllProducts();
  }, []);

  return { products, filterProducts, setFilterProducts };
};

export default useProducts;
