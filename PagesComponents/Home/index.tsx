import Hero from './Hero';
import OccupationSection from './OccupationSection';
import MarcyaSection from './MarcyaSection';
import styled from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import Banner from '../../Components/Banner';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import AgentsSection from './AgentsSection';
import LazyLoadComponentUi from 'Elements/LazyLoadComponentUi';
const HomeContent: React.FC = () => {
  const { locale } = useLocale();

  const { t } = useStaticTranslation(componentStatements);
  return (
    <>
      <Hero />
      <Container id='section-container'>
        <Banner
          navigateTo={`/${locale}/australia-migration-ai/chat`}
          desc={
            <div
              dangerouslySetInnerHTML={{ __html: t(LanguageKeys.BannerDesc) }}
            ></div>
          }
          stampText={t(LanguageKeys.StampText)}
          buttonText={t(LanguageKeys.BannerButtonText)}
        />
        <LazyLoadComponentUi>
          <OccupationSection className='section' />
          <AgentsSection className='section' />
          <MarcyaSection className='section' />
        </LazyLoadComponentUi>
      </Container>
    </>
  );
};
export default HomeContent;

///////////////
const Container = styled.div`
  position: relative;
  margin-top: 2rem;
`;
