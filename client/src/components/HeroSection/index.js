import React, { useState } from "react";
import Video from "../../videos/video3.mp4";
import { ButtonS } from "../ButtonElements";
import { ArrowForward, ArrowRight } from "./HeroElements";

import "../../styles/HeroElements.css";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div>
      <div className="HeroContainer" id="Home">
        <div className="HeroBg">
          <video className="VideoBg" autoPlay loop muted>
            <source src={Video} type="video/mp4"></source>
          </video>
        </div>
        <div className="HeroContent">
          <h1 className="title-text HeroH1">BCI P300</h1>
          <p className="HeroP">
            A Brain-computer Interface (BCI) can be used as a neurofeedback
            training tool to improve cognitive performance.
          </p>
          <div className="HeroBtnWrapper">
            <div className="get-started">
              <ButtonS
                to="signup"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                spy={true}
                exact="true"
                offset={-80}
                activeClassName="active"
              >
                Get started {hover ? <ArrowForward /> : <ArrowRight />}
              </ButtonS>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
