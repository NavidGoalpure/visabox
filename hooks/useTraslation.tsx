import { useRouter } from 'next/router';
import { Languages, MultiLanguage } from 'pages/interfaces';

function proxyUrlLocaleToLocale(
  urlLocale: string | string[] | undefined
): Languages {
  if (urlLocale === Languages.ir) return Languages.ir;
  return Languages.en;
}
//////////////
const translatedObject = ({
  key,
  statements,
}: {
  key: string;
  statements: Record<string, MultiLanguage>;
}): string => {
  const {
    query: { locale },
  } = useRouter();
  const smartLocale = proxyUrlLocaleToLocale(locale);
  return statements[key][smartLocale];
};
//////////////
export const useTranslation = (statements: Record<string, MultiLanguage>) => {
  return {
    t: (key: string) => translatedObject({ key, statements }),
  };
};
