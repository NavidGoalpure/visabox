import React from 'react';
import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
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
import {
  componentSubtitleStyle,
  componentTheme,
  componentTitleStyle,
} from 'Styles/Theme/Component';
import { OccupationDetailRes } from 'Queries/occupations/Detail/interface';
import NoData from 'Components/NoData';

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
                <AnzscoComponent anzscoSection={occupation.anzsco_section} />
              </ContentWrapper>
            </Tabs.Content>
          ) : null}
          {/*  */}
          {
            <Tabs.Content value='backlog'>
              <ContentWrapper>
                <Header>{t(LanguageKeys.BacklogTitle)}</Header>
                <UpdateAt>Last update: 31/08/2022</UpdateAt>
                {/* <BacklogHint></BacklogHint> */}
                <BacklogComponent
                  backlogSection={occupation?.backlog_section}
                />
              </ContentWrapper>
            </Tabs.Content>
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

//////////
const Header = styled.header`
  width: 100%;
  padding: 1rem;
  ${componentTitleStyle}
`;
const UpdateAt = styled.h4`
  ${componentSubtitleStyle}
  width: 100%;
  text-align: center;
  margin-top: 1rem;
`;
const ContentWrapper = styled.section`
  ${componentTheme}
  width: auto;
`;
///////backlog section/////
const BacklogHint = styled.div`
  width: 100%;
`;
