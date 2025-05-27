import "./Hero.css"
import Card from "../Cards/Card"
import useProducts from "../../Hooks/useProducts"
import { Link } from "react-router-dom"

const Hero = () => {
 
  const {products} = useProducts()

  if( !products) return

  return (
    <div className="hero-section">
      <div className="hero-container">
        <h2 className="section-title">Fresh recommendations</h2>
        <div className="cards">
          {products.map((card) => (
            <Link className="Card-link" to={"/product/"+card.id}><Card key={card.id} {...card} /></Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
