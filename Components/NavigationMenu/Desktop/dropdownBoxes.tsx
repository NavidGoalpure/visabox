import React from 'react';
import styled from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import * as MaraSelect from 'Elements/Select';
import { useRouter } from 'next/router';
import { boxesItems } from '../const';
import { componentStatements, LanguageKeys } from '../const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Languages } from 'Interfaces';

function DesktopBusinessDropdown() {
  const { locale } = useLocale();
  const router = useRouter();
  const { t } = useStaticTranslation(componentStatements);

  return (
    <StyledMaraSelectRoot
      noScroll
      triggerProps={{
        id: 'bussiness-trigger',
        placeholder: t(LanguageKeys.Lists),
      }}
    >
      <MaraSelect.Item
        text={boxesItems[0].title[locale]}
        value={boxesItems[0].title[locale] as string}
        onClick={() => router.push(`/${locale}/${boxesItems[0].href}`)}
        disabled
      />
      <MaraSelect.Item
        text={boxesItems[1].title[locale]}
        value={boxesItems[1].title[locale] as string}
        onClick={() => router.push(`/${locale}/${boxesItems[1].href}`)}
        disabled
      />
      <MaraSelect.Item
        text={boxesItems[2].title[locale]}
        value={boxesItems[2].title[locale] as string}
        onClick={() => router.push(`/${locale}/${boxesItems[2].href}`)}
        disabled
      />
      <MaraSelect.Item
        text={boxesItems[3].title[locale]}
        value={boxesItems[3].title[locale] as string}
        onClick={() => router.push(`/${locale}/${boxesItems[3].href}`)}
        disabled
      />
      {locale === Languages.fa && (
        <MaraSelect.Item
          text={boxesItems[4].title[locale]}
          value={boxesItems[4].title[locale] as string}
          onClick={() => router.push(`/${locale}/${boxesItems[4].href}`)}
          disabled
        />
      )}
    </StyledMaraSelectRoot>
  );
}

export default DesktopBusinessDropdown;
const StyledMaraSelectRoot = styled(MaraSelect.Root)``;
