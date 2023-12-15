import React from 'react';
import styled from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import * as MaraSelect from 'Elements/Select';
import { useRouter } from 'next/router';
import { listsItems } from '../const';
import { componentStatements, LanguageKeys } from '../const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Languages, LocalStorageKeys } from 'Interfaces';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { SupportedCountry } from 'Interfaces/Database';
import { getLocalStorage } from 'Utils';

function DesktopBusinessDropdown({ clientCountry }: { clientCountry: string }) {
  const { locale } = useLocale();
  const router = useRouter();
  const { t } = useStaticTranslation(componentStatements);

  return (
    <NavigationMenu.Item>
      <StyledMaraSelectRoot
        noScroll
        triggerProps={{
          id: 'bussiness-trigger',
          placeholder: t(LanguageKeys.Lists),
        }}
      >
        <MaraSelect.Item
          text={listsItems[0].title[locale]}
          value={listsItems[0].title[locale] as string}
          onClick={() => router.push(`/${locale}/${listsItems[0].href}`)}
          disabled
        />
        <MaraSelect.Item
          text={listsItems[1].title[locale]}
          value={listsItems[1].title[locale] as string}
          onClick={() => router.push(`/${locale}/${listsItems[1].href}`)}
          disabled
        />
        <MaraSelect.Item
          text={listsItems[2].title[locale]}
          value={listsItems[2].title[locale] as string}
          onClick={() => router.push(`/${locale}/${listsItems[2].href}`)}
          disabled
        />

        {(clientCountry === SupportedCountry.Iran ||
          getLocalStorage(LocalStorageKeys.Country) ===
            SupportedCountry.Iran) && (
          <MaraSelect.Item
            text={listsItems[3].title[locale]}
            value={listsItems[3].title[locale] as string}
            onClick={() => router.push(`/${locale}/${listsItems[3].href}`)}
            disabled
          />
        )}
      </StyledMaraSelectRoot>
    </NavigationMenu.Item>
  );
}

export default DesktopBusinessDropdown;
const StyledMaraSelectRoot = styled(MaraSelect.Root)``;
