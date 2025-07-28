import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';
import '../styles/ContactStyles/Contact.css';

const ContactView = () => {
  const [stage, setStage] = useState('form');
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setStage('message');
  };

  useEffect(() => {
    if (stage === 'message') {
      const timer1 = setTimeout(() => {
        setStage('coffee');
      }, 2000);

      return () => clearTimeout(timer1);
    }
    if (stage === 'coffee') {
      const timer2 = setTimeout(() => {
        navigate('/menu');
      }, 2000);

      return () => clearTimeout(timer2);
    }
  }, [stage, navigate]);

  return (
    <div className="contact-view">
      <h2>Let's Get in Touch</h2>

      {stage === 'form' && (
        <>
          <div className="contact-info">
            <div><strong>Address:</strong> Str. Coffee nr. 10, București</div>
            <div><strong>Phone:</strong> <a href="tel:+40712345678">+40 712 345 678</a></div>
            <div><strong>Email:</strong> <a href="mailto:contact@coffeeshop.ro">contact@coffeeshop.ro</a></div>
            <div><strong>Hours:</strong> Mon–Sun: 8:00 – 22:00</div>
          </div>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows={5} />
            <button type="submit" onClick={handleClick}>Send Message</button>
          </form>

          <div className="map-container">
            <iframe
              title="Coffee Shop Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=26.096306,44.439663,26.106306,44.449663&amp;layer=mapnik"
              loading="lazy"
            ></iframe>
          </div>
        </>
      )}

      {stage === 'message' && (
        <div className="thank-you-message" style={{ textAlign: 'center', fontSize: '1.5rem', color: '#e7b98b' }}>
          Thank you for your message,<br />shall we drink a coffee?
        </div>
      )}

      {stage === 'coffee' && (
        <div style={{ textAlign: 'center', fontSize: '4rem', color: '#e7b98b', marginTop: '30px' }}>
          <FaCoffee className='faCoffe' />
        </div>
      )}
    </div>
  );
};


export default ContactView;
