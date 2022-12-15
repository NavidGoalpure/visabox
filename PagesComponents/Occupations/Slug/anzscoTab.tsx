import Accordion from 'Elements/Accordion';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { AnzscoSection, Occupation } from 'Interfaces/Documents/occupation';
import { UnitGroup } from 'Interfaces/Documents/unitGroup';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import {
  componentSubtitleStyle,
  componentBodyTheme,
  componentTitleStyle,
  componentHeaderTheme,
} from 'Styles/Theme/Component';
import AccordionContent from './accordionContent';
import { LanguageKeys, componentStatements } from './const';
import UnitGroupCompoenent from './unitGroup';
import { ConvertAnzscoCodeToTitle } from './utils';

interface Props {
  occupation: AnzscoSection | undefined;
}
const AnzscoComponent: React.FC<Props> = ({ occupation }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { dt, dtArray } = useDynamicTranslation();
  return (
    <>
      <Wrapper>
        <Table>
          <Tr>
            <Td>{t(LanguageKeys.MajorGroup)} :</Td>
            <Td>
              {`${occupation?.major_group} -${' '}
              ${dt(ConvertAnzscoCodeToTitle(occupation?.major_group || 0))}`}
            </Td>
          </Tr>
          <Tr>
            <Td>{t(LanguageKeys.SubMajorGroup)} :</Td>
            <Td>
              {`${occupation?.submajor_group} -${' '}
              ${dt(ConvertAnzscoCodeToTitle(occupation?.submajor_group || 0))}`}
            </Td>
          </Tr>
          <Tr>
            <Td>{t(LanguageKeys.MinorGroup)} :</Td>
            <Td>
              {`${occupation?.minor_group} -${' '}
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
          backgroundTheme={'COMPONENT'}
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
          backgroundTheme={'COMPONENT'}
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
    </>
  );
};

export default AnzscoComponent;

const Container = styled.div`
  ${componentBodyTheme}
  padding:0;
  // border: 1px solid var(--color-gray9);
`;

const Header = styled.div`
  ${componentHeaderTheme}
  width: 100%;
  padding: 1rem;
`;

const Title = styled.h2`
  ${componentSubtitleStyle}
  margin:0;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 1rem;
`;

/////////
const BorderColor = theme('mode', {
  light: css`
    border: 1px solid var(--color-gray9);
  `,
  dark: css`
    border: 1px solid var(--color-primary7);
  `,
});
const Table = styled.table`
  ${BorderColor};
  width: 100%;
  padding: 1.5rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
`;
////////////

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
