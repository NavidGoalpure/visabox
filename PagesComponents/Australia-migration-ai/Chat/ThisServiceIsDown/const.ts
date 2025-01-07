import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  serviceIsDown = 'serviceIsDown',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  serviceIsDown: {
    fa: 'این سرویس دیگر فعال نمی‌باشد',
    zh: '此服务已停止运行',
    en: 'This service is no longer active',
  },
};
