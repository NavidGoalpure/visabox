import React from 'react';
import styled, { css } from 'styled-components';
import * as SideBar from 'Elements/Sidebar';
import { MdContacts } from 'react-icons/md';
import { GrCircleInformation } from 'react-icons/gr';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { deviceMin } from 'Consts/device';
import { AboutComponent } from './AboutComponent';
import { MobileContactComponent } from './MobileContactComponent';
import { MultiLanguageText } from 'Interfaces';
import { layer2A_style } from 'Styles/Theme/Layers/layer2/style';
import { componentStatements, LanguageKeys } from '../const';
import { FaRegHandshake } from 'react-icons/fa';
import VIPAgentCard from 'Components/Lists/Card/Agent/VIPCard';
import { Agent } from 'Interfaces/Lists/agents';
import { Socials } from 'Interfaces/Lists/Socials';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import SmartSocial from 'Components/Lists/Card/SocialCard';
interface Props {
  website?: string;
  email?: string;
  phone?: string[];
  telegram?: string;
  instagram?: string;
  linkedin?: string;
  desc?: MultiLanguageText;
  relatedAgents: Agent[] | undefined;
  relatedSocials: Socials[] | null;
}
const SidebarPage = ({
  website,
  email,
  phone,
  telegram,
  instagram,
  linkedin,
  desc,
  relatedAgents,
  relatedSocials,
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
          <SideBar.TabItem
            title={t(LanguageKeys.Agent)}
            value='agent'
            icon={<AgentIcon />}
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
                website={website}
                email={email}
                phone={phone}
                telegram={telegram}
                instagram={instagram}
                linkedin={linkedin}
              />
            </ContentWrapper>
            {relatedSocials && (
              <SocialsTitle>{t(LanguageKeys.SocialMedia)}</SocialsTitle>
            )}
            <Row>
              {relatedSocials?.map((relatedSocial, i) => (
                <SmartSocial
                  key={i}
                  id={relatedSocial?.id}
                  isFeatured={relatedSocial?.isFeatured}
                  desc={relatedSocial?.desc}
                  name={relatedSocial?.name}
                  link={relatedSocial?.link}
                  socialmediaType={relatedSocial?.socialmediaType}
                  locations={relatedSocial?.locations}
                  slug={relatedSocial?.slug}
                />
              ))}
            </Row>
          </SideBar.BodyItem>
          <SideBar.BodyItem value='agent'>
            <VIPContainer>
              {relatedAgents?.map((relatedAgent, i) => (
                <VIPAgentCard
                  key={i}
                  name={relatedAgent.name}
                  slug={relatedAgent.slug}
                  desc={relatedAgent.desc}
                />
              ))}
            </VIPContainer>
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
const AgentIcon = styled(FaRegHandshake)`
  ${Icon};
`;
const ContentWrapper = styled.section`
  ${layer2A_style}
  width: auto;
`;
const VIPContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1rem;
  column-gap: 5rem;
`;
const SocialsTitle = styled.h2`
  ${Layer1_TitleStyle};
  margin-top: 4rem;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  row-gap: 3rem;
`;
