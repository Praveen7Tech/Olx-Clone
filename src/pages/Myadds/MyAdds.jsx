
import Navbar from "../../components/Navbar/Navbar";
import "./MyAdds.css";
import useCurrentUserProduct from "../../Hooks/useCurrentUsersProduct";
import { deleteDoc, doc } from "firebase/firestore";
import { firebaseStore } from "../../utils/firebase";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const MyAds = () => {
  const { myProducts, loading, setMyProducts } = useCurrentUserProduct();

  if (loading) return 

  const deleteAdd = async(productId)=>{
    try {
        await deleteDoc(doc(firebaseStore, "products", productId))
        setMyProducts(myProducts.filter(pro => pro.id !== productId))
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header">
          <h1 className="title">My Ads</h1>
        </div>

        <div className="ads-container">
          {myProducts.length === 0 ? (
            <p style={{ padding: "1rem" }}>You haven't posted any ads yet.</p>
          ) : (
            myProducts.map((product) => (
              <div className="ad-card" key={product.id}>
                <div className="ad-image">
                  <img src={product.imageURL || "https://via.placeholder.com/300x200"} alt="Product" className="image" />
                  <span className="status-badge status-active">Active</span>
                </div>
                <div className="ad-content">
                  <div className="ad-header">
                    <h3 className="ad-title">{product.title}</h3>
                    <button className="menu-button">⋮</button>
                  </div>
                  <div className="ad-price">₹ {product.price}</div>
                  <div className="ad-meta">
                    <div className="meta-item">
                      <span>📍 {product.location || "Location"}</span>
                    </div>
                    <div className="meta-item">
                      <span>📅 {product.createdAt}</span>
                    </div>
                    <div className="meta-item">
                      <span>👁 {product.views || 0}</span>
                    </div>
                  </div>
                  <div className="ad-actions">
                    <button className="action-button"><Link className="edit-btn" to={`/edit-add/${product.id}`}>Edit</Link></button>
                    <button onClick={()=>deleteAdd(product.id)} className="action-button delete-button">Delete</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MyAds;
