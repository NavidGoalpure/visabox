import styled from 'styled-components';
import * as ToggleGroup from '../../../../../Elements/ToggleGroup';
import { Input } from 'Components/Input';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';

import { useContext } from 'react';
import {
  ButtonWrapper,
  CalculatorIcon,
  Container,
  InformationIcon,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
  StyledTooltipTag,
  Title,
} from '../StyledComponents';
import { FormDataContext } from '../../Contexts/FormDataContext/Context';
import { YesOrNo } from 'Consts/Client';
import { WizardContext } from 'Components/Wizard/Context';
import {
  Client,
  ClientCompletedForms,
  ClientCompletedForms_obj,
  ClientRole,
} from 'Interfaces/Database/Client';
import ErrorToast from 'Elements/Toast/Error';
import SuccessToast from 'Elements/Toast/Success';
import { LocalStorageKeys } from 'Interfaces';
import { Status } from 'Interfaces/Database';
import { useMutation, useQueryClient } from 'react-query';
import { removeLocalStorage } from 'Utils';
import { ClientQueryKeys } from 'Utils/query/keys';
import { validateClientDataWithYup } from './utils';
import { useSession } from 'next-auth/react';

const ProfessionalYearInAustraliaStep = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient, score } = useContext(FormDataContext);
  const FailedToastMessage = t(LanguageKeys.FailedToastMessage);
  const successToastMessage = t(LanguageKeys.SuccessToastText);
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  function getSmartCompletedForms(
    formsData: ClientCompletedForms_obj[] | undefined
  ): ClientCompletedForms_obj[] | undefined {
    if (!formsData)
      return [
        {
          forms: ClientCompletedForms.AgentForm,
          _type: 'client_completed_forms_obj',
          _key: new Date().toString() + Math.random().toString(),
        },
      ];
    if (
      formsData.filter(
        (formData) => formData.forms === ClientCompletedForms.AgentForm
      ).length > 0
    )
      return formsData;
    return [
      ...formsData,
      {
        forms: ClientCompletedForms.AgentForm,
        _type: 'client_completed_forms_obj',
        _key: new Date().toString() + Math.random().toString(),
      },
    ];
  }

  const mutation = useMutation({
    mutationFn: () => {
      const fullData: Client | undefined = client
        ? {
            ...client,
            is_sharable: true,
            role: ClientRole.Normal,
            status: Status.ACTIVE,
            completed_forms: getSmartCompletedForms(client?.completed_forms),
          }
        : undefined;
      // ولیدیت دیتایی که به سرور فرستاده میشه
      const validatedData = validateClientDataWithYup(fullData);
      //
      return fetch('/api/clients/point-calculator', {
        method: 'POST',
        body: JSON.stringify({ client: validatedData }),
      });
    },
    onSuccess: (res) => {
      if (!res.ok) {
        throw new Error('couldnt patch the user');
      }
      handleNextPress();
      SuccessToast(successToastMessage);
      queryClient.refetchQueries(
        ClientQueryKeys.detail({
          reqParams: `email == "${session?.user?.email || 'defensive'}"`,
        })
      );
    },
    onError: () => {
      ErrorToast(FailedToastMessage);
    },
  });
  return (
    <Container>
      <StyledTitle>
        {t(LanguageKeys.ProfessionalYearInAustralia)}{' '}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon /> <InformationIcon />
            </>
          }
          popupContent={t(LanguageKeys.ProfessionalYearInAustraliaPopupContent)}
        />
      </StyledTitle>
      <ToggleGroupRoot
        type='single'
        value={
          client?.professional_year_in_australia !== null
            ? client?.professional_year_in_australia === true
              ? 'yes'
              : 'no'
            : undefined
        }
        onValueChange={(value: string) => {
          client &&
            setClient({
              ...client,
              professional_year_in_australia: value === 'yes' ? true : false,
            });
        }}
      >
        {
          <>
            {YesOrNo.map((option, i) => (
              <ToggleGroup.Item
                key={i}
                text={option}
                value={option.en.toLowerCase()}
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
          isLoading={mutation.isLoading}
          disabled={client?.professional_year_in_australia === null}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.ConfirmButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default ProfessionalYearInAustraliaStep;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
const StyledTitle = styled(Title)`
  margin: 0;
`;
const StyledInput = styled(Input)`
  margin-top: 1rem;
`;
