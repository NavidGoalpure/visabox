import styled from "styled-components";
import { Layer1_SubtitleStyle } from "Styles/Theme/Layers/layer1/style";
import * as ToggleGroup from "../../../../Elements/ToggleGroup";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { WizardContext } from "../Contexts/Wizard/Context";
import { useContext} from "react";
import {
  ButtonWrapper,
  Container,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
} from "./StyledComponents";
import { australianWorks } from "./consts";
import { FormDataContext } from "../Contexts/FormDataContext/Context";
import { AustralianWorkExperience } from "Interfaces/Client";

const Step7 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { clientData, setClientData } = useContext(FormDataContext);

  return (
    <Container>
      <Title>{t(LanguageKeys.AustralianWorkExperienceSectionTitle)}</Title>
      <ToggleGroupRoot
        type="single"
        value={clientData?.australianWorkExperience}
        onValueChange={(value) =>
          clientData &&
          setClientData({
            ...clientData,
            australianWorkExperience: value as AustralianWorkExperience,
          })
        }
      >
        {
          <>
            {australianWorks.map((australianWork, i) => (
              <ToggleGroup.Item
                key={i}
                text={australianWork}
                value={australianWork.en.toLowerCase()}
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
          icon={<NextIcon />}
          onClick={() => {
            handleNextPress();
            
          }}
          disabled={!clientData?.australianWorkExperience}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step7;
const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
const Title = styled.h1`
  ${Layer1_SubtitleStyle};
  margin: 0;
  margin-top: 1rem;
`;
