import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MOCK_PROPERTIES } from '../data/properties';
import './Booking.css';

const AMENITIES_IMAGES = [
  { img: 'data:image/jpeg;base64,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', desc: 'Swimming Pool' },
  { img: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=600&q=80', desc: 'Indoor Games Room' },
  { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80', desc: 'Fitness Centre' },
  { img: 'https://images.unsplash.com/photo-1602014763155-76aa5a9eb0d0?auto=format&fit=crop&w=600&q=80', desc: 'Children\'s Play Area' },
  { img: 'https://images.unsplash.com/photo-1521111005118-202d603a1112?auto=format&fit=crop&w=600&q=80', desc: 'Landscaped Garden' },
  { img: 'https://images.unsplash.com/photo-1578345242488-883a8b2dfcd1?auto=format&fit=crop&w=600&q=80', desc: 'Multipurpose Hall' },
];

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    visitDate: '',
    timeSlot: '',
    unitType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [price, setPrice] = useState('');
  const [showModal, setShowModal] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  
  const property = MOCK_PROPERTIES.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (property && formData.unitType) {
      const unitIndex = property.unitTypes.indexOf(formData.unitType);
      if (unitIndex === 0) setPrice(property.price);
      else setPrice('Price on Request (Contact Sales)');
    } else {
      setPrice('');
    }
  }, [formData.unitType, property]);

  if (!property) return <div className="container mt-4">Property not found.</div>;

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name';
    if (!formData.email.trim()) newErrors.email = 'Please enter your email';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    if (!formData.visitDate) newErrors.visitDate = 'Please select visit date';
    if (!formData.timeSlot) newErrors.timeSlot = 'Please select preferred time slot';
    if (!formData.unitType) newErrors.unitType = 'Please select interested unit type';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowModal(true);
    }
  };

  return (
    <>
      <Navbar />
      
      <section className="image-gallery-section">
        <div className="gallery-scroll">
          {AMENITIES_IMAGES.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.img} alt={item.desc} />
              <div className="gallery-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="container booking-container fade-in">
        <div className="content-grid">
        
          <div className="project-details">
            <h1 className="project-title text-gold">{property.name}</h1>
            <p className="project-tagline">Book Your Dream Home Visit Today</p>

            <div className="info-card">
              <h3>Project Information</h3>
              <ul className="info-list">
                <li><strong>Location:</strong> {property.location}</li>
                <li><strong>Property Type:</strong> {property.unitTypes.join(', ')}</li>
                <li><strong>Starting Price:</strong> {property.price}</li>
                <li><strong>Possession:</strong> {property.possession}</li>
                <li><strong>Developer:</strong> {property.developer}</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>About Project</h3>
              <p>{property.description}</p>
            </div>

            <div className="info-card">
              <h3>Amenities</h3>
              <ul className="amenities-list">
                <li>✓ Swimming Pool</li>
                <li>✓ Indoor Games Room</li>
                <li>✓ Fitness Centre</li>
                <li>✓ Children's Play Area</li>
                <li>✓ Senior Citizen Zone</li>
                <li>✓ Landscaped Garden</li>
                <li>✓ Multipurpose Hall</li>
                <li>✓ Security and CCTV</li>
              </ul>
            </div>
          </div>

          <div className="booking-form-wrapper">
            <h3 className="form-title">Site Visit Booking Form</h3>
            <form onSubmit={handleSubmit} className="booking-form">
              
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label>Preferred Visit Date</label>
                <input type="date" name="visitDate" min={today} value={formData.visitDate} onChange={handleChange} />
                {errors.visitDate && <span className="error-text">{errors.visitDate}</span>}
              </div>

              <div className="form-group">
                <label>Preferred Time Slot</label>
                <select name="timeSlot" value={formData.timeSlot} onChange={handleChange}>
                  <option value="">Select Time Slot</option>
                  <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                  <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                  <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                </select>
                {errors.timeSlot && <span className="error-text">{errors.timeSlot}</span>}
              </div>

              <div className="form-group">
                <label>Interested Unit Type</label>
                <select name="unitType" value={formData.unitType} onChange={handleChange}>
                  <option value="">Select Unit Type</option>
                  {property.unitTypes.map(unit => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
                {errors.unitType && <span className="error-text">{errors.unitType}</span>}
                {price && <div className="price-display text-gold mt-2">Approximate Price: {price}</div>}
              </div>

              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea name="message" rows="3" value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-4">Book Site Visit</button>
            </form>
          </div>

        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-gold mb-4">Booking Confirmed</h2>
            <p className="mb-4 text-success">Your site visit has been booked successfully. Our sales team will contact you soon.</p>
            
            <div className="visit-summary text-left">
              <h4>Visit Summary</h4>
              <p><strong>Name:</strong> {formData.fullName}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Date:</strong> {formData.visitDate}</p>
              <p><strong>Time:</strong> {formData.timeSlot}</p>
              <p><strong>Unit:</strong> {formData.unitType}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
