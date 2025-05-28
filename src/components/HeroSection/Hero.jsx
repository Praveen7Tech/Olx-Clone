import "./Hero.css"
import Card from "../Cards/Card"
import { Link } from "react-router-dom"

const Hero = ({ filterProducts }) => {
 

  if( !filterProducts) return 

  return (
    <div className="hero-section">
      <div className="hero-container">
        <h2 className="section-title">Fresh recommendations</h2>
        <div className="cards">
          {filterProducts.map((card) => (
            <Link className="Card-link" to={"/product/"+card.id}><Card key={card.id} {...card} image={card.image || card.imageURL} /></Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
