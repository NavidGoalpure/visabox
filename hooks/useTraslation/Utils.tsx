import { useRouter } from 'next/router';
import { MultiLanguageText } from 'interfaces';
import { proxyUrlLocaleToLocale } from 'Utils/Language';

/**
 *  بوسیله این فانکشن که برای متون هوشمند استفاده میشود میتوان کلماتی از متن را که به صورت تمپلیت مشخص شده اند
 * با کلمات دیگری جایگزین نمود
 * @param  localeSentence متن که ممکن است به هر زبانی باشد
 * @param  aliases جفت کلیدهایی که با آن مشخص میکنیم چه کلماتی باید با چه کلماتی جایگزین شوند
 * @return       جمله نهایی که تمام کلمات تمپلیت آن با کلمات مقصد جایگزین شده اند
 */
function convertAllTempKeysWithAllAliases({
  localeSentence,
  aliases,
}: {
  localeSentence: string;
  aliases: Record<string, string>[];
}): string {
  let mylocaleSentence = localeSentence;
  aliases.map((pair) => {
    mylocaleSentence = convertKeyWithValueInString({
      senttence: mylocaleSentence,
      pair,
    });
  });
  return mylocaleSentence;
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
 * @param  statementKey جمله
 * @param  statements آبجکتی از تمام گزاره های یک پیج یا کامپوننت به زبان های مختلف
 * @param  aliases جفت کلیدهایی که با آن مشخص میکنیم چه کلماتی باید با چه کلماتی جایگزین شوند
 * @return      جمله نهایی به زبان کاربر- که از یوآرال گرفته شده- بعد از جایگزینی تمپلیت ها با آلیاس ها
 */
export const translatedObject = ({
  statementKey,
  statements,
  aliases,
}: {
  statementKey: string;
  statements: Record<string, MultiLanguageText>;
  aliases?: Record<string, string>[];
}): string => {
  const {
    query: { locale },
  } = useRouter();

  if (!statementKey || !locale) return '';
  const smartLocale = proxyUrlLocaleToLocale(locale);

  if (!aliases || aliases.length === 0)
    return statements?.[statementKey]?.[smartLocale] || '';
  //
  return convertAllTempKeysWithAllAliases({
    localeSentence: statements?.[statementKey]?.[smartLocale] || '',
    aliases,
  });
};
