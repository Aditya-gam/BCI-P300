import React, { useState } from "react";
import Video from "../../videos/video3.mp4";
import { ButtonS } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroContent,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div>
      <HeroContainer id="Home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1 className="title-text">BCI P300</HeroH1>
          <HeroP>
            A Brain-computer Interface (BCI) can be used as a neurofeedback
            training tool to improve cognitive performance.
          </HeroP>
          <HeroBtnWrapper>
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
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
