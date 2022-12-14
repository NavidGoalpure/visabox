import Accordion from "elements/Accordion";
import { useDynamicTranslation } from "hooks/useDynamicTraslation";
import { useStaticTranslation } from "hooks/useStaticTraslation";
import { Occupation } from "interfaces/Documents/occupation";
import { UnitGroup } from "interfaces/Documents/unitGroup";
import styled, { css } from "styled-components/macro";
import theme from "styled-theming";
import {
  componentSubtitleStyle,
  componentTextStyle,
  componentTitleStyle,
} from "Styles/Theme/Component";
import { LanguageKeys, componentStatements } from "./const";

interface Props {
  occupation: Occupation;
}
const UnitGroupCompoenent: React.FC<Props> = ({ occupation }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { dt, dtArray } = useDynamicTranslation();
  const occupationUnitGroup = occupation?.anzsco_section
    ?.unit_group as UnitGroup;
  return (
    <Container>
      <TitleWrapper>
        <Title>{`${t(LanguageKeys.UnitGroup)} ${occupation.code}: ${dt(
          occupationUnitGroup?.title
        )}`}</Title>
      </TitleWrapper>
      <Wrapper>
        <ContentTitle>{t(LanguageKeys.Description)} </ContentTitle>
        <Description>{dt(occupationUnitGroup?.description)}</Description>
        <SkillLevelTitle skillLevel={occupationUnitGroup?.skill_level || ""}>
          {t(LanguageKeys.IndicativeSkillLevel)}
        </SkillLevelTitle>
        <SkillLevelContainer>
          {dtArray(occupationUnitGroup.tasks)}
        </SkillLevelContainer>

        <StyledAccordion
          backgroundTheme={"COMPONENT"}
          triggerContent={t(LanguageKeys.Tasks)}
          content={dtArray(
            occupation?.anzsco_section?.alternative_title || {
              en: [""],
              fa: [""],
            }
          )}
        />
        {/* navid occupation in this unit accordion
         <StyledAccordion
          backgroundTheme={"COMPONENT"}
          triggerContent={t(LanguageKeys.OccupationsinUnitGroup)}
          content={"farzam"}
        /> */}
      </Wrapper>
    </Container>
  );
};

export default UnitGroupCompoenent;
export const TitleBackground = theme("mode", {
  light: css`
    background-color: var(--color-gray13);
  `,
  dark: css`
    background-color: var(--color-gray7);
  `,
});
const Container = styled.div``;
const TitleWrapper = styled.div`
  ${TitleBackground}
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-gray9);
`;

const Title = styled.h2`
  ${componentSubtitleStyle}
  margin:0;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 1rem;
`;

const ContentTitle = styled.h2`
  ${componentTitleStyle}
  margin-bottom:1.5rem;
`;
const Description = styled.p`
  ${componentSubtitleStyle};
  margin: 0;
  margin-bottom: 2rem;
  padding: 2rem 1.75rem;
  border: 1px solid var(--color-primary7);
  border-radius: 5px;
`;
const SkillLevelTitle = styled(ContentTitle)<{ skillLevel: string }>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  :after {
    content: "${({ skillLevel }) => skillLevel}";
    ${componentTextStyle};
    margin: 0;
    padding: 0.1rem 0.5rem;
    height: 90%;
    background-color: var(--color-primary3);
    border-radius: 50%;
    color: white;
  }
`;
const SkillLevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SkillLevelWrapper = styled.div``;
const StyledAccordion = styled(Accordion)`
  margin-bottom: 1rem;
`;
