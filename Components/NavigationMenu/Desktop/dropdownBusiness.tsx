import React from 'react';
import styled from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import * as MaraSelect from 'Elements/Select';
import { Languages } from 'Interfaces';
import { useRouter } from 'next/router';
import { ImSphere } from 'react-icons/im';
import dynamic from 'next/dynamic';
import { bussinessItems } from './const';

function DesktopBusinessDropdown() {
  const { locale } = useLocale();
  const router = useRouter();
  function onClickHandler(value: string) {
    console.log('navid value=', value);
    router.push(router.asPath, router.asPath, { locale: value });
  }
  return (
    <StyledMaraSelectRoot
      noScroll
      triggerProps={{
        id: 'bussiness-trigger',
        placeholder: 'Bussiness',
      }}
      value='Bussiness'
      onValueChange={onClickHandler}
    >
      <MaraSelect.Item
        text={bussinessItems[0].title[locale]}
        value={bussinessItems[0].href}
      />
      <MaraSelect.Item
        text={bussinessItems[1].title[locale]}
        value={bussinessItems[1].title[locale] as string}
      />
      <MaraSelect.Item
        text={bussinessItems[2].title[locale]}
        value={bussinessItems[2].title[locale] as string}
      />
    </StyledMaraSelectRoot>
  );
}

export default DesktopBusinessDropdown;
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
