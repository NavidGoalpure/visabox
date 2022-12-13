import Accordion from "elements/Accordion";
import { useDynamicTranslation } from "hooks/useDynamicTraslation";
import { useStaticTranslation } from "hooks/useStaticTraslation";
import { Occupation } from "interfaces/Documents/occupation";
import { UnitGroup } from "interfaces/Documents/unitGroup";
import styled, { css } from "styled-components/macro";
import theme from "styled-theming";
import {
  componentSubtitleStyle,
  componentTheme,
  componentTitleStyle,
} from "Styles/Theme/Component";
import { LanguageKeys, componentStatements } from "./const";
import UnitGroupCompoenent from "./UnitGroup";
import { ConvertAnzscoCodeToTitle } from "./utils";


interface Props {
  occupation: Occupation;
}
const AnzscoComponent: React.FC<Props> = ({ occupation }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { dt, dtArray } = useDynamicTranslation();
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
              {`${occupation?.anzsco_section?.major_group} -${" "}
              ${dt(
                ConvertAnzscoCodeToTitle(
                  occupation?.anzsco_section?.major_group || 0
                )
              )}`}
            </Td>
          </Tr>
          <Tr>
            <Td>{t(LanguageKeys.SubMajorGroup)} :</Td>
            <Td>
              {`${occupation?.anzsco_section?.submajor_group} -${" "}
              ${dt(
                ConvertAnzscoCodeToTitle(
                  occupation?.anzsco_section?.submajor_group || 0
                )
              )}`}
            </Td>
          </Tr>
          <Tr>
            <Td>{t(LanguageKeys.MinorGroup)} :</Td>
            <Td>
              {`${occupation?.anzsco_section?.minor_group} -${" "}
              ${dt(
                ConvertAnzscoCodeToTitle(
                  occupation?.anzsco_section?.minor_group || 0
                )
              )}`}
            </Td>
          </Tr>
          <Tr>
            <Td>{t(LanguageKeys.UnitGroup)} :</Td>
            <Td>
              {(occupation?.anzsco_section?.unit_group as UnitGroup)?.code} -
              {dt((occupation?.anzsco_section?.unit_group as UnitGroup)?.title)}
            </Td>
          </Tr>
        </Table>
        <ContentTitle>{t(LanguageKeys.Description)}</ContentTitle>
        <Description>{dt(occupation?.anzsco_section?.description)}</Description>
        <StyledAccordion
          backgroundTheme={"COMPONENT"}
          triggerContent={t(LanguageKeys.AlternativeTitles)}
          content={dtArray(
            occupation?.anzsco_section?.alternative_title || {
              en: [""],
              fa: [""],
            }
          )}
        />
        <StyledAccordion
          backgroundTheme={"COMPONENT"}
          triggerContent={t(LanguageKeys.Specialisations)}
          content={"farzam"}
        />
        <StyledAccordion
          backgroundTheme={"COMPONENT"}
          triggerContent={t(LanguageKeys.SkillPriorityLists)}
          content={"farzam"}
        />
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

const Container = styled.div`
  ${componentTheme}
  padding:0;
  border: 1px solid var(--color-gray9);
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
  color: var(--color-gray13);
`;

const Wrapper = styled.div`
  padding: 1rem;
`;

const Table = styled.table`
  width: 100%;
  padding: 1.5rem;
  border: 1px solid var(--color-primary7);
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
  ${componentSubtitleStyle};
  margin: 0;
  margin-bottom: 2rem;
  padding: 2rem 1.75rem;
  border: 1px solid var(--color-primary7);
  border-radius: 5px;
`;
const StyledAccordion = styled(Accordion)`
  margin-bottom: 1rem;
`;
