import { MultiLanguageText } from 'Interfaces';
import { ReactNode } from 'react';

export interface DropdownItem {
  title: MultiLanguageText;
  href: string;
  icon?: ReactNode;
}
const bussinessItems: DropdownItem[] = [
  {
    title: { en: 'Agents', fa: 'وکلا' },
    href: '/businesses/agents',
  },
  {
    title: { en: 'Naati Translators', fa: 'مترجمان ناتی' },
    href: '/businesses/naaties',
  },
  {
    title: { en: 'Exchanges', fa: 'صرافی ها' },
    href: '/businesses/exchanges',
  },
];

export { bussinessItems };
