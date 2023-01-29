import React from 'react';
import styled, { css } from 'styled-components';
import * as SideBar from 'Elements/Sidebar';
import { TbListDetails } from 'react-icons/tb';
import { TbStack2 } from 'react-icons/tb';
import { TbNumbers } from 'react-icons/tb';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { deviceMin } from 'Consts/device';
import AnzscoComponent from './AnzcoTab';
import BacklogComponent from './BacklogTab';
import DetailComponent from './DetailTab';
import { OccupationDetailRes } from 'Queries/occupations/Detail/interface';
import { TagTheme } from 'Styles/Theme';
import { MaraAccordion } from 'Elements/Accordion';
import NoData from 'Components/NoData';
import { hasAnyVisaOption } from './utils';
import {
  layer2A_style,
  layer2A_TextStyle,
  layer2A_TitleStyle,
} from 'Styles/Theme/Layers/layer2/style';

interface Props {
  occupation: OccupationDetailRes;
}
const SidebarPage: React.FC<Props> = ({ occupation }) => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <SideBarRoot
      defaultValue='backlog'
      variant='UP_POSITION'
      items={
        <>
          <SideBar.TabItem
            title={t(LanguageKeys.Backlog)}
            value='backlog'
            icon={<Backlog />}
          />
          <SideBar.TabItem
            title={t(LanguageKeys.Details)}
            value='details'
            icon={<DetailsIcon />}
          />
          <SideBar.TabItem
            title={t(LanguageKeys.Anzsco)}
            value='anzsco'
            icon={<AnszcoIcon />}
          />
        </>
      }
      bodies={
        <>
          {occupation.territory_section ? (
            <SideBar.BodyItem value='details'>
              <ContentWrapper>
                <DetailComponent
                  territorySection={occupation.territory_section}
                />
              </ContentWrapper>
            </SideBar.BodyItem>
          ) : null}
          {/*  */}
          {occupation.anzsco_section ? (
            <SideBar.BodyItem value='anzsco'>
              <ContentWrapper>
                <Header>{t(LanguageKeys.AnzscoTabTitle)}</Header>
                <AnzscoComponent anzscoSection={occupation.anzsco_section} />
              </ContentWrapper>
            </SideBar.BodyItem>
          ) : null}
          {/*  */}
          {
            <SideBar.BodyItem value='backlog'>
              <ContentWrapper>
                <Header>{t(LanguageKeys.BacklogTitle)}</Header>
                {hasAnyVisaOption(occupation) ? (
                  <BacklogComponent
                    backlogSection={occupation.backlog_section}
                    code={occupation.code}
                  />
                ) : (
                  <NoData
                    hasIcon={false}
                    messageComponent={t(LanguageKeys.NoDataMessage)}
                    themeLayer='2A'
                  />
                )}
                <StyledAccordion
                  backgroundLayer='3'
                  triggerText={t(LanguageKeys.HintsTitle)}
                  isOpen={true}
                  content={
                    <AccordionContentContainer>
                      <HintItem>
                        <Tag>{t(LanguageKeys.Points)}</Tag>
                        {t(LanguageKeys.HintPoints)}
                      </HintItem>
                      <HintItem>
                        <Tag>{t(LanguageKeys.Submitted)}</Tag>
                        {t(LanguageKeys.HintSubmitted)}
                      </HintItem>
                      <HintItem>
                        <Tag>{t(LanguageKeys.Invited)}</Tag>
                        {t(LanguageKeys.HintInvited)}
                      </HintItem>
                      <HintItem>
                        <Tag>
                          {t(LanguageKeys.LastUpdate)}
                          <span> 31/12/2022</span>
                        </Tag>
                      </HintItem>
                    </AccordionContentContainer>
                  }
                />
              </ContentWrapper>
            </SideBar.BodyItem>
          }
          {/*  */}
        </>
      }
    />
  );
};

export { SidebarPage };
const SideBarRoot = styled(SideBar.Root)`
  div {
    &[aria-label='sidebar'] {
      margin-bottom: 2rem;
      margin-left: -1rem;
      margin-right: -1rem;
      width: auto;
      @media ${deviceMin.tabletS} {
        margin-left: 0;
        margin-right: 0;
        border-radius: 15px;
      }
    }
  }
`;
const Icon = css`
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 0.25rem;
  stroke-width: 1;
  @media ${deviceMin.tabletS} {
    width: 1.5rem;
    height: 1.5rem;
    stroke-width: 2;
  }
`;
const DetailsIcon = styled(TbListDetails)`
  ${Icon}
`;
const AnszcoIcon = styled(TbNumbers)`
  ${Icon}
`;
const Backlog = styled(TbStack2)`
  ${Icon}
`;

//////////
const Header = styled.header`
  width: 100%;
  padding: 1rem;
  ${layer2A_TitleStyle}
`;

const ContentWrapper = styled.section`
  ${layer2A_style}
  width: auto;
`;
///////backlog section/////
const StyledAccordion = styled(MaraAccordion)`
  width: auto;
  margin: 1rem;
`;
const AccordionContentContainer = styled.ul`
  width: 100%;
`;
const HintItem = styled.li`
  ${layer2A_TextStyle}
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`;
const Tag = styled.h5`
  ${TagTheme}
  padding: 0.5rem 1rem;
  width: max-content;
  border-radius: 30px;
  margin-bottom: 0.5rem;
  span {
    font-weight: bold;
  }
`;
