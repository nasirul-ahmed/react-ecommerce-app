import React from "react";
import BloodShed from "../resources/svg1.svg"
const About = () => {
  return (
    <>
      <div className="bg-black py-4" style={{ height: "100vh" }}>
        <div className="about-us text-center text-xl text-white ">ABOUT US</div>
        <div className="about-container container h-200 bg-blue">
          <button class="bloody-click">Bloody click</button>

          <img src={BloodShed}/>
        </div>
      </div>
    </>
  );
};

export default About;
