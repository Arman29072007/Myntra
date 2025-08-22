// import React from "react";
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <h4>ONLINE SHOPPING</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home</li>
            <li>Beauty</li>
            <li>Genz</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CUSTOMER POLICIES</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy policy</li>
            <li>Grievance Redressal</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
            <li>Whitehat</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
          <div className="app-buttons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
          </div>

          <h4>KEEP IN TOUCH</h4>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="guarantee">
          <img src="https://img.icons8.com/ios-filled/50/000000/approval.png" alt="Original" />
          <p><strong>100% ORIGINAL</strong> guarantee for all products at myntra.com</p>
        </div>
        <div className="returns">
          <img src="https://img.icons8.com/ios-filled/50/000000/return-purchase.png" alt="Returns" />
          <p><strong>Return within 14days</strong> of receiving your order</p>
        </div>
      </div>

      <div className="side-banner">UPTO ₹300 OFF</div>
    </footer>
  );
}

export default Footer;
