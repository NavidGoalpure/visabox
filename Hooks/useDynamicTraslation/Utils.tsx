
import { useLocale } from 'Hooks/useLocale';
import { Languages } from 'Interfaces';
import { MultiLanguageText, MultiLanguageTextArray } from 'Interfaces/Database';

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
  const { locale } = useLocale();

  if (!statementObj || !locale) return '';

  if (
    typeof statementObj[locale] !== 'undefined' &&
    statementObj[locale] !== ''
  )
    return statementObj[locale] || statementObj[Languages.en];

  return statementObj[Languages.en];

  //
};
///////////////////////
export const translateDynamicArray = (
  statementObj: MultiLanguageTextArray | undefined
): string[] => {
  if (!statementObj) return [];
  const { locale } = useLocale();
  if (!statementObj || !locale) return [];

  if (typeof statementObj[locale] !== 'undefined')
    return (
      statementObj[locale] ||
      //defensive
      statementObj[Languages.en]
    );

  return statementObj[Languages.en];
};
////////////////////////

export function isMultiLanguageTextArrayIsEmpty(
  multiLanguageText: MultiLanguageTextArray | undefined
): boolean | undefined {
  if (typeof multiLanguageText === 'undefined') return undefined;
  const { locale } = useLocale();
  if (
    multiLanguageText?.[locale]?.[0] !== undefined &&
    multiLanguageText?.[locale]?.[0] !== ''
  )
    return true;

  return false;
}
