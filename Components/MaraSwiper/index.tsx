import { EffectCoverflow, Navigation } from "swiper/modules";
import { IoIosArrowDown } from "react-icons/io";
import styled, { css } from "styled-components";
import Swiper from "swiper";
// import "swiper/swiper-bundle.css";
// import "swiper/css";
// import "swiper/css/navigation";
import { HTMLAttributes, useContext, useEffect, useState } from "react";
import theme from "styled-theming";
import { SecondaryButton } from "Elements/Button/Secondary";
import useDevice from "Hooks/useDevice";
interface Props extends HTMLAttributes<HTMLDivElement> {
  updateSwiperVariables?: any;
}
const MaraSwiper: React.FC<Props> = ({
  updateSwiperVariables,
  children,
  ...props
}) => {
  const [screen, setScreen] = useState<"MOBILE" | "DESKTOP">("MOBILE");
  const { isLaptop } = useDevice();
  useEffect(() => {
    if (isLaptop) setScreen("DESKTOP");
  });
  useEffect(() => {
    const swiper = new Swiper(".my-swiper", {
      // effect: "coverflow",
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: "-100px",
      allowTouchMove: false,
      modules: [Navigation, EffectCoverflow],
      EffectCoverflow: {
        rotate: 40,
        stretch: 25,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, [updateSwiperVariables]);

  return (
    <Container {...props}>
      <StyledSwiper className="my-swiper">
        <SwiperWrapper className="swiper-wrapper">{children}</SwiperWrapper>
      </StyledSwiper>
      {/* {screen === "DESKTOP" && ( */}
      <ButtonWrapper>
        <PrevButton icon={<PrevButtonArrow />} className="swiper-button-prev">
          {}
        </PrevButton>
        <NextButton icon={<NextButtonArrow />} className="swiper-button-next">
          {}
        </NextButton>
      </ButtonWrapper>
      {/* )} */}
    </Container>
  );
};
export default MaraSwiper;
const BackgroundTheme = theme("mode", {
  light: css`
    background-image: url("/Images/Patterns/AlternativeLightPattern.svg");
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
    background-color: var(--color-gray8);
  `,
  dark: css`
    background-image: url("/Images/Patterns/AlternativeDarkPattern.svg");
    background-color: var(--color-gray2);
  `,
});

const PrevArrowDir = theme("languageDirection", {
  ltr: css`
    transform: rotate(90deg);
  `,
  rtl: css`
    transform: rotate(-90deg);
  `,
});
const NextArrowDir = theme("languageDirection", {
  ltr: css`
    transform: rotate(-90deg);
  `,
  rtl: css`
    transform: rotate(90deg);
  `,
});
const Container = styled.div`
  ${BackgroundTheme}
  width:100%;
  padding: 2rem;
  border-radius: 15px;
  overflow: hidden;
`;
const StyledSwiper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  position: relative;
  overflow: hidden;
  .swiper-wrapper {
    width: auto;
  }
  .swiper-slide {
    filter: blur(10px);
    transform: scale(0.5);
    z-index: 1;
  }
  .swiper-slide-active {
    filter: blur(0px);
    transform: scale(1);
    z-index: 2;
  }
`;
const SwiperWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;
const PrevButton = styled(SecondaryButton)`
  flex-direction: row-reverse;
`;
const NextButton = styled(SecondaryButton)`
  position: unset;
`;
const PrevButtonArrow = styled(IoIosArrowDown)`
  ${PrevArrowDir};
`;
const NextButtonArrow = styled(IoIosArrowDown)`
  ${NextArrowDir};
`;
