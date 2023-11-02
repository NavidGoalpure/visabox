import { HTMLAttributes, useEffect } from 'react';
import { getGsapTimeLine_FadeUp } from 'Utils';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

import {
  Container,
  AgentElement,
  MaraElement,
  FieldsContainer,
  Title,
  ViewMoreButton,
  ImageWrapper,
  AgentLogo,
  Wrapper,
  FieldTitle,
  FieldValue,
  FieldWrapper,
  ValuesContainer,
} from '../styledComponents/NormalCard';
import { MaraAgency } from 'Interfaces/Database/Lists/agents';
import Link from 'next/link';

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
  const agencyCountries = agencies?.map((agency) => agency.country);
  const uniqueCountries = [...new Set(agencyCountries)];

  return (
    <Link href={`/lists/agents/${slug}`} target='_blank'>
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
          <FieldsContainer>
            <FieldWrapper>
              <FieldTitle>{t(LanguageKeys.BusinessName)}:</FieldTitle>
              <FieldValue>{agencies?.[0]?.title?.en || '...'}</FieldValue>
            </FieldWrapper>
            <FieldWrapper>
              <FieldTitle>{t(LanguageKeys.Country)}:</FieldTitle>
              <ValuesContainer>
                {uniqueCountries?.map((country, i) => (
                  <FieldValue key={i}>{`${country} ${
                    i < uniqueCountries.length - 1 ? '-' : ''
                  }`}</FieldValue>
                ))}
              </ValuesContainer>
            </FieldWrapper>
          </FieldsContainer>
          <ViewMoreButton>{t(LanguageKeys.ViewMore)}</ViewMoreButton>
          <AgentElement>{t(LanguageKeys.Agent)}</AgentElement>
          <MaraElement>{t(LanguageKeys.Mara)}</MaraElement>
        </Wrapper>
      </Container>
    </Link>
  );
}
export default AgentCard;
