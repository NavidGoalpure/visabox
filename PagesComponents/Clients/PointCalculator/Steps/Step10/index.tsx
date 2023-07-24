import { componentStatements, LanguageKeys } from './const';
import { useContext, useState } from 'react';
import { PrevButton } from '../StyledComponents';
import styled, { css } from 'styled-components';
import { Headline3Style, Headline4Style } from 'Styles/Typo';
import theme from 'styled-theming';
import {
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
} from 'Styles/Theme/Layers/layer2/style';
import { useMutation, useQueryClient } from 'react-query';
import SuccessToast from 'Elements/Toast/Success';
import { useSession } from 'next-auth/react';
import { BsCheck2, BsFillCheckCircleFill } from 'react-icons/bs';
import { PrimaryButton } from 'Elements/Button/Primary';
import { Loading } from 'Elements/Loading';
import { deviceMin } from 'Consts/device';
import ErrorToast from 'Elements/Toast/Error';
import { ClientQueryKeys } from 'Utils/query/keys';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  Client,
  ClientCompletedForms,
  ClientCompletedForms_obj,
  ClientRole,
} from 'Interfaces/Database/Client';
import { Status } from 'Interfaces/Database';
import { FormDataContext } from '../../Contexts/FormDataContext/Context';
import { WizardContext } from '../../Contexts/Wizard/Context';
import { validateClientDataWithYup } from './utils';

//
const Step11 = () => {
  //
  //
  const [isYesClicked, setIsYesClicked] = useState<boolean>(false);
  const { step, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, score } = useContext(FormDataContext);
  const FailedToastMessage = t(LanguageKeys.FailedToastMessage);
  const successToastMessage = t(LanguageKeys.SuccessToastText);
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  // اگه اولین باره که بیسیک فرم رو پر میکنه به پراپرتی کامپلیتدفرمز اضافه میکنیم
  // اگه قبلا اضافه شده دوباره کاری نمیکنیم
  function getSmartCompletedForms(
    formsData: ClientCompletedForms_obj[] | undefined
  ): ClientCompletedForms_obj[] | undefined {
    if (!formsData)
      return [
        {
          forms: ClientCompletedForms.BasicForm,
          _type: 'client_completed_forms_obj',
          _key: new Date().toString() + Math.random().toString(),
        },
      ];
    if (
      formsData.filter(
        (formData) => formData.forms === ClientCompletedForms.BasicForm
      ).length > 0
    )
      return formsData;
    return [
      ...formsData,
      {
        forms: ClientCompletedForms.BasicForm,
        _type: 'client_completed_forms_obj',
        _key: new Date().toString() + Math.random().toString(),
      },
    ];
  }

  const mutation = useMutation({
    mutationFn: ({ is_sharable }: { is_sharable: boolean }) => {
      const fullData: Client | undefined = client
        ? {
            ...client,
            is_sharable,
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
      queryClient.removeQueries(
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
      <Logo />
      <Title>{t(LanguageKeys.Step11Title)}</Title>
      <Desc>{t(LanguageKeys.Step11Desc)}</Desc>
      <ButtonWrapper>
        {mutation.isLoading && !isYesClicked ? (
          <Loading />
        ) : (
          <NoButton
            step={step}
            onClick={() => {
              client && mutation.mutate({ is_sharable: false });
            }}
          >
            {t(LanguageKeys.NoText)}
          </NoButton>
        )}
        <NextButton
          step={step}
          onClick={() => {
            setIsYesClicked(true);
            client && mutation.mutate({ is_sharable: true });
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
export default Step11;
const BackgroundTheme = theme('mode', {
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
const NoButtonTheme = theme('mode', {
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
