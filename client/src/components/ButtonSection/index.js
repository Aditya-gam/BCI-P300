import React from "react";
import { ButtonContainer, ButtonElement } from "./ButtonElements";

import "../../styles/ButtonElements.css";

const ButtonSection = ({ buttonLabel }) => {
  return (
    <div>
      <ButtonContainer>
        <div className="ButtonWrapper">
          <ButtonElement>{buttonLabel}</ButtonElement>
        </div>
      </ButtonContainer>
    </div>
  );
};

export default ButtonSection;
