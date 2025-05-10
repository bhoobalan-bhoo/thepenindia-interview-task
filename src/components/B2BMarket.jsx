import React from 'react';
import './B2BMarket.css';

const B2BMarket = () => {
  const doorIcon = '/assets/door-icon.png';
  const wavesIcon = '/assets/circle-curve.png';
  const cubesIcon = '/assets/box.png';
  
  return (
    <div className="b2b-container">
      <div className="b2b-header">
        <h1>We're a full-service B2B market research thought partner committed to strengthening your strategies with deep, subject matter expertise.</h1>
      </div>
      
      <div className="services-grid">
        <div className="service-card green">
          <div className="service-content">
            <h2>Branding and Advertising Communication</h2>
            <p>
              We help brands resonate. From brand perception and awareness to message testing and ad effectiveness, our research empowers you to communicate with clarity and impact. Backed by qualitative insights and robust tracking, we ensure your brand voice connects with the right audience.
            </p>
            <div className="arrow-link">
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="decoration green-shape"></div>
        </div>
        
        <div className="service-card purple">
          <div className="service-content">
            <h2>Market Opportunity Research</h2>
            <p>
              Find your edge before you enter. Our market opportunity research identifies whitespace, tests feasibility, and maps competitive dynamics. Whether you're planning a launch or exploring new segments, we provide the insights to make bold, informed moves.
            </p>
            <div className="arrow-link">
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="decoration purple-illustration">
            <img src={doorIcon} alt="Door illustration" />
          </div>
        </div>
        
        <div className="service-card gray">
          <div className="service-content">
            <h2>Customer Research and Segmentation</h2>
            <p>
              Know who you're talking to — and why it matters. We uncover the motivations, behaviors, and needs of your customers, then segment them meaningfully to guide strategy. Our blend of qualitative and quantitative approaches ensures depth, accuracy, and actionable clarity.
            </p>
            <div className="arrow-link">
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="decoration gray-illustration">
            <img src={wavesIcon} alt="Waves illustration" />
          </div>
        </div>
        
        <div className="service-card pink">
          <div className="service-content">
            <h2>Product Research</h2>
            <p>
              Build products that solve real problems. From concept testing and feature prioritization to in-use feedback, we support every phase of product development. Our insights help you align innovation with user expectations — minimizing risk and maximizing relevance.
            </p>
            <div className="arrow-link">
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="decoration pink-illustration">
            <img src={cubesIcon} alt="Cubes illustration" className="cubes-icon" />
            <img src={cubesIcon} alt="Cubes illustration" className="cubes-icon-bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2BMarket;
