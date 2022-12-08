import { useRouter } from 'next/router';
import {
  Languages,
  MultiLanguageText,
  MultiLanguageTextArray,
} from 'interfaces';
import { proxyUrlLocaleToLocale } from 'utils/Language';

/**
 *  یک گزاره را گرفته،‌بسته به زبان کاربر که از یوارال فهمیده میشود، ترجمه مناسب را برمیگرداند
 * @param  statementObj عبارتی که از سرور میاد، در زبان های مختلف
 * @return      جمله نهایی به زبان کاربر- که از یوآرال گرفته شده
 */
export const translatedObject = ({
  statementObj,
}: {
  statementObj: MultiLanguageText | undefined;
}): string => {
  const {
    query: { locale },
  } = useRouter();

  if (!statementObj || !locale) return '';
  const smartLocale = proxyUrlLocaleToLocale(locale);

  if (
    typeof statementObj[smartLocale] !== 'undefined' &&
    statementObj[smartLocale] !== ''
  )
    return statementObj[smartLocale] || statementObj[Languages.en];

  return statementObj[Languages.en];

  //
};
///////////////////////
export const translateDynamicArray = (
  statementObj: MultiLanguageTextArray
): string[] => {
  const {
    query: { locale },
  } = useRouter();
  if (!statementObj || !locale) return [];
  const smartLocale = proxyUrlLocaleToLocale(locale);

  if (typeof statementObj[smartLocale] !== 'undefined')
    return (
      statementObj[smartLocale] ||
      //defensive
      statementObj[Languages.en]
    );

  return statementObj[Languages.en];
};
