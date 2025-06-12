import "./HomeShimmer.css"

const HomeShimmer = () => {
  const shimmerCards = Array.from({ length: 8 }, (_, index) => (
    <div key={index} className="shimmer-card">
      <div className="shimmer-image"></div>
      <div className="shimmer-content">
        <div className="shimmer-price"></div>
        <div className="shimmer-title"></div>
        <div className="shimmer-description">
          <div className="shimmer-line"></div>
          <div className="shimmer-line short"></div>
        </div>
        <div className="shimmer-tags">
          <div className="shimmer-tag"></div>
          <div className="shimmer-tag"></div>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="shimmer-container">
      <div className="shimmer-header">
        <div className="shimmer-title-main"></div>
      </div>
      <div className="shimmer-grid">{shimmerCards}</div>
    </div>
  )
}

export default HomeShimmer
