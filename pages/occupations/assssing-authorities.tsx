import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import Head from 'next/head';

import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Occupations/AssssingAuthoritties/const';
import { useLocale } from 'Hooks/useLocale';
import Content from 'PagesComponents/Occupations/AssssingAuthoritties';
import Seo from 'Components/Seo';
import { useSession, signIn, signOut } from 'next-auth/react';

const OccupationPage: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const { data: session } = useSession();

  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/occupations/assssing-authorities`}
      />
      {!session ? (
        <>
          <p>Not signed in</p>
          <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      ) : (
        <div>
          <h4>Signed in as {session?.user?.name}</h4>
          <button onClick={() => signOut()}>Sign out</button>
          <Content />
        </div>
      )}
    </PageLayout>
  );
};
export default OccupationPage;
