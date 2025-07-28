import React from "react";
import { FaStar } from "react-icons/fa";
import "../../styles/HomePageStyles/Section2.css"

const Section2 = () => {
  return (
    <div className="section2">
      <h1 className="section2-title">
        <FaStar className="title-icon" />
        Our <span>Stars</span>
      </h1>
      <div className="coffeContainer espressoContainer">
        <div className="imageWrapper">
          <img src="/esspreso.jpg" alt="espresso" />
        </div>
        <div className="coffeDetails">
          <h1 className="coffee-title">
            <u>Espresso</u>
            <span className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="title-icons" />
              ))}
            </span>
          </h1>
          <p>
            A bold and rich shot of pure coffee, perfect for a quick energy
            boost. Espresso is the foundation of many coffee drinks, known for
            its intense flavor, velvety texture, and signature crema on top.
            It’s made by forcing hot water through finely ground coffee under
            high pressure, resulting in a concentrated and aromatic shot.
            <br />
            <br />
            True espresso highlights the natural oils and complex flavors of the
            beans — from nutty and chocolatey notes to fruity and floral
            undertones. It’s the go-to choice for purists who value quality,
            balance, and strength in every sip. Whether enjoyed on its own or
            used as a base for cappuccinos, lattes, or macchiatos, a great
            espresso is the heart of every coffee experience.
          </p>
        </div>
      </div>
      <div className="coffeContainer cappuccinoContainer">
        <div className="coffeDetails">
          <h1 className="coffee-title">
            <u>Cappuccino</u>
            <span className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="title-icons" />
              ))}
            </span>
          </h1>
          <p>
            Cappuccino is a timeless classic that balances bold espresso with
            the smooth sweetness of steamed milk and a generous layer of velvety
            milk foam on top. Traditionally served in smaller cups, it delivers
            a rich taste with a creamy finish, making it one of the most beloved
            coffee drinks worldwide.
            <br />
            <br />
            The secret to a perfect cappuccino lies in the ratio — one-third
            espresso, one-third steamed milk, and one-third foam. This creates a
            harmony of textures: intense, smooth, and airy in every sip.
            <br />
            <br />
            Ideal for mornings or relaxed moments throughout the day, cappuccino
            offers both energy and comfort in one elegant cup. Whether enjoyed
            plain or with a sprinkle of cocoa or cinnamon, it’s a true symbol of
            coffee craftsmanship.
          </p>
        </div>
        <div className="imageWrapper">
          <img src="/cappuccino.jpg" alt="cappuccino" />
        </div>
      </div>
      <div className="coffeContainer espressoContainer">
        <div className="imageWrapper">
          <img src="/americano.jpg" alt="americano" />
        </div>
        <div className="coffeDetails">
          <h1 className="coffee-title">
            <u>Americano</u>
            <span className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="title-icons" />
              ))}
            </span>
          </h1>
          <p>
            Americano is a smooth and balanced coffee drink created by adding
            hot water to a shot of espresso. This process preserves the bold
            aroma and flavor of espresso while softening its intensity,
            resulting in a longer, more mellow coffee experience.
            <br />
            <br />
            Its origins date back to World War II, when American soldiers in
            Europe diluted espresso with hot water to resemble the drip coffee
            they were used to back home. The result was a satisfying and
            approachable cup that retained the character of espresso without its
            concentrated strength.
            <br />
            <br />
            Ideal for those who enjoy the depth of espresso but prefer a lighter
            body, the Americano is perfect for slow mornings, work sessions, or
            any moment that calls for a calm yet flavorful coffee break.
          </p>
        </div>
      </div>
      <div className="coffeContainer cappuccinoContainer">
        <div className="coffeDetails">
          <h1 className="coffee-title">
            <u>Latte Macchiato</u>
            <span className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="title-icons" />
              ))}
            </span>
          </h1>
          <p>
            Latte Macchiato is a beautifully layered coffee drink that
            highlights steamed milk with a bold espresso "stain" on top. Unlike
            a regular latte, the espresso is poured slowly over the milk,
            creating a striking visual contrast and a delicate flavor balance.
            <br />
            <br />
            This drink is characterized by its creamy texture and smooth
            sweetness, with the espresso adding just the right amount of
            intensity. Served in tall glasses, Latte Macchiato is as much a
            treat for the eyes as it is for the palate.
            <br />
            <br />
            Perfect for those who enjoy a milk-forward coffee with a gentle
            espresso kick, Latte Macchiato is ideal for mid-morning indulgence
            or a cozy afternoon break. Whether plain or flavored with syrups, it
            offers a luxurious coffee experience.
          </p>
        </div>
        <div className="imageWrapper">
          <img src="/LatteM.jpg" alt="LatteM" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
