import React from 'react';
import Slider from 'react-slick';
import './LandingPage.css';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const LandingPage = () => {
  const images = [
    'fourth.jpg',
    'fifth.jpg',
    'second.avif',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <div id="home" className="carousel-section">
        <h1>Welcome to Mobile Store</h1>
        <div className="carousel-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Mobile ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
        <button className="buy-button">Buy Now</button>
      </div>
      <div id="services" className="services-section">
        <h2>Our Services</h2>
        <p>We offer the best mobile phones at the most competitive prices.</p>
        <p>Our services include fast delivery, 24/7 customer support, and a 30-day return policy.</p>
      </div>
      <div id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@mobilestore.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Mobile St, Tech City</p>
      </div>
    </div>
  );
};

export default LandingPage;
