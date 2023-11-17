import Hero from './Hero';
import OccupationSection from './OccupationSection';
import ExchangesSection from './ExchangesSection';
import SocialsSection from './SocialsSection';
import NattiesSection from './NattiesSection';
import styled from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import { Languages } from 'Interfaces';
import Banner from '../../Components/Banner';
import { useSession } from 'next-auth/react';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { getClientDetail } from 'Queries/client';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { ClientQueryKeys } from 'Utils/query/keys';
import CountryModal from '../../Components/Layouts/CountryModal';
import { ClientError } from '@sanity/client';
import { Client } from 'Interfaces/Database/Client';
import { isAgencyLogedIn } from 'Utils/user';
import AgentsSection from './AgentsSection';

const HomeContent: React.FC = () => {
  const { locale } = useLocale();
  const { data: session } = useSession();
  const { t } = useStaticTranslation(componentStatements);
  const [hasClientCompletedForm, setHasClientCompletedForm] =
    useState<boolean>(true);
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
  useEffect(() => {
    if (
      !isLoading &&
      !isIdle &&
      data?.client?.[0]?.completed_forms?.length === 1
    ) {
      setHasClientCompletedForm(true);
    } else if (
      !isLoading &&
      !isIdle &&
      data?.client?.[0]?.completed_forms?.length !== 1
    )
      setHasClientCompletedForm(false);
  }, [isLoading, isIdle, data]);
  return (
    <>
      <Hero />
      <Container id='section-container'>
        {(!session || !hasClientCompletedForm) && !isAgencyLogedIn() && (
          <Banner
            navigateTo={`/${locale}/clients/point-calculator`}
            desc={
              <div
                dangerouslySetInnerHTML={{ __html: t(LanguageKeys.BannerDesc) }}
              ></div>
            }
            stampText={t(LanguageKeys.StampText)}
            buttonText={t(LanguageKeys.BannerButtonText)}
          />
        )}
        <OccupationSection className='section' />
        <AgentsSection className='section' />
        <ExchangesSection className='section' />
        {locale === Languages.fa && <SocialsSection className='section' />}
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
