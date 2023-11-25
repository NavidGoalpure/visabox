import { EffectCoverflow, Navigation } from "swiper/modules";
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
import { SecondaryButton } from "Elements/Button/Secondary";
import { FormDataContext } from "PagesComponents/Clients/RequestAgent/Contexts/FormDataContext/Context";
import { AllDegreesTemplate, educations } from "Consts/Client";
import { useLocale } from "Hooks/useLocale";
import { deviceMin } from "Consts/device";
import MaraSwiper from "Components/MaraSwiper";
import { componentStatements, LanguageKeys } from "../../const";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { Client, ClientAllDegrees } from "Interfaces/Database/Client";

const AddDegreesSection = ({ client }: { client: Client }) => {
  const { locale } = useLocale();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDegree, setSelectedDegree] = useState<ClientAllDegrees>({} as ClientAllDegrees);
  const { t } = useStaticTranslation(componentStatements);
  return (
    <MaraSwiper updateSwiperVariables={client}>
      <AddDegreeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        degree={selectedDegree}
      />
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
              setSelectedDegree(degree);
            }}
            className="swiper-slide"
          >
            <AddTitle>
              {t(LanguageKeys.AddInfoSwiper)}{" "}
              <span>
                {
                  educations.filter(
                    (el) => el.en.toLowerCase() === degree.label.toLowerCase()
                  )?.[0]?.[locale]
                }
              </span>
            </AddTitle>
            <PlusIcon />
          </AddDegreeCard>
        );
      })}
    </MaraSwiper>
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
  ${AddCardBorderTheme};
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
