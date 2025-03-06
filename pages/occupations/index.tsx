import type { GetServerSideProps, Metadata, NextPage, NextPageContext } from "next";
import {
  LanguageKeys,
  componentStatements,
  FILTERD_Codes__HIGHEST_NUMBER__DEFAULT,
} from "PagesComponents/Occupations/List/const";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import Content from "PagesComponents/Occupations/List";
import PageLayout from "Components/Layouts/PageContainer";
import { sanityClient } from "Utils/sanity";
import { dehydrate, QueryClient } from "react-query";
import { getListQuery } from "Queries/occupations/List";
import { withCSR } from "Hoc/withCSR";
import Error from "next/error";
import { useLocale } from "Hooks/useLocale";
import Seo from "Components/Seo";
import { FiltersContextProvider } from "PagesComponents/Occupations/List/Context/SearchFilter";
import { OccupationsQueryKeys } from "Utils/query/keys";

// farzam fix later
// export const metadata: Metadata = {
//   title: "Skill Occupation List | Mara Box",
//   description:
//     "See the full Skilled Occupations List & find out whether your occupation is eligible to apply for an Australian Skilled or Work Visa | Contact us for more info",
//   openGraph: {
//     title: "Skill Occupation List | Mara Box",
//     description:
//       "See the full Skilled Occupations List & find out whether your occupation is eligible to apply for an Australian Skilled or Work Visa | Contact us for more info",
//     images: ["https://marabox.com.au/ogImage.png"], // Absolute URL
//     url: "https://www.marabox.com.au/en/occupations/", // important for telegram.
//     type: "website",
//   },
// };
interface Props {
  statusCode: number | null;
}
const OccupationList: NextPage<Props> = ({ statusCode }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  //
  if (statusCode) <Error statusCode={statusCode} />;
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com.au/${locale}/occupations/`}
      />
      <FiltersContextProvider>
        <Content />
      </FiltersContextProvider>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = withCSR(

  async (ctx: NextPageContext) => {
    //
    const queryClient = new QueryClient();
    let statusCode = null;

    try {
      await queryClient.fetchQuery(OccupationsQueryKeys.list({}), () =>
        sanityClient.fetch(
          getListQuery({
            searchCondition: "",
            filteredOccupationRange: {
              highestNumber: 0,
              lowerNumber: FILTERD_Codes__HIGHEST_NUMBER__DEFAULT,
            },
          })
        )
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

export default OccupationList;
