import { NextPage, GetServerSideProps, NextPageContext } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { dehydrate, QueryClient } from 'react-query';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import Content from 'PagesComponents/Agents/FormsWall';
import { withCSR } from 'Hoc/withCSR';
import { ClientQueryKeys } from 'Utils/query/keys';
import { getlistOfBasicForm } from 'Queries/agents/ListOfForms';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Agents/FormsWall/const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { listOfBasicForm_ResParams } from 'Consts/agents';

const FormsWall: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);

  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/agents/forms-wall`}
        isNoIndex={true}
      />
      <Content />
    </PageLayout>
  );
};
export default FormsWall;

export const getServerSideProps: GetServerSideProps = withCSR(
  async (ctx: NextPageContext) => {
    //
    const queryClient = new QueryClient();
    let statusCode = null;
    const resParams = listOfBasicForm_ResParams;
    try {
      await queryClient.fetchQuery(
        ClientQueryKeys.listOfBasicForm({ resParams }),
        () =>
          getlistOfBasicForm({
            lastFormDate: new Date().toISOString(),
            resParams,
          })
      );
    } catch (error: any) {
      if (ctx.res) ctx.res.statusCode = error?.response?.status;
      statusCode = ctx?.res?.statusCode || null;
    }
    return {
      props: {
        statusCode: statusCode,
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
);
