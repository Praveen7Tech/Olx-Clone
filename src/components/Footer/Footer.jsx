import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Popular Locations */}
          <div className="footer-column">
            <h3 className="footer-heading">POPULAR LOCATIONS</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Kolkata</a></li>
              <li><a href="#" className="footer-link">Mumbai</a></li>
              <li><a href="#" className="footer-link">Chennai</a></li>
              <li><a href="#" className="footer-link">Pune</a></li>
            </ul>
          </div>

          {/* Trending Locations */}
          <div className="footer-column">
            <h3 className="footer-heading">TRENDING LOCATIONS</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Bhubaneswar</a></li>
              <li><a href="#" className="footer-link">Hyderabad</a></li>
              <li><a href="#" className="footer-link">Chandigarh</a></li>
              <li><a href="#" className="footer-link">Nashik</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div className="footer-column">
            <h3 className="footer-heading">ABOUT US</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Tech@OLX</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
            </ul>
          </div>

          {/* OLX */}
          <div className="footer-column">
            <h3 className="footer-heading">OLX</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Help</a></li>
              <li><a href="#" className="footer-link">Sitemap</a></li>
              <li><a href="#" className="footer-link">Legal & Privacy information</a></li>
              <li><a href="#" className="footer-link">Vulnerability Disclosure Program</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="footer-column">
            <h3 className="footer-heading">FOLLOW US</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">▶️</a>
            </div>
            <div className="app-downloads">
              <a href="#" className="app-link">
                <img src="https://statics.olx.in/external/base/img/playstore.webp" alt="Get it on Google Play" className="app-badge" />
              </a>
              <a href="#" className="app-link">
                <img src="https://statics.olx.in/external/base/img/appstore.webp" alt="Download on App Store" className="app-badge" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="company-logos">
            <div className="logo-item">CarTrade Tech GROUP</div>
            <div className="logo-item olx-logo">OLX</div>
            <div className="logo-item">CarWale</div>
            <div className="logo-item">BikeWale</div>
            <div className="logo-item">CarTrade</div>
            <div className="logo-item">MOBILITY OUTLOOK</div>
          </div>
          <div className="copyright">
            All rights reserved © 2006-2025 OLX
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;