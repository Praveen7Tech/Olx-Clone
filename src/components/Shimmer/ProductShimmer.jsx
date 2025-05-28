
import "./ProductShimmer.css"

export default function ProductShimmer() {
  return (
    <div className="shimmer-container">
      <div className="shimmer-grid">
        {/* Left side - Image Gallery */}
        <div className="shimmer-space-y">
          {/* Main image */}
          <div className="shimmer-image"></div>

          {/* Thumbnail images */}
          <div className="shimmer-flex">
            <div className="shimmer-thumbnail"></div>
            <div className="shimmer-thumbnail"></div>
            <div className="shimmer-thumbnail"></div>
            <div className="shimmer-thumbnail"></div>
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="shimmer-space-y">
          {/* Price */}
          <div className="shimmer-space-y-sm">
            <div className="shimmer-text-xl w-32"></div>
            <div className="shimmer-flex">
              <div className="shimmer-icon"></div>
              <div className="shimmer-icon"></div>
            </div>
          </div>

          {/* Product title */}
          <div className="shimmer-space-y-sm">
            <div className="shimmer-text-lg w-3/4"></div>
            <div className="shimmer-text w-1/2"></div>
          </div>

          {/* Location */}
          <div className="shimmer-flex">
            <div className="shimmer-small-icon"></div>
            <div className="shimmer-text w-48"></div>
            <div className="shimmer-text w-16"></div>
          </div>

          {/* Seller info */}
          <div className="shimmer-seller-card">
            <div className="shimmer-avatar"></div>
            <div className="shimmer-flex-col shimmer-space-y-sm w-full">
              <div className="shimmer-text w-32"></div>
              <div className="shimmer-text-sm w-24"></div>
            </div>
            <div className="shimmer-icon"></div>
          </div>

          {/* Stats */}
          <div className="shimmer-center shimmer-space-y-sm">
            <div className="shimmer-text-xl w-16"></div>
            <div className="shimmer-text w-20"></div>
          </div>

          {/* Action buttons */}
          <div className="shimmer-space-y-sm">
            <div className="shimmer-button"></div>
            <div className="shimmer-button-sm"></div>
          </div>

          {/* Posted in section */}
          <div className="shimmer-space-y-sm">
            <div className="shimmer-text w-20"></div>
            <div className="shimmer-text w-48"></div>
          </div>
        </div>
      </div>

      {/* Details section */}
      <div className="mt-8 shimmer-space-y">
        <div className="shimmer-text-lg w-24"></div>

        {/* Brand info */}
        <div className="shimmer-space-y-sm">
          <div className="shimmer-text w-16"></div>
          <div className="shimmer-text w-20"></div>
        </div>

        {/* Description */}
        <div className="shimmer-space-y">
          <div className="shimmer-text-lg w-28"></div>
          <div className="shimmer-space-y-sm">
            <div className="shimmer-text w-full"></div>
            <div className="shimmer-text w-full"></div>
            <div className="shimmer-text w-3/4"></div>
            <div className="shimmer-text w-full"></div>
            <div className="shimmer-text w-2/3"></div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="shimmer-map"></div>
      </div>
    </div>
  )
}
