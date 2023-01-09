import { MultiLanguageText } from 'Interfaces';
import { AssessingAuthorityAbv } from 'Interfaces/Documents/occupation';
import { AssssingAuthority } from './interfaces';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Skills Assessment And Assessing Authorities | Mara Box',
    fa: 'لیست موسسات ارزیابی مدارک و مهارت های استرالیا | مارا باکس',
  },
  SeoDesc: {
    fa: 'فهرست کامل مشاغل موسسات ارزیابی مدارک و مهارت های استرالیا به همراه آدرس و اطلاعات تماس',
    en: 'See the full skills assessment and assessing authorities List & find their address, email, website and etc.',
  },
  //
  PageTitle: {
    fa: 'لیست موسسات ارزیابی مدارک و مهارت های استرالیا',
    en: 'Skills ssessment and assessing authorities list',
  },
};

////////////
export const assssingAuthorities: AssssingAuthority[] = [
  {
    title: { en: 'Architects Accreditation Council of Australia' },
    abv: AssessingAuthorityAbv.AACA,
    address: `Architects Accreditation Council of Australia
PO Box 236
Civic. Square
Canberra ACT 2608
Australia`,
    email: 'mail@aaca.org.au',
    website: 'http://www.aaca.org.au/',
  },
];
