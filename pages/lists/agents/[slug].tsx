import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  LanguageKeys,
  componentStatements,
} from 'PagesComponents/Lists/Agents/AgentPage/const';
import { useLocale } from 'Hooks/useLocale';
import { useRouter } from 'next/router';
import Content from 'PagesComponents/Lists/Agents/AgentPage';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import Seo from 'Components/Seo';
import { Agents } from 'Consts/Businesses/agents';

const VipAgentPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const { dt } = useDynamicTranslation();
  const chosenAgent = Agents.filter((agent) => agent.slug === slug);

  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle, [
          { $agent: dt(chosenAgent[0]?.name) || '' },
          { $agent: dt(chosenAgent[0]?.name) || '' },
        ])}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/lists/agents/${chosenAgent[0]?.slug}`}
      />
      <Content chosenAgent={chosenAgent[0]} />
    </PageLayout>
  );
};
export default VipAgentPage;
