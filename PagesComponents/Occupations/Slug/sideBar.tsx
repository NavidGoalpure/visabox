import React from 'react';
import styled, { css } from 'styled-components';

import * as Tabs from '@radix-ui/react-tabs';
import * as SideBar from 'Elements/Sidebar';
import { TbListDetails } from 'react-icons/tb';
import { TbStack2 } from 'react-icons/tb';
import { TbNumbers } from 'react-icons/tb';
import { VscRepoForked } from 'react-icons/vsc';
import { VerticalScrollBox } from 'Elements/VerticalScrollBox';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { deviceMin } from 'Consts/device';
import AnzscoComponent from './anzscoTab';
import BacklogComponent from './BacklogTab';
import DetailComponent from './DetailTab';
import { componentTheme, componentTitleStyle } from 'Styles/Theme/Component';
import { OccupationDetailRes } from 'Queries/occupations/Detail/interface';
import SimilarOccupations from './similarOccupations';

interface Props {
  occupation: OccupationDetailRes;
}
const SidebarPage: React.FC<Props> = ({ occupation }) => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <SideBarRoot
      defaultValue='backlog'
      items={
        <>
          <SideBar.Item
            title={t(LanguageKeys.Backlog)}
            value='backlog'
            icon={<Backlog />}
          />
          <SideBar.Item
            title={t(LanguageKeys.Details)}
            value='details'
            icon={<DetailsIcon />}
          />
          <SideBar.Item
            title={t(LanguageKeys.Anzsco)}
            value='anzsco'
            icon={<AnszcoIcon />}
          />
          <SideBar.Item
            title={t(LanguageKeys.SimilarOccupations)}
            value='similarOccupations'
            icon={<SimilarIcon />}
          />
        </>
      }
      bodies={
        <>
          {occupation.territory_section ? (
            <Tabs.Content value='details'>
              <ContentWrapper>
                <DetailComponent
                  territorySection={occupation.territory_section}
                />
              </ContentWrapper>
            </Tabs.Content>
          ) : null}
          {/*  */}
          {occupation.anzsco_section ? (
            <Tabs.Content value='anzsco'>
              <ContentWrapper>
                <Header>{t(LanguageKeys.AnzscoTabTitle)}</Header>
                <VerticalScrollBox heightToRem={40}>
                  <AnzscoComponent occupation={occupation.anzsco_section} />
                </VerticalScrollBox>
              </ContentWrapper>
            </Tabs.Content>
          ) : null}
          {/*  */}
          {occupation?.backlog_section ? (
            <Tabs.Content value='backlog'>
              <ContentWrapper>
                <Header>{t(LanguageKeys.BacklogTitle)}</Header>
                <VerticalScrollBox heightToRem={40}>
                  <BacklogComponent
                    backlogSection={occupation?.backlog_section}
                  />
                </VerticalScrollBox>
              </ContentWrapper>
            </Tabs.Content>
          ) : null}
          {/*  */}
          {occupation?.similarOccupations ? (
            <Tabs.Content value='similarOccupations'>
              <ContentWrapper>
                <Header>{t(LanguageKeys.SimilarOccupations)}</Header>
                <VerticalScrollBox heightToRem={40}>
                  <SimilarOccupations
                    similarOccupations={occupation.similarOccupations}
                    currentCode={occupation?.code}
                  />
                </VerticalScrollBox>
              </ContentWrapper>
            </Tabs.Content>
          ) : null}
        </>
      }
    />
  );
};

export { SidebarPage };
const SideBarRoot = styled(SideBar.Root)`
  div {
    &[aria-label='sidebar'] {
      margin-bottom: 4rem;
      margin-left: -1rem;
      margin-right: -1rem;
      width: auto;
      @media ${deviceMin.laptopS} {
        margin-left: 0;
        margin-right: 0;
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
    margin-inline-end: 1rem;
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

const SimilarIcon = styled(VscRepoForked)`
  ${Icon}
  transform: rotate(180deg);
  @media ${deviceMin.tabletS} {
    stroke-width: 1;
  }
`;

//////////
const Header = styled.header`
  width: 100%;
  padding: 1rem;
  ${componentTitleStyle}
`;
const ContentWrapper = styled.section`
  ${componentTheme}
  width: auto;
`;
