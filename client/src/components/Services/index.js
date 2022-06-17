import React from "react";
import Icon1 from "../../images/png-1.png";
import Icon2 from "../../images/png-2.png";
import Icon3 from "../../images/png-3.png";
// import {
//   ServicesContainer,
//   ServicesH1,
//   ServicesWrapper,
//   ServicesCard,
//   ServicesIcon,
//   ServicesH2,
//   ServicesP,
// } from "./ServicesElements";

import "../../styles/ServicesElements.css";
const Services = () => {
  return (
    <>
      <div className="ServicesContainer">
        <h1 className="ServicesH1">Our Services</h1>
        <div className="ServicesWrapper">
          <div className="ServicesCard">
            <img className="ServicesIcon" src={Icon1} alt="" />
            <h2 className="ServicesH2">Reduce expenses</h2>
            <p className="ServicesP">
              We help reduce your feees and increase your overall revenue
            </p>
          </div>
          <div className="ServicesCard">
            <img className="ServicesIcon" src={Icon2} alt="" />
            <h2 className="ServicesH2">Virtual Offices</h2>
            <p className="ServicesP">
              You can access our platform online anywhere in the world
            </p>
          </div>
          <div className="ServicesCard">
            <img className="ServicesIcon" src={Icon3} alt="" />
            <h2 className="ServicesH2">Premium Benefits</h2>
            <p className="ServicesP">
              Unlock our special membership card that return 5% cash back
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
