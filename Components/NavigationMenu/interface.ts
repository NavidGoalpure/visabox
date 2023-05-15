import { MultiLanguageText } from 'Interfaces/Database';
import { ReactNode } from 'react';

export interface DropdownItem {
  title: MultiLanguageText;
  href: string;
  icon?: ReactNode;
}
