import { Input } from "Components/Input";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { WizardContext } from "../Contexts/Wizard/Context";
import { useContext } from "react";
import Image from "next/image";
import { NextButton, NextIcon } from "./StyledComponents";
import styled from "styled-components";
import kangrooLogo from "./Images/kangorooLogo.svg";
import { Headline3Style, Headline5Style } from "Styles/Typo";

const Step0 = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleNextPress } = useContext(WizardContext);
  return (
    <Container>
      <LogoContainer>
        <Logo width={90} height={90} src={kangrooLogo} alt={"site-logo"} />
      </LogoContainer>
      <Title>فرم ارزیابی ماراباکس</Title>
      <Desc>
        {`کاربر گرامی
         با صرف زمان دو دقیقه و پر کردن این فرم می توانید اطلاعات خود را در اختیار بهترین وکلای مهاجرت قرار دهید تا با بررسی  دقیق تر شرایط شما بتوانند بهترین راهکارهای مهاجرت را در اختیارتان قرار دهند.
         `}
      </Desc>
      <StartButton
        step={step}
        onClick={() => {
          handleNextPress();
        }}
        icon={<NextIcon />}
      >
        ورود به فرم
      </StartButton>
    </Container>
  );
};
export default Step0;
const Container = styled.div`
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding: 1.5rem 2.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background: linear-gradient(
    140.49deg,
    var(--color-gray6) 53.63%,
    var(--color-gray7) 99.96%
  );
`;
const LogoContainer = styled.div``;
const Logo = styled(Image)``;
const Title = styled.h1`
  ${Headline3Style};
  color: var(--color-primary5);
`;
const Desc = styled.p`
  ${Headline5Style};
  color: white;
  white-space: pre-line;
`;
const StartButton = styled(NextButton)`
  margin: 0 auto;
`;
