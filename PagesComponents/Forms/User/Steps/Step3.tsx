import styled from "styled-components";
import { Layer1_SubtitleStyle } from "Styles/Theme/Layers/layer1/style";
import * as ToggleGroup from "../../../../Elements/ToggleGroup";
import { MultiLanguageText } from "Interfaces";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { WizardContext } from "../Contexts/Wizard/Context";
import { useContext, useEffect, useState } from "react";
import {
  ButtonWrapper,
  Container,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
} from "./StyledComponents";
import { FormDataContext } from "../Contexts/FormDataContext/Context";
import { maritalStatuses } from "./consts";
import { ClientMarital } from "Interfaces/Client";

const Step3 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { clientData, setClientData } = useContext(FormDataContext);
  const [maritalValue, setMaritalValue] = useState<ClientMarital>(
    clientData?.marital
  );

  return (
    <Container>
      <Title>{t(LanguageKeys.maritalStatusSectionTitle)}</Title>
      <ToggleGroupRoot
        type="single"
        value={maritalValue}
        onValueChange={(value) => setMaritalValue(value as ClientMarital)}
      >
        {
          <>
            {maritalStatuses.map((maritalStatus,i) => (
              <ToggleGroup.Item
                key={i}
                text={maritalStatus}
                value={maritalStatus.en.replaceAll(" ", "")}
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
            handleNextPress();
            setClientData({
              ...clientData,
              marital: maritalValue,
            });
          }}
          disabled={!maritalValue}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step3;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
  width: 100%;
`;
const Title = styled.h1`
  ${Layer1_SubtitleStyle};
  margin: 0;
  margin-top: 1rem;
`;
