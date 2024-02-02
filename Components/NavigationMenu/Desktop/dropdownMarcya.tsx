import React from 'react';
import styled from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import * as MaraSelect from 'Elements/Select';
import { useRouter } from 'next/router';
import { MarcyaItems } from '../const';
import { componentStatements, LanguageKeys } from '../const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

function DesktopMarcyaDropdown() {
  const { locale } = useLocale();
  const router = useRouter();
  const { t } = useStaticTranslation(componentStatements);

  return (
    <NavigationMenu.Item>
      <StyledMaraSelectRoot
        noScroll
        triggerProps={{
          id: 'bussiness-trigger',
          placeholder: t(LanguageKeys.BotName),
        }}
      >
        {MarcyaItems.map((item, i) => (
          <MaraSelect.Item
            key={i}
            text={item.title[locale]}
            value={item.title[locale] as string}
            onClick={() => router.push(`${item.href}`)}
            disabled
          />
        ))}
      </StyledMaraSelectRoot>
    </NavigationMenu.Item>
  );
}

export default DesktopMarcyaDropdown;
const StyledMaraSelectRoot = styled(MaraSelect.Root)``;
