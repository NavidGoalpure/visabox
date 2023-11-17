import { Loading } from 'Elements/Loading';
import ErrorToast from 'Elements/Toast/Error';
import SuccessToast from 'Elements/Toast/Success';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import { getClientDetail } from 'Queries/client';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { componentStatements, LanguageKeys } from './const';
import { UserRole } from 'Interfaces/Database';
import Cookies from 'js-cookie';
import { CookieKeys, GtmEvents, LocalStorageKeys } from 'Interfaces';
import { createUserOrGetExistData } from 'Queries';
import { ContentOrError } from 'Components/contentOrError';
import { AxiosError } from 'axios';
import { Logout } from 'Utils/user';
import { PrimaryButton } from 'Elements/Button/Primary';
import { fireGtmEvent, removeLocalStorage } from 'Utils';

interface Props {
  chosenRole: UserRole;
}
const Content: React.FC<Props> = ({ chosenRole }) => {
  const router = useRouter();

  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const successToastMessage = t(LanguageKeys.SuccessToastMessage);
  const FailedToastMessage = t(LanguageKeys.FailedToastMessage);
  const { data: session } = useSession();

  const reqParams = `email == "${session?.user?.email || 'defensive'}"`;
  const resParams = `name, country`;
  const { data, isLoading, error, status } = useQuery<
    any,
    AxiosError<{ error: string; message: string }>
  >(
    ['createUserOrGetExistData', session, chosenRole],
    () => createUserOrGetExistData({ session, userRole: chosenRole }),
    {
      enabled: !!session,
    }
  );
  // Now you can use the 'data' object in your UI
  const user = data?.data?.result; // Assuming your API response structure

  if (user) {
    Cookies.remove(CookieKeys?.UserRoleChosenInLoginPage);

    // اطلاعات کاربر رو میگیریم تا بفهمیم فرم پایه رو پر کرده یا نه
    // بر اساس اون تصمیم میگیریم کجا بفرستیمش
    if (chosenRole === UserRole.Client) {
      getClientDetail({ reqParams, resParams })
        .then((res) => {
          if (res?.client[0]?.country) {
            removeLocalStorage(LocalStorageKeys.Country);
          }
          // اگر کلاینت قبلا وجود داشت برو به هوم پیج
          if (res?.client[0]?.name) {
            router.push(`/${locale}`);
          }
          // اگر کلاینت برای اولین بار ثبت نام کرده بود
          else {
            router.push(`/${locale}/clients/point-calculator`);
          }
          SuccessToast(successToastMessage);
        })
        .catch(() => {
          ErrorToast(FailedToastMessage);
          setTimeout(() => {
            router.push(`/${locale}`);
          }, 4000);
        });
    }
    if (chosenRole === UserRole.Agency) {
      //navid بعدا باید به سنیتی رکوئست بزنیم که آیا این وکیل موجوده یا نه و آیا کانفرم شده یا نه
      if (user?._type === 'agency') {
        fireGtmEvent({
          eventName: GtmEvents.agentLogin,
          parameters: { user },
        });
      }
      router.push(`/${locale}/agency/forms-wall`);
    }
  }

  const errorMessages = error?.response?.data;
  if (error?.response?.status === 409) {
    setTimeout(() => Logout(), 5000);
  }

  return (
    <Container>
      {isLoading && <StyledLoading />}

      {status === 'idle' ? (
        <>
          <RedirectTile>{t(LanguageKeys.NavigateTitle)}</RedirectTile>

          <RedirectContainer>
            <PrimaryButton onClick={() => router.push('/')}>
              {t(LanguageKeys.HomePage)}
            </PrimaryButton>
            <PrimaryButton onClick={() => router.push('/auth/signin')}>
              {t(LanguageKeys.LoginPage)}
            </PrimaryButton>
          </RedirectContainer>
        </>
      ) : (
        <ContentOrError
          isError={!!error}
          errorTitle={errorMessages?.error}
          errorSubTitle={errorMessages?.message}
          content={
            <>
              <Title>{t(LanguageKeys.Title)}</Title>
              <Subtitle>{t(LanguageKeys.Desc)}</Subtitle>
            </>
          }
        />
      )}
    </Container>
  );
};
export default Content;
const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1rem;
`;
const StyledLoading = styled(Loading)`
  width: 10rem;
  height: 10rem;
  margin: auto;
`;
const Title = styled.h1`
  ${Layer1_TitleStyle};
`;
const Subtitle = styled.h3`
  ${Layer1_SubtitleStyle};
  width: fit-content;
`;
const RedirectTile = styled.h2`
  ${Layer1_TitleStyle}
`;
const RedirectContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
