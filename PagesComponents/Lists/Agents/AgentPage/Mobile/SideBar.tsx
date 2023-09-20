import React from 'react';
import styled, { css } from 'styled-components';
import * as SideBar from 'Elements/Sidebar';
import { MdContacts } from 'react-icons/md';
import { GrCircleInformation } from 'react-icons/gr';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { deviceMin } from 'Consts/device';
import { AboutComponent } from './AboutComponent';
import { MobileContactComponent } from './MobileContactComponent';
import { En_FaLanguage } from 'Interfaces/Database';
import { layer2A_style } from 'Styles/Theme/Layers/layer2/style';
import { componentStatements, LanguageKeys } from '../const';
interface Props {
  maraNumber?: string;
  website?: string;
  email?: string;
  phone?: string[];
  telegram?: string;
  instagram?: string;
  linkedin?: string;
  desc?: En_FaLanguage;
}
const SidebarPage = ({
  maraNumber,
  website,
  email,
  phone,
  telegram,
  instagram,
  linkedin,
  desc,
}: Props) => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <SideBarRoot
      defaultValue='about'
      variant='UP_POSITION'
      items={
        <>
          <SideBar.TabItem
            title={t(LanguageKeys.About)}
            value='about'
            icon={<AboutIcon />}
          />
          <SideBar.TabItem
            title={t(LanguageKeys.Contacts)}
            value='socials'
            icon={<ContactIcon />}
          />
        </>
      }
      bodies={
        <>
          <SideBar.BodyItem value='about'>
            <ContentWrapper>
              <AboutComponent desc={desc} />
            </ContentWrapper>
          </SideBar.BodyItem>
          <SideBar.BodyItem value='socials'>
            <ContentWrapper>
              <MobileContactComponent
                maraNumber={maraNumber}
                website={website}
                email={email}
                phone={phone}
                telegram={telegram}
                instagram={instagram}
                linkedin={linkedin}
              />
            </ContentWrapper>
          </SideBar.BodyItem>
        </>
      }
    />
  );
};

export { SidebarPage };

const SideBarRoot = styled(SideBar.Root)`
  color: black;
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
  #contents-container {
    margin: 0;
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
const ContactIcon = styled(MdContacts)`
  ${Icon};
  path {
    :nth-child(1) {
      display: none;
    }
  }
`;

const AboutIcon = styled(GrCircleInformation)`
  ${Icon};
  path {
    stroke: inherit;
  }
`;

const ContentWrapper = styled.section`
  ${layer2A_style}
  width: auto;
`;
