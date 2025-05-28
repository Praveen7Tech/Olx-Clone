import { useState } from "react";
import "./SellProduct.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, firebaseStore } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const SellProductCard = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Helper to read image as DataURL
    const readImageAsDataURL = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imgUrl = reader.result;
          localStorage.setItem(`image_${file.name}`, imgUrl);
          resolve(imgUrl);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    let imageURL = "";
    if (image) {
      try {
        imageURL = await readImageAsDataURL(image);
      } catch (error) {
        console.error("Failed to read image as data URL:", error);
        alert("Failed to read image URL.");
        return;
      }
    }

    try {
      await addDoc(collection(firebaseStore, "products"), {
        title: title.trim(),
        category: category.trim(),
        description: description.trim(),
        price: Number(price),
        brand: brand.trim(),
        imageURL,
        userId: auth.currentUser?.uid,
        userName: auth.currentUser?.displayName,
        createdAt: new Date().toDateString(),
      });

      console.log("Product successfully added");
      navigate("/");
    } catch (error) {
      console.log("Error adding product:", error);
    }
  };

  return (
    <div className="sell-product-container">
      <div className="sell-product-card">
        <div className="card-header">
          <h2>POST YOUR AD</h2>
          <p>Fill in the details to sell your product</p>
        </div>

        <div className="card-content">
          <form onSubmit={submitForm} className="sell-form">
            {/* Category Section */}
            <div className="form-section">
              <h3>Category & Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <input
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    id="category"
                    placeholder="Enter product category"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="form-section">
              <h3>Product Information</h3>
              <div className="form-group">
                <label htmlFor="title">Product Title *</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  id="title"
                  placeholder="Enter product title"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  placeholder="Describe your product in detail"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="brand">Brand</label>
                  <input
                    onChange={(e) => setBrand(e.target.value)}
                    type="text"
                    id="brand"
                    placeholder="Enter brand name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="model">Model</label>
                  <input type="text" id="model" placeholder="Enter model" />
                </div>
              </div>
            </div>

            {/* Price & Condition */}
            <div className="form-section">
              <h3>Price & Condition</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Price *</label>
                  <div className="price-input">
                    <span className="currency">₹</span>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      id="price"
                      placeholder="0"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Condition *</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="condition" value="new" />
                      <span>New</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="condition"
                        value="used"
                        defaultChecked
                      />
                      <span>Used</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="condition"
                        value="refurbished"
                      />
                      <span>Refurbished</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Images */}
            {image ? (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  style={{ width: "346px", marginRight: "10px" }}
                />
                 <button
                    type="button"
                    onClick={() => setImage(null)}
                    className="remove-image-btn"
                    style={{
                      marginLeft: "10px",
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer"
                    }}
                  >
                    Remove
                  </button>
              </div>
            ) : (
              <div className="form-section">
                <h3>Photos</h3>
                <div className="image-upload-grid">
                  <div className="image-upload-box">
                    <div className="upload-icon">📷</div>
                    <span>Add Photo</span>
                    <input
                      onChange={handleImageUpload}
                      type="file"
                      accept="image/*"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Submit Buttons */}
            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Post Your Ad
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellProductCard;
