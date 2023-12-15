import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  CurrentJobInputLabel = 'CurrentJobInputLabel',
  CurrentJobInputPlaceholder = 'CurrentJobInputPlaceholder',
  NextButtonTitle = 'NextButtonTitle',
  PrevButtonTitle = 'PrevButtonTitle',
  CanProvideLegalProofForExperience = 'CanProvideLegalProofForExperience',
  WasTheJobInAustralia = 'WasTheJobInAustralia',
  AddJobSwiper = 'AddJobSwiper',
  SelectedJobTitle = 'SelectedJobTitle',
  SaveTitle = 'SaveTitle',
  BackTitle = 'BackTitle',
  ModalWorkExperienceSection = 'ModalWorkExperienceSection',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  CurrentJobInputLabel: {
    en: 'Current Job:',
    fa: 'کار فعلی:',
    zh: '目前的工作：',
  },
  CurrentJobInputPlaceholder: {
    en: 'Example: Web Developer',
    fa: 'مثال: برنامه نویس اپلیکیشن موبایل',
    zh: '示例：Web 开发人员',
  },

  NextButtonTitle: {
    en: 'Next',
    fa: 'بعدی',
    zh: '下一个',
  },
  PrevButtonTitle: {
    en: 'Prev',
    fa: 'قبلی',
    zh: '上一篇',
  },
  SelectedJobTitle: {
    en: 'Job Title:',
    fa: 'عنوان شغلی:',
    zh: '职称',
  },
  CanProvideLegalProofForExperience: {
    en: 'Can you submit legal documents?',
    fa: 'امکان ارائه مدارک قانونی',
    zh: '可以提交法律文件吗？',
  },
  WasTheJobInAustralia: {
    en: 'Was this job done in Australia?',
    fa: 'آیا این شغل در استرالیا بوده؟',
    zh: '这项工作是在澳大利亚完成的吗？',
  },
  ModalWorkExperienceSection: {
    en: 'Work Experience:',
    fa: 'سابقه کار:',
    zh: '工作经验：',
  },

  AddJobSwiper: {
    en: 'Add Job Details',
    fa: 'افزودن مشخصات شغل',
    zh: '添加职位详细信息',
  },
  SaveTitle: {
    en: 'Save',
    fa: 'ذخیره',
    zh: '节省',
  },
  BackTitle: {
    en: 'Back',
    fa: 'بازگشت',
    zh: '后退',
  },
};
