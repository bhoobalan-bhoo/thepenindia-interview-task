import React from 'react';
import './Services.css'; 

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-left">
        <div className="fmcg-section">
          <div className="fmcg-header">
            <h3>FMCG</h3>
          </div>
          <div className="fmcg-content">
            <h4>Meet Your Customers' Needs Every Time</h4>
            <p>In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:</p>
            <ul>
              <li>Connect with the right people to make the right decisions even when you need to move quickly.</li>
              <li>Better understand not just what customers want and need, but why and how they make their decisions.</li>
              <li>Gain feedback at every phase of product and ad development, from concept to execution with agile testing.</li>
            </ul>
          </div>
          <button className="see-more-button">See More</button>
        </div>
      </div>
      <div className="services-right">
        <button className="service-button active">FMCG</button>
        <button className="service-button">Retail and Merchandising</button>
        <button className="service-button">Financial Services</button>
        <button className="service-button">Insurance</button>
        <button className="service-button">Investors</button>
        <button className="service-button">Media</button>
        <button className="service-button">Technology</button>
        <button className="service-button">Automotive</button>
        <button className="service-button">Advertising and Marketing</button>
        <button className="service-button">Human Resources</button>
        <button className="service-button">Education</button>
        <button className="service-button">Healthcare and Life Sciences</button>
      </div>
    </div>
  );
};

export default Services;