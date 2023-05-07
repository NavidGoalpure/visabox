import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { WizardContext } from "../Contexts/Wizard/Context";
import { useContext } from "react";
import { PrevButton, PrevIcon } from "./StyledComponents";
import styled, { css } from "styled-components";
import { Headline3Style } from "Styles/Typo";
import theme from "styled-theming";
import { layer2A_SubtitleStyle } from "Styles/Theme/Layers/layer2/style";
import { useMutation, useQueryClient } from "react-query";
import SuccessToast from "Elements/Toast/Success";
import { useSession } from "next-auth/react";
import { UserQueryKeys } from "Utils/query/keys";
import { useRouter } from "next/router";
import { useLocale } from "Hooks/useLocale";
import { FormDataContext } from "../Contexts/FormDataContext/Context";
import { BsCheck2, BsFillCheckCircleFill } from "react-icons/bs";
import { PrimaryButton } from "Elements/Button/Primary";

const Step9 = () => {
  const { step } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const router = useRouter();
  const { locale } = useLocale();
  const { clientData } = useContext(FormDataContext);
  const successToastMessage = t(LanguageKeys.SuccessToastText);
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const mutation = useMutation({
    mutationFn: ({ isSharable }: { isSharable: boolean }) => {
      return fetch("/api/forms/client", {
        method: "POST",
        body: JSON.stringify({ clientData: { ...clientData, isSharable } }),
      });
    },
    onSuccess: (res) => {
      if (!res.ok) {
        console.log("navid res ===", res);
        console.log("navid res stringify ===", JSON.stringify(res.body));
        throw new Error("couldnt patch the user");
      }
      router.push(`/${locale}/`);
      SuccessToast(successToastMessage);
      queryClient.removeQueries(
        UserQueryKeys.detail({
          email: session?.user?.email || "defensive",
          resParams: `
      _id,
      name,
      lastname,
      age,
      phone,
      marital,
      field_of_study,
      degree,
      current_job,
      work_experience,
      australian_work_experience,
      ielts_score,
      is_sharable`,
        })
      );
    },
    onError: (errors) => {
      // navid make an error handling function here
      console.log("navid errorr ===", errors);
    },
  });
  return (
    <Container>
      <Logo />
      <Title>فرم ارزیابی ماراباکس</Title>
      <Desc>
        {`کاربر گرامی
         با صرف زمان دو دقیقه و پر کردن این فرم می توانید اطلاعات خود را در اختیار بهترین وکلای مهاجرت قرار دهید تا با بررسی  دقیق تر شرایط شما بتوانند بهترین راهکارهای مهاجرت را در اختیارتان قرار دهند.
         `}
      </Desc>
      <ButtonWrapper>
        <NoButton
          step={step}
          onClick={() => {
            clientData && mutation.mutate({ isSharable: false });
          }}
        >
          خیر
        </NoButton>
        <NextButton
          step={step}
          onClick={() => {
            console.log("navid data=", clientData);
            clientData && mutation.mutate({ isSharable: true });
          }}
          icon={<CheckIcon />}
          isLoading={mutation.isLoading}
        >
          بله
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step9;
const BackgroundTheme = theme("mode", {
  light: css`
    background: linear-gradient(140.49deg, #f5f8fc 53.63%, #dde2eb 99.96%);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  `,
  dark: css`
    background: linear-gradient(
      140.49deg,
      var(--color-gray6) 53.63%,
      var(--color-gray7) 99.96%
    );
  `,
});
const Container = styled.div`
  ${BackgroundTheme};
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding: 1.5rem 2.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
const Logo = styled(BsFillCheckCircleFill)`
  color: var(--color-primary3);
  border-radius: 50%;
  background: white;
  width: 5rem;
  height: auto;
`;
const Title = styled.h1`
  ${Headline3Style};
  color: var(--color-primary5);
`;
const Desc = styled.p`
  ${layer2A_SubtitleStyle};
  white-space: pre-line;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const NoButton = styled(PrevButton)`
  background: var(--color-gray12);
  color: var(--color-gray8);
  padding: 0.5rem 2rem;
  border-radius: 100px;
`;
const CheckIcon = styled(BsCheck2)`
  width: auto;
  height: 1.5rem;
  margin-bottom: 0.2rem;
`;
const NextButton = styled(PrimaryButton)<{ step: number }>`
  padding: 0 2.5rem;
  ${({ step }) =>
    step === 0 &&
    css`
      margin-inline-start: auto;
    `}
`;
