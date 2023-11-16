import AgentCard from 'Components/Lists/Card/Agent/Card';
import { NAATIES } from 'Consts/Lists/naati';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Status } from 'Interfaces/Database';
import { HTMLAttributes, useEffect } from 'react';
import styled from 'styled-components';
import { slugify } from 'Utils';
import { GsapSectionAnimation_2 } from '../utils';
import { componentStatements, LanguageKeys } from './const';
import {
  Container,
  StyledLink,
  Subtitle,
  Title,
  ViewAll,
} from './styledComponents';

const DesktopIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  useEffect(() => {
    GsapSectionAnimation_2('natties');
  }, []);
  return (
    <Container {...props}>
      <Side className='natties-card-section'>
        {/* {AGENTS[0]?.status === Status.ACTIVE && (
          <AgentCard
           fullname
          />
        )} */}
      </Side>
      <Side className='natties-text-section'>
        <Title>{t(LanguageKeys.Title)}</Title>
        <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>
        <StyledLink href={`${locale}/lists/naaties`}>
          <ViewAll id={`home_all-natties_${locale}`}>
            {t(LanguageKeys.CTA)}
          </ViewAll>
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
