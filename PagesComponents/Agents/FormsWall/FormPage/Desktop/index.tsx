import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import {
  layer2A_BodyStyle,
  layer2A_TextStyle,
  layer2A_TitleStyle,
} from 'Styles/Theme/Layers/layer2/style';
import { layer2A_Key } from 'Styles/Theme/Layers/layer2/theme';
import DescriptionSection from '../DescriptionSection';
import { Client } from 'Interfaces/Database/Client';
import DarkBackground from './Images/DarkBackground.svg';
import LightBackground from './Images/LightBackground.svg';
import { Headline7Style } from 'Styles/Typo';
import { CalculateClientScore } from 'PagesComponents/Clients/PointCalculator/Contexts/FormDataContext/utils';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from '../const';
import HintComponent from 'Components/HintComponent';
import { BsPersonCircle } from 'react-icons/bs';
interface Props {
  client: Client;
}
function DesktopAgentsPage({ client }: Props) {
  const dataCreatedAt = client?._createdAt?.toString().substring(0, 10);
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      {!client?.visa_subclass && (
        <StyledHintComponent>
          <HintContent>{t(LanguageKeys.NotCompletedHint)}</HintContent>
        </StyledHintComponent>
      )}
      <Wrapper>
        <SmallBox hasBorderRadiusAllAround={!client?.visa_subclass}>
          <ProfilePictureWrapper>
            {client?.avatar ? (
              <ProfilePicture
                src={client?.avatar}
                alt={client?.name ? `${client?.name} image` : 'agent image'}
              />
            ) : (
              <ImagePlaceholder />
            )}
          </ProfilePictureWrapper>
          <ProfileData>
            <Name>
              {client?.name} {client?.lastname}
            </Name>
            <JobTitle>{client?.current_job}</JobTitle>
            <CreatedDate>{dataCreatedAt}</CreatedDate>
          </ProfileData>
          {client?.visa_subclass && (
            <ScoreWrapper>
              <HeaderLabel>
                {t(LanguageKeys.ScoreTitle)}{' '}
                <span id='score'>{CalculateClientScore(client)}</span>
              </HeaderLabel>
            </ScoreWrapper>
          )}
          {client?.visa_subclass && (
            <SubclassWrapper>
              <HeaderLabel>
                {t(LanguageKeys.VisaSubclassTitle)}{' '}
                <span id='visa-subclass'>{client?.visa_subclass}</span>
              </HeaderLabel>{' '}
            </SubclassWrapper>
          )}
        </SmallBox>
        <DescriptionSection client={client} />
      </Wrapper>
    </Container>
  );
}
export default DesktopAgentsPage;

const TitleColor = theme('mode', {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
const HeaderBackground = theme('mode', {
  light: css`
    background-image: url(${LightBackground});
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
  `,
  dark: css`
    background-image: url(${DarkBackground});
  `,
});
const HeaderLabelTheme = theme('mode', {
  light: css`
    color: var(--color-gray10);
  `,
  dark: css`
    color: var(--color-gray11);
  `,
});
const HeaderScoreTheme = theme('mode', {
  light: css`
    color: var(--color-secondary2);
  `,
  dark: css`
    color: var(--color-secondary4);
  `,
});
const Container = styled.div`
  padding: 0 0 4rem 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
const StyledHintComponent = styled(HintComponent)`
  align-items: center;
  gap: 1rem;
  #icon {
    width: 1.5rem;
    margin: 0;
  }
`;
const HintContent = styled.h3`
  ${Headline7Style};
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  gap: 1rem;
`;
const SmallBox = styled.header<{ hasBorderRadiusAllAround: boolean }>`
  ${layer2A_BodyStyle};
  ${HeaderBackground};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 18rem;
  border-radius: ${({ hasBorderRadiusAllAround }) =>
    hasBorderRadiusAllAround ? '15px' : '15px 15px 0 0'};
  padding: 1.5rem;
  gap: 2rem;
  margin-bottom: 4rem;
  box-shadow: unset;
`;
const ProfilePictureWrapper = styled.div`
  flex-shrink: 0;
  align-self: center;
  width: 7rem;
  height: 7rem;
  z-index: 1;
  position: relative;
`;
const ProfilePicture = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 50%;
`;
const ImagePlaceholder = styled(BsPersonCircle)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  color: var(--color-gray11);
`;
const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
`;
const ScoreWrapper = styled.div`
  ${layer2A_BodyStyle};
  position: absolute;
  bottom: 0;
  inset-inline-start: 0;
  transform: translateY(90%);
  padding: 0.5rem;
  border-radius: 0 0 15px 15px;
  box-shadow: unset;
`;
const SubclassWrapper = styled(ScoreWrapper)`
  inset-inline-start: unset;
  inset-inline-end: 0;
`;
const HeaderLabel = styled.h4`
  ${Headline7Style};
  ${HeaderLabelTheme}
  #score {
    ${HeaderScoreTheme};
  }
  #visa-subclass {
    ${layer2A_TextStyle}
  }
`;
const Name = styled.h2`
  ${TitleColor}
  ${layer2A_TitleStyle}
  z-index:1;
`;

const JobTitle = styled.h3`
  ${layer2A_Key}
  margin:0;
  width: auto;
`;
const CreatedDate = styled.div`
  ${layer2A_Key}
  margin:0;
  width: auto;
`;
