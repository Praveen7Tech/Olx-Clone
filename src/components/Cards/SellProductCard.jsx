import { useState, useEffect } from "react";
import "./SellProduct.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, firebaseStore } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {sellProductFormValidate} from "../../utils/sellProductFomValidate";

const SellProductCard = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState(null);

  const [titleError, setTitleError] = useState(null)
  const [categoryError, setCategoryError] = useState(null)
  const [descriptionError, setDescriptionError] = useState(null)
  const [priceError, setPriceError] = useState(null)
  const [brandError, setBrandError] = useState(null)
  const [imageError, setImageError] = useState(null)

  const {id} = useParams()

  // handle product edit if the id is 
  useEffect(()=>{
    if(id){
      const fetchProductDetails = async()=>{
        try {
          const docDetails = doc(firebaseStore, "products", id)
          const snap = await getDoc(docDetails);
          if(snap.exists()){
            const data = snap.data()
            setTitle(data.title)
            setCategory(data.category)
            setBrand(data.brand)
            setDescription(data.description)
            setPrice(data.price)
            setImage(null)
            localStorage.setItem(`image_${id}`,data.imageURL);
          }
        } catch (error) {
          console.log(error)
        }
      }
      fetchProductDetails()
    }
  },[id])

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  // FORM SUBMISSION 
  const submitForm = async (e) => {
    e.preventDefault();

    const {titleMsg,categoryMsg, descriptionMsg,priceMsg, brandMsg, imageMsg } = sellProductFormValidate(
      title,
      category,
      description,
      price,
      brand,
      image
    )
 console.log("price --",imageMsg)
    setTitleError(titleMsg)
    setCategoryError(categoryMsg)
    setDescriptionError(descriptionMsg)
    setBrandError(brandMsg)
    setPriceError(priceMsg)
    setImageError(imageMsg)

    if(titleMsg || categoryMsg || descriptionMsg || brandMsg || priceMsg || imageMsg) return

    //read image as DataURL
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
        console.error("failed to read",error);
        alert("failed to read image URL.");
        return;
      }
    }

    const productData={
        title: title.trim(),
        category: category.trim(),
        description: description.trim(),
        price: Number(price),
        brand: brand.trim(),
        imageURL,
        userId: auth.currentUser?.uid,
        userName: auth.currentUser?.displayName,
        updatedAt: new Date().toDateString()
    }

    try {
      if(id){
        await updateDoc(doc(firebaseStore, "products", id), productData)
        navigate("/myAdds")
      }else{
        await addDoc(collection(firebaseStore, "products"), {
          ...productData,
          userId:auth.currentUser?.uid,
          userName:auth.currentUser?.displayName,
          createdAt: new Date().toDateString()
        })
        navigate("/")
      }
      
    } catch (error) {
      console.log("Error adding product:", error);
    }
  };

  return (
    <div className="sell-product-container">
      <div className="sell-product-card">      
        <div className="card-header">
          <h2>{id ? "EDIT YOUR ADD" : "POST YOUR AD"}</h2>
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
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    id="category"
                    placeholder="Enter product category"
                  />
                  <span className='errorMessage'>{categoryError}</span>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="form-section">
              <h3>Product Information</h3>
              <div className="form-group">
                <label htmlFor="title">Product Title *</label>
                <input
                 value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  id="title"
                  placeholder="Enter product title"
                />
                <span className='errorMessage'>{titleError}</span>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  placeholder="Describe your product in detail"
                  rows={4}
                ></textarea>
                <span className='errorMessage'>{descriptionError}</span>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="brand">Brand</label>
                  <input
                   value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    type="text"
                    id="brand"
                    placeholder="Enter brand name"
                  />
                  <span className='errorMessage'>{brandError}</span>
                </div>
                <div className="form-group">
                  
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
                    value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="price"
                      id="price"
                      placeholder="0"
                    />
                  </div>
                  <span className='errorMessage'>{priceError}</span>
                </div>
                <div className="form-group">
                </div>
              </div>
            </div>

            {/* Images */}
            {image ? (
              <div className="image-preview">
                { image ?
                (<img
                  src={URL.createObjectURL(image)}
                  alt=""
                  style={{ width: "265px", marginRight: "10px" }}
                />)
                : id && localStorage.getItem(`image_${id}`) ?
                (<img src={localStorage.getItem(`image_${id}`)} alt="prev"/>)
                : null
                } 
               
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
                    />
                  </div>
                  <span className="errorMessage">{imageError}</span>
                </div>
              </div>
            )}

            {/* Submit Buttons */}
            <div className="form-actions">
              <button type="submit" className="btn-primary">
                {id ? "Update Add" : "Post Your Ad"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellProductCard;
