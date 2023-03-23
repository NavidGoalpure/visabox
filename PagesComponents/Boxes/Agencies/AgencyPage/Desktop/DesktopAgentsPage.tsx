import { deviceMin } from "Consts/device";
import styled, { css } from "styled-components";
import Image from "next/image";
import theme from "styled-theming";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import { Headline4Style, Headline5Style, Headline6Style } from "Styles/Typo";
import { FiBox } from "react-icons/fi";
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from "Styles/Theme/Layers/layer1/style";

import {
  layer2A_TextStyle,
  layer2A_TitleStyle,
} from "Styles/Theme/Layers/layer2/style";

import { componentStatements, LanguageKeys } from "../const";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { DesktopContactComponent } from "./DesktopContactComponent";
import { Agency } from "Interfaces/Businesses/agency";
import { getAgencyAgents, getAgencySocials } from "../utils";
import VIPAgentCard from "Components/Boxes/Card/Agent/VIPCard";
import SmartSocial from "PagesComponents/Boxes/SocialPage/SocialCard";
interface Props {
  ChosenAgency?: Agency;
}
function DesktopAgentsPage({ ChosenAgency }: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
  const relatedAgents = getAgencyAgents(ChosenAgency);
  const relatedSocials = getAgencySocials(ChosenAgency);
  return (
    <Container>
      <Header>
        <ProfilePictureWrapper>
          <ProfilePicture
            fill
            src={`/Images/boxes/agency/${ChosenAgency?.slug}.jpg`}
            alt={"agent image"}
          />
          <VIPBoxContainer aria-hidden={true}>
            <VIPBox aria-hidden={true} />
          </VIPBoxContainer>
        </ProfilePictureWrapper>
        <RightSide>
          <Title>{dt(ChosenAgency?.name)}</Title>

          <DesktopContactComponent
            website={ChosenAgency?.contact?.website}
            email={ChosenAgency?.contact?.email}
            phone={ChosenAgency?.contact?.phone}
            telegram={ChosenAgency?.contact?.telegram}
            instagram={ChosenAgency?.contact?.instagram}
            linkedin={ChosenAgency?.contact?.linkedin}
          />
        </RightSide>
      </Header>
      <AboutContainer>
        <AboutTitle>{t(LanguageKeys.About)}</AboutTitle>
        <Desc
          dangerouslySetInnerHTML={{
            __html: dt(ChosenAgency?.desc),
          }}
        />
      </AboutContainer>
      <AgentTitle>{t(LanguageKeys.AgentTitle)}</AgentTitle>
      <VIPContainer>
        {relatedAgents?.map((relatedAgent) => (
          <VIPAgentCard
            name={relatedAgent.name}
            slug={relatedAgent.slug}
            desc={relatedAgent.desc}
          />
        ))}
      </VIPContainer>
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
    </Container>
  );
}
export default DesktopAgentsPage;

const TitleColor = theme("mode", {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
const HeaderBackground = theme("mode", {
  light: css`
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  `,
  dark: css`
    border: 1px var(--color-gray6) solid;
  `,
});
const DescBackground = theme("mode", {
  light: css`
    background: var(--color-gray13);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
const Header = styled.header`
  ${HeaderBackground}
  display: flex;
  width: 55rem;
  border-radius: 15px;
  padding: 1.5rem;
  justify-content: flex-start;
  gap: 2rem;
  margin-bottom: 4rem;
`;
const ProfilePictureWrapper = styled.div`
  flex-shrink: 0;
  width: 16rem;
  height: 16rem;
  z-index: 1;
  position: relative;
`;
const ProfilePicture = styled(Image)`
  object-fit: cover;
  position: relative !important;
  border-radius: 15px;
`;
const VIPBoxContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-gray5);
  border-radius: 0 0 50% 50%;
  position: absolute;
  top: 0;
  right: 5%;
`;
const VIPBox = styled(FiBox)`
  color: var(--color-secondary4);
  width: 70%;
  height: auto;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //   justify-content: center;
  //   align-items: center;
`;
const Title = styled.h2`
  ${TitleColor}
  ${Headline4Style}
  z-index:1;
  font-weight: 900;
  margin-bottom: 1.5rem;
`;

const AboutContainer = styled.div`
  ${DescBackground}
  border-radius: 15px;
  width: 55rem;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const AboutTitle = styled.h3`
  ${layer2A_TitleStyle}
`;
const Desc = styled.p`
  ${layer2A_TextStyle}
`;
const AgentTitle = styled.h2`
  ${Layer1_TitleStyle};
  margin-top: 4rem;
`;
const VIPContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1rem;
  column-gap: 5rem;
`;
const SocialsTitle = styled(AgentTitle)``;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  row-gap: 3rem;
`;
