import PageLayout from 'Components/Layouts/PageContainer';
import { GetServerSideProps } from 'next';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import { NextPage } from 'next/types';
import Error from 'next/error';
import Content from 'PagesComponents/Clients/FormPage';
import { Client } from 'Interfaces/Database/Client';
import { getClientDetail } from 'Queries/client';
import { Point_Calculator_Fragment } from 'Consts/GroqFragments';
import { PAGE_PARAMS_VERSION_PRINTABLE_VALUE } from 'Consts/agents';
import { useRouter } from 'next/router';
import PrintablePage from 'PagesComponents/Clients/FormPage/PrintablePage';
import { dehydrate, DehydratedState, QueryClient, useQuery } from 'react-query';
import { ClientQueryKeys } from 'Utils/query/keys';
import { profileResParams } from 'PagesComponents/Clients/FormPage/const';

const VipAgentPage: NextPage = () => {
  const { locale } = useLocale();

  return (
    <PageLayout>
      <Seo
        title={' | Mara Box'}
        // کنونیکال رو باید اختیاریی کنیم که اگه نو ایندکس ترو بود ندیمش اصلا
        canonical={`https://www.marabox.com/${locale}/clients/navid`}
        isNoIndex={true}
      />
      <Content />
    </PageLayout>
  );
};
export default VipAgentPage;
