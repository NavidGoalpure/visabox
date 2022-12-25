import { AnzscoSection, Occupation } from 'Interfaces/Documents/occupation';
import React from 'react';
import styled, { css } from 'styled-components';

import * as Tabs from '@radix-ui/react-tabs';
import * as SideBar from 'Elements/Sidebar';
import { TbListDetails } from 'react-icons/tb';
import { TbStack2 } from 'react-icons/tb';
import { TbNumbers } from 'react-icons/tb';
import { ScrollBox } from 'Elements/ScrollBox';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { deviceMin } from 'Consts/device';
import AnzscoComponent from './anzscoTab';
import BacklogComponent from './BacklogTab';
import DetailComponent from './DetailTab';
import { componentTheme, componentTitleStyle } from 'Styles/Theme/Component';

interface Props {
  occupation: Occupation;
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
        </>
      }
      bodies={
        <>
          <Tabs.Content value='details'>
            <ContentWrapper>
              <DetailComponent occupation={occupation} />
            </ContentWrapper>
          </Tabs.Content>
          <Tabs.Content value='anzsco'>
            <ContentWrapper>
              <Header>{t(LanguageKeys.AnzscoTabTitle)}</Header>
              <ScrollBox heightToRem={40}>
                <AnzscoComponent occupation={occupation.anzsco_section} />
              </ScrollBox>
            </ContentWrapper>
          </Tabs.Content>
          <Tabs.Content value='backlog'>
            <ContentWrapper>
              <Header>{t(LanguageKeys.BacklogTitle)}</Header>
              <ScrollBox heightToRem={40}>
                <BacklogComponent
                  backlogSection={occupation?.backlog_section}
                />
              </ScrollBox>
            </ContentWrapper>
          </Tabs.Content>
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
const Header = styled.header`
  width: 100%;
  padding: 1rem;
  ${componentTitleStyle}
`;
const ContentWrapper = styled.section`
  ${componentTheme}
  width: auto;
`;
