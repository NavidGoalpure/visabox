import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Lists/SocialPage/const';
import { useLocale } from 'Hooks/useLocale';
import Content from 'PagesComponents/Lists/SocialPage';
import Seo from 'Components/Seo';
import { LocalStorageKeys } from 'Interfaces';
import { SupportedCountry } from 'Interfaces/Database';
import { useSession } from 'next-auth/react';
import { getClientDetail } from 'Queries/client';
import { useQuery } from 'react-query';
import { getLocalStorage } from 'Utils';
import { ClientQueryKeys } from 'Utils/query/keys';
import NotFound from 'pages/404';

const SocialPages: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const { data: session } = useSession();
  const reqParams = `email == "${session?.user?.email || 'defensive'}"`;
  const resParams = `
      country
      `;

  const { data } = useQuery(
    ClientQueryKeys.detail({
      reqParams,
      resParams,
    }),
    () => {
      return getClientDetail({
        reqParams,
        resParams,
      });
    },
    {
      enabled: !!session?.user?.email,
    }
  );
  const clientCountry = data?.client?.[0]?.country;
  //
  if (
    clientCountry === SupportedCountry.Iran ||
    getLocalStorage(LocalStorageKeys.Country) === SupportedCountry.Iran
  )
    return (
      <PageLayout>
        <Seo
          title={t(LanguageKeys.SeoTitle)}
          description={t(LanguageKeys.SeoDesc)}
          canonical={`https://www.marabox.com.au/${locale}/lists/social-pages`}
        />
        <Content />
      </PageLayout>
    );
  return <NotFound />;
};
export default SocialPages;
