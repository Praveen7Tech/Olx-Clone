
import "./SellProduct.css"

const SellProductCard = () => {
  return (
    <div className="sell-product-container">
      <div className="sell-product-card">
        <div className="card-header">
          <h2>POST YOUR AD</h2>
          <p>Fill in the details to sell your product</p>
        </div>

        <div className="card-content">
          <form className="sell-form">
            {/* Category Section */}
            <div className="form-section">
              <h3>Category & Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select id="category" required>
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="furniture">Furniture</option>
                    <option value="clothing">Clothing & Fashion</option>
                    <option value="books">Books & Sports</option>
                    <option value="home">Home & Garden</option>
                    <option value="services">Services</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="subcategory">Subcategory</label>
                  <select id="subcategory">
                    <option value="">Select subcategory</option>
                    <option value="mobile">Mobile Phones</option>
                    <option value="laptop">Laptops</option>
                    <option value="camera">Cameras</option>
                    <option value="tv">TV & Audio</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="form-section">
              <h3>Product Information</h3>
              <div className="form-group">
                <label htmlFor="title">Product Title *</label>
                <input type="text" id="title" placeholder="Enter product title" required />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea id="description" placeholder="Describe your product in detail" rows={4} required></textarea>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="brand">Brand</label>
                  <input type="text" id="brand" placeholder="Enter brand name" />
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
                    <input type="number" id="price" placeholder="0" required />
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
                      <input type="radio" name="condition" value="used" defaultChecked />
                      <span>Used</span>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="condition" value="refurbished" />
                      <span>Refurbished</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="form-section">
              <h3>Photos</h3>
              <div className="image-upload-grid">
                <div className="image-upload-box">
                  <div className="upload-icon">📷</div>
                  <span>Add Photo</span>
                  <input type="file" accept="image/*" />
                </div>
                <div className="image-upload-box">
                  <div className="upload-icon">📷</div>
                  <span>Add Photo</span>
                  <input type="file" accept="image/*" />
                </div>
                <div className="image-upload-box">
                  <div className="upload-icon">📷</div>
                  <span>Add Photo</span>
                  <input type="file" accept="image/*" />
                </div>
                <div className="image-upload-box">
                  <div className="upload-icon">📷</div>
                  <span>Add Photo</span>
                  <input type="file" accept="image/*" />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="form-section">
              <h3>Location</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <select id="state" required>
                    <option value="">Select state</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input type="text" id="city" placeholder="Enter your city" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="locality">Locality</label>
                <input type="text" id="locality" placeholder="Enter locality/area" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="form-section">
              <h3>Contact Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" placeholder="+91 9876543210" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email (Optional)</label>
                <input type="email" id="email" placeholder="your.email@example.com" />
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="form-actions">
              <button type="button" className="btn-secondary">
                Save as Draft
              </button>
              <button type="submit" className="btn-primary">
                Post Your Ad
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SellProductCard

