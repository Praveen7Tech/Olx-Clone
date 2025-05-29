import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firebaseStore } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"; // Make sure this is correctly imported

const useCurrentUserProduct = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const q = query(
            collection(firebaseStore, "products"),
            where("userId", "==", user.uid)
          );
          const snapshot = await getDocs(q);
          const userProducts = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setMyProducts(userProducts);
        } catch (error) {
          console.error("Error fetching user products:", error);
        } finally {
          setLoading(false);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return { myProducts, loading, setMyProducts };
};

export default useCurrentUserProduct;
