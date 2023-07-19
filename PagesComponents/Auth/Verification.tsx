import { Loading } from 'Elements/Loading';
import ErrorToast from 'Elements/Toast/Error';
import SuccessToast from 'Elements/Toast/Success';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import { getClientDetail } from 'Queries/client';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { componentStatements, LanguageKeys } from './const';

function Content() {
  const router = useRouter();
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const successToastMessage = t(LanguageKeys.SuccessToastMessage);
  const FailedToastMessage = t(LanguageKeys.FailedToastMessage);
  const { data: session } = useSession();
  const reqParams = `email == "${session?.user?.email || 'defensive'}"`;
  const resParams = `name`;
  const mutation = useMutation({
    mutationFn: () => {
      return fetch('/api/auth/verification', {
        method: 'POST',
        body: JSON.stringify({ session }),
      });
    },
    onSuccess: (res) => {
      if (!res.ok) {
        throw new Error('couldnt create the user');
      }
      // اطلاعات کاربر رو میگیریم تا بفهمیم فرم پایه رو پر کرده یا نه
      // بر اساس اون تصمیم میگیریم کجا بفرستیمش
      getClientDetail({ reqParams, resParams })
        .then((res) => {
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
    },
    onError: () => {
      ErrorToast(FailedToastMessage);
    },
  });
  useEffect(() => {
    if (session) {
      mutation.mutate();
    }
  }, [session]);

  return (
    <Container>
      <StyledLoading />
      <Title>{t(LanguageKeys.Title)}</Title>
      <Desc>{t(LanguageKeys.Desc)}</Desc>
    </Container>
  );
}
export default Content;
const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const StyledLoading = styled(Loading)`
  width: 10rem;
  height: 10rem;
  margin: auto;
`;
const Title = styled.h1`
  ${Layer1_TitleStyle};
`;
const Desc = styled.h3`
  ${Layer1_SubtitleStyle};
  width: fit-content;
`;
