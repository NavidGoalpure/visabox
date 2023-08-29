import React from 'react';
import styled from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import * as MaraSelect from 'Elements/Select';
import { Languages } from 'Interfaces';
import BritishFlag from '../Images/BritishFlag.svg';
import IranFlag from '../Images/IranFlag.svg';
import { useRouter } from 'next/router';
import { ImSphere } from 'react-icons/im';
import dynamic from 'next/dynamic';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

function DesktopLanguageChanger() {
  const { locale } = useLocale();

  const router = useRouter();
  const smartTextObj: Record<Languages, string> = {
    en: 'English',
    fa: 'فارسی',
    zh: '中国人'
  };
  function onClickHandler(value: string) {
    router.push(router.asPath, router.asPath, { locale: value });
  }
  return (
    <NavigationMenu.Item>
      <StyledMaraSelectRoot
        noScroll
        triggerProps={{
          id: 'language-trigger',
          placeholder: smartTextObj[locale],
          icon: <SphereIcon />,
        }}
        onValueChange={onClickHandler}
      >
        <MaraSelect.Item
          icon={
            <FlagWrapper>
              <Flag
                fill
                src={BritishFlag}
                alt={'england flag'}
                sizes='2.25rem'
              />
            </FlagWrapper>
          }
          text={smartTextObj.en}
          value={Languages.en}
        />
        <MaraSelect.Item
          text={smartTextObj.fa}
          value={Languages.fa}
          icon={
            <FlagWrapper>
              <Flag fill src={IranFlag} alt={'iran flag'} sizes='2.25rem' />
            </FlagWrapper>
          }
        ></MaraSelect.Item>
      </StyledMaraSelectRoot>
    </NavigationMenu.Item>
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
  width: 1rem;
  height: auto;
  margin-bottom: 0.2rem;
  color: var(--color-gray10);
`;
