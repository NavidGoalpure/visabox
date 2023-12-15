import React from 'react';
import styled from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import * as MaraSelect from 'Elements/Select';
import { useRouter } from 'next/router';
import { componentStatements, FormsItems, LanguageKeys } from '../const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

function DesktopFormsDropdown() {
  const { locale } = useLocale();
  const router = useRouter();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <NavigationMenu.Item>
      <StyledMaraSelectRoot
        noScroll
        triggerProps={{
          id: 'occupation-trigger',
          placeholder: t(LanguageKeys.Forms),
        }}
      >
        <MaraSelect.Item
          text={FormsItems[0].title[locale]}
          value={FormsItems[0].title[locale] as string}
          onClick={() => router.push(`/${locale}/${FormsItems[0].href}`)}
          disabled
        />
        {/* <MaraSelect.Item
          text={FormsItems[1].title[locale]}
          value={FormsItems[1].title[locale] as string}
          onClick={() => router.push(`/${locale}/${FormsItems[1].href}`)}
          disabled
        /> */}
      </StyledMaraSelectRoot>
    </NavigationMenu.Item>
  );
}

export default DesktopFormsDropdown;
const StyledMaraSelectRoot = styled(MaraSelect.Root)``;
