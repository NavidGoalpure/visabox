import MarcyaMovingRobot from './Images/MarcyaMovingRobot.svg';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { HTMLAttributes } from 'react';
import { componentStatements, LanguageKeys } from './const';
import {
  Container,
  StyledLink,
  Subtitle,
  Title,
  GoToMarcya,
  GoToAiChat,
  MarcyaPicture,
  MarcyaPictureWrapper,
} from './styledComponents';

const MobileIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();

  return (
    <Container {...props}>
      <Title>{t(LanguageKeys.BotName)}</Title>
      <MarcyaPictureWrapper>
        <MarcyaPicture
          id={'marcya-image'}
          width={450}
          height={450}
          src={MarcyaMovingRobot}
          alt={'marcya-image'}
        />
      </MarcyaPictureWrapper>
      <Subtitle>{t(LanguageKeys.BotDesc)}</Subtitle>
      <StyledLink href={`/australia-migration-ai/introduce-marcya`}>
        <GoToMarcya id={`home_goto_marcya_${locale}`}>
          {t(LanguageKeys.MarcyaCTA)}
        </GoToMarcya>
      </StyledLink>
      <StyledLink href={`/australia-migration-ai/chat`}>
        <GoToAiChat id={`home_goto_chat_${locale}`}>
          {t(LanguageKeys.ChatCTA)}
        </GoToAiChat>
      </StyledLink>
    </Container>
  );
};
export default MobileIndex;

///////////////
