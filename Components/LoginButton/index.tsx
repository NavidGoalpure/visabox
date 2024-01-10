import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from 'Elements/Button/Primary';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { useRouter } from 'next/router';
import { LocalStorageKeys } from 'Interfaces';
import { setLocalStorage } from 'Utils';

function LoginButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { t } = useStaticTranslation(componentStatements);
  const router = useRouter();

  const handleClick = () => {
    setLocalStorage({
      key: LocalStorageKeys.Url_Before_Login,
      value: window.location.href,
    });
    router.push('/auth/signin');
  };

  return (
    <SendButton {...props} onClick={handleClick}>
      {t(LanguageKeys.Login)}
    </SendButton>
  );
}

export default LoginButton;

const SendButton = styled(PrimaryButton)`
  border-radius: 0.5rem;
  height: 3rem;
  flex-shrink: 0;
  margin-top: auto;
  width: 8rem;
`;
