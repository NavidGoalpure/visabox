import { deviceMin } from 'Consts/device';
import { MaraAccordion } from 'Elements/Accordion';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { AnzscoSection } from 'Interfaces/Occupation/occupation';
import { UnitGroup } from 'Interfaces/Occupation/unitGroup';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

import AccordionContent from './accordionContent';
import { LanguageKeys, componentStatements } from '../const';
import UnitGroupCompoenent from '../unitGroup';
import { ConvertAnzscoCodeToTitle } from './utils';
import {
  layer2A_Key,
  layer2A_TextColor,
  layer2A_Value,
} from 'Styles/Theme/Layers/layer2/theme';
import {
  layer2A_SubtitleStyle,
  layer2A_TitleStyle,
} from 'Styles/Theme/Layers/layer2/style';
import { layer3_style } from 'Styles/Theme/Layers/layer3/style';

interface Props {
  anzscoSection: AnzscoSection | undefined;
}
const AnzscoComponent: React.FC<Props> = ({ anzscoSection }) => {
  const { dt, dtArray, isMultiLanguageTextArrayIsEmpty } =
    useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);

  return (
    <>
      <Wrapper>
        <Table>
          <tbody>
            <Tr>
              <TdKey>{t(LanguageKeys.MajorGroup)} :</TdKey>
              <TdValue>
                {`${anzscoSection?.major_group} -${' '}
              ${dt(ConvertAnzscoCodeToTitle(anzscoSection?.major_group || 0))}`}
              </TdValue>
            </Tr>
            <Tr>
              <TdKey>{t(LanguageKeys.SubMajorGroup)} :</TdKey>
              <TdValue>
                {`${anzscoSection?.submajor_group} -${' '}
              ${dt(
                ConvertAnzscoCodeToTitle(anzscoSection?.submajor_group || 0)
              )}`}
              </TdValue>
            </Tr>
            <Tr>
              <TdKey>{t(LanguageKeys.MinorGroup)} :</TdKey>
              <TdValue>
                {`${anzscoSection?.minor_group} -${' '}
              ${dt(ConvertAnzscoCodeToTitle(anzscoSection?.minor_group || 0))}`}
              </TdValue>
            </Tr>
            <Tr>
              <TdKey>{t(LanguageKeys.UnitGroup)} :</TdKey>
              <TdValue>
                {(anzscoSection?.unit_group as UnitGroup)?.code} -
                {dt((anzscoSection?.unit_group as UnitGroup)?.title)}
              </TdValue>
            </Tr>
          </tbody>
        </Table>
        <ContentTitle>{t(LanguageKeys.Description)}</ContentTitle>
        <Description
          dangerouslySetInnerHTML={{
            __html: dt(anzscoSection?.description),
          }}
        />
        <StyledAccordion
          backgroundLayer='3'
          triggerText={t(LanguageKeys.AlternativeTitles)}
          content={
            <AccordionContent
              data={dtArray(anzscoSection?.alternative_title)}
              description={t(LanguageKeys.AlternativeTitles_description)}
              emptyMessage={t(LanguageKeys.AlternativeTitles_empty)}
            />
          }
        />
        <StyledAccordion
          backgroundLayer='3'
          triggerText={t(LanguageKeys.Specialisations)}
          content={
            <AccordionContent
              data={dtArray(anzscoSection?.specialisations)}
              emptyMessage={t(LanguageKeys.specialisations_empty)}
              description={t(LanguageKeys.specialisations_description)}
            />
          }
        />
        {!isMultiLanguageTextArrayIsEmpty(anzscoSection?.nec_occupation) && (
          <StyledAccordion
            backgroundLayer='3'
            triggerText={t(LanguageKeys.NecOccupation)}
            content={
              <AccordionContent
                data={dtArray(anzscoSection?.nec_occupation)}
                emptyMessage={t(LanguageKeys.NecOccupation)}
                description={t(LanguageKeys.NecOccupation_description)}
              />
            }
          />
        )}
        {/* <StyledAccordion
          backgroundtheme={"COMPONENT"}
          triggerText={t(LanguageKeys.SkillPriorityLists)}
          content={"farzam"}
        /> */}
      </Wrapper>
      <UnitGroupCompoenent anzscoSection={anzscoSection} />
    </>
  );
};

export default AnzscoComponent;

const Wrapper = styled.div`
  padding: 1rem;
`;

/////////
const BorderColor = theme('mode', {
  light: css`
    border: 2px solid var(--color-gray12);
  `,
  dark: css`
    border: 1px solid var(--color-primary7);
  `,
});
const Table = styled.table`
  ${layer3_style}
  direction: ltr;
  width: 100%;
  padding: 1.5rem;
  border-radius: 15px;
  margin-bottom: 1.5rem;
`;
////////////

const Tr = styled.tr`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  :last-child {
    margin-bottom: 0;
  }
  @media${deviceMin.tabletS} {
    flex-direction: row;
  }
`;

const TdValue = styled.td`
  ${layer2A_SubtitleStyle}
  ${layer2A_Value}
  margin:0;
`;

const TdKey = styled(TdValue)`
  ${layer2A_Key}
  margin-inline-end: 0.5rem;
  white-space: nowrap;
`;
////////////////

const ContentTitle = styled.h2`
  ${layer2A_TitleStyle}
  ${layer2A_TextColor}
  margin-bottom:1.5rem;
`;
const Description = styled.div`
  ${BorderColor};
  ${layer3_style};
  margin: 0;
  margin-bottom: 2rem;
  padding: 2rem 1.75rem;

  border-radius: 15px;
`;
const StyledAccordion = styled(MaraAccordion)`
  margin-bottom: 1rem;
`;
