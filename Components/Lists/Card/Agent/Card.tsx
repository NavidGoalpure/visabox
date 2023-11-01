import { HTMLAttributes, useEffect } from 'react';
import { copyContent, getGsapTimeLine_FadeUp } from 'Utils';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

import {
  Container,
  AgentElement,
  MaraElement,
  Socials,
  Title,
  ViewMoreButton,
  ImageWrapper,
  AgentLogo,
  Wrapper,
  AgencyTitle,
  AgencyValue,
  AgencyWrapper,
} from '../styledComponents/NormalCard';
import { MaraAgency } from 'Interfaces/Database/Lists/agents';

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string | undefined;
  agencies: MaraAgency[] | undefined;
  slug: string;
  layerContext: '1' | '2';
  avatar: string | undefined;
}
function AgentCard({
  name,
  agencies,
  slug,
  avatar,
  layerContext,
  ...props
}: Props) {
  const { t } = useStaticTranslation(componentStatements);

  useEffect(() => getGsapTimeLine_FadeUp(slug));

  return (
    <Container className={slug} {...props}>
      <Wrapper>
        <ImageWrapper layerContext={layerContext}>
          <AgentLogo
            alt={`${slug}`}
            fill
            src={avatar || `/Images/placeholder.jpeg`}
            quality={100}
            sizes='96px'
          />
        </ImageWrapper>
        <Title>{name}</Title>
        <Socials>
          <AgencyWrapper>
            <AgencyTitle>{t(LanguageKeys.BusinessName)}:</AgencyTitle>
            <AgencyValue>{agencies?.[0]?.title?.en || '...'}</AgencyValue>
          </AgencyWrapper>
        </Socials>
        <ViewMoreButton>{t(LanguageKeys.ViewMore)}</ViewMoreButton>
        <AgentElement>{t(LanguageKeys.Agent)}</AgentElement>
        <MaraElement>{t(LanguageKeys.Mara)}</MaraElement>
      </Wrapper>
    </Container>
  );
}
export default AgentCard;
