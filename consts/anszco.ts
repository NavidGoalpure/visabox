import { MultiLanguageText } from 'interfaces';

export type AnszcoGroup = {
  code: number;
  title: MultiLanguageText;
};
export const MAJOR_GROUP: AnszcoGroup[] = [
  {
    code: 1,
    title: {
      en: 'Managers',
      fa: 'مدیران',
    },
  },
  {
    code: 2,
    title: {
      en: 'Professionals',
      fa: 'متخصصان',
    },
  },
  {
    code: 3,
    title: {
      en: 'Technicians and Trades Workers',
      fa: 'تکنسین ها و متخصصان حرفه ای',
    },
  },
  {
    code: 4,
    title: {
      en: 'Community and Personal Service Workers',
      fa: 'متخصصان خدمات اجتماعی و خدمات شخصی',
    },
  },
  {
    code: 5,
    title: {
      en: 'Clerical and Administrative Workers',
      fa: 'متخصصان دفتری و اداری',
    },
  },
  {
    code: 6,
    title: {
      en: 'Sales Workers',
      fa: 'متخصصان فروش',
    },
  },
];

export const SUB_MAJOR_GROUP: AnszcoGroup[] = [
  {
    code: 12,
    title: {
      en: 'Farmers and Farm Managers',
      fa: 'کشاورزان و مدیران کشاورزی',
    },
  },
  {
    code: 13,
    title: {
      en: 'Specialist Managers',
      fa: 'مدیران تخصصی',
    },
  },
  {
    code: 14,
    title: {
      en: 'Hospitality, Retail and Service Managers',
      fa: 'مدیران هتلداری، خرده فروشی و خدمات',
    },
  },
  {
    code: 21,
    title: {
      en: 'Arts and Media Professionals',
      fa: 'متخصصان هنر و رسانه',
    },
  },
  {
    code: 22,
    title: {
      en: 'Business, Human Resource and Marketing Professionals',
      fa: 'بازرگانی، منابع انسانی و متخصصان بازاریابی',
    },
  },
  {
    code: 23,
    title: {
      en: 'Design, Engineering, Science and Transport Professionals',
      fa: 'متخصصان طراحی، مهندسی، علوم و حمل و نقل',
    },
  },
  {
    code: 24,
    title: {
      en: 'Education Professionals',
      fa: 'متخصصان آموزش  ',
    },
  },
  { code: 25, title: { en: 'Health Professionals', fa: 'متخصصان سلامت' } },
  {
    code: 26,
    title: { en: 'ICT Professionals', fa: 'متخصصان فناوری اطلاعات و ارتباطات' },
  },
  {
    code: 27,
    title: {
      en: 'Legal, Social and Welfare Professionals',
      fa: 'متخصصین حقوقی، اجتماعی و رفاهی',
    },
  },
  {
    code: 31,
    title: {
      en: 'Engineering, ICT and Science Technicians',
      fa: 'مهندسان، تکنسین های علوم و فناوری اطلاعات و ارتباطات',
    },
  },

  {
    code: 32,
    title: {
      en: 'Automotive and Engineering Trades Workers',
      fa: 'متخصصان صنایع خودروسازی و مهندسی',
    },
  },
  {
    code: 33,
    title: { en: 'Construction Trades Workers', fa: 'متخصصان صنایع ساختمانی' },
  },
  {
    code: 34,
    title: {
      en: 'Electrotechnology and Telecommunications Trades Workers',
      fa: 'متخصصان صنایع الکتروتکنولوژی و مخابرات',
    },
  },
  { code: 35, title: { en: 'Food Trades Workers', fa: 'متخصصان صنایع غذایی' } },
  {
    code: 36,
    title: {
      en: 'Skilled Animal and Horticultural Workers',
      fa: 'متخصصان دام و باغبانی',
    },
  },
  {
    code: 41,
    title: {
      en: 'Health and Welfare Support Workers',
      fa: 'متخصصان حامی سلامت و رفاه',
    },
  },
  {
    code: 42,
    title: {
      en: 'Carers and Aides',
      fa: 'مراقبین و کمک کننده ها',
    },
  },
  { code: 43, title: { en: 'Hospitality Workers', fa: 'متخصصان هتلداری' } },
  {
    code: 44,
    title: { en: 'Protective Service Workers', fa: 'کارگران خدمات حفاظتی' },
  },
  {
    code: 45,
    title: {
      en: 'Sports and Personal Service Workers',
      fa: 'کارکنان ورزش و خدمات شخصی',
    },
  },
  {
    code: 51,
    title: {
      en: 'Office Managers and Program Administrators',
      fa: 'مدیران اداری و مدیران برنامه ای',
    },
  },
  {
    code: 52,
    title: {
      en: 'Personal Assistants and Secretaries',
      fa: 'دستیاران شخصی و منشی ها',
    },
  },
  {
    code: 53,
    title: { en: 'General Clerical Workers', fa: 'کارگران دفتری عمومی' },
  },
  {
    code: 54,
    title: {
      en: 'Inquiry Clerks and Receptionists',
      fa: 'کارمندان استعلام و پذیرش',
    },
  },
  { code: 55, title: { en: 'Numerical Clerks', fa: 'کارمندان اعداد' } },
  {
    code: 56,
    title: {
      en: 'Clerical and Office Support Workers',
      fa: 'کارمندان دفتری و پشتیبانی اداری',
    },
  },
  {
    code: 61,
    title: {
      en: 'Sales Representatives and Agents',
      fa: 'نمایندگی ها و نمایندگان فروش',
    },
  },
  {
    code: 62,
    title: {
      en: 'Sales Assistants and Salespersons',
      fa: 'دستیاران فروش و فروشندگان',
    },
  },
  {
    code: 63,
    title: {
      en: 'Sales Support Workers',
      fa: 'کارمند پشتیبانی فروش',
    },
  },
];
export const Minor_GROUP: AnszcoGroup[] = [
  {
    code: 121,
    title: {
      en: 'Farmers and Farm Managers',
      fa: 'کشاورزان و مدیران کشاورزی',
    },
  },
  {
    code: 131,
    title: {
      en: 'Advertising, Public Relations and Sales Managers',
      fa: 'مدیران تبلیغات، روابط عمومی و فروش',
    },
  },
  {
    code: 132,
    title: {
      en: 'Business Administration Managers',
      fa: 'مدیریت بازرگانی',
    },
  },
  {
    code: 133,
    title: {
      en: 'Construction, Distribution and Production Managers',
      fa: 'مدیران ساخت، توزیع و تولید',
    },
  },
  {
    code: 134,
    title: {
      en: 'Education, Health and Welfare Services Managers',
      fa: 'مدیران آموزش، بهداشت و خدمات رفاهی',
    },
  },
  {
    code: 135,
    title: {
      en: 'ICT Managers',
      fa: 'مدیران فناوری اطلاعات و ارتباطات',
    },
  },
  {
    code: 141,
    title: {
      en: 'Accommodation and Hospitality Managers',
      fa: 'مدیران اسکان و پذیرایی',
    },
  },
  {
    code: 142,
    title: {
      en: 'Retail Managers',
      fa: 'مدیران خرده فروشی',
    },
  },
  {
    code: 211,
    title: {
      en: 'Arts Professionals',
      fa: 'متخصصان هنری',
    },
  },
  {
    code: 212,
    title: {
      en: 'Arts and Media Professionals',
      fa: 'متخصصان رسانه',
    },
  },
  {
    code: 221,
    title: {
      en: 'Accountants, Auditors and Company Secretaries',
      fa: 'حسابداران، حسابرسان و منشی شرکت',
    },
  },
  {
    code: 222,
    title: {
      en: 'Financial Brokers and Dealers, and Investment Advisers',
      fa: 'کارگزاران و دلالان مالی و مشاوران سرمایه گذاری',
    },
  },
  {
    code: 223,
    title: {
      en: 'Human Resource and Training Professionals',
      fa: 'منابع انسانی و آموزش حرفه ای',
    },
  },
  {
    code: 224,
    title: {
      en: 'Information and Organisation Professionals',
      fa: 'متخصصان اطلاعات و سازمان',
    },
  },
  {
    code: 225,
    title: {
      en: 'Sales, Marketing and Public Relations Professionals',
      fa: 'کارشناسان فروش، بازاریابی و روابط عمومی',
    },
  },
  {
    code: 231,
    title: {
      en: 'Air and Marine Transport Professionals',
      fa: 'متخصصان حمل و نقل هوایی و دریایی',
    },
  },
  {
    code: 232,
    title: {
      en: 'Architects, Designers, Planners and Surveyors',
      fa: 'معماران، طراحان، برنامه ریزان و نقشه برداران',
    },
  },
  {
    code: 233,
    title: {
      en: 'Engineering Professionals',
      fa: 'متخصصان مهندسی',
    },
  },
  {
    code: 234,
    title: {
      en: 'Natural and Physical Science Professionals',
      fa: 'متخصصان علوم طبیعی و فیزیکی',
    },
  },

  { code: 241, title: { en: 'School Teachers', fa: 'معلمان مدرسه' } },
  {
    code: 242,
    title: {
      en: 'Tertiary Education Teachers',
      fa: 'معلمان آموزش عالی',
    },
  },
  {
    code: 251,
    title: {
      en: 'Health Diagnostic and Promotion Professionals',
      fa: 'متخصصان تشخیص و ارتقای سلامت',
    },
  },
  {
    code: 252,
    title: {
      en: 'Health Therapy Professionals',
      fa: 'متخصصان سلامت درمانی',
    },
  },
  {
    code: 253,
    title: {
      en: 'Medical Practitioners',
      fa: 'پزشکان',
    },
  },
  {
    code: 254,
    title: {
      en: 'Midwifery and Nursing Professionals',
      fa: 'متخصصین مامایی و پرستاری',
    },
  },
  {
    code: 261,
    title: {
      en: 'Business and Systems Analysts, and Programmers',
      fa: 'تحلیلگران کسب و کار و سیستم ها و برنامه نویسان',
    },
  },
  {
    code: 262,
    title: {
      en: 'Database and Systems Administrators, and ICT Security Specialists',
      fa: 'مدیران پایگاه داده و سیستم ها و متخصصان امنیت فناوری اطلاعات و ارتباطات',
    },
  },
  {
    code: 263,
    title: {
      en: 'ICT Network and Support Professionals',
      fa: 'شبکه های فناوری اطلاعات و ارتباطات و متخصصان پشتیبانی',
    },
  },
  { code: 271, title: { en: 'Legal Professionals', fa: 'متخصصان حقوق' } },
  {
    code: 272,
    title: {
      en: 'Social and Welfare Professionals',
      fa: 'متخصصین اجتماعی و رفاهی',
    },
  },

  {
    code: 311,
    title: {
      en: 'Agricultural, Medical and Science Technicians',
      fa: 'تکنسین های کشاورزی، پزشکی و علمی',
    },
  },
  {
    code: 312,
    title: {
      en: 'Building and Engineering Technicians',
      fa: 'تکنسین های ساختمان و مهندسی',
    },
  },
  {
    code: 313,
    title: {
      en: 'ICT and Telecommunications Technicians',
      fa: 'تکنسین های فناوری اطلاعات و ارتباطات و ارتباطات',
    },
  },
  {
    code: 322,
    title: {
      en: 'Fabrication Engineering Trades Workers',
      fa: 'کارگران صنایع مهندسی ساخت',
    },
  },
  {
    code: 323,
    title: {
      en: 'Mechanical Engineering Trades Workers',
      fa: 'کارگران صنایع مهندسی مکانیک',
    },
  },
  {
    code: 324,
    title: {
      en: 'Panelbeaters, and Vehicle Body Builders, Trimmers and Painters',
      fa: 'پانل کوب، و بدنه ساز خودرو، صافکار و نقاش',
    },
  },
  {
    code: 331,
    title: {
      en: 'Bricklayers, and Carpenters and Joiners',
      fa: 'آجركاران و نجاران',
    },
  },
  {
    code: 332,
    title: {
      en: 'Floor Finishers and Painting Trades Workers',
      fa: 'کارگران کف سازی و نقاشی',
    },
  },
  {
    code: 333,
    title: {
      en: 'Glaziers, Plasterers and Tilers',
      fa: 'شیشه کار، گچ کار و کاشی کار',
    },
  },
  {
    code: 334,
    title: {
      en: 'Plumbers',
      fa: 'لوله کش ها',
    },
  },

  { code: 341, title: { en: 'Electricians', fa: 'برق کاران' } },
  {
    code: 342,
    title: {
      en: 'Electronics and Telecommunications Trades Workers',
      fa: 'کارگران صنایع الکترونیک و مخابرات',
    },
  },
  {
    code: 351,
    title: { en: 'Food Trades Workers', fa: 'متخصصان صنایع غذایی' },
  },
  {
    code: 361,
    title: {
      en: 'Animal Attendants and Trainers, and Shearers',
      fa: 'مراقبین و مربیان حیوانات و قیچی کنندگان',
    },
  },
  {
    code: 362,
    title: {
      en: 'Horticultural Trades Workers',
      fa: 'کارگران صنایع باغبانی',
    },
  },

  {
    code: 411,
    title: {
      en: 'Health and Welfare Support Workers',
      fa: 'متخصصان حامی سلامت و رفاه',
    },
  },

  { code: 421, title: { en: 'Child Carers', fa: 'مراقبین کودک' } },
  {
    code: 422,
    title: {
      en: 'Education Aides',
      fa: 'دستیاران آموزش و پرورش',
    },
  },
  {
    code: 423,
    title: {
      en: 'Personal Carers and Assistants',
      fa: 'مراقبین شخصی و دستیاران',
    },
  },
  { code: 431, title: { en: 'Hospitality Workers', fa: 'متخصصان هتلداری' } },
  {
    code: 441,
    title: {
      en: 'Defence Force Members, Fire Fighters and Police',
      fa: 'اعضای نیروی دفاعی، آتش نشانان و پلیس',
    },
  },
  {
    code: 442,
    title: {
      en: 'Prison and Security Officers',
      fa: 'ماموران زندان و ماموران امنیتی',
    },
  },
  {
    code: 451,
    title: {
      en: 'Personal Service and Travel Workers',
      fa: 'کارگران خدمات شخصی و مسافرتی',
    },
  },
  {
    code: 452,
    title: {
      en: 'Sports and Fitness Workers',
      fa: 'مربیان ورزش و تناسب اندام',
    },
  },
  {
    code: 511,
    title: {
      en: 'Contract, Program and Project Administrators',
      fa: 'مدیران قرارداد، برنامه و پروژه',
    },
  },
  {
    code: 512,
    title: {
      en: 'Office and Practice Managers',
      fa: 'مدیران دفتر و تمرین',
    },
  },
  {
    code: 521,
    title: {
      en: 'Personal Assistants and Secretaries',
      fa: 'دستیاران شخصی و منشی ها',
    },
  },
  { code: 531, title: { en: 'General Clerks', fa: 'کارمندان عمومی' } },
  {
    code: 532,
    title: { en: 'Keyboard Operators', fa: 'اپراتورهای صفحه کلید' },
  },
  {
    code: 541,
    title: {
      en: 'Call or Contact Centre Information Clerks',
      fa: 'کارمندان مرکز تماس یا مرکز اطلاعات',
    },
  },
  {
    code: 542,
    title: {
      en: 'Receptionists',
      fa: 'مسئولین پذیرش',
    },
  },
  {
    code: 551,
    title: {
      en: 'Accounting Clerks and Bookkeepers',
      fa: 'کارمندان حسابداری و حسابداران',
    },
  },
  {
    code: 552,
    title: {
      en: 'Financial and Insurance Clerks',
      fa: 'کارمندان مالی و بیمه',
    },
  },
  {
    code: 561,
    title: {
      en: 'Clerical and Office Support Workers',
      fa: 'کارمندان دفتری و پشتیبانی اداری',
    },
  },
  {
    code: 611,
    title: {
      en: 'Insurance Agents and Sales Representatives',
      fa: 'نمایندگی های بیمه و نمایندگان فروش',
    },
  },
  {
    code: 612,
    title: {
      en: 'Real Estate Sales Agents',
      fa: 'نمایندگی های فروش املاک',
    },
  },
  {
    code: 621,
    title: {
      en: 'Sales Assistants and Salespersons',
      fa: 'دستیاران فروش و فروشندگان',
    },
  },
  {
    code: 631,
    title: {
      en: 'Checkout Operators and Office Cashiers',
      fa: 'اپراتورها و صندوقدارهای دفتر',
    },
  },
];
