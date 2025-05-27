"use client"

import { Signup } from "../../utils/firebase"
import "./LoginModal.css"


const LoginModal = ({setIsLogin}) => {

    const googleSignIn = async ()=>{
        Signup(setIsLogin)
    }

 const closeModal = ()=>{
    setIsLogin(false)
 }
  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button onClick={closeModal} className="close-btn" >
          <i className="fas fa-times"></i>
        </button>

        <div className="login-content">
          {/* Icon and Message */}
          <div className="login-icon">
            <div className="guitar-icon">🎸</div>
          </div>

          <div className="login-message">
            <h3>Help us become one of the safest places to buy and sell</h3>
          </div>

          {/* Navigation Dots */}
          <div className="nav-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>

          {/* Login Options */}
          <div className="login-options">
            <button className="login-option primary">
              <i className="fas fa-mobile-alt"></i>
              Continue with phone
            </button>

            <button className="login-option google"
            onClick={googleSignIn}>
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                className="google-icon"
              />
              Continue with Google
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button className="login-option email-link">Login with Email</button>
          </div>

          {/* Footer Text */}
          <div className="login-footer">
            <p>All your personal details are safe with us.</p>
            <p>
              If you continue, you are accepting OLX{" "}
              <a href="#" className="terms-link">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="terms-link">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
