import { MultiLanguageText } from 'pages/interfaces';

export type AnszcoGroup = {
  code: number;
  title: MultiLanguageText;
};
export const MAJOR_GROUP: AnszcoGroup[] = [
  {
    code: 1,
    title: {
      en: 'Managers',
      ir: 'مدیران',
    },
  },
  {
    code: 2,
    title: {
      en: 'Professionals',
      ir: 'متخصصان',
    },
  },
  {
    code: 3,
    title: {
      en: 'Technicians and Trades Workers',
      ir: 'تکنسین ها و متخصصان حرفه ای',
    },
  },
  {
    code: 4,
    title: {
      en: 'Community and Personal Service Workers',
      ir: 'متخصصان خدمات اجتماعی و خدمات شخصی',
    },
  },
  {
    code: 5,
    title: {
      en: 'Clerical and Administrative Workers',
      ir: 'متخصصان دفتری و اداری',
    },
  },
  {
    code: 6,
    title: {
      en: 'Sales Workers',
      ir: 'متخصصان فروش',
    },
  },
];

export const SUB_MAJOR_GROUP: AnszcoGroup[] = [
  {
    code: 12,
    title: {
      en: 'Farmers and Farm Managers',
      ir: 'کشاورزان و مدیران کشاورزی',
    },
  },
  {
    code: 13,
    title: {
      en: 'Specialist Managers',
      ir: 'مدیران تخصصی',
    },
  },
  {
    code: 14,
    title: {
      en: 'Hospitality, Retail and Service Managers',
      ir: 'مدیران هتلداری، خرده فروشی و خدمات',
    },
  },
  {
    code: 21,
    title: {
      en: 'Arts and Media Professionals',
      ir: 'متخصصان هنر و رسانه',
    },
  },
  {
    code: 22,
    title: {
      en: 'Business, Human Resource and Marketing Professionals',
      ir: 'بازرگانی، منابع انسانی و متخصصان بازاریابی',
    },
  },
  {
    code: 23,
    title: {
      en: 'Design, Engineering, Science and Transport Professionals',
      ir: 'متخصصان طراحی، مهندسی، علوم و حمل و نقل',
    },
  },
  {
    code: 24,
    title: {
      en: 'Education Professionals',
      ir: 'متخصصان آموزش  ',
    },
  },
  { code: 25, title: { en: 'Health Professionals', ir: 'متخصصان سلامت' } },
  {
    code: 26,
    title: { en: 'ICT Professionals', ir: 'متخصصان فناوری اطلاعات و ارتباطات' },
  },
  {
    code: 27,
    title: {
      en: 'Legal, Social and Welfare Professionals',
      ir: 'متخصصین حقوقی، اجتماعی و رفاهی',
    },
  },
  {
    code: 31,
    title: {
      en: 'Engineering, ICT and Science Technicians',
      ir: 'مهندسان، تکنسین های علوم و فناوری اطلاعات و ارتباطات',
    },
  },

  {
    code: 32,
    title: {
      en: 'Automotive and Engineering Trades Workers',
      ir: 'متخصصان صنایع خودروسازی و مهندسی',
    },
  },
  {
    code: 33,
    title: { en: 'Construction Trades Workers', ir: 'متخصصان صنایع ساختمانی' },
  },
  {
    code: 34,
    title: {
      en: 'Electrotechnology and Telecommunications Trades Workers',
      ir: 'متخصصان صنایع الکتروتکنولوژی و مخابرات',
    },
  },
  { code: 35, title: { en: 'Food Trades Workers', ir: 'متخصصان صنایع غذایی' } },
  {
    code: 36,
    title: {
      en: 'Skilled Animal and Horticultural Workers',
      ir: 'متخصصان دام و باغبانی',
    },
  },
  {
    code: 41,
    title: {
      en: 'Health and Welfare Support Workers',
      ir: 'متخصصان حامی سلامت و رفاه',
    },
  },
  {
    code: 42,
    title: {
      en: 'Carers and Aides',
      ir: 'مراقبین و کمک کننده ها',
    },
  },
  { code: 43, title: { en: 'Hospitality Workers', ir: 'متخصصان هتلداری' } },
  {
    code: 44,
    title: { en: 'Protective Service Workers', ir: 'کارگران خدمات حفاظتی' },
  },
  {
    code: 45,
    title: {
      en: 'Sports and Personal Service Workers',
      ir: 'کارکنان ورزش و خدمات شخصی',
    },
  },
  {
    code: 51,
    title: {
      en: 'Office Managers and Program Administrators',
      ir: 'مدیران اداری و مدیران برنامه ای',
    },
  },
  {
    code: 52,
    title: {
      en: 'Personal Assistants and Secretaries',
      ir: 'دستیاران شخصی و منشی ها',
    },
  },
  {
    code: 53,
    title: { en: 'General Clerical Workers', ir: 'کارگران دفتری عمومی' },
  },
  {
    code: 54,
    title: {
      en: 'Inquiry Clerks and Receptionists',
      ir: 'کارمندان استعلام و پذیرش',
    },
  },
  { code: 55, title: { en: 'Numerical Clerks', ir: 'اعداد و ارقام' } },
  {
    code: 61,
    title: {
      en: 'Sales Representatives and Agents',
      ir: 'نمایندگی ها و نمایندگان فروش',
    },
  },
];
export const Minor_GROUP: AnszcoGroup[] = [
  {
    code: 121,
    title: {
      en: 'Farmers and Farm Managers',
      ir: 'کشاورزان و مدیران کشاورزی',
    },
  },
  {
    code: 131,
    title: {
      en: 'Advertising, Public Relations and Sales Managers',
      ir: 'مدیران تبلیغات، روابط عمومی و فروش',
    },
  },
  {
    code: 141,
    title: {
      en: 'Accommodation and Hospitality Managers',
      ir: 'مدیران اسکان و پذیرایی',
    },
  },
  {
    code: 211,
    title: {
      en: 'Arts Professionals',
      ir: 'متخصصان هنری',
    },
  },
  {
    code: 212,
    title: {
      en: 'Arts and Media Professionals',
      ir: 'متخصصان رسانه',
    },
  },
  {
    code: 221,
    title: {
      en: 'Accountants, Auditors and Company Secretaries',
      ir: 'حسابداران، حسابرسان و منشی شرکت',
    },
  },
  {
    code: 231,
    title: {
      en: 'Air and Marine Transport Professionals',
      ir: 'متخصصان حمل و نقل هوایی و دریایی',
    },
  },
  { code: 241, title: { en: ' School Teachers', ir: 'معلمان مدرسه' } },
  {
    code: 251,
    title: {
      en: 'Health Diagnostic and Promotion Professionals',
      ir: 'متخصصان تشخیص و ارتقای سلامت',
    },
  },
  {
    code: 261,
    title: {
      en: 'Business and Systems Analysts, and Programmers',
      ir: 'تحلیلگران کسب و کار و سیستم ها و برنامه نویسان',
    },
  },
  { code: 271, title: { en: 'Legal Professionals', ir: 'متخصصان حقوق' } },
  {
    code: 311,
    title: {
      en: 'Agricultural, Medical and Science Technicians',
      ir: 'تکنسین های کشاورزی، پزشکی و علمی',
    },
  },
  {
    code: 321,
    title: {
      en: 'Automotive Electricians and Mechanics',
      ir: 'برق و مکانیک خودرو',
    },
  },
  {
    code: 331,
    title: {
      en: 'Bricklayers, and Carpenters and Joiners',
      ir: 'آجركاران و نجاران',
    },
  },
  { code: 341, title: { en: 'Electricians', ir: 'برق کاران' } },
  {
    code: 351,
    title: { en: 'Food Trades Workers', ir: 'متخصصان صنایع غذایی' },
  },
  {
    code: 361,
    title: {
      en: 'Animal Attendants and Trainers, and Shearers',
      ir: 'مراقبین و مربیان حیوانات و قیچی کنندگان',
    },
  },
  {
    code: 411,
    title: {
      en: 'Health and Welfare Support Workers',
      ir: 'متخصصان حامی سلامت و رفاه',
    },
  },
  { code: 421, title: { en: 'Child Carers', ir: 'مراقبین کودک' } },
  { code: 431, title: { en: 'Hospitality Workers', ir: 'متخصصان هتلداری' } },
  {
    code: 441,
    title: {
      en: 'Defence Force Members, Fire Fighters and Police',
      ir: 'اعضای نیروی دفاعی، آتش نشانان و پلیس',
    },
  },
  {
    code: 451,
    title: {
      en: 'Personal Service and Travel Workers',
      ir: 'کارگران خدمات شخصی و مسافرتی',
    },
  },
  {
    code: 511,
    title: {
      en: 'Contract, Program and Project Administrators',
      ir: 'مدیران قرارداد، برنامه و پروژه',
    },
  },
  {
    code: 521,
    title: {
      en: 'Personal Assistants and Secretaries',
      ir: 'دستیاران شخصی و منشی ها',
    },
  },
  { code: 531, title: { en: 'General Clerks', ir: 'کارمندان عمومی' } },
  {
    code: 541,
    title: {
      en: 'Call or Contact Centre Information Clerks',
      ir: 'کارمندان مرکز تماس یا مرکز اطلاعات',
    },
  },
  {
    code: 551,
    title: {
      en: 'Accounting Clerks and Bookkeepers',
      ir: 'کارمندان حسابداری و حسابداران',
    },
  },
  {
    code: 611,
    title: {
      en: 'Insurance Agents and Sales Representatives',
      ir: 'نمایندگی های بیمه و نمایندگان فروش',
    },
  },
];
