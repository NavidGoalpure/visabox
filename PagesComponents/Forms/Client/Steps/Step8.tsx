import styled from "styled-components";
import { Layer1_SubtitleStyle } from "Styles/Theme/Layers/layer1/style";
import * as ToggleGroup from "../../../../Elements/ToggleGroup";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { WizardContext } from "../Contexts/Wizard/Context";
import { useContext, useState } from "react";
import {
  ButtonWrapper,
  Container,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
} from "./StyledComponents";
import { FormDataContext } from "../Contexts/FormDataContext/Context";
import { IELTSScores } from "./consts";
import { IELTSScore } from "Interfaces/Client";
import { useLocale } from "Hooks/useLocale";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import SuccessToast from "Elements/Toast/Success";
import { UserQueryKeys } from "Utils/query/keys";
import { useSession } from "next-auth/react";
const Step8 = () => {
  const { locale } = useLocale();
  const router = useRouter();
  const { step, handleBackPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const successToastMessage = t(LanguageKeys.SuccessToastText);
  const { clientData, setClientData } = useContext(FormDataContext);
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const mutation = useMutation({
    mutationFn: () => {
      return fetch("/api/forms/client", {
        method: "POST",
        body: JSON.stringify({ clientData }),
      });
    },
    onSuccess: () => {
      router.push(`/${locale}/`);
      SuccessToast(successToastMessage);
      queryClient.removeQueries(
        UserQueryKeys.detail(session?.user?.email || "defensive")
      );
    },
    onError: (error) => {
      // navid make an error handling function here
    },
  });

  return (
    <Container>
      <Title>{t(LanguageKeys.IELTSScoreSectionTitle)}</Title>
      <ToggleGroupRoot
        type="single"
        value={clientData?.IELTSScore}
        onValueChange={(value) =>
          clientData &&
          setClientData({
            ...clientData,
            IELTSScore: value as IELTSScore,
          })
        }
      >
        {
          <>
            {IELTSScores.map((IELTSScore, i) => (
              <ToggleGroup.Item
                key={i}
                text={IELTSScore}
                value={IELTSScore.en.toLowerCase()}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>
      <ButtonWrapper>
        <PrevButton step={step} onClick={() => step > 0 && handleBackPress()}>
          <PrevIcon />
          {t(LanguageKeys.PrevButtonTitle)}
        </PrevButton>
        <NextButton
          step={step}
          onClick={() => {
            mutation.mutate();
          }}
          disabled={!clientData?.IELTSScore}
          icon={<NextIcon />}
          isLoading={mutation.isLoading}
        >
          {t(LanguageKeys.ConfirmButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step8;
const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
const Title = styled.h1`
  ${Layer1_SubtitleStyle};
  margin: 0;
  margin-top: 1rem;
`;
