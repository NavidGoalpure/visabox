import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { WizardContext } from "../Contexts/Wizard/Context";
import { useContext, useState } from "react";
import { PrevButton, PrevIcon } from "./StyledComponents";
import styled, { css } from "styled-components";
import { Headline3Style, Headline4Style } from "Styles/Typo";
import theme from "styled-theming";
import {
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
} from "Styles/Theme/Layers/layer2/style";
import { useMutation, useQueryClient } from "react-query";
import SuccessToast from "Elements/Toast/Success";
import { useSession } from "next-auth/react";
import { ClientQueryKeys } from "Utils/query/keys";
import { useRouter } from "next/router";
import { useLocale } from "Hooks/useLocale";
import { FormDataContext } from "../Contexts/FormDataContext/Context";
import { BsCheck2, BsFillCheckCircleFill } from "react-icons/bs";
import { PrimaryButton } from "Elements/Button/Primary";
import { Loading } from "Elements/Loading";
import { deviceMin } from "Consts/device";
import ErrorToast from "Elements/Toast/Error";

const Step9 = () => {
  const [isYesClicked, setIsYesClicked] = useState<boolean>(false);
  const { step } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const router = useRouter();
  const { locale } = useLocale();
  const { clientData } = useContext(FormDataContext);
  const FailedToastMessage = t(LanguageKeys.FailedToastMessage);
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
        throw new Error("couldnt patch the user");
      }
      router.push(`/${locale}/`);
      SuccessToast(successToastMessage);
      queryClient.removeQueries(
        ClientQueryKeys.detail({
          email: session?.user?.email || "defensive",
        })
      );
    },
    onError: () => {
      ErrorToast(FailedToastMessage);
    },
  });
  return (
    <Container>
      <Logo />
      <Title>{t(LanguageKeys.Step9Title)}</Title>
      <Desc>{t(LanguageKeys.Step9Desc)}</Desc>
      <ButtonWrapper>
        {mutation.isLoading && !isYesClicked ? (
          <Loading />
        ) : (
          <NoButton
            step={step}
            onClick={() => {
              clientData && mutation.mutate({ isSharable: false });
            }}
          >
            {t(LanguageKeys.NoText)}
          </NoButton>
        )}
        <NextButton
          step={step}
          onClick={() => {
            setIsYesClicked(true);
            clientData && mutation.mutate({ isSharable: true });
          }}
          icon={<CheckIcon />}
          isLoading={isYesClicked && mutation.isLoading}
        >
          {t(LanguageKeys.YesText)}
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
const NoButtonTheme = theme("mode", {
  light: css`
    background: var(--color-gray12);
    color: var(--color-gray8);
  `,
  dark: css`
    background: var(--color-gray7);
    color: var(--color-gray11);
  `,
});

const Container = styled.div`
  ${BackgroundTheme};
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding: 1.5rem 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  box-sizing: border-box;
  @media ${deviceMin.tabletS} {
    padding: 1.5rem 2.5rem;
    box-sizing: content-box;
  }
`;
const Logo = styled(BsFillCheckCircleFill)`
  color: var(--color-primary3);
  border-radius: 50%;
  background: white;
  width: 5rem;
  height: auto;
`;
const Title = styled.h1`
  ${Headline4Style};
  white-space: nowrap;
  color: var(--color-primary5);
  @media ${deviceMin.tabletS} {
    ${Headline3Style};
  }
`;
const Desc = styled.p`
  ${layer2A_TextStyle};
  white-space: pre-line;
  @media ${deviceMin.tabletS} {
    ${layer2A_SubtitleStyle};
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const NoButton = styled(PrevButton)`
  ${NoButtonTheme};
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
