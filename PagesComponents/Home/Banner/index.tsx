import MaraBgAnimation from "Components/MaraBgAnimation";
import { PrimaryButton } from "Elements/Button/Primary";
import useDevice from "Hooks/useDevice";
import { HTMLAttributes, useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Headline3Style } from "Styles/Typo";

const Banner: React.FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <Container>
      {" "}
      <MaraBgAnimation>
        <Wrapper>
          <Title>
            برای شروع سفر <span>مهاجرتی</span> خود آماده اید؟ اکنون فرم ما را پر
            کنید تا وکلای مهاجرت با شما به صورت <span>رایگان</span> با شما در
            ارتباط باشند.
          </Title>{" "}
          <Button icon={<NextIcon />}>پر کردن فرم</Button>
        </Wrapper>
      </MaraBgAnimation>
    </Container>
  );
};
export default Banner;
const NextIconDirectionStyle = theme("languageDirection", {
  ltr: css``,
  rtl: css`
    transform: rotate(180deg);
  `,
});
const Container = styled.div`
  background: var(--color-primary1);
  text-align: center;
  position: relative;
  top: -2rem;
  left: 0;
  width: 100%;
  height: max-content;
  z-index:0;
  overflow: hidden;
  :before {
    content: "";
    width: 20%;
    height: 50%;
    background: var(--color-primary3);
    opacity: 0.5;
    filter: blur(100px);
    transform: rotate(180deg);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  }
  :after {
    content: "";
    width: 20%;
    height: 50%;
    background: var(--color-primary3);
    opacity: 0.5;
    filter: blur(100px);
    transform: rotate(180deg);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
  }
`;
const Wrapper = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  backdrop-filter: blur(5px);
`;
const Title = styled.h2`
  ${Headline3Style};
  color: var(--color-gray13);
  span {
    color: var(--color-primary5);
  }
`;
const Button = styled(PrimaryButton)``;
export const NextIcon = styled(MdNavigateNext)`
  ${NextIconDirectionStyle};
  width: auto;
  height: 1.5rem;
  margin-bottom: 0.2rem;
`;