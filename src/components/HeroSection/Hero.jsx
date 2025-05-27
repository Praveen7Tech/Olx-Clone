import "./Hero.css"
import Card from "../Cards/Card"
import useProducts from "../../Hooks/useProducts"

const Hero = () => {
 
  const {products} = useProducts()

  if( !products) return

  return (
    <div className="hero-section">
      <div className="hero-container">
        <h2 className="section-title">Fresh recommendations</h2>
        <div className="cards">
          {products.map((card, id) => (
            <Card key={id} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
