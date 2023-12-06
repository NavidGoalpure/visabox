import { MultiLanguageText } from 'Interfaces/Database';
import { translatedObject } from './Utils';
import { useLocale } from 'Hooks/useLocale';

////////////////
/**
 * یک هوک که به ما کمک می‌کند عبارات سایت، که به زبان های مختلف از پیش تعریف شده اند را
 * بر اساس زبان کاربر نمایش دهیم
 * @param  statements لیست همه عبارات چندزبانه با ترجمه ها برای آن صحفه
 * @return      متدی که به کمک آن میتواینم ترجمه مناسب را پیدا کنیم
 */
export const useStaticTranslation = (
  statements: Record<string, MultiLanguageText>
) => {
  const { locale } = useLocale();
  return {
    ////////////////
    /**
     *  متدی که به کمک آن میتوانیم ترجمه هر عبارتی که در استیتمتز مشخص شده است را به زبان کاربر پیدا کنیم
     * @param  statementKey جمله
     * @param  aliases جفت کلیدهایی که با آن مشخص میکنیم چه کلماتی باید با چه کلماتی جایگزین شوند
     * @return      جمله نهایی به زبان کاربر- که از یوآرال گرفته شده- بعد از جایگزینی تمپلیت ها با آلیاس ها
     */
    t: (
      statementKey: string | undefined,
      aliases?: Record<string, string>[]
    ) => {
      if (!statementKey) return '';
      return translatedObject({
        statementKey,
        statements,
        aliases,
        locale,
      });
    },
  };
};
