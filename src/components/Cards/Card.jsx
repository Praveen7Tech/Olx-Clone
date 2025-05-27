import "./Card.css"

const Card = ({
  image,
  price,
  year,
  details,
  title,
  location,
  timePosted,
  isFeatured = false,
  isPromotional = false,
  promotionalContent,
}) => {
  if (isPromotional) {
    return (
      <div className="card promotional-card">
        <div className="promotional-content">
          <h3>{promotionalContent.title}</h3>
          <p>{promotionalContent.description}</p>
          <button className="promotional-btn">{promotionalContent.buttonText}</button>
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image || "/placeholder.svg"} alt={title} className="card-image" />
        <div className="card-heart">
          <i className="far fa-heart"></i>
        </div>
        {isFeatured && <div className="featured-badge">FEATURED</div>}
      </div>

      <div className="card-content">
        <div className="card-price">₹ {price}</div>
        <div className="card-details">
          {year} · {details}
        </div>
        <div className="card-title">{title}</div>
        <div className="card-footer">
          <span className="card-location">{location}</span>
          <span className="card-time">{timePosted}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
