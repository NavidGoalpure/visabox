import {
  componentStatements,
  PageKeys,
} from "@components/PagesComponents/OccupationList/Const";
import { useTranslation } from "@hooks/useTraslation";
import { Content } from "@radix-ui/react-navigation-menu";
import { GetStaticProps, NextPage } from "next";
import { Head } from "next/document";
import { Occupation } from "pages/interfaces/Documents/Occupation";
import PageLayout from "@components/Layouts/PageContainer";
import { sanityClient } from "../../../sanity";
import TooltipTag from "@elements/TooltipTag";
import styled from "styled-components/macro";
import { PageTitleStyle } from "@components/Layouts/StyledComponents";

interface Props {
  occupation: Occupation;
}
const OccupationPage: NextPage<Props> = ({ occupation }) => {
  const { t } = useTranslation(componentStatements);
  console.log("navid skilllevel=", occupation);
  return (
    <PageLayout>
      {/* <Head> */}
      {/* <title>{t(PageKeys.PageTitle)}</title> */}
      {/* <link rel="icon" href="/favicon.ico" /> */}
      {/* </Head> */}
      <Title>data</Title>
      <TooltipTag
        content={
          occupation?.anzsco_section?.priority_list
            ? occupation?.anzsco_section?.priority_list[0]?.future_demend || ""
            : ""
        }
        popupContent={"occupation."}
      />
    </PageLayout>
  );
};
export default OccupationPage;
export const getStaticPaths = async () => {
  const query = `*[_type=='occupation']{
 _id,
  slug{
    current
  },
  title
}`;
  const occupations = await sanityClient.fetch(query);
  const paths = occupations.map((occupation: Occupation) => ({
    params: {
      slug:
        occupation?.slug?.current || occupation.title.en.replaceAll(" ", "_"),
      //navid
      locale: "en",
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("***navid params=", params);
  const query = `
    *[_type=='occupation' && slug.current == $slug]
[0]
{
_id,
code,
  title,
  anzsco_section {...,
    unit_group  ->{
  skill_level
}
   },
assessing_authority,
visa_option_section
}
  `;
  const occupation = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!occupation) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      occupation,
    },
    revalidate: 60,
  };
};
const Title = styled.h1`
  ${PageTitleStyle}
`;