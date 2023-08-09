import { layer2A_TextStyle } from "Styles/Theme/Layers/layer2/style";
import { Headline7Style } from "Styles/Typo";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { University } from "Interfaces/Database/university";
import theme from "styled-theming";
import styled, { css } from "styled-components";
import { Dispatch, SetStateAction, useContext } from "react";
import { useLocale } from "Hooks/useLocale";
import { FormDataContext } from "PagesComponents/Clients/PointCalculator/Contexts/FormDataContext/Context";
import { deviceMin } from "Consts/device";

export const UniCard = ({ university }: { university: University }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { dt } = useDynamicTranslation();
  const { locale } = useLocale();
  const { client, setClient } = useContext(FormDataContext);
  return (
    <UniversityCard>
      <UniName>{dt(university.title)}</UniName>
      <UniWrapper>
        <UniSection>
          {t(LanguageKeys.UniInput_SectionTitle)} &nbsp; {university.section}
        </UniSection>
        <UniCity>{dt(university.city)}</UniCity>
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
    color: var(--color-gray10);
  `,
});
const UniversityCard = styled.div`
  ${UniversityCardTheme};
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.7rem;
  transition: all 0.3s ease;
  gap: 1rem;
  @media ${deviceMin.tabletS} {
    padding: 1.25rem 1.5rem;
  }
  :hover {
    ${UniversityCardTheme_Hover}
  }
`;
const UniName = styled.h3`
  ${layer2A_TextStyle};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
const UniWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;
const UniSection = styled.h4`
  ${Headline7Style};
  ${UniSectionTheme};
  transition: all 0.3s ease;
  white-space: pre;
  ${UniversityCard}:hover & {
    color: var(--color-primary5);
  }
`;
const UniCity = styled.h5`
  ${layer2A_TextStyle};
  font-size: 14px;
  ${UniversityCard}:hover & {
    ${UniCityHoverTheme};
  }
`;
