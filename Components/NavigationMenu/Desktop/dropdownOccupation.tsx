import React from 'react';
import styled from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import * as MaraSelect from 'Elements/Select';
import { useRouter } from 'next/router';
import { componentStatements, LanguageKeys, occupationItems } from '../const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

function DesktopOccupationDropdown() {
  const { locale } = useLocale();
  const router = useRouter();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <StyledMaraSelectRoot
      noScroll
      triggerProps={{
        id: 'occupation-trigger',
        placeholder: t(LanguageKeys.Occupations),
      }}
    >
      <MaraSelect.Item
        text={occupationItems[0].title[locale]}
        value={occupationItems[0].title[locale] as string}
        onClick={() => router.push(`/${locale}/${occupationItems[0].href}`)}
        disabled
      />
      <MaraSelect.Item
        text={occupationItems[1].title[locale]}
        value={occupationItems[1].title[locale] as string}
        onClick={() => router.push(`/${locale}/${occupationItems[1].href}`)}
        disabled
      />
    </StyledMaraSelectRoot>
  );
}

export default DesktopOccupationDropdown;
const StyledMaraSelectRoot = styled(MaraSelect.Root)``;
