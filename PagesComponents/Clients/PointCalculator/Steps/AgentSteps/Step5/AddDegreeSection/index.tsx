import { EffectCoverflow, Navigation } from "swiper/modules";
import { IoIosArrowDown } from "react-icons/io";
import styled, { css } from "styled-components";
import { BsCheck } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";
import Swiper from "swiper";
// import "swiper/swiper-bundle.css";
// import "swiper/css";
// import "swiper/css/navigation";
import { useContext, useEffect, useState } from "react";
import { Headline7Style } from "Styles/Typo";
import { MdOutlineEdit } from "react-icons/md";
import theme from "styled-theming";
import { AiOutlinePlus } from "react-icons/ai";
import AddDegreeModal from "./AddDegreeModal";
import { SecondaryButton } from "Elements/Button/Secondary";
import { ClientAllDegrees } from "Interfaces/Database/Client";
import { FormDataContext } from "PagesComponents/Clients/PointCalculator/Contexts/FormDataContext/Context";
import { AllDegreesTemplate } from "../const";
import { educations } from "Consts/Client";
import { useLocale } from "Hooks/useLocale";

const AddDegreesSection = () => {
  const { client, setClient } = useContext(FormDataContext);
  const { locale } = useLocale();
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
  }, [client]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDegreeLabel, setSelectedDegreeLabel] = useState<string>("");
  return (
    <Container>
      <AddDegreeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        degreeLabel={selectedDegreeLabel}
      />
      <StyledSwiper className="my-swiper">
        <SwiperWrapper className="swiper-wrapper">
          {client?.all_degrees?.map((degree) => {
            if (degree.graduation_date !== null) {
              return (
                <DegreeCard
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedDegreeLabel(degree?.label);
                  }}
                  className="swiper-slide"
                >
                  <CardTitle>{degree.label}</CardTitle>
                  <UniSectionWrapper>
                    <FieldOfStudy>{degree.field_of_study}</FieldOfStudy>
                    <Dash />
                    <UniSection>{degree.uni_section}</UniSection>
                  </UniSectionWrapper>
                  <GraduationDate>{degree.graduation_date}</GraduationDate>
                  <EditIcon />
                </DegreeCard>
              );
            }
            return (
              <AddDegreeCard
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedDegreeLabel(degree?.label);
                }}
                className="swiper-slide"
              >
                <AddTitle>
                  {" "}
                  افزودن مشخصات{" "}
                  <span>
                    {
                      educations.filter(
                        (el) =>
                          el.en.toLowerCase() === degree.label.toLowerCase()
                      )?.[0]?.[locale]
                    }
                  </span>
                </AddTitle>
                <PlusIcon />
              </AddDegreeCard>
            );
          })}
        </SwiperWrapper>
      </StyledSwiper>
      <ButtonWrapper>
        <PrevButton icon={<PrevButtonArrow />} className="swiper-button-prev">
          لیسانس
        </PrevButton>
        <NextButton icon={<NextButtonArrow />} className="swiper-button-next">
          لیسانس
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default AddDegreesSection;
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
const DegreeCardTheme = theme("mode", {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray5);
  `,
});
const TitleTheme = theme("mode", {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});
const AddTitleTheme = theme("mode", {
  light: css`
    color: var(--color-primary3);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});
const AddCardBorderTheme = theme("mode", {
  light: css`
    border-color: var(--color-gray7);
  `,
  dark: css`
    border-color: var(--color-gray4);
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
const DegreeCard = styled.div`
  ${DegreeCardTheme};
  cursor: pointer;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
  width: max-content;
`;
const CardTitle = styled.h3`
  ${Headline7Style};
  ${TitleTheme};
`;
const UniSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const FieldOfStudy = styled.h3`
  ${layer3_TextStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const Dash = styled.span`
  border: 1px solid var(--color-gray9);
  width: 0.5rem;
`;
const UniSection = styled.h3`
  ${layer3_TextStyle};
`;
const GraduationDate = styled.h3`
  ${layer3_TextStyle};
`;
const EditIcon = styled(MdOutlineEdit)`
  border-radius: 50px;
  color: var(--color-gray13);
  padding: 0.5rem;
  box-sizing: content-box;
  background: var(--color-primary4);
`;
const AddDegreeCard = styled.div`
  border: 3px dashed;
  ${AddCardBorderTheme};
  cursor: pointer;
  width: max-content;
  height: auto;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const AddTitle = styled.h3`
  ${layer3_TextStyle};
  span {
    ${AddTitleTheme};
  }
`;
const PlusIcon = styled(AiOutlinePlus)`
  color: white;
  padding: 0.4rem;
  width: 1rem;
  height: auto;
  background-color: var(--color-primary4);
  border-radius: 50%;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
