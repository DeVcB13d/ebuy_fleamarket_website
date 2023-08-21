import React from "react";
import reactimage from "../images/market_img.jpg";
import "./Home.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);



const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-6 animate__animated animate__fadeIn home-content">
          <h1 className="text-primary special-font">Initiative by CUSAT Students for CUSAT Students</h1>
          <blockquote className="blockquote animate__animated animate__fadeIn">
            <p className="mb-0">"🛍️ Shop, Sell, and Discover 🛍️"</p>
          </blockquote>
      
          <p className="lead animate__animated animate__fadeIn">
          Uncover the joy of thrifting without leaving campus! EBUY is your virtual treasure trove, where budget-friendly finds and one-of-a-kind items await your discovery. Say goodbye to mainstream, and hello to individuality.
          </p>
          
          <blockquote className="blockquote animate__animated animate__fadeIn">
            <p className="mb-0">"🚀 "Empowering Student Entrepreneurship" 🚀"</p>
            
          </blockquote>
          <p className="lead animate__animated animate__fadeIn">Are you a student with unique products to share? EBUY provides a platform for student entrepreneurs to showcase their creations. Start your business journey right here within the CUSAT community.
          </p> 
          <blockquote className="blockquote animate__animated animate__fadeIn">
            <p className="mb-0">"Happy EBUYing! 🛒🌟"</p>
            
          </blockquote>
          <a href="/Login" className="animate__animated animate__fadeIn">
            <button type="button" className="btn btn-lg btn-primary mt-3 funny-hover-effect">
              Start Exploring
            </button>
          </a>
        </div>
        
          <div 
  className="market-image"
  style={{
    backgroundImage: `url(${reactimage})`,
    backgroundSize: 'cover',   // Try 'cover' or 'contain'
    backgroundPosition:'left', // Adjust as needed
    alignItems: 'right',
    width: '100%',
    height: '100%',
   
  }}
/>

        </div>
      
      
      {/* New row for video player and ads */}
      
     
{/* Horizontal ads of products */}
<div className="row product-ads">
  <div className="col-12 animate__animated animate__fadeIn">
    <h2 className="text-center mb-4">🎉Great Deals for the Day 🍾</h2>
    <div className="product-ads-container">
      <div className="product-ad">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_03uixGx6nYdteCS1gaI_dgEICMuSoj-dQ&usqp=CAU" alt="Product 1" />
        <p className="product-name">HP Chromebook x360 Intel Celeron Quad Core </p>
        <p className="product-price">₹16,990</p>
        

      </div>
      <div className="product-ad">
        <img src="data:image/jpeg;base64,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" alt="Product 2" />
        <p className="product-name">A Textbook of Java Programming  (English, Paperback, Kakar Surbhi)</p>
        <p className="product-price">₹250</p>
      </div>
      <div className="product-ad">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEkBK-P6-opVkWp382PA83TGF6h10XfGf6w&usqp=CAU" alt="Product 3" />
        <p className="product-name">Metallika By FurnitureKraft(Used-2years) </p>
        <p className="product-price">₹2599</p>
      </div>
      <div className="product-ad">
        <img src="data:image/jpeg;base64,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" alt="Product 3" />
        <p className="product-name">Used Designer Table Lamp</p>
        <p className="product-price">₹249</p>
      </div>
      <div className="product-ad">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRiHZovsqiPQCVaKspsF78zV3So7sIqEfQg&usqp=CAU" alt="Product 3" />
        <p className="product-name">Modern Kettle(New) </p>
        <p className="product-price">₹560</p>
      </div>
      {/* Add more product ads here */}
    </div>
  </div>
</div>


      {/* Additional Student-Friendly Content */}
      <div className="row student-friendly-content">
        <div className="col-12">
          <h2 className="text-primary">Why Choose EBUY Flea Market?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-icon">
                <i className="fas fa-gem"></i>
              </div>
              <h4>Unique Treasures</h4>
              <p>Discover items with character and stories to tell.</p>
            </div>
            <div className="col-md-4">
              <div className="feature-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h4>Affordable Deals</h4>
              <p>Score student-friendly bargains that won't break the bank.</p>
            </div>
            <div className="col-md-4">
              <div className="feature-icon">
                <i className="fas fa-thumbs-up"></i>
              </div>
              <h4>Community Vibes</h4>
              <p>Join a vibrant student community of buyers and sellers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
