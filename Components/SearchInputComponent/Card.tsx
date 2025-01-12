import { layer2A_TextStyle } from "Styles/Theme/Layers/layer2/style";
import { Headline7Style } from "Styles/Typo";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import {
  componentStatements,
  LanguageKeys,
} from "../../PagesComponents/Clients/PointCalculator/Steps/Education/const";
import { University } from "Interfaces/Database/university";
import theme from "styled-theming";
import styled, { css } from "styled-components";
import { deviceMin } from "Consts/device";
import { Dispatch, HTMLAttributes, SetStateAction, useCallback } from "react";
import { UniSections } from "Interfaces/Database/Client";
import {
  search_Input_Card,
  search_Input_Card_City,
  search_Input_Card_Name,
  search_Input_Card_Section,
} from "Styles/Theme/elementsInModal/searchInput";

interface Props extends HTMLAttributes<HTMLDivElement> {
  university: University;
  setInputValue: Dispatch<SetStateAction<string>>;
  callback?: (university: UniSections) => void;
  isInputInModal: boolean;
}
export const Card: React.FC<Props> = ({
  university,
  setInputValue,
  callback,
  isInputInModal,
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { dt } = useDynamicTranslation();
  const GetSmartUniSection = (section: number): UniSections => {
    switch (section) {
      case 1:
        return UniSections.Section1;
      case 2:
        return UniSections.Section2;
      default:
        return UniSections.IDontKnow;
    }
  };
  const callbackFunction = useCallback(() => {
    callback && callback(GetSmartUniSection(university.section));
  }, [university.section]);
  return (
    <UniversityCard
      // onClick={() => {
      //   client &&
      //     setClient({
      //       ...client,
      //       uni_section: GetSmartUniSection(university.section),
      //     });
      //   setInputValue(university?.title?.fa || "defensive");
      // }}
      isInputInModal={isInputInModal}
      onClick={() => {
        callbackFunction();

        setInputValue(university?.title?.fa || "defensive");
      }}>
      <UniName isInputInModal={isInputInModal}>{dt(university.title)}</UniName>
      <UniWrapper>
        <UniSection isInputInModal={isInputInModal}>
          {t(LanguageKeys.UniInput_SectionTitle)} {university.section}
        </UniSection>
        <UniCity isInputInModal={isInputInModal}>{dt(university.city)}</UniCity>
      </UniWrapper>
    </UniversityCard>
  );
};
const UniversityCardTheme = theme("mode", {
  light: css`
    background-color: var(--color-gray12);
    border-bottom: 3px solid var(--color-gray11);
  `,
  dark: css`
    background-color: var(--color-gray5);
    border-bottom: 3px solid var(--color-gray6);
  `,
});
const UniversityCardTheme_Hover = theme("mode", {
  light: css`
    background-color: var(--color-gray9);
    h3 {
      color: var(--color-gray13);
    }
  `,
  dark: css`
    background-color: var(--color-gray4);
    h3 {
      color: var(--color-gray12);
    }
  `,
});
const UniSectionTheme = theme("mode", {
  light: css`
    color: var(--color-primary2);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});
const UniCityHoverTheme = theme("mode", {
  light: css`
    color: var(--color-gray13);
  `,
  dark: css`
    color: white;
  `,
});
const UniversityCard = styled.div<{ isInputInModal: boolean }>`
  ${UniversityCardTheme};
  z-index: 100;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.7rem;
  transition: all 0.3s ease;
  gap: 1rem;
  cursor: pointer;
  @media ${deviceMin.tabletS} {
    padding: 1.25rem 1.5rem;
  }
  :hover {
    ${UniversityCardTheme_Hover}
  }
  ${({ isInputInModal }) => isInputInModal && `${search_Input_Card}`}
`;
const UniName = styled.h3<{ isInputInModal: boolean }>`
  ${layer2A_TextStyle};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  ${({ isInputInModal }) => isInputInModal && `${search_Input_Card_Name}`}
`;
const UniWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0.5rem;
  white-space: pre;
`;
const UniSection = styled.h4<{ isInputInModal: boolean }>`
  ${Headline7Style};
  ${UniSectionTheme};
  transition: all 0.3s ease;
  white-space: pre;
  ${UniversityCard}:hover & {
    color: var(--color-primary5);
  }
  ${({ isInputInModal }) => isInputInModal && `${search_Input_Card_Section}`}
`;
const UniCity = styled.h5<{ isInputInModal: boolean }>`
  ${layer2A_TextStyle};
  font-size: 14px;
  ${UniversityCard}:hover & {
    ${UniCityHoverTheme};
  }
  ${({ isInputInModal }) => isInputInModal && `${search_Input_Card_City}`}
`;
