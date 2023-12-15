import { IoIosArrowDown } from "react-icons/io";
import styled, { css } from "styled-components";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { HTMLAttributes, ReactNode } from "react";
import theme from "styled-theming";
import { Swiper as SwiperType } from "swiper";

interface Props extends HTMLAttributes<SwiperType> {
  updateSwiperVariables?: any;
  onSwiper?: (swiper: SwiperType) => void;
  onSlideChange?: (swiper: SwiperType) => void;
  customButtons?: ReactNode;
}

// only pass SwiperSlides as children
const MaraSwiper: React.FC<Props> = ({
  updateSwiperVariables,
  children,
  onSwiper,
  onSlideChange,
  customButtons,
  ...props
}) => {
  const swiper = useSwiper();
  return (
    <Container {...props}>
      <StyledSwiper
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView="auto"
        modules={[EffectCoverflow, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            spaceBetween: -300,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 25,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {children}

        {customButtons ? (
          customButtons
        ) : (
        <ButtonWrapper>
          <PrevButton className="swiper-button-prev">
            <PrevButtonArrow />
          </PrevButton>
          <NextButton className="swiper-button-next">
            <NextButtonArrow />
          </NextButton>
        </ButtonWrapper>
        )} 
      </StyledSwiper>
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
const ButtonTheme = theme("mode", {
  light: css`
    background-color: var(--color-gray6);
  `,
  dark: css`
    background-color: var(--color-gray3);
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
const StyledSwiper = styled(Swiper)`
  width: 100%;
  .swiper-wrapper {
    width: auto;
    display: flex;
    align-items: center;
  }
  .swiper-slide {
    filter: blur(10px);
    scale: 0.5;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide-active {
    filter: blur(0px);
    scale: 1;
    z-index: 2;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;
const PrevButton = styled.button`
  ${ButtonTheme};
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: var(--color-gray13);
  border-radius: 15px;
`;
const NextButton = styled(PrevButton)``;
const PrevButtonArrow = styled(IoIosArrowDown)`
  ${PrevArrowDir};
`;
const NextButtonArrow = styled(IoIosArrowDown)`
  ${NextArrowDir};
`;
