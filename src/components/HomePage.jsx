import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [researchMethodsOpen, setResearchMethodsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const toggleIndustries = () => {
    setIndustriesOpen(!industriesOpen);
    setCapabilitiesOpen(false);
    setResourcesOpen(false);
    setResearchMethodsOpen(false);
  };

  const toggleCapabilities = () => {
    setCapabilitiesOpen(!capabilitiesOpen);
    setIndustriesOpen(false);
    setResourcesOpen(false);
    setResearchMethodsOpen(false);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
    setIndustriesOpen(false);
    setCapabilitiesOpen(false);
    setResearchMethodsOpen(false);
  };

  const toggleResearchMethods = () => {
    setResearchMethodsOpen(!researchMethodsOpen);
    setIndustriesOpen(false);
    setCapabilitiesOpen(false);
    setResourcesOpen(false);
  };

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide(prev => (prev === 3 ? 1 : prev + 1));
  }, 1500);

  return () => clearInterval(interval); 
}, []);

  return (
    <div className="home-page">
     
      <nav className="navbar">
        <div className="nav-items">
          <div className="dropdown">
            <button 
              className={`dropdown-btn ${researchMethodsOpen ? 'active' : ''}`}
              onClick={toggleResearchMethods}
            >
              Research Methods {researchMethodsOpen ? '▲' : '▼'}
            </button>
          </div>
          <div className="dropdown">
            <button 
              className={`dropdown-btn ${capabilitiesOpen ? 'active' : ''}`}
              onClick={toggleCapabilities}
            >
              Capabilities {capabilitiesOpen ? '▲' : '▼'}
            </button>
          </div>
          <div className="dropdown">
            <button 
              className={`dropdown-btn ${industriesOpen ? 'active' : ''}`}
              onClick={toggleIndustries}
            >
              Industries {industriesOpen ? '▲' : '▼'}
            </button>
          </div>
          <div className="dropdown">
            <button 
              className={`dropdown-btn ${resourcesOpen ? 'active' : ''}`}
              onClick={toggleResources}
            >
              Resources {resourcesOpen ? '▲' : '▼'}
            </button>
          </div>
        </div>
        <div className="nav-actions">
          <button className="btn-outline">Start Your Research</button>
          <button className="btn-filled">Join a Paid Focus Group</button>
        </div>
      </nav>

     
      {researchMethodsOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-container">
            <div className="dropdown-column">
              <div className="dropdown-overview">
                <h3>Understand our approach to B2B and B2C research.</h3>
                <button className="overview-btn">OVERVIEW</button>
              </div>
            </div>
            <div className="dropdown-column">
              <div className="dropdown-item">Quantitative Research</div>
              <div className="dropdown-item">Qualitative Research</div>
              <div className="dropdown-item">Recruitment and Fieldwork</div>
            </div>
            <div className="dropdown-column">
              <div className="dropdown-item">Online and Offline Surveys</div>
              <div className="dropdown-item">Focus Group Discussions</div>
              <div className="dropdown-item">Quality Checks</div>
            </div>
          </div>
        </div>
      )}

     
      {capabilitiesOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-container">
            <div className="dropdown-column">
              <div className="dropdown-overview">
                <h3>Understand our approach to B2B and B2C research.</h3>
                <button className="overview-btn">OVERVIEW</button>
              </div>
            </div>
            <div className="dropdown-column">
              <h4>Understanding and Advertising Communication</h4>
              <div className="dropdown-item">Brand Perception Research</div>
              <div className="dropdown-item">Brand Awareness Research</div>
              <div className="dropdown-item">Brand Tracking Research</div>
              <div className="dropdown-item">Message Testing</div>
              <div className="dropdown-item">Advertising Effectiveness Research</div>
            </div>
            <div className="dropdown-column">
              <h4>Market Opportunity Research</h4>
              <div className="dropdown-item">Go-to-market Research</div>
              <div className="dropdown-item">Market Feasibility Study</div>
              <div className="dropdown-item">Market Entry Research</div>
              <div className="dropdown-item">Competitive Research</div>
            </div>
            <div className="dropdown-column">
              <h4>Product Research</h4>
              <div className="dropdown-item">Concept Testing Research</div>
              <div className="dropdown-item">Conjoint Analysis</div>
              <div className="dropdown-item">MaxDiff Analysis</div>
              <div className="dropdown-item">Product Validation Testing</div>
              <div className="dropdown-item">UI/UX Research</div>
            </div>
            <div className="dropdown-column">
              <h4>Customer Research and Segmentation</h4>
              <div className="dropdown-item">Customer Journey Research</div>
              <div className="dropdown-item">Customer Loyalty Research</div>
              <div className="dropdown-item">Customer Satisfaction Research</div>
              <div className="dropdown-item">Persona Research</div>
              <div className="dropdown-item">Pricing Research</div>
            </div>
          </div>
        </div>
      )}

     
      {industriesOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-container">
            <div className="dropdown-column">
              <div className="dropdown-overview">
                <h3>Understand our approach to B2B and B2C research.</h3>
                <button className="overview-btn">OVERVIEW</button>
              </div>
            </div>
            <div className="dropdown-column">
              <div className="dropdown-item">FMCG</div>
              <div className="dropdown-item">Retail and Merchandising</div>
              <div className="dropdown-item">Healthcare and Life Sciences</div>
              <div className="dropdown-item">Advertising and Marketing</div>
            </div>
            <div className="dropdown-column">
              <div className="dropdown-item">Financial Services and Institutions</div>
              <div className="dropdown-item">Insurance</div>
              <div className="dropdown-item">Investors</div>
              <div className="dropdown-item">Automotive</div>
            </div>
            <div className="dropdown-column">
              <div className="dropdown-item">Education</div>
              <div className="dropdown-item">Human Resources</div>
              <div className="dropdown-item">Media and Internet Publishers</div>
              <div className="dropdown-item">Technology</div>
            </div>
          </div>
        </div>
      )}

     
      {resourcesOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-container">
            <div className="dropdown-column">
              <div className="dropdown-overview">
                <h3>Understand our approach to B2B and B2C research.</h3>
                <button className="overview-btn">OVERVIEW</button>
              </div>
            </div>
            <div className="dropdown-column">
              <div className="dropdown-item">Articles</div>
              <div className="dropdown-item">Reports</div>
              <div className="dropdown-item">Case Studies</div>
              <div className="dropdown-item">Webinars</div>
            </div>
          </div>
        </div>
      )}

     
      <main>
        <div className="main-content">
          <div className="images-container">
            {currentSlide === 1 && (
              <div className="image-slice">
                <img src="/assets/city.png" alt="City buildings at night" />
              </div>
            )}
            {currentSlide === 2 && (
              <div className="image-slice">
                <img src="/assets/pink-np.png" alt="City buildings illuminated" />
              </div>
            )}
            {currentSlide === 3 && (
              <div className="image-slice">
                <img src="/assets/curve-np.png" alt="City traffic with red light trails" />
              </div>
            )}
          </div>

          
          <div className="headline-container">
          <h1 className="headline">
            {currentSlide === 1 && <>A Fresh Approach to Market Research<span className="red-dot">.</span></>}
            {currentSlide === 2 && <>From Data to Decisions:<br />Tailored research as unique as your brand<span className="red-dot">.</span></>}
            {currentSlide === 3 && <>Your customers don't fit in a box,<br />and neither does our approach<span className="red-dot">.</span></>}
          </h1>

          </div>
        </div>

       
        <div className="slider-dots">
          <span className={`dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)}></span>
          <span className={`dot ${currentSlide === 2 ? 'active' : ''}`} onClick={() => setCurrentSlide(2)}></span>
          <span className={`dot ${currentSlide === 3 ? 'active' : ''}`} onClick={() => setCurrentSlide(3)}></span>
        </div>
      </main>
    </div>
  );
};

export default HomePage;