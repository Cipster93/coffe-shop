import React from "react";
import Section1 from "../components/homeComponents/Section1";
import Section2 from "../components/homeComponents/Section2";
import Section3 from "../components/homeComponents/Section3";
import Section4 from "../components/homeComponents/Section4";

const HomeView = () => {
  return (
    <div className="home-view">
      <div>
        <Section1 />
      </div>
      <div>
        <Section2 />
      </div>
      <div>
        <Section3 />
      </div>
      <div>
        <Section4 />
      </div>
    </div>
  );
};
export default HomeView;
