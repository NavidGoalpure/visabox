import { GetServerSideProps, NextPage, NextPageContext } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Lists/SocialPage/const';
import { useLocale } from 'Hooks/useLocale';
import Content from 'PagesComponents/Australia-migration-ai/Marcy';
import Seo from 'Components/Seo';

interface Props {
  agentId: string;
}
const MarcyPages: NextPage<Props> = ({ agentId }) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);

  return (
    <PageLayout>
      {/* navid correct seo */}
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/australia-migration-ai/marcy`}
      />
      <Content agentId={agentId} />
    </PageLayout>
  );
};

export default MarcyPages;
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      agentId: process?.env?.MIGRATION_AGENT_ID || 'defensive',
    },
  };
};
