import { Loading } from 'Elements/Loading';
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
  const { data: session } = useSession();
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
      const email = session?.user?.email || 'defensive';
      getClientDetail({ email, resParams: `name` })
        .then((res) => {
          console.log("navid success res=", res.clientData);
          SuccessToast(t(LanguageKeys.ToastMessage));
          // اگر کلاینت قبلا وجود داشت برو به هوم پیج
          if (res?.clientData[0]?.name) {
            router.push(`/${locale}`);
          }
          // اگر کلاینت برای اولین بار ثبت نام کرده بود
          else {
            router.push(`/${locale}/forms/client`);
          }
        })
        .catch((err) => console.log('navid fail res=', err));
    },
    onError: (error) => {
      console.log('navid error ===', error);
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
