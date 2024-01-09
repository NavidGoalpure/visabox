import MarcyaMovingRobot from './Images/MarcyaMovingRobot.svg';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { HTMLAttributes, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { GsapSectionAnimation_2 } from '../utils';
import { componentStatements, LanguageKeys } from './const';
import {
  Container,
  StyledLink,
  Subtitle,
  Title,
  GoToMarcya,
  MarcyaPicture,
  MarcyaPictureWrapper,
  GoToAiChat,
} from './styledComponents';

const DesktopIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  useEffect(() => {
    GsapSectionAnimation_2('exchanges');
  }, []);
  const { locale } = useLocale();
  return (
    <Container {...props}>
      {/* //navid change exchange */}
      <Side className='exchanges-card-section'>
        <MarcyaPictureWrapper>
          <MarcyaPicture
            id={'marcya-image'}
            width={450}
            height={450}
            src={MarcyaMovingRobot}
            alt={'marcya-image'}
          />
        </MarcyaPictureWrapper>
      </Side>
      <Side className='exchanges-text-section'>
        <Title>{t(LanguageKeys.BotName)}</Title>
        <Subtitle>{t(LanguageKeys.BotDesc)}</Subtitle>
        <StyledLink href={`/australia-migration-ai/introduce-marcya`}>
          <GoToMarcya id={`home_all-exchanges_${locale}`}>
            {t(LanguageKeys.MarcyaCTA)}
          </GoToMarcya>
        </StyledLink>
        <StyledLink href={`/australia-migration-ai/chat`}>
          <GoToAiChat>{t(LanguageKeys.ChatCTA)}</GoToAiChat>
        </StyledLink>
      </Side>
    </Container>
  );
};
export default DesktopIndex;
const Side = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
