import { NextPage } from "next";
import PageLayout from "Components/Layouts/PageContainer";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";
import SuccessToast from "Elements/Toast/Success";
import { useLocale } from "Hooks/useLocale";

const UserVerification: NextPage = () => {
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
      //   router.push(`/${locale}/forms/client`);
      console.log("navid res ===", res);
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
  return (
    <StyledPageLayout>
      <h1> trying to sign you in</h1>
    </StyledPageLayout>
  );
};
export default UserVerification;
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
  #PageContainer-content {
    padding: 0;
  }
`;
