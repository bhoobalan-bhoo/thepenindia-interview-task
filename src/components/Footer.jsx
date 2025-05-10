import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>
            <img src="/assets/thought-metrics.png" alt="Thought Metrics" className="logo-icon" /> 
          </h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkedin.png" alt="LinkedIn" /> 
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/x.png" alt="Xing" /> 
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/v.png" alt="Vimeo" /> 
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Research Methods</h3>
          <ul>
            <li>Qualitative Research</li>
            <li>Quantitative Research</li>
            <li>Fieldwork</li>
            <li>Surveys</li>
            <li>Focus Group Discussions</li>
            <li>Quality checks</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Capabilities</h3>
          <ul>
            <li>Branding and Advertising Communication</li>
            <li>Market Opportunity Research</li>
            <li>Product Research</li>
            <li>Consumer Research and Segmentation</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Privacy</li>
            <li>AI Policy</li>
            <li>Business Conduct and Ethics</li>
            <li>Site Disclaimer</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li>Join Our Panel</li>
            <li>Request a Bid</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2025. All Rights Reserved.</p>
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <img src="/assets/up-arrow.png" alt="Scroll to Top" /> 
        </button>
      </div>
    </div>
  );
};

export default Footer;