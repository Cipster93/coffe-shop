import React from 'react'
import { FaCoffee, FaQuoteLeft } from 'react-icons/fa'
import "../../styles/Section3.css"

const Section3 = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Johnson",
      rating: 5,
      comment: "Best coffee in world! The atmosphere is cozy and the baristas are incredibly skilled. I come here every morning before work.",
      image: "./maria.jpg"
    },
    {
      id: 2,
      name: "Alexandru Ionescu",
      rating: 4,
      comment: "Amazing place for meetings and work. Great WiFi, comfortable seating, and their cappuccino is absolutely perfect!",
      image: "./alex.jpg"
    },
    {
      id: 3,
      name: "Sophia Bennett",
      rating: 5,
      comment: "I've tried many coffee shops, but this one stands out. The quality is consistent and the staff always remembers my order.",
      image: "./car.jpg"
    },
    {
      id: 4,
      name: "Daniel Cooper",
      rating: 4,
      comment: "Great ambiance and fast service. I recommend the espresso — very flavorful and balanced!",
      image: "./cat.jpg"
    },
    {
      id: 5,
      name: "Ioana Marinescu",
      rating: 5,
      comment: "Their flat white is just perfect! Beautiful latte art and cozy interior design.",
      image: "./ioana.jpg"
    }
  ]

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
