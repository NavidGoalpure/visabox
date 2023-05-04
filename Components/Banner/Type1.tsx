import MaraBgAnimation from "Components/MaraBgAnimation";
import { deviceMin } from "Consts/device";
import { PrimaryButton } from "Elements/Button/Primary";
import { useRouter } from "next/router";
import { HTMLAttributes, ReactNode } from "react";
import { MdNavigateNext } from "react-icons/md";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Headline3Style, Headline4Style } from "Styles/Typo";
interface Props extends HTMLAttributes<HTMLDivElement> {
  navigateTo: string;
  desc: ReactNode;
  buttonText: string;
}
const Type1: React.FC<Props> = ({ navigateTo, desc, buttonText }) => {
  const router = useRouter();
  return (
    <Container>
      {" "}
      <MaraBgAnimation
        animationSpeed={60}
        DarkPrimaryColor={"var(--color-primary3)"}
        LightPrimaryColor={"var(--color-primary3)"}
      >
        <Wrapper>
          <Title>{desc}</Title>{" "}
          <Button onClick={() => router.push(navigateTo)} icon={<NextIcon />}>
            {buttonText}
          </Button>
        </Wrapper>
      </MaraBgAnimation>
    </Container>
  );
};
export default Type1;
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
  z-index: 0;
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
  padding: 7.5rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  backdrop-filter: blur(5px);
  @media ${deviceMin.tabletS} {
    padding: 1.5rem 2rem;
  }
`;
const Title = styled.h2`
  ${Headline4Style};
  color: var(--color-gray13);
  @media ${deviceMin.tabletS} {
    ${Headline3Style};
    width: auto;
  }
  span {
    color: var(--color-primary5);
  }
`;
const Button = styled(PrimaryButton)`
  width: fit-content;
`;
export const NextIcon = styled(MdNavigateNext)`
  ${NextIconDirectionStyle};
  width: auto;
  height: 1.5rem;
  margin-bottom: 0.2rem;
`;
