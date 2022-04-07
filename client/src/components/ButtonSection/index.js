import React from "react";
import {
  ButtonContainer,
  ButtonWrapper,
  ButtonElement,
} from "./ButtonElements";

const ButtonSection = ({ buttonLabel }) => {
  return (
    <>
      <ButtonContainer>
        <ButtonWrapper>
          <ButtonElement>{buttonLabel}</ButtonElement>
        </ButtonWrapper>
      </ButtonContainer>
    </>
  );
};

export default ButtonSection;
