import "./Hero.css"
import Card from "../Cards/Card"

const Hero = () => {
  const cardData = [
    {
      image: "/placeholder.svg?height=200&width=300",
      price: "2,36,478",
      year: "2025",
      details: "0 km",
      title: "Brand New Triumph Speed T4 2025 0Km",
      location: "GANESHPUR, VARANASI",
      timePosted: "MAR 18",
      isFeatured: true,
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      price: "1,37,100",
      year: "2025",
      details: "0 km",
      title: "Brand New Bajaj Chetak 2025 0KMs",
      location: "MEDICAL ROAD, GORAKHPUR",
      timePosted: "MAY 06",
      isFeatured: true,
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      price: "20,000",
      year: "",
      details: "",
      title: "iPhone 13 Black 128Gb 11 month warranty",
      location: "SAMUDRAPUR MDC, MAHARASHTRA",
      timePosted: "TODAY",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      price: "22,000",
      year: "",
      details: "",
      title: "iPhone 14 128Gb 11 month warranty wi...",
      location: "SAMUDRAPUR, MAHARASHTRA",
      timePosted: "TODAY",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      price: "5,00,000",
      year: "2017",
      details: "100,000 km",
      title: "Nissan Terrano 100000 Km Driven",
      location: "SAMUDRAPUR, MAHARASHTRA",
      timePosted: "2 DAYS AGO",
    },
    {
      isPromotional: true,
      promotionalContent: {
        title: "Want to see your stuff here?",
        description: "Make some extra cash by selling things in your community. Go on, it's quick and easy.",
        buttonText: "Start selling",
      },
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      price: "37,000",
      year: "2012",
      details: "25,000 km",
      title: "All Pepper Ok",
      location: "SAMUDRAPUR, MAHARASHTRA",
      timePosted: "MAY 17",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      price: "1,80,00,000",
      year: "",
      details: "",
      title: "Agricultural land for sale in Samudrapu...",
      location: "SAMUDRAPUR, MAHARASHTRA",
      timePosted: "6 DAYS AGO",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      price: "800",
      year: "",
      details: "",
      title: "Black Sports Shoes",
      location: "SAMUDRAPUR, MAHARASHTRA",
      timePosted: "TODAY",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      price: "2,000",
      year: "",
      details: "",
      title: "Smart Watch with Multiple Features",
      location: "SAMUDRAPUR, MAHARASHTRA",
      timePosted: "TODAY",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      price: "999",
      year: "",
      details: "",
      title: "Blue Checkered Shirt",
      location: "SAMUDRAPUR, MAHARASHTRA",
      timePosted: "2 DAYS AGO",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      price: "2,20,00,000",
      year: "",
      details: "",
      title: "Agricultural land for sale",
      location: "SAMUDRAPUR, MAHARASHTRA",
      timePosted: "1 WEEK AGO",
    },
  ]

  return (
    <div className="hero-section">
      <div className="hero-container">
        <h2 className="section-title">Fresh recommendations</h2>
        <div className="cards">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
