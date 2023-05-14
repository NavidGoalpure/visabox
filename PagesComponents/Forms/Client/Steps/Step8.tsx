import styled from "styled-components";
import { Layer1_SubtitleStyle } from "Styles/Theme/Layers/layer1/style";
import * as ToggleGroup from "../../../../Elements/ToggleGroup";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { WizardContext } from "../Contexts/Wizard/Context";
import { useContext } from "react";
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

const Step8 = () => {
  const { step, handleNextPress, handleBackPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { clientData, setClientData } = useContext(FormDataContext);

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
            handleNextPress();
          }}
          disabled={!clientData?.IELTSScore}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
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
