import Hero from './Hero';
import OccupationSection from './OccupationSection';
import MarcyaSection from './MarcyaSection';
import styled from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import Banner from '../../Components/Banner';
import { useSession } from 'next-auth/react';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { getClientDetail } from 'Queries/client';

import { useQuery } from 'react-query';
import { ClientQueryKeys } from 'Utils/query/keys';
import { ClientError } from '@sanity/client';
import { Client } from 'Interfaces/Database/Client';

import AgentsSection from './AgentsSection';

const HomeContent: React.FC = () => {
  const { locale } = useLocale();
  const { data: session } = useSession();
  const { t } = useStaticTranslation(componentStatements);

  const reqParams = `email == "${session?.user?.email || 'defensive'}"`;
  const resParams = `name,
                  completed_forms`;
  const { data, isLoading, isIdle } = useQuery<
    { client: Client[] },
    ClientError
  >(
    ClientQueryKeys.detail({
      reqParams,
      resParams,
    }),
    () => {
      return getClientDetail({
        reqParams,
        resParams,
      });
    }
  );

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

        <OccupationSection className='section' />
        <AgentsSection className='section' />
        <MarcyaSection className='section' />
        {/* {locale === Languages.fa && <SocialsSection className='section' />} */}
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
