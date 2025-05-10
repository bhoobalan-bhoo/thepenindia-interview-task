import React from 'react';
import './MarketInsights.css';
import InfoCard from './InfoCard';

// Images
import v1 from '../../public/assets/v1.png';
import v2 from '../../public/assets/v2.png';
import v3 from '../../public/assets/v3.png';
import v4 from '../../public/assets/v4.png';
import heroImage from '../../public/assets/gorgeous-woman.png';

const cardData = [
  {
    icon: <img src={v1} alt="Audience" className="info-card-icon-img" />,
    title: 'Audience',
    description: 'Tap into a wide panel of respondents for any of your market research needs.',
  },
  {
    icon: <img src={v2} alt="Qualitative Research" className="info-card-icon-img" />,
    title: 'Qualitative Research',
    description: 'Tap into a wide panel of respondents for any of your market research needs.',
  },
  {
    icon: <img src={v3} alt="Quantitative Research" className="info-card-icon-img" />,
    title: 'Quantitative Research',
    description: 'Tap into a wide panel of respondents for any of your market research needs.',
  },
  {
    icon: <img src={v4} alt="Quality Checks" className="info-card-icon-img" />,
    title: 'Quality Checks',
    description: 'Tap into a wide panel of respondents for any of your market research needs.',
  },
];

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        
        <div className="hero-section">
          <div className="hero-left">
            <img src={heroImage} alt="Woman with phone" className="hero-image" />
          </div>
          
          <div className="hero-right">
            <div className="highlight-pill">Unlock in-depth market insights</div>
            <h1 className="hero-title">
              Everything<br />
              You Need, All<br />
              in One Place
            </h1>
            <p className="hero-description">
              Harness our comprehensive solutions to unearth valuable
              insights that drive innovation, improve customer connections,
              and boost efficiency
            </p>
          </div>
        </div>

        
        <div className="cards-container">
          {cardData.map((card, idx) => (
            <InfoCard
              key={idx}
              icon={card.icon}
              title={card.title}
              description={card.description}
              onClick={() => console.log(`Clicked ${card.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;