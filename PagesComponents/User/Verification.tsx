import SuccessToast from "Elements/Toast/Success";
import { useLocale } from "Hooks/useLocale";
import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useMutation } from "react-query";

function Content() {
    const router = useRouter();
    const { locale } = useLocale();

    const { data: session } = useSession();
    const mutation = useMutation({
      mutationFn: () => {
        return fetch("/api/user/verification", {
          method: "POST",
          body: JSON.stringify({ session }),
        });
      },
      onSuccess: (res) => {
        if (!res.ok) {
          console.log("navid res ===", res);
          console.log("navid res stringify ===", JSON.stringify(res.body));
          throw new Error("couldnt patch the user");
        }
        router.push(`/${locale}/forms/client`);
        //  navid change toast
        SuccessToast("success");
      },
      onError: (error) => {
        console.log("navid error ===", error);
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
