import Accordion from 'Elements/Accordion';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { AnzscoSection, ReferenceType } from 'Interfaces/Documents/occupation';
import { UnitGroup } from 'Interfaces/Documents/unitGroup';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import {
  componentSubtitleStyle,
  componentTextStyle,
  componentTitleStyle,
  textTitleColor,
} from 'Styles/Theme/Component';
import AccordionContent from './accordionContent';
import { LanguageKeys, componentStatements } from './const';
import SkillPriorityLists from './AnzcoTab/SkillPriorityLists';
import { SkillLevelDescription } from './AnzcoTab/utils';

interface Props {
  anzscoSection: ReferenceType | AnzscoSection | undefined;
}
const UnitGroupCompoenent: React.FC<Props> = ({ anzscoSection }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { dt, dtArray } = useDynamicTranslation();
  const occupationUnitGroup = (anzscoSection as AnzscoSection)
    ?.unit_group as UnitGroup;

  return (
    <Container>
      <TitleWrapper>
        <Title>{`${t(LanguageKeys.UnitGroup)} ${
          occupationUnitGroup?.code
        }: ${dt(occupationUnitGroup?.title)}`}</Title>
      </TitleWrapper>
      <Wrapper>
        <ContentTitle>{t(LanguageKeys.Description)} </ContentTitle>
        <Description
          dangerouslySetInnerHTML={{
            __html: dt(occupationUnitGroup?.description),
          }}
        ></Description>
        <SkillLevelTitle skillLevel={occupationUnitGroup?.skill_level || ''}>
          {t(LanguageKeys.IndicativeSkillLevel)}
        </SkillLevelTitle>
        <SkillLevelDesc>
          {t(SkillLevelDescription(occupationUnitGroup?.skill_level || ''))}
        </SkillLevelDesc>
        <StyledAccordion
          backgroundTheme={'COMPONENT'}
          triggerContent={t(LanguageKeys.Tasks)}
          content={
            <AccordionContent
              data={dtArray(occupationUnitGroup?.tasks)}
              emptyMessage={t(LanguageKeys.NoTask)}
            />
          }
        />
        {(anzscoSection as AnzscoSection)?.priority_list?.[0]?.national ? (
          <StyledAccordion
            backgroundTheme={'COMPONENT'}
            triggerContent={t(LanguageKeys.SkillPriorityLists)}
            content={
              <div>
                <SkillPriorityLists
                  priorityList={
                    (anzscoSection as AnzscoSection)?.priority_list?.[0]
                  }
                />
              </div>
            }
          />
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default UnitGroupCompoenent;
export const TitleBackground = theme('mode', {
  light: css`
    background-color: var(--color-gray13);
  `,
  dark: css`
    background-color: var(--color-gray7);
  `,
});
export const BorderColor = theme('mode', {
  light: css`
    border: 2px solid var(--color-gray11);
  `,
  dark: css`
    border: 1px solid var(--color-primary7);
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
  ${textTitleColor}
  margin-bottom:1.5rem;
`;
const Description = styled.p`
  ${componentSubtitleStyle};
  ${BorderColor};
  margin: 0;
  margin-bottom: 2rem;
  padding: 2rem 1.75rem;
  border-radius: 5px;
`;
const SkillLevelTitle = styled(ContentTitle)<{ skillLevel: string }>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  :after {
    content: '${({ skillLevel }) => skillLevel}';
    ${componentTextStyle};
    margin: 0;
    padding: 0.1rem 0.5rem;
    height: 90%;
    background-color: var(--color-primary3);
    border-radius: 50%;
    color: white;
  }
`;

const SkillLevelDesc = styled.p`
  ${componentSubtitleStyle}
  padding: 2rem 1rem;
  background-color: var(--color-gray7);
  border-radius: 40px;
  color: white;
  white-space: break-spaces;
  margin: 0;
  margin-bottom: 1.5rem;
`;
const StyledAccordion = styled(Accordion)`
  margin-bottom: 1rem;
`;
