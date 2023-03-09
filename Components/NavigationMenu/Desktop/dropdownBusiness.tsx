import React from 'react';
import styled from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import * as MaraSelect from 'Elements/Select';
import { Languages } from 'Interfaces';
import { useRouter } from 'next/router';
import { ImSphere } from 'react-icons/im';
import dynamic from 'next/dynamic';

function DesktopLanguageChanger() {
  const { locale } = useLocale();
  const router = useRouter();
  const smartTextObj: Record<Languages, string> = {
    en: 'English',
    fa: 'فارسی',
  };
  function onClickHandler(value: string) {
    router.push(router.asPath, router.asPath, { locale: value });
  }
  return (
    <StyledMaraSelectRoot
      noScroll
      triggerProps={{
        id: 'Bussiness-trigger',
        placeholder: smartTextObj[locale],
        icon: <SphereIcon />,
      }}
      onValueChange={onClickHandler}
    >
      <MaraSelect.Item
        text={smartTextObj.en}
        value={Languages.en}
      ></MaraSelect.Item>
      <MaraSelect.Item
        text={smartTextObj.fa}
        value={Languages.fa}
      ></MaraSelect.Item>
    </StyledMaraSelectRoot>
  );
}

export default DesktopLanguageChanger;
const StyledMaraSelectRoot = styled(MaraSelect.Root)``;
const FlagWrapper = styled.div`
  position: relative;
  width: 2.25rem;
  height: 2.25rem;
`;
///////////
const DYImage = dynamic(() => import('next/image'));
const Flag = styled(DYImage)`
  position: relative !important;
`;
///////////////
const SphereIcon = styled(ImSphere)`
  width: 1.5rem;
  height: auto;
  margin-bottom: 0.2rem;
  color: var(--color-gray10);
`;
