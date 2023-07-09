import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import {
    componentStatements,
    LanguageKeys,
} from 'PagesComponents/Blog/const';
import SmartBlogWall from 'Components/Cards/Type1/BlogCards';

const BlogPage: NextPage = () => {
    const { locale } = useLocale();
    const { t } = useStaticTranslation(componentStatements);
    return (
        <PageLayout>
            <Seo
                title={t(LanguageKeys.SeoTitle)}
                canonical={`https://www.marabox.com/${locale}/blog`}
                description={t(LanguageKeys.SeoDesc)}
            />
            <SmartBlogWall />
        </PageLayout>
    );
};
export default BlogPage;
