import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import HourglassAnimation from '../../public/Hourglass Loading.json';
import '../styles/ContactStyles/Contact.css';

const ContactView = () => {
  const [stage, setStage] = useState('form');
  const [animationCount, setAnimationCount] = useState(0);
  const navigate = useNavigate();
  const lottieRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    setStage('message');
  };

  useEffect(() => {
    if (stage === 'message') {
      const timer1 = setTimeout(() => {
        setStage('coffee');
        setAnimationCount(0);
      }, 2000);
      return () => clearTimeout(timer1);
    }

    if (stage === 'coffee' && animationCount >= 3) {
      const timer2 = setTimeout(() => {
        navigate('/menu');
      }, 500);
      return () => clearTimeout(timer2);
    }
  }, [stage, animationCount, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStage('message');
  };


  return (
    <div className="contact-view">
      <h2>Let's Get in Touch</h2>

      {stage === 'form' && (
        <>
          <div className="contact-info">
            <div><strong>Address:</strong> Str. Coffee nr. 10</div>
            <div><strong>Phone:</strong> <a href="tel:+40712345678">+40 712 345 678</a></div>
            <div><strong>Email:</strong> <a href="mailto:contact@coffeeshop.ro">contact@coffeeshop.ro</a></div>
            <div><strong>Hours:</strong> Mon–Sun: 8:00 – 22:00</div>
          </div>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={5} required />
            <button type="submit">Send Message</button>
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
        <div
          className="thank-you-message"
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            color: '#e7b98b'
          }}
        >
          Thank you for your message,<br />shall we drink a coffee?
        </div>
      )}

      {stage === 'coffee' && (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Lottie
            lottieRef={lottieRef}
            animationData={HourglassAnimation}
            style={{ width: '200px', height: '200px', margin: '0 auto' }}
            loop={false}
            autoplay={true}
            onComplete={() => {
              setAnimationCount(prev => {
                const next = prev + 1;
                if (next < 3) {
                  // Repornește animația
                  lottieRef.current?.goToAndPlay(0, true);
                }
                return next;
              });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ContactView;
