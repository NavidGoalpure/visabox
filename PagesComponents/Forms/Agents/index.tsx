import Slider from "Components/SliderComponent";
import { deviceMin } from "Consts/device";
import { useState } from "react";
import styled from "styled-components";

import SmartSteps from "./Steps/SmartStep";
import { WizardContextProvider } from "./Contexts/Wizard/Context";
function Content() {
  return (
    <Container>
      <WizardContextProvider>
        <SmartSteps />
      </WizardContextProvider>
    </Container>
  );
}
export default Content;
const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 1rem;
  align-items: center;
  margin: 0rem 0 3rem;
  position: relative;
  
`;
