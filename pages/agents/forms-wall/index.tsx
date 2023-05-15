import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';

import Content from 'PagesComponents/Agents/FormsWall';

const FormsWall: NextPage = () => {
  const { locale } = useLocale();
  return (
    <PageLayout>
      {/* navid seo title and desc */}
      <Seo
        canonical={`https://www.marabox.com/${locale}/agents/forms-wall`}
      />
      <Content />
    </PageLayout>
  );
};
export default FormsWall;
