import { Heart, Share2, Phone, MapPin, User } from "lucide-react"
import "./ProductView.css"
import Navbar from "../../components/Navbar/Navbar"
import { useParams } from "react-router-dom"
import useProductView from "../../Hooks/useProductView"
import { useState } from "react"
import ChatModal from "../../components/ChatModal/ChatModal"
import ProductShimmer from "../../components/Shimmer/ProductShimmer"

const ProductView = ({user, setIsLogin}) => {
  
    const [showChat, setShowChat] =useState(false)
    const chatWithSeller =()=>{
      if(!user){
        setIsLogin(true)
        return
      }
      setShowChat(true)
    }

    const {id} = useParams()
    const productInfo = useProductView(id)
    if(!productInfo) return <ProductShimmer/>
    const {title, image,imageURL, price,  description, category} =productInfo
    const imageSrc = image || imageURL || "/placeholder.svg";
   
  return (
    <>
    <Navbar/>
    <div className="product-container">
      <div className="product-grid">
        <div>
          <div className="image-gallery">
            <div className="main-image-container">
              <img src={imageSrc} alt="iPhone 13 Green" className="main-image" />
              <button className="nav-arrow nav-arrow-left">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="nav-arrow nav-arrow-right">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {/* <div className="image-counter">1 / 3</div> */}
              <div className="olx-watermark">OLX</div>
            </div>
            
          </div>

          {/* Product Details Section */}
          <div className="details-section">
            <h3 className="details-title">Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span>{category}</span>
                <p>{title}</p>
              </div>
            </div>

            <h3 className="details-title">Description</h3>
            <div className="description-text">
              <p>{description}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Product Info & Seller Details */}
        <div className="right-column">
          {/* Price and Actions */}
          <div className="info-card">
            <div className="price-header">
              <h1 className="price">₹ {price}</h1>
              <div className="action-buttons">
                <button className="action-button">
                  <Share2 />
                </button>
                <button className="action-button">
                  <Heart />
                </button>
              </div>
            </div>

            <h2 className="product-title">{title}</h2>

            <div className="location-info">
              <MapPin />
              <span>Kerala, India</span>
              <span className="date">Today</span>
            </div>
          </div>

          {/* Seller Information */}
          <div className="info-card">
            <div className="seller-header">
              <div className="seller-info">
                <div className="seller-avatar">
                  <User />
                </div>
                <div className="seller-details">
                  <p className="seller-name">
                    Posted By <span className="name-link">Unknown</span>
                  </p>
                  <p className="member-since">Member since Mar 2025</p>
                </div>
              </div>
              <svg className="chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div className="items-count">
              {/* <p className="items-number">171</p> */}
              <p className="items-label">Items listed</p>
            </div>

            <button onClick={chatWithSeller} className="chat-button">Chat with seller</button>

            <div className="phone-info">
              <Phone />
              <span className="phone-number">•• ••• ••••</span>
              {/* <a href="#" className="show-number">
                Show number
              </a> */}
            </div>
          </div>

          {/* Posted In */}
          <div className="info-card">
            <h3 className="posted-in-title">Posted in</h3>
            <p className="posted-location">Kerala, India</p>
          </div>

          {/* Map */}
          <div className="info-card">
            <div className="map-container">
              <img src="/placeholder.svg?height=192&width=300" alt="Location Map" className="map-image" />

              {/* Map Controls */}
              <div className="map-controls">
                <button className="map-control-button">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <button className="map-control-button">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
              </div>

              {/* Google Logo */}
              <div className="google-logo">
                <img src="/placeholder.svg?height=16&width=40" alt="Google" />
              </div>

              {/* Map Pin */}
              <div className="map-pin"></div>
            </div>
          </div>
        </div>
      </div>
      {showChat && <ChatModal setShowChat={setShowChat}/>}
    </div>
    </>
  )
}

export default ProductView
