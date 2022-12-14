import Accordion from "elements/Accordion";
import { useDynamicTranslation } from "hooks/useDynamicTraslation";
import { useLocale } from "hooks/useLocale";
import { useStaticTranslation } from "hooks/useStaticTraslation";
import { AnzscoSection, Occupation } from "interfaces/Documents/occupation";
import { UnitGroup } from "interfaces/Documents/unitGroup";
import styled, { css } from "styled-components/macro";
import theme from "styled-theming";
import {
  componentSubtitleStyle,
  componentTheme,
  componentTitleStyle,
} from "Styles/Theme/Component";
import AccordionContent from "./AccordionContent";
import { LanguageKeys, componentStatements } from "./const";
import UnitGroupCompoenent from "./UnitGroup";
import { ConvertAnzscoCodeToTitle } from "./utils";

interface Props {
  occupation: AnzscoSection | undefined;
}
const AnzscoComponent: React.FC<Props> = ({ occupation }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { dt, dtArray } = useDynamicTranslation();
  const { locale } = useLocale();
  return (
    <Container>
      <TitleWrapper>
        <Title>{t(LanguageKeys.AnzscoTabTitle)}</Title>
      </TitleWrapper>
      <Wrapper>
        <Table>
          <Tr>
            <Td>{t(LanguageKeys.MajorGroup)} :</Td>
            <Td>
              {`${occupation?.major_group} -${" "}
              ${dt(ConvertAnzscoCodeToTitle(occupation?.major_group || 0))}`}
            </Td>
          </Tr>
          <Tr>
            <Td>{t(LanguageKeys.SubMajorGroup)} :</Td>
            <Td>
              {`${occupation?.submajor_group} -${" "}
              ${dt(ConvertAnzscoCodeToTitle(occupation?.submajor_group || 0))}`}
            </Td>
          </Tr>
          <Tr>
            <Td>{t(LanguageKeys.MinorGroup)} :</Td>
            <Td>
              {`${occupation?.minor_group} -${" "}
              ${dt(ConvertAnzscoCodeToTitle(occupation?.minor_group || 0))}`}
            </Td>
          </Tr>
          <Tr>
            <Td>{t(LanguageKeys.UnitGroup)} :</Td>
            <Td>
              {(occupation?.unit_group as UnitGroup)?.code} -
              {dt((occupation?.unit_group as UnitGroup)?.title)}
            </Td>
          </Tr>
        </Table>
        <ContentTitle>{t(LanguageKeys.Description)}</ContentTitle>
        <Description>{dt(occupation?.description)}</Description>
        <StyledAccordion
          backgroundTheme={"COMPONENT"}
          triggerContent={t(LanguageKeys.AlternativeTitles)}
          content={
            <AccordionContent
              data={dtArray(occupation?.alternative_title)}
              title={t(LanguageKeys.AlternativeTitles_title)}
              description={t(LanguageKeys.AlternativeTitles_description)}
              emptyMessage={t(LanguageKeys.alternativeTitles_empty)}
            />
          }
        />
        <StyledAccordion
          backgroundTheme={"COMPONENT"}
          triggerContent={t(LanguageKeys.Specialisations)}
          content={
            <AccordionContent
              data={dtArray(occupation?.specialisations)}
              emptyMessage={t(LanguageKeys.specialisations_empty)}
              title={t(LanguageKeys.specialisations_title)}
              description={t(LanguageKeys.specialisations_description)}
            />
          }
        />
        {/* <StyledAccordion
          backgroundTheme={"COMPONENT"}
          triggerContent={t(LanguageKeys.SkillPriorityLists)}
          content={"farzam"}
        /> */}
      </Wrapper>
      <UnitGroupCompoenent occupation={occupation} />
    </Container>
  );
};

export default AnzscoComponent;

export const TitleBackground = theme("mode", {
  light: css`
    background-color: var(--color-gray13);
  `,
  dark: css`
    background-color: var(--color-gray7);
  `,
});
export const BorderColor = theme("mode", {
  light: css`
    border: 1px solid var(--color-gray9);
  `,
  dark: css`
    border: 1px solid var(--color-primary7);
  `,
});

const Container = styled.div`
  ${componentTheme}
  padding:0;
  // border: 1px solid var(--color-gray9);
`;
const TitleWrapper = styled.div`
  ${TitleBackground}
  width: 100%;
  border-radius: 15px 15px 0 0;
  padding: 1rem;
  border-bottom: 1px solid var(--color-gray9);
`;

const Title = styled.h2`
  ${componentSubtitleStyle}
  margin:0;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 1rem;
`;

const Table = styled.table`
  ${BorderColor};
  width: 100%;
  padding: 1.5rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
`;
const Tr = styled.tr`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  margin-bottom: 1rem;
  :last-child {
    margin-bottom: 0;
  }
`;
const Td = styled.td`
  ${componentSubtitleStyle}
  margin:0;
`;
const ContentTitle = styled.h2`
  ${componentTitleStyle}
  margin-bottom:1.5rem;
`;
const Description = styled.p`
  ${BorderColor};
  ${componentSubtitleStyle};
  margin: 0;
  margin-bottom: 2rem;
  padding: 2rem 1.75rem;

  border-radius: 5px;
`;
const StyledAccordion = styled(Accordion)`
  margin-bottom: 1rem;
`;
