import SuccessToast from 'Elements/Toast/Success';
import { useLocale } from 'Hooks/useLocale';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import { getClientDetail } from 'Queries/client';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { sanityClient } from 'Utils/sanity';

function Content() {
  const router = useRouter();
  const { locale } = useLocale();

  const { data: session } = useSession();
  const mutation = useMutation({
    mutationFn: () => {
      return fetch('/api/client/verification', {
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
          console.log('navid success res=', res.clientData);

          //  navid change toast
          SuccessToast('Success');
          // اگر کلاینت قبلا وجود داشت برو به هوم پیج
          if (res?.clientData[0]?.name) router.push(`/${locale}`);
          // اگر کلاینت برای اولین بار ثبت نام کرده بود
          else router.push(`/${locale}/forms/client`);
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

  return <h1> trying to sign you in</h1>;
}
export default Content;
