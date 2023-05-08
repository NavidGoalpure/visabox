import MaraBgAnimation from "Components/MaraBgAnimation";
import { SecondaryButton } from "Elements/Button/Secondary";
import { useRouter } from "next/router";
import { HTMLAttributes, ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Headline5Style } from "Styles/Typo";
interface Props extends HTMLAttributes<HTMLDivElement> {
  navigateTo: string;
  desc: ReactNode;
  buttonText: string;
}
const Type2: React.FC<Props> = ({ navigateTo, desc, buttonText }) => {
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
          <CloseIconWrapper>
            <CloseIcon
              onClick={() => {
                router.push("/");
              }}
            />
          </CloseIconWrapper>
          <Title>{desc}</Title>{" "}
          <Button onClick={() => router.push(navigateTo)} icon={<NextIcon />}>
            {buttonText}
          </Button>
        </Wrapper>
      </MaraBgAnimation>
    </Container>
  );
};
export default Type2;
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
  padding: 0.3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(5px);
`;
const Title = styled.h2`
  ${Headline5Style};
  color: var(--color-gray13);
  span {
    color: var(--color-primary5);
  }
`;
const Button = styled(SecondaryButton)``;
export const NextIcon = styled(MdNavigateNext)`
  ${NextIconDirectionStyle};
  width: auto;
  height: 1.5rem;
  margin-bottom: 0.2rem;
`;
const CloseIconWrapper = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 20%;
  right: 5%;
`;
const CloseIcon = styled(IoCloseOutline)`
  color: white;
  width: 100%;
  height: 100%;
`;
