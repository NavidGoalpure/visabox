import { VipSocialMedias } from 'Consts/Lists/Socials';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { HTMLAttributes } from 'react';
import { componentStatements, LanguageKeys } from './const';
import {
  Container,
  StyledLink,
  Subtitle,
  Title,
  ViewAll,
} from './styledComponents';
import SmartSocialCard from 'Components/Lists/SocialCard';
const MobileIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();

  return (
    <Container {...props}>
      <Title>{t(LanguageKeys.Title)}</Title>
      <SmartSocialCard {...VipSocialMedias[0]} />
      <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

      <StyledLink href={`${locale}/lists/social-pages`}>
        <ViewAll id={`home_all-socials_${locale}`}>
          {t(LanguageKeys.CTA)}
        </ViewAll>
      </StyledLink>
    </Container>
  );
};
export default MobileIndex;
