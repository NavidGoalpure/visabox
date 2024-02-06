import { HTMLAttributes, useEffect, useState } from 'react';
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
  ColFieldWrapper,
  ValuesContainer,
  RowFieldWrapper,
} from './styledComponents/NormalCard';
import { MaraAgency } from 'Interfaces/Database/Lists/agents';
import Link from 'next/link';
import styled from 'styled-components';
import { getCountryFlag, getCountryOrAlias } from 'Utils/country-state-city';
import { getAgentAvatar } from 'Queries/agents/Detail';

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string | undefined;
  agencies: MaraAgency[] | undefined;
  slug: string;
  hasAvatar?: boolean;
  layerContext: '1' | '2';
}
function AgentCard({
  name,
  agencies,
  slug,
  hasAvatar,
  layerContext,
  className,
  ...props
}: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const [imgSrc, setImgSrc] = useState('/Images/placeholder.jpeg');
  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const avatar = await getAgentAvatar({
          slug,
        });

        if (avatar) {
          setImgSrc(avatar);
        }
      } catch (error: any) {
        console.error('Error fetching avatar:', error?.message);
      }
    };

    if (slug && hasAvatar) {
      fetchAvatar();
    }
  }, [hasAvatar]);
  const agencyCountries = agencies?.map((agency) =>
    getCountryOrAlias(agency?.country)
  );
  const flags = agencyCountries?.map((country) =>
    getCountryFlag({
      countryName: country,
    })
  );
  const uniqueCountryFlags = [...new Set(flags)];

  return (
    <Container className={`${slug} ${className}`} {...props}>
      <Link href={`/lists/agents/${slug}`} target='_blank' prefetch={false}>
        <StyledWrapper>
          <ImageWrapper layerContext={layerContext}>
            <AgentLogo
              alt={`${slug}`}
              fill
              src={imgSrc}
              quality={100}
              sizes='96px'
            />
          </ImageWrapper>
          <Title>{name}</Title>
          <FieldsContainer>
            <ColFieldWrapper>
              <FieldTitle>{t(LanguageKeys.BusinessName)}:</FieldTitle>
              <FieldValue style={{ direction: 'ltr' }}>
                {agencies?.[0]?.title?.en || '...'}
              </FieldValue>
            </ColFieldWrapper>
            <RowFieldWrapper>
              <FieldTitle style={{ marginInlineEnd: '0.5rem' }}>
                {t(LanguageKeys.Country)}:
              </FieldTitle>
              <ValuesContainer>
                {uniqueCountryFlags?.map((flag, i) => {
                  if (flag)
                    return (
                      <FieldValue key={i}>{`${flag} ${
                        i < uniqueCountryFlags.length - 1 ? '-' : ''
                      }`}</FieldValue>
                    );
                })}
              </ValuesContainer>
            </RowFieldWrapper>
          </FieldsContainer>
          <ViewMoreButton>{t(LanguageKeys.ViewMore)}</ViewMoreButton>
          <AgentElement>{t(LanguageKeys.Agent)}</AgentElement>
          <MaraElement>{t(LanguageKeys.Mara)}</MaraElement>
        </StyledWrapper>
      </Link>
    </Container>
  );
}
export default AgentCard;

const StyledWrapper = styled(Wrapper)`
  height: 24rem;
  min-width: 340px;
`;
