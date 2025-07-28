import React from 'react'
import { FaCoffee, FaQuoteLeft } from 'react-icons/fa'
import "../../styles/HomePageStyles/Section3.css"
import testimonials from '../../data/testimonials'

const Section3 = () => {


  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaCoffee
        key={index}
        className={index < rating ? "star filled" : "star"}
      />
    ))
  }

  return (
    <div className="section3">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-left">
              <img src={testimonial.image} alt={testimonial.name} className="customer-photo" />
              <h4 className="customer-name">{testimonial.name}</h4>
            </div>
            <div className="testimonial-right">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">"{testimonial.comment}"</p>
              <div className="rating">{renderStars(testimonial.rating)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section3
