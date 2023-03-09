import { MultiLanguageText } from 'Interfaces';

interface DropdownItem {
  title: MultiLanguageText;
  href: string;
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
