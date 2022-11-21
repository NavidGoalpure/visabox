import { MultiLanguageText } from 'pages/interfaces';
import { translatedObject } from './Utils';

////////////////
/**
 *  متدی که به کمک آن میتوانیم ترجمه هر عبارتی که در استیتمتز مشخص شده است را به زبان کاربر پیدا کنیم
 * @param  senttence جمله
 * @param  aliases جفت کلیدهایی که با آن مشخص میکنیم چه کلماتی باید با چه کلماتی جایگزین شوند
 * @return      جمله نهایی به زبان کاربر- که از یوآرال گرفته شده- بعد از جایگزینی تمپلیت ها با آلیاس ها
 */
export const useTranslation = (
  statements: Record<string, MultiLanguageText>
) => {
  return {
    t: (sentence: string, aliases?: Record<string, string>[]) =>
      translatedObject({ sentence, statements, aliases }),
  };
};
