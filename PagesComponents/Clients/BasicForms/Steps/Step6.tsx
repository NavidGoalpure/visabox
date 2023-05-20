import { Input } from 'Components/Input';
import { MultiLanguageText } from 'Interfaces/Database';
import styled from 'styled-components';
import { Layer1_SubtitleStyle } from 'Styles/Theme/Layers/layer1/style';
import * as ToggleGroup from '../../../../Elements/ToggleGroup';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from '../const';
import { WizardContext } from '../Contexts/Wizard/Context';
import { useContext } from 'react';
import {
  ButtonWrapper,
  NextButton,
  NextIcon,
  Container,
  PrevButton,
  PrevIcon,
} from './StyledComponents';
import { works } from 'Consts/Client';
import { FormDataContext } from '../Contexts/FormDataContext/Context';
import { WorkExperience } from 'Interfaces/Database/Client';

const Step6 = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { client, setClient } = useContext(FormDataContext);

  return (
    <Container>
      <Title>{t(LanguageKeys.WorkExperienceSectionTitle)}</Title>
      <ToggleGroupRoot
        type='single'
        value={client?.work_experience}
        onValueChange={(value) =>
          client &&
          setClient({
            ...client,
            work_experience: value as WorkExperience,
          })
        }
      >
        {
          <>
            {works.map((work, i) => (
              <ToggleGroup.Item
                key={i}
                text={work}
                value={work.en.toLowerCase()}
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
          disabled={!client?.work_experience}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step6;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
const Title = styled.h1`
  ${Layer1_SubtitleStyle};
  margin: 0;
  margin-top: 1rem;
`;
