import React from 'react';
import styled from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import * as MaraSelect from 'Elements/Select';
import { useRouter } from 'next/router';
import { bussinessItems } from './const';

function DesktopBusinessDropdown() {
  const { locale } = useLocale();
  const router = useRouter();
  // const [value,setValue]= useState

  return (
    <StyledMaraSelectRoot
      noScroll
      triggerProps={{
        id: 'bussiness-trigger',
        placeholder: 'Bussiness',
      }}
    >
      <MaraSelect.Item
        text={bussinessItems[0].title[locale]}
        value={bussinessItems[0].title[locale] as string}
        onClick={() => router.push(`/${locale}/${bussinessItems[0].href}`)}
        disabled
      />
      <MaraSelect.Item
        text={bussinessItems[1].title[locale]}
        value={bussinessItems[1].title[locale] as string}
        onClick={() => router.push(`/${locale}/${bussinessItems[1].href}`)}
        disabled
      />
      <MaraSelect.Item
        text={bussinessItems[2].title[locale]}
        value={bussinessItems[2].title[locale] as string}
        onClick={() => router.push(`/${locale}/${bussinessItems[2].href}`)}
        disabled
      />
    </StyledMaraSelectRoot>
  );
}

export default DesktopBusinessDropdown;
const StyledMaraSelectRoot = styled(MaraSelect.Root)``;
