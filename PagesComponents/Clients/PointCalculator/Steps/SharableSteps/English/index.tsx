import styled from 'styled-components';
import * as ToggleGroup from '../../../../../../Elements/ToggleGroup';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { useContext } from 'react';
import {
  ButtonWrapper,
  CalculatorIcon,
  Container,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
  StyledTooltipTag,
  Title,
} from '../../StyledComponents';
import { IELTSScores } from 'Consts/Client';
import { IELTSScore } from 'Interfaces/Database/Client';
import { FormDataContext } from '../../../Contexts/FormDataContext/Context';
import { WizardContext } from '../../../Contexts/Wizard/Context';

const EnglishStep = () => {
  const { step, handleNextPress, handleBackPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient, score } = useContext(FormDataContext);

  return (
    <Container>
      <Title>
        {t(LanguageKeys.IELTSScoreSectionTitle)}{' '}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon />
            </>
          }
          popupContent={t(LanguageKeys.IeltsPopupContent)}
        />
      </Title>
      <ToggleGroupRoot
        type='single'
        value={client?.ielts_score}
        onValueChange={(value) => {
          client &&
            setClient({
              ...client,
              ielts_score: value as IELTSScore,
            });
        }}
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
          disabled={!client?.ielts_score}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default EnglishStep;
const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
