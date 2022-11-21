////////////////

import { useRouter } from 'next/router';
import { Languages, MultiLanguage } from 'pages/interfaces';
import { proxyUrlLocaleToLocale } from 'Utils/Language';

/**
 *  بوسیله این فانکشن که برای متون هوشمند استفاده میشود میتوان کلماتی از متن را که به صورت تمپلیت مشخص شده اند
 * با کلمات دیگری جایگزین نمود
 * @param  localeSenttence متن که ممکن است به هر زبانی باشد
 * @param  aliases جفت کلیدهایی که با آن مشخص میکنیم چه کلماتی باید با چه کلماتی جایگزین شوند
 * @return       جمله نهایی که تمام کلمات تمپلیت آن با کلمات مقصد جایگزین شده اند
 */
function convertAllTempKeysWithAllAliases({
  localeSenttence,
  aliases,
}: {
  localeSenttence: string;
  aliases: Record<string, string>[];
}): string {
  let myLocaleSenttence = localeSenttence;
  aliases.map((pair) => {
    myLocaleSenttence = convertKeyWithValueInString({
      senttence: myLocaleSenttence,
      pair,
    });
  });
  return myLocaleSenttence;
}



////////////////
/**
 *  یک استرینگ و یک آبجکت را گرفته، کلید آبجکت را با ولیوی آن -در استرینگ- جایگزین میکند
 * @param  senttence جمله
 * @param  pair آبجکت
 * @return      استرینگ جایگزین شده
 */
function convertKeyWithValueInString({
  senttence,
  pair,
}: {
  senttence: string;
  pair: Record<string, string>;
}): string {
  return senttence.replace(
    `{{${Object.keys(pair)[0]}}}`,
    Object.values(pair)[0]
  );
}

////////////////
/**
 *  یک گزاره را گرفته،‌بسته به زبان کاربر که از یوارال فهمیده میشود، ترجمه مناسب را برمیگرداند
 * @param  senttence جمله
 * @param  statements آبجکتی از تمام گزاره های یک پیج یا کامپوننت به زبان های مختلف
 * @param  aliases جفت کلیدهایی که با آن مشخص میکنیم چه کلماتی باید با چه کلماتی جایگزین شوند
 * @return      جمله نهایی به زبان کاربر- که از یوآرال گرفته شده- بعد از جایگزینی تمپلیت ها با آلیاس ها
 */
export const translatedObject = ({
  sentence,
  statements,
  aliases,
}: {
  sentence: string;
  statements: Record<string, MultiLanguage>;
  aliases?: Record<string, string>[];
}): string => {
  const {
    query: { locale },
  } = useRouter();
  if (!sentence || !locale) return '';
  const smartLocale = proxyUrlLocaleToLocale(locale);
  if (!aliases || aliases.length === 0)
    return statements[sentence][smartLocale];
  //
  return convertAllTempKeysWithAllAliases({
    localeSenttence: statements[sentence][smartLocale],
    aliases,
  });
};
