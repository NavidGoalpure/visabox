import { Interface } from 'readline';
import { FeaturedPlan_Business } from '.';
import { Contact, EnLanguage, MultiLanguageText, Status } from '..';
import { Slug } from '../Fields';
interface MaraAgencyContact {
  email?: string;
  phone?: string;
  full_address?: string;
}

export interface MaraAgency {
  mara_number_ref?: string;
  title?: MultiLanguageText;
  country?: string;
  state?: string;
  city?: string;
  contact?: MaraAgencyContact;
  credit?: number;
}
// فعلا فقط انگلیسی داره اما بعدا ممکنه کسی بخواد اسم فارسی و ... رو اضافه کنه
// برای اینکه تایپ اصلیمون رو نگم فیلدهاش اختیاریه، این رو پارشیال تایپ اصلی ساختم
export type MaraAgentLang = Partial<MultiLanguageText>;
export interface MaraAgent {
  _id: string;
  name?: MultiLanguageText;
  phone?: string[];
  slug?: Slug;
  email?: string;
  desc?: string;
  plan?: FeaturedPlan_Business;
  contact?: Contact;
  avatar?: string;
  status?: Status;
  mara_number?: string;
  reg_date?: string;
  website?: string;
  agencies?: MaraAgency[];
  //فیلدهای زیر به عنوان پراپرتی در سنیتی حضور ندارند
  // اما در کوئری ها از آنها استفاده می‌کنیم و دیتایی که میخواهیم را درونشان میگذاریم
  hasAvatar?: boolean;
}
