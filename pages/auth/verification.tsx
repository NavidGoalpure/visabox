import { GetServerSidePropsContext, NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import styled from 'styled-components';
import Content from 'PagesComponents/Auth/Verification';
import Seo from 'Components/Seo';
import { useLocale } from 'Hooks/useLocale';
import { CookieKeys, LocalStorageKeys } from 'Interfaces';
import { geCookieFromServerSide } from '../../PagesComponents/Auth/Signin/utils';
import Cookies from 'js-cookie';
import { UserRole } from 'Interfaces/Database';
import { setLocalStorage } from 'Utils';

interface Props {
  chosenRole: UserRole;
}
const UserVerification: NextPage<Props> = ({ chosenRole }) => {
  const { locale } = useLocale();
  Cookies.remove(CookieKeys?.TemporaryLocale);

  setLocalStorage({ key: LocalStorageKeys.User_Role, value: chosenRole });
  return (
    <StyledPageLayout hasFooter={false} hasMenu={false} hasBanner={false}>
      <Seo
        canonical={`https://www.marabox.com.au/${locale}/auth/verification`}
        isNoIndex={true}
      />
      <Content chosenRole={chosenRole} />
    </StyledPageLayout>
  );
};
export default UserVerification;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, locale, resolvedUrl } = context;
  const cookies = req.headers.cookie;
  const temporaryLocale =
    geCookieFromServerSide({
      cookies,
      key: CookieKeys.TemporaryLocale,
    }) || locale;

  const temporaryChosenRole = geCookieFromServerSide({
    cookies,
    key: CookieKeys.UserRoleChosenInLoginPage,
  });

  // اگه نقش کاربر توی کوکی نبود برو ۴۰۴
  if (!temporaryChosenRole)
    return {
      redirect: {
        destination: `/404`,
        permanent: false,
      },
    };
  if (locale !== temporaryLocale)
    return {
      redirect: {
        destination: `/${temporaryLocale}/${resolvedUrl}`,
        permanent: false,
      },
      props: { chosenRole: temporaryChosenRole },
    };
  return {
    props: { chosenRole: temporaryChosenRole },
  };
}
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
`;
