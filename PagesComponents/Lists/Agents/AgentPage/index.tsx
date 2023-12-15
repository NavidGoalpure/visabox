import { deviceMin } from 'Consts/device';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import theme from 'styled-theming';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import {
  layer2A_BodyStyle,
  layer2A_SubtitleStyle,
  layer2A_TitleStyle,
} from 'Styles/Theme/Layers/layer2/style';

import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { layer2A_Key, layer2A_Value } from 'Styles/Theme/Layers/layer2/theme';
import { HTMLAttributes, useEffect, useState } from 'react';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import { Headline7Style } from 'Styles/Typo';
import { GoLinkExternal } from 'react-icons/go';
import Link from 'next/link';
import { MaraAccordion } from 'Elements/Accordion';
import ShowContacts from 'Components/ShowContacts';

import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';

interface Props extends HTMLAttributes<HTMLDivElement> {
  layerContext?: '1' | '2';
  chosenAgent?: MaraAgent;
}

function DesktopAgentsPage({
  chosenAgent,
  layerContext = '1',
  ...props
}: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
  const [imgSrc, setImgSrc] = useState('/Images/placeholder.jpeg');

  useEffect(() => {
    if (chosenAgent?.avatar) setImgSrc(chosenAgent?.avatar);
  }, [chosenAgent]);
  return (
    <Container {...props}>
      <Wrapper>
        {/* <PageTitle>{dt(chosenAgent?.name)}</PageTitle> */}
        <AgentContentContainer>
          <SmallBox>
            <ProfilePictureWrapper>
              <ProfilePicture
                fill
                src={imgSrc}
                alt={
                  chosenAgent?.name
                    ? `${dt(chosenAgent?.name)} image`
                    : 'agent image'
                }
                onError={() => {
                  setImgSrc(`/Images/placeholder.jpeg`);
                }}
              />
              {/* <VIPBoxContainer aria-hidden={true}>
            <VIPBox aria-hidden={true} />
          </VIPBoxContainer> */}
            </ProfilePictureWrapper>
            <Data>
              <Name>{dt(chosenAgent?.name)}</Name>
              <MaraNumberContainer>
                <MaraNumberTitle>
                  {t(LanguageKeys.MaraNumber)}: &nbsp;
                </MaraNumberTitle>
                <MaraNumber>{chosenAgent?.mara_number}</MaraNumber>
              </MaraNumberContainer>
            </Data>
          </SmallBox>
          <Hr />
          <AboutContainer>
            {/* <Title>{t(LanguageKeys.About)}</Title>
        <Desc>{chosenAgent?.desc}</Desc> */}

            <ShowContacts
              website={chosenAgent?.website}
              email={chosenAgent?.email}
              style={{ marginBottom: '2rem' }}
            />
            <Link
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
              target='blank'
              href={`https://portal.mara.gov.au/search-the-register-of-migration-agents/register-of-migration-agent-details/?ContactID=${chosenAgent?._id}`}
            >
              {t(LanguageKeys.MaraPageButton)} <LinkIcon />
            </Link>
          </AboutContainer>
        </AgentContentContainer>
        {chosenAgent?.agencies?.map((agency, i) => {
          return (
            <StyledAccordion
              key={i}
              backgroundLayer='1'
              triggerText={`${t(LanguageKeys.AgencyTitle)} ${i + 1} (${
                agency?.country
              })`}
              isOpen={true}
              content={
                <AgencyCard {...props}>
                  <Table>
                    <tbody>
                      <Tr>
                        <TdKey>{t(LanguageKeys.Name)} :</TdKey>
                        <TdValue>{agency?.title?.en}</TdValue>
                      </Tr>
                      <Tr>
                        <TdKey>{t(LanguageKeys.Phone)} :</TdKey>
                        <TdValue>{agency?.contact?.phone}</TdValue>
                      </Tr>
                      <Tr>
                        <TdKey>{t(LanguageKeys.Address)} :</TdKey>
                        <TdValue>{agency?.contact?.full_address}</TdValue>
                      </Tr>
                    </tbody>
                  </Table>
                </AgencyCard>
              }
            />
          );
        })}
        <Subtitle>{t(LanguageKeys.PageSubtitle)}</Subtitle>
      </Wrapper>
      <BackgroundPattern />
    </Container>
  );
}
export default DesktopAgentsPage;

const HeaderBackground = theme('mode', {
  light: css`
    background-image: url('/Images/Patterns/LightPattern.svg');
    opacity: 100%;
  `,
  dark: css`
    background-image: url('/Images/Patterns/DarkPattern.svg');
    opacity: 50%;
  `,
});

const MaraNumberColor = theme('mode', {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});

const ProfileCircle = theme('mode', {
  light: css`
    background-color: rgba(177, 177, 177, 0.15);
  `,
  dark: css`
    background-color: rgba(61, 61, 61, 0.15);
  `,
});

const MaraPageButtonTheme = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});

const TitleColor = theme('mode', {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});

const BackgroundPattern = styled.span`
  ${HeaderBackground}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  gap: 1rem;
  position: relative;
`;

const Wrapper = styled.div`
  max-width: 55rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  gap: 1rem;
  position: relative;
`;
const PageTitle = styled.h1`
  ${Layer1_TitleStyle}
`;
const Subtitle = styled.h2`
  ${Layer1_SubtitleStyle}
  font-size: 16px;
`;

const AgentContentContainer = styled.div`
  width: 100%;
  border-radius: 50px;
  gap: 2rem;
  z-index: 1;
  margin-bottom: 1rem;
  @media${deviceMin.tabletS} {
    ${layer2A_BodyStyle}
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4rem;
  }
`;

const SmallBox = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  gap: 1rem;
  align-items: center;
`;
const ProfilePictureWrapper = styled.div`
  flex-shrink: 0;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  :before {
    content: '';
    background-color: var(--color-gray3);
    position: absolute;
    inset: 0;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    transform: scale(1.25);
    opacity: 0.15;
  }
`;
const ProfilePicture = styled(Image)`
  width: 10.5rem !important;
  height: 10.5rem !important;
  object-fit: cover;
  position: relative !important;
  border-radius: 50%;
`;
const Hr = styled.div`
  ${ProfileCircle}
  display: none;
  width: 8rem;
  height: 4px;
  transform: rotate(-90deg);
  @media${deviceMin.tabletS} {
    flex-direction: row;
    display: flex;
  }
`;

const Data = styled.div`
  ${TitleColor}
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  //   justify-content: center;
  //   align-items: center;
`;
const Name = styled.h2`
  ${TitleColor}
  ${MaraNumberColor}
  ${layer2A_TitleStyle}
  z-index:1;
  margin-bottom: 1.5rem;
`;
const MaraNumberContainer = styled.div`
  ${TitleColor}
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  ${layer2A_Value}
`;

// const MaraPageButton = styled.button`
//   ${Headline7Style};
//   ${MaraPageButtonTheme}
//   outline: none;
//   border: none;
//   background: transparent;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   transition: all 0.3s ease;
// `;

const LinkIcon = styled(GoLinkExternal)`
  margin-inline-start: 0.5rem;
`;

const MaraNumberTitle = styled.h3`
  ${layer2A_Key}
  ${TitleColor}
  margin:0;
  width: auto;
`;
const MaraNumber = styled.h3`
  ${layer2A_Value}
  color: var(--color-primary5)
`;
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledAccordion = styled(MaraAccordion)`
  width: 100%;
  z-index: 2;
  padding: 0;
`;
const Table = styled.table`
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
const AgencyCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  padding: 2rem;
  gap: 2rem;
  align-items: center;
  z-index: 1;
`;
