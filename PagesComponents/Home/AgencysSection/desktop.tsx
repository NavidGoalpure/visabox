import VIPAgentCard from 'Components/Lists/Card/Agent/VIPCard';
import { Agents } from 'Consts/Lists/agents';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import Link from 'next/link';
import styled from 'styled-components';
import { componentStatements, LanguageKeys } from './const';
import {
  Container,
  StyledLink,
  Subtitle,
  Title,
  ViewAll,
} from './styledComponents';
import { HTMLAttributes, useEffect } from 'react';
import { GsapSectionAnimation_1 } from '../utils';
import { AGENCYS } from 'Consts/Lists/agency';
import VIPAgencyCard from 'Components/Lists/Card/Agency/VIPCard';
import { FeaturedPlan_Business } from 'Interfaces/Database/Lists';

const DesktopIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const vipAgency = AGENCYS.find(
    (AGENCYS) => AGENCYS.featuredPlan === FeaturedPlan_Business.VIP
  );
  useEffect(() => {
    GsapSectionAnimation_1('agency');
  }, []);
  return (
    <>
      <Container {...props}>
        <Side className='agency-card-section'>
          {vipAgency && (
            <VIPAgencyCard
              name={vipAgency.name}
              desc={vipAgency.desc}
              slug={vipAgency.slug}
              logoUrl={vipAgency.logoUrl}
            />
          )}
        </Side>
        <Side className='agency-text-section'>
          <Title>{t(LanguageKeys.Title)}</Title>
          <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

          <StyledLink href={`${locale}/lists/agencies`}>
            <ViewAll id={`home_all-agencies_${locale}`}>
              {t(LanguageKeys.CTA)}
            </ViewAll>
          </StyledLink>
        </Side>
      </Container>
    </>
  );
};
export default DesktopIndex;
const Side = styled.div`
  flex: 1;
`;
const StyledCard = styled(VIPAgentCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
