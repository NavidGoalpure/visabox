import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  CopyInClipboard = 'CopyInClipboard',
}

export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  CopyInClipboard: {
    fa: ' لینک در حافظه کپی شد ',
    en: 'The link has been copied ',
    zh: '此链接已复制到剪贴板',
  },
};

//////
