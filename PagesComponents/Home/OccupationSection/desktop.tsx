import OccupationCard from 'Components/Cards/Type1/OocccuptionCard';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { CardData, componentStatements, LanguageKeys } from './const';
import {
  Container,
  StyledLink,
  Subtitle,
  Title,
  ViewAll,
} from './styledComponents';

import LazyLoadComponentUi from 'Elements/LazyLoadComponentUi';

const DesktopIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();

  return (
    <Container {...props}>
      <Side className='occupation-card-section'>
        <OccupationCard
          code={CardData.code}
          title={CardData.title}
          description={CardData.description}
          slug={CardData.slug}
          tasks={CardData.tasks}
        />
      </Side>
      <Side className='occupation-text-section'>
        <Title>{t(LanguageKeys.Title)}</Title>
        <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>
        <StyledLink href={`${locale}/occupations`}>
          <ViewAll id={`home_all-occupations_${locale}`}>
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
