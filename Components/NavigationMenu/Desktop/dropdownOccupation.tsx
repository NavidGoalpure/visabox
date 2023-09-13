import React from "react";
import styled from "styled-components";
import { useLocale } from "Hooks/useLocale";
import * as MaraSelect from "Elements/Select";
import { useRouter } from "next/router";
import { componentStatements, LanguageKeys, occupationItems } from "../const";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Languages, LocalStorageKeys } from "Interfaces";
import { SupportedCountry } from "Interfaces/Database";
import { getLocalStorage } from "Utils";

function DesktopOccupationDropdown({
  clientCountry,
}: {
  clientCountry: string;
}) {
  const { locale } = useLocale();
  const router = useRouter();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <NavigationMenu.Item>
      <StyledMaraSelectRoot
        noScroll
        triggerProps={{
          id: "occupation-trigger",
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
        {(clientCountry === SupportedCountry.Iran ||
          getLocalStorage(LocalStorageKeys.Country) ===
            SupportedCountry.Iran) && (
          <MaraSelect.Item
            text={occupationItems[2].title[locale]}
            value={occupationItems[2].title[locale] as string}
            onClick={() => router.push(`/${locale}/${occupationItems[2].href}`)}
            disabled
          />
        )}
      </StyledMaraSelectRoot>
    </NavigationMenu.Item>
  );
}

export default DesktopOccupationDropdown;
const StyledMaraSelectRoot = styled(MaraSelect.Root)``;
