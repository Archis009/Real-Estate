import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Home.css';
import { Search } from 'lucide-react';
import { MOCK_PROPERTIES } from '../data/properties';

const Home = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filteredProperties = filter === 'All' 
    ? MOCK_PROPERTIES 
    : MOCK_PROPERTIES.filter(p => p.type === filter);

  const handleBookNow = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-in">
          <p className="hero-subtitle text-gold">• INDIA'S PREMIER REAL ESTATE PLATFORM</p>
          <h1 className="hero-title">Sky Heights<br/>Avenue</h1>
          <p className="hero-tagline">Book Your Dream Home</p>
          
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search by city, location, or property type..." />
            <button className="filter-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="stats-strip">
        <div className="container stats-container">
          <div className="stat-item">
            <h3 className="text-gold">2,400+</h3>
            <p>Properties Listed</p>
          </div>
          <div className="stat-item">
            <h3 className="text-gold">48</h3>
            <p>Cities Covered</p>
          </div>
          <div className="stat-item">
            <h3 className="text-gold">18,900+</h3>
            <p>Homes Booked</p>
          </div>
          <div className="stat-item">
            <h3 className="text-gold">14,200+</h3>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </section>

      {/* Property Listing Section */}
      <section className="property-listing container fade-in">
        <div className="listing-header">
          <div className="filter-tabs">
            {['All', 'Residential', 'Commercial', 'Industrial'].map(tab => (
              <button 
                key={tab} 
                className={`tab-btn ${filter === tab ? 'active' : ''}`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="property-count">
            {filteredProperties.length} properties found
          </div>
        </div>

        <div className="property-grid">
          {filteredProperties.map(property => (
            <div key={property.id} className="property-card">
              <div className="card-img-wrapper">
                <span className="property-tag">{property.tag}</span>
                <img src={property.image} alt={property.name} className="property-img" />
              </div>
              <div className="card-content">
                <h3 className="property-name">{property.name}</h3>
                <p className="property-location">📍 {property.location}</p>
                <div className="property-details">
                  <span className="property-type">{property.type}</span>
                  <span className="property-price text-gold">Starting from {property.price}</span>
                </div>
                <button className="btn btn-primary w-full mt-4" onClick={() => handleBookNow(property.id)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="home-footer container fade-in" style={{ padding: '4rem 1.5rem', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', marginTop: '2rem' }}>
        <h2 className="text-gold" style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>About Sky Heights Avenue</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontSize: '1.1rem' }}>
          Sky Heights Avenue is a premium residential project located on Sarjapur Road, Bangalore. The project offers spacious apartments, modern lifestyle amenities, excellent road connectivity, and a peaceful living environment for families and working professionals.
        </p>
      </footer>
    </>
  );
};

export default Home;
