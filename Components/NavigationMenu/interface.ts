import { MultiLanguageText } from 'Interfaces';
import { ReactNode } from 'react';

export interface DropdownItem {
  title: MultiLanguageText;
  href: string;
  icon?: ReactNode;
}
