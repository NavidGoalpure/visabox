import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import { componentStatements, LanguageKeys } from 'PagesComponents/Blog/const';
import SmartBlogWall from 'Components/Cards/Type1/BlogCards';
import { LocalStorageKeys } from 'Interfaces';
import { SupportedCountry } from 'Interfaces/Database';
import { useSession } from 'next-auth/react';
import { getClientDetail } from 'Queries/client';
import { useQuery } from 'react-query';
import { getLocalStorage } from 'Utils';
import { ClientQueryKeys } from 'Utils/query/keys';
import NotFound from 'pages/404';

const BlogPage: NextPage = () => {
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
          canonical={`https://www.marabox.com.au/${locale}/blog`}
          description={t(LanguageKeys.SeoDesc)}
        />
        <SmartBlogWall />
      </PageLayout>
    );
  return <NotFound />;
};
export default BlogPage;
