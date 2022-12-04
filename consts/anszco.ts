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
  { code: 55, title: { en: 'Numerical Clerks', ir: 'کارمندان اعداد' } },
  {
    code: 56,
    title: {
      en: 'Clerical and Office Support Workers',
      ir: 'کارمندان دفتری و پشتیبانی اداری',
    },
  },
  {
    code: 61,
    title: {
      en: 'Sales Representatives and Agents',
      ir: 'نمایندگی ها و نمایندگان فروش',
    },
  },
  {
    code: 62,
    title: {
      en: 'Sales Assistants and Salespersons',
      ir: 'دستیاران فروش و فروشندگان',
    },
  },
  {
    code: 63,
    title: {
      en: 'Sales Support Workers',
      ir: 'کارمند پشتیبانی فروش',
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
    code: 132,
    title: {
      en: 'Business Administration Managers',
      ir: 'مدیریت بازرگانی',
    },
  },
  {
    code: 133,
    title: {
      en: 'Construction, Distribution and Production Managers',
      ir: 'مدیران ساخت، توزیع و تولید',
    },
  },
  {
    code: 134,
    title: {
      en: 'Education, Health and Welfare Services Managers',
      ir: 'مدیران آموزش، بهداشت و خدمات رفاهی',
    },
  },
  {
    code: 135,
    title: {
      en: 'ICT Managers',
      ir: 'مدیران فناوری اطلاعات و ارتباطات',
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
    code: 142,
    title: {
      en: 'Retail Managers',
      ir: 'مدیران خرده فروشی',
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
    code: 222,
    title: {
      en: 'Financial Brokers and Dealers, and Investment Advisers',
      ir: 'کارگزاران و دلالان مالی و مشاوران سرمایه گذاری',
    },
  },
  {
    code: 223,
    title: {
      en: 'Human Resource and Training Professionals',
      ir: 'منابع انسانی و آموزش حرفه ای',
    },
  },
  {
    code: 224,
    title: {
      en: 'Information and Organisation Professionals',
      ir: 'متخصصان اطلاعات و سازمان',
    },
  },
  {
    code: 225,
    title: {
      en: 'Sales, Marketing and Public Relations Professionals',
      ir: 'کارشناسان فروش، بازاریابی و روابط عمومی',
    },
  },
  {
    code: 231,
    title: {
      en: 'Air and Marine Transport Professionals',
      ir: 'متخصصان حمل و نقل هوایی و دریایی',
    },
  },
  {
    code: 232,
    title: {
      en: 'Architects, Designers, Planners and Surveyors',
      ir: 'معماران، طراحان، برنامه ریزان و نقشه برداران',
    },
  },
  {
    code: 233,
    title: {
      en: 'Engineering Professionals',
      ir: 'متخصصان مهندسی',
    },
  },
  {
    code: 234,
    title: {
      en: 'Natural and Physical Science Professionals',
      ir: 'متخصصان علوم طبیعی و فیزیکی',
    },
  },

  { code: 241, title: { en: 'School Teachers', ir: 'معلمان مدرسه' } },
  {
    code: 242,
    title: {
      en: 'Tertiary Education Teachers',
      ir: 'معلمان آموزش عالی',
    },
  },
  {
    code: 251,
    title: {
      en: 'Health Diagnostic and Promotion Professionals',
      ir: 'متخصصان تشخیص و ارتقای سلامت',
    },
  },
  {
    code: 252,
    title: {
      en: 'Health Therapy Professionals',
      ir: 'متخصصان سلامت درمانی',
    },
  },
  {
    code: 253,
    title: {
      en: 'Medical Practitioners',
      ir: 'پزشکان',
    },
  },
  {
    code: 254,
    title: {
      en: 'Midwifery and Nursing Professionals',
      ir: 'متخصصین مامایی و پرستاری',
    },
  },
  {
    code: 261,
    title: {
      en: 'Business and Systems Analysts, and Programmers',
      ir: 'تحلیلگران کسب و کار و سیستم ها و برنامه نویسان',
    },
  },
  {
    code: 262,
    title: {
      en: 'Database and Systems Administrators, and ICT Security Specialists',
      ir: 'مدیران پایگاه داده و سیستم ها و متخصصان امنیت فناوری اطلاعات و ارتباطات',
    },
  },
  {
    code: 263,
    title: {
      en: 'ICT Network and Support Professionals',
      ir: 'شبکه های فناوری اطلاعات و ارتباطات و متخصصان پشتیبانی',
    },
  },
  { code: 271, title: { en: 'Legal Professionals', ir: 'متخصصان حقوق' } },
  {
    code: 272,
    title: {
      en: 'Social and Welfare Professionals',
      ir: 'متخصصین اجتماعی و رفاهی',
    },
  },

  {
    code: 311,
    title: {
      en: 'Agricultural, Medical and Science Technicians',
      ir: 'تکنسین های کشاورزی، پزشکی و علمی',
    },
  },
  {
    code: 312,
    title: {
      en: 'Building and Engineering Technicians',
      ir: 'تکنسین های ساختمان و مهندسی',
    },
  },
  {
    code: 313,
    title: {
      en: 'ICT and Telecommunications Technicians',
      ir: 'تکنسین های فناوری اطلاعات و ارتباطات و ارتباطات',
    },
  },
  {
    code: 322,
    title: {
      en: 'Fabrication Engineering Trades Workers',
      ir: 'کارگران صنایع مهندسی ساخت',
    },
  },
  {
    code: 323,
    title: {
      en: 'Mechanical Engineering Trades Workers',
      ir: 'کارگران صنایع مهندسی مکانیک',
    },
  },
  {
    code: 324,
    title: {
      en: 'Panelbeaters, and Vehicle Body Builders, Trimmers and Painters',
      ir: 'پانل کوب، و بدنه ساز خودرو، صافکار و نقاش',
    },
  },
  {
    code: 331,
    title: {
      en: 'Bricklayers, and Carpenters and Joiners',
      ir: 'آجركاران و نجاران',
    },
  },
  {
    code: 332,
    title: {
      en: 'Floor Finishers and Painting Trades Workers',
      ir: 'کارگران کف سازی و نقاشی',
    },
  },
  {
    code: 333,
    title: {
      en: 'Glaziers, Plasterers and Tilers',
      ir: 'شیشه کار، گچ کار و کاشی کار',
    },
  },
  {
    code: 334,
    title: {
      en: 'Plumbers',
      ir: 'لوله کش ها',
    },
  },

  { code: 341, title: { en: 'Electricians', ir: 'برق کاران' } },
  {
    code: 342,
    title: {
      en: 'Electronics and Telecommunications Trades Workers',
      ir: 'کارگران صنایع الکترونیک و مخابرات',
    },
  },
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
    code: 362,
    title: {
      en: 'Horticultural Trades Workers',
      ir: 'کارگران صنایع باغبانی',
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
  {
    code: 422,
    title: {
      en: 'Education Aides',
      ir: 'دستیاران آموزش و پرورش',
    },
  },
  {
    code: 423,
    title: {
      en: 'Personal Carers and Assistants',
      ir: 'مراقبین شخصی و دستیاران',
    },
  },
  { code: 431, title: { en: 'Hospitality Workers', ir: 'متخصصان هتلداری' } },
  {
    code: 441,
    title: {
      en: 'Defence Force Members, Fire Fighters and Police',
      ir: 'اعضای نیروی دفاعی، آتش نشانان و پلیس',
    },
  },
  {
    code: 442,
    title: {
      en: 'Prison and Security Officers',
      ir: 'ماموران زندان و ماموران امنیتی',
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
    code: 452,
    title: {
      en: 'Sports and Fitness Workers',
      ir: 'مربیان ورزش و تناسب اندام',
    },
  },
  {
    code: 511,
    title: {
      en: 'Contract, Program and Project Administrators',
      ir: 'مدیران قرارداد، برنامه و پروژه',
    },
  },
  // navid تا اینجا
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
    code: 561,
    title: {
      en: 'Clerical and Office Support Workers',
      ir: 'کارمندان دفتری و پشتیبانی اداری',
    },
  },
  {
    code: 611,
    title: {
      en: 'Insurance Agents and Sales Representatives',
      ir: 'نمایندگی های بیمه و نمایندگان فروش',
    },
  },
  {
    code: 621,
    title: {
      en: 'Sales Assistants and Salespersons',
      ir: 'دستیاران فروش و فروشندگان',
    },
  },
  {
    code: 631,
    title: {
      en: 'Checkout Operators and Office Cashiers',
      ir: 'اپراتورها و صندوقدارهای دفتر',
    },
  },
];
