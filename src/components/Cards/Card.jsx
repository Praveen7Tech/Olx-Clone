import "./Card.css"

const Card = ({title, image,imageURL, price,  description, category, isFeatured}) => {
  const imageSrc = image || imageURL || "/placeholder.svg";

  const truncateText = (text, maxLength = 60) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageSrc} alt={title} className="card-image" />
        {/* <div className="card-heart">
          <i className="far fa-heart"></i>
        </div> */}
        {isFeatured && <div className="featured-badge">FEATURED</div>}
      </div>

      <div className="card-content">
        <div className="card-price">₹ {price}</div>
        <div className="card-title">{title}</div>
        <div className="card-details">
           {truncateText(description, 60)}
        </div>
        
        <div className="card-footer">
          <span className="card-location">Verified</span>
          <span className="card-time">{category}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
