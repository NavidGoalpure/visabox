import { GetServerSidePropsContext, NextPage } from "next";
import PageLayout from "Components/Layouts/PageContainer";
import styled from "styled-components";
import Content from "PagesComponents/Auth/Verification";
import Seo from "Components/Seo";
import { useLocale } from "Hooks/useLocale";
import { CookieKeys } from "Interfaces";
import { getValueFromCookies } from "../../PagesComponents/Auth/Signin/utils";
import Cookies from "js-cookie";

const UserVerification: NextPage = () => {
  const { locale } = useLocale();
  Cookies.remove(CookieKeys?.TemporaryLocale);
  return (
    <StyledPageLayout hasFooter={false} hasMenu={false} hasBanner={false}>
      <Seo canonical={`https://www.marabox.com/${locale}/auth/verification`} />
      <Content />
    </StyledPageLayout>
  );
};
export default UserVerification;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, locale, resolvedUrl } = context;
  const cookies = req.headers.cookie;
  const temporaryLocale =
    getValueFromCookies({
      cookies,
      key: CookieKeys.TemporaryLocale,
    }) || locale;
  if (locale !== temporaryLocale)
    return {
      redirect: {
        destination: `/${temporaryLocale}/${resolvedUrl}`,
        permanent: false,
      },
      props: {},
    };
  return {
    props: {},
  };
}
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
`;
