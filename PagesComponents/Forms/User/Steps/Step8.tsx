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
import { Router, useRouter } from "next/router";
import SuccessToast from "Elements/Toast/Success";
import { useMutation } from "react-query";
const Step8 = () => {
  const { step, handleBackPress } = useContext(WizardContext);
  const router = useRouter();
  const { t } = useStaticTranslation(componentStatements);
  // navid fix send bug
  const { clientData, setClientData } = useContext(FormDataContext);
  const { locale } = useLocale();
  const mutation = useMutation({
    mutationFn: () => {
      return fetch("/api/forms/client", {
        method: "POST",
        body: JSON.stringify({ clientData }),
      });
    },
    onSuccess: () => {},
    onError: (error) => {
      console.log("navid error ===", error);
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
            mutation.isSuccess &&
              SuccessToast(t(LanguageKeys.SuccessToastText)) 
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
