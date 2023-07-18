import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  LanguageKeys,
  componentStatements,
} from 'PagesComponents/Lists/Naaties/NaatiPage/const';
import { useLocale } from 'Hooks/useLocale';
import { useRouter } from 'next/router';
import Content from 'PagesComponents/Lists/Naaties/NaatiPage';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import Seo from 'Components/Seo';
import { NAATIES } from 'Consts/Lists/naati';
import { GetStaticProps, NextPage } from 'next/types';
import Error from 'next/error';
import { Naati } from 'Interfaces/Database/Lists/naaties';
import { Languages } from 'Interfaces';

interface Props {
  chosenNaati?: Naati;
  errorCode?: number;
}

const NaatiPage: NextPage<Props> = ({ chosenNaati, errorCode }) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const { dt } = useDynamicTranslation();
  if (errorCode) return <Error statusCode={errorCode} />;

  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle, [
          { $naati: dt(chosenNaati?.fullName) || '' },
        ])}
        image={chosenNaati?.avatar}
        description={dt(chosenNaati?.desc)}
        canonical={`https://www.marabox.com/${locale}/lists/naaties/${chosenNaati?.slug}`}
      />
      <Content chosenNaati={chosenNaati} />
    </PageLayout>
  );
};
export default NaatiPage;

export const getStaticPaths = async ({ locales }: any) => {
  let paths: { params: { slug: string }; locale: Languages }[] = [];

  NAATIES.map((naati) => {
    locales.map((locale: Languages) => {
      if (naati?.slug) paths.push({ params: { slug: naati.slug }, locale });
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const chosenNaati = NAATIES.filter((naati) => naati.slug === params?.slug)[0];

  if (!chosenNaati)
    return {
      props: {
        errorCode: 404,
      },
    };

  return {
    props: {
      chosenNaati,
    },
  };
};
