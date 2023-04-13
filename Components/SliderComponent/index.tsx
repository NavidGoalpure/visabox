import { deviceMin } from "Consts/device";
import React from "react";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Headline6Style } from "Styles/Typo";

interface Props {
  className?: string;
  end: number;
  currentStep: number;
}

function getSmartWidth(currentStep: number, end: number): string {
  const percent = 100 / end;
  const currentPercentage = percent * currentStep;
  return currentPercentage.toString() + "%";
}
const Slider: React.FC<Props> = ({ className, end, currentStep }) => {
  return (
    <Container className={className}>
      <Wrapper>
        <Lines>
          <BlankRow />
          <FillRow width={getSmartWidth(currentStep, end)} />
        </Lines>
        <Numbers>{`${currentStep}/${end}`}</Numbers>
      </Wrapper>
    </Container>
  );
};
export default Slider;
const numberTheme = theme("mode", {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: white;
  `,
});

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  z-index: 1;
  height: 3.25rem;
  @media ${deviceMin.mobileL} {
    height: 4rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 20.5rem;
  @media ${deviceMin.tabletL} {
    width: 25rem;
  }
`;
const BlankRow = styled.div`
  height: 4px;
  width: 100%;
  background: var(--color-gray12);
  border-radius: 400px 0px 0px 400px;
`;
const FillRow = styled.div<{ width: string }>`
  height: 4px;
  width: ${({ width }) => width};
  background: var(--color-primary4);
  border-radius: 400px 0px 0px 400px;
  margin-top: -4px;
  transition: all 1s ease-out;
`;
const Lines = styled.div`
  width: 90%;
`;
const Numbers = styled.h5`
  ${numberTheme};
  ${Headline6Style};
  font-weight: 600;
  line-height: 16px;
  margin-left: 4px;
  margin-bottom: 2px;
`;
