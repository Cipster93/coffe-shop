import React from "react";
import "../../styles/Section1.css";
import AnimatedText from "./AnimatedText";

const Section1 = () => {
  return (
    <div className="section1">
      <legend className="legend">About us</legend>
      <div className="legend-container">
        <AnimatedText
          text="Our story began in a small coffee shop, born out of passion and a love for great coffee. What started as a simple idea — to serve high-quality coffee in a warm, welcoming space — has grown into a daily ritual for our loyal community. We source only premium beans from trusted farms and roast them with precision to unlock their full flavor. Blending tradition with innovation, our expert baristas craft every cup with care, using cutting-edge equipment to ensure consistency and quality. Come and enjoy your perfect moment of relaxation in one of our cozy locations. Whether you’re starting your day or taking a well-earned break, we’re here to make every sip memorable. It’s not just coffee. It’s your moment — and our mission.
          We've been crafting coffee since the very beginning — not just as a drink, but as an experience. Our passion for quality starts with carefully selected beans, sourced from the best farms around the world. We combine traditional roasting methods with state-of-the-art equipment to bring out the richest flavors in every cup. Whether it's a smooth espresso or a bold filter brew, we’re committed to delivering coffee that speaks for itself. This is more than just caffeine — it’s our craft, our ritual, and our promise to you.
          "
        />
      </div>
    </div>
  );
};

export default Section1;
