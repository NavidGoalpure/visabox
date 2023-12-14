import { IoIosArrowDown } from "react-icons/io";
import styled, { css } from "styled-components";
import { layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";
// import "swiper/swiper-bundle.css";
// import "swiper/css";
// import "swiper/css/navigation";
import { useContext, useEffect, useState } from "react";
import { Headline7Style } from "Styles/Typo";
import { MdOutlineEdit } from "react-icons/md";
import theme from "styled-theming";
import { AiOutlinePlus } from "react-icons/ai";
import AddDegreeModal from "./AddDegreeModal";
import { FormDataContext } from "PagesComponents/Clients/RequestAgent/Contexts/FormDataContext/Context";
import { educations } from "Consts/Client";
import { useLocale } from "Hooks/useLocale";
import { deviceMin } from "Consts/device";
import { componentStatements, LanguageKeys } from "../const";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { getdegreeLabel, getUniSectionLabel } from "Utils/clients";

import { SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { MultiLanguageText } from "Interfaces/Database";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import MaraSwiper from "Components/MaraSwiper";

const AddDegreesSection = () => {
  const { client } = useContext(FormDataContext);
  const { locale } = useLocale();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDegreeLabel, setSelectedDegreeLabel] = useState<string>("");
  const [swiper, setSwiper] = useState<SwiperType>(null);
  const [prevText, setPrevText] = useState<MultiLanguageText>(
    {} as MultiLanguageText
  );
  const [nextText, setNextText] = useState<MultiLanguageText>(
    {} as MultiLanguageText
  );
  const { t } = useStaticTranslation(componentStatements);
  const { dt } = useDynamicTranslation();
  useEffect(() => {
    setPrevText(
      getdegreeLabel({
        degree: client?.all_degrees?.[swiper?.activeIndex - 1]?.label,
      }) || ({} as MultiLanguageText)
    );
    setNextText(
      getdegreeLabel({
        degree: client?.all_degrees?.[swiper?.activeIndex + 1]?.label,
      }) || ({} as MultiLanguageText)
    );
  }, [client, swiper]);
  const handleSwiper = (swiperInstance: SwiperType) => {
    setSwiper(swiperInstance);
    setPrevText(
      getdegreeLabel({
        degree: client?.all_degrees?.[swiper?.activeIndex - 1]?.label,
      }) || ({} as MultiLanguageText)
    );

    setNextText(
      getdegreeLabel({
        degree: client?.all_degrees?.[swiper?.activeIndex + 1]?.label,
      }) || ({} as MultiLanguageText)
    );
  };
  return (
    <>
      <AddDegreeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        degreeLabel={selectedDegreeLabel}
      />
      <MaraSwiper
        onSwiper={(swiperInstance: SwiperType) => setSwiper(swiperInstance)}
        onSlideChange={handleSwiper}
        customButtons={
          <ButtonWrapper>
            <PrevButton className="swiper-button-prev">
              <PrevButtonArrow />
              {dt(prevText)}
            </PrevButton>
            <NextButton className="swiper-button-next">
              {dt(nextText)}
              <NextButtonArrow />{" "}
            </NextButton>
          </ButtonWrapper>
        }
      >
        {client?.all_degrees?.map((degree, i) => {
          if (degree.graduation_date !== null) {
            return (
              <SwiperSlide key={i}>
                <DegreeCard
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedDegreeLabel(degree?.label);
                  }}
                >
                  <CardTitle>
                    {dt(getdegreeLabel({ degree: degree.label }))}
                  </CardTitle>
                  <UniSectionWrapper>
                    <FieldOfStudy>{degree.field_of_study}</FieldOfStudy>
                    <Dash />
                    <UniSection>
                      {dt(
                        getUniSectionLabel({
                          UniSection: degree.uni_section || undefined,
                        })
                      )}
                    </UniSection>
                  </UniSectionWrapper>
                  <GraduationDate>{degree.graduation_date}</GraduationDate>
                  <EditIcon />
                </DegreeCard>
              </SwiperSlide>
            );
          }
          return (
            <SwiperSlide key={i}>
              <AddDegreeCard
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedDegreeLabel(degree?.label);
                }}
              >
                <AddTitle>
                  {t(LanguageKeys.AddInfoSwiper)}{" "}
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
            </SwiperSlide>
          );
        })}
      </MaraSwiper>
    </>
  );
};
export default AddDegreesSection;

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
const AddCardTheme = theme("mode", {
  light: css`
    border-color: var(--color-gray7);
    background: rgba(221, 226, 235, 0.8);
  `,
  dark: css`
    border-color: var(--color-gray4);
    background: rgba(61, 61, 61, 0.8);
  `,
});
const AddCardHoverTheme = theme("mode", {
  light: css`
    border: 3px solid var(--color-gray10);
    background: var(--color-gray13);
  `,
  dark: css`
    border: 3px solid var(--color-gray4);
    background: var(--color-gray3);
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
const ButtonTheme = theme("mode", {
  light: css`
    background-color: var(--color-gray6);
  `,
  dark: css`
    background-color: var(--color-gray3);
  `,
});

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
  max-width: 12.5rem;

  width: max-content;
  @media ${deviceMin.tabletS} {
    max-width: unset;
  }
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  flex-shrink: 0;
`;
const Dash = styled.span`
  border: 1px solid var(--color-gray9);
  width: 0.5rem;
`;
const UniSection = styled.h3`
  ${layer3_TextStyle};
  flex-shrink: 0;
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
  ${AddCardTheme};
  cursor: pointer;
  max-width: 12.5rem;
  width: max-content;
  text-align: center;
  height: auto;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(20px);
  :hover{
    ${AddCardHoverTheme}
  }
  @media ${deviceMin.tabletS} {
    max-width: unset;
  }
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
  box-sizing: content-box;
  background-color: var(--color-primary4);
  border-radius: 50%;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  @media ${deviceMin.tabletS} {
    gap: 2rem;
  }
`;
const PrevButton = styled.button`
  ${ButtonTheme};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: var(--color-gray13);
  border-radius: 15px;
  width: 100%;
  @media ${deviceMin.tabletS} {
    width: auto;
    justify-content: space-between;
  }
`;
const NextButton = styled(PrevButton)``;
const PrevButtonArrow = styled(IoIosArrowDown)`
  ${PrevArrowDir};
`;
const NextButtonArrow = styled(IoIosArrowDown)`
  ${NextArrowDir};
`;
