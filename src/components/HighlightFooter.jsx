import React from 'react';
import './HighlightFooter.css'; 

const HighlightFooter = () => {
  return (
    <div className="highlight-footer-container">
      <h2>Fresh Ideas to Help You Reach New Heights.</h2>
      <div className="highlight-cards-container">
        <div className="highlight-card">
          <img src="/assets/f1.png" alt="Highlight 1" /> 
          <div className="card-content">
            <div className="card-tag">Blog</div>
            <p>Gain feedback at every phase of product and ad development, from concept to execution with agile testing.</p>

          </div>
        </div>
        <div className="highlight-card">
          <img src="/assets/f2.png" alt="Highlight 2" /> 
          <div className="card-content">
            <div className="card-tag">Blog</div>
            <p>Gain feedback at every phase of product and ad development, from concept to execution with agile testing.</p>

          </div>
        </div>
        <div className="highlight-card">
          <img src="/assets/f3.png" alt="Highlight 3" /> 
          <div className="card-content">
            <div className="card-tag">Blog</div>
            <p>Gain feedback at every phase of product and ad development, from concept to execution with agile testing.</p>

          </div>
        </div>
        <div className="highlight-card">
          <img src="/assets/f4.png" alt="Highlight 4" /> 
          <div className="card-content">
            <div className="card-tag">Blog</div>
            <p>Gain feedback at every phase of product and ad development, from concept to execution with agile testing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightFooter;