import { MultiLanguageText } from 'Interfaces/Database';

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
      zh: '经理人'
    },
  },
  {
    code: 2,
    title: {
      en: 'Professionals',
      fa: 'متخصصان',
      zh: '专业人士'
    },
  },
  {
    code: 3,
    title: {
      en: 'Technicians and Trades Workers',
      fa: 'تکنسین ها و متخصصان حرفه ای',
      zh: '技术人员和行业工人'
    },
  },
  {
    code: 4,
    title: {
      en: 'Community and Personal Service Workers',
      fa: 'متخصصان خدمات اجتماعی و خدمات شخصی',
      zh: '社区和个人服务工作者'
    },
  },
  {
    code: 5,
    title: {
      en: 'Clerical and Administrative Workers',
      fa: 'متخصصان دفتری و اداری',
      zh: '文员及行政人员'
    },
  },
  {
    code: 6,
    title: {
      en: 'Sales Workers',
      fa: 'متخصصان فروش',
      zh: '销售人员'
    },
  },
];

export const SUB_MAJOR_GROUP: AnszcoGroup[] = [
  {
    code: 12,
    title: {
      en: 'Farmers and Farm Managers',
      fa: 'کشاورزان و مدیران کشاورزی',
      zh: '农民和农场管理者'
    },
  },
  {
    code: 13,
    title: {
      en: 'Specialist Managers',
      fa: 'مدیران تخصصی',
      zh: '专业经理'
    },
  },
  {
    code: 14,
    title: {
      en: 'Hospitality, Retail and Service Managers',
      fa: 'مدیران هتلداری، خرده فروشی و خدمات',
      zh: '酒店、零售和服务经理'
    },
  },
  {
    code: 21,
    title: {
      en: 'Arts and Media Professionals',
      fa: 'متخصصان هنر و رسانه',
      zh: '艺术和媒体专业人士'
    },
  },
  {
    code: 22,
    title: {
      en: 'Business, Human Resource and Marketing Professionals',
      fa: 'بازرگانی، منابع انسانی و متخصصان بازاریابی',
      zh: '商业、人力资源和营销专业人士'
    },
  },
  {
    code: 23,
    title: {
      en: 'Design, Engineering, Science and Transport Professionals',
      fa: 'متخصصان طراحی، مهندسی، علوم و حمل و نقل',
      zh: '设计、工程、科学和运输专业人士'
    },
  },
  {
    code: 24,
    title: {
      en: 'Education Professionals',
      fa: 'متخصصان آموزش  ',
      zh: '教育专业人士'
    },
  },
  { code: 25, title: { en: 'Health Professionals', fa: 'متخصصان سلامت', zh: '健康专业人士' } },
  {
    code: 26,
    title: { en: 'ICT Professionals', fa: 'متخصصان فناوری اطلاعات و ارتباطات', zh: '信息通信技术专业人士' },
  },
  {
    code: 27,
    title: {
      en: 'Legal, Social and Welfare Professionals',
      fa: 'متخصصین حقوقی، اجتماعی و رفاهی',
      zh: '法律、社会和福利专业人士'
    },
  },
  {
    code: 31,
    title: {
      en: 'Engineering, ICT and Science Technicians',
      fa: 'مهندسان، تکنسین های علوم و فناوری اطلاعات و ارتباطات',
      zh: '工程、ICT 和科学技术人员'
    },
  },

  {
    code: 32,
    title: {
      en: 'Automotive and Engineering Trades Workers',
      fa: 'متخصصان صنایع خودروسازی و مهندسی',
      zh: '汽车和工程行业工人'
    },
  },
  {
    code: 33,
    title: { en: 'Construction Trades Workers', fa: 'متخصصان صنایع ساختمانی', zh: '建造业工人' },
  },
  {
    code: 34,
    title: {
      en: 'Electrotechnology and Telecommunications Trades Workers',
      fa: 'متخصصان صنایع الکتروتکنولوژی و مخابرات',
      zh: '电子技术和电信行业工人'
    },
  },
  { code: 35, title: { en: 'Food Trades Workers', fa: 'متخصصان صنایع غذایی', zh: '食品行业工人' } },
  {
    code: 36,
    title: {
      en: 'Skilled Animal and Horticultural Workers',
      fa: 'متخصصان دام و باغبانی',
      zh: '熟练的动物和园艺工人'
    },
  },
  {
    code: 39,
    title: {
      en: 'Other Technicians and Trades Workers',
      fa: 'سایر تکنسین ها و کارگران حرفه ای',
      zh: '其他技术人员和行业工人'
    },
  },
  {
    code: 41,
    title: {
      en: 'Health and Welfare Support Workers',
      fa: 'متخصصان حامی سلامت و رفاه',
      zh: '健康和福利支持人员'
    },
  },
  {
    code: 42,
    title: {
      en: 'Carers and Aides',
      fa: 'مراقبین و کمک کننده ها',
      zh: '照顾者和助手'
    },
  },
  { code: 43, title: { en: 'Hospitality Workers', fa: 'متخصصان هتلداری', zh: '酒店工作人员' } },
  {
    code: 44,
    title: { en: 'Protective Service Workers', fa: 'کارگران خدمات حفاظتی', zh: '防护服务人员' },
  },
  {
    code: 45,
    title: {
      en: 'Sports and Personal Service Workers',
      fa: 'کارکنان ورزش و خدمات شخصی',
      zh: '体育和个人服务人员'
    },
  },
  {
    code: 51,
    title: {
      en: 'Office Managers and Program Administrators',
      fa: 'مدیران اداری و مدیران برنامه ای',
      zh: '办公室经理和项目管理员'
    },
  },
  {
    code: 52,
    title: {
      en: 'Personal Assistants and Secretaries',
      fa: 'دستیاران شخصی و منشی ها',
      zh: '私人助理和秘书'
    },
  },
  {
    code: 53,
    title: { en: 'General Clerical Workers', fa: 'کارگران دفتری عمومی', zh: '一般文职人员' },
  },
  {
    code: 54,
    title: {
      en: 'Inquiry Clerks and Receptionists',
      fa: 'کارمندان استعلام و پذیرش',
      zh: '询问员和接待员'
    },
  },
  { code: 55, title: { en: 'Numerical Clerks', fa: 'کارمندان اعداد', zh: '数字文员' } },
  {
    code: 56,
    title: {
      en: 'Clerical and Office Support Workers',
      fa: 'کارمندان دفتری و پشتیبانی اداری',
      zh: '文员和办公室支持人员'
    },
  },
  {
    code: 61,
    title: {
      en: 'Sales Representatives and Agents',
      fa: 'نمایندگی ها و نمایندگان فروش',
      zh: '销售代表和代理商'
    },
  },
  {
    code: 62,
    title: {
      en: 'Sales Assistants and Salespersons',
      fa: 'دستیاران فروش و فروشندگان',
      zh: '销售助理和销售人员'
    },
  },
  {
    code: 63,
    title: {
      en: 'Sales Support Workers',
      fa: 'کارمند پشتیبانی فروش',
      zh: '销售支持人员'
    },
  },
];
export const Minor_GROUP: AnszcoGroup[] = [
  {
    code: 121,
    title: {
      en: 'Farmers and Farm Managers',
      fa: 'کشاورزان و مدیران کشاورزی',
      zh: '农民和农场管理者'
    },
  },
  {
    code: 131,
    title: {
      en: 'Advertising, Public Relations and Sales Managers',
      fa: 'مدیران تبلیغات، روابط عمومی و فروش',
      zh: '广告、公共关系和销售经理'
    },
  },
  {
    code: 132,
    title: {
      en: 'Business Administration Managers',
      fa: 'مدیریت بازرگانی',
      zh: '工商管理经理'
    },
  },
  {
    code: 133,
    title: {
      en: 'Construction, Distribution and Production Managers',
      fa: 'مدیران ساخت، توزیع و تولید',
      zh: '施工、分销和生产经理'
    },
  },
  {
    code: 134,
    title: {
      en: 'Education, Health and Welfare Services Managers',
      fa: 'مدیران آموزش، بهداشت و خدمات رفاهی',
      zh: '教育、健康和福利服务经理'
    },
  },
  {
    code: 135,
    title: {
      en: 'ICT Managers',
      fa: 'مدیران فناوری اطلاعات و ارتباطات',
      zh: '信息通信技术经理'
    },
  },
  {
    code: 139,
    title: {
      en: 'Miscellaneous Specialist Managers',
      fa: 'مدیران متخصص متفرقه',
      zh: '各类专业经理'
    },
  },
  {
    code: 141,
    title: {
      en: 'Accommodation and Hospitality Managers',
      fa: 'مدیران اسکان و پذیرایی',
      zh: '住宿和接待经理'
    },
  },
  {
    code: 142,
    title: {
      en: 'Retail Managers',
      fa: 'مدیران خرده فروشی',
      zh: '零售经理'
    },
  },
  {
    code: 211,
    title: {
      en: 'Arts Professionals',
      fa: 'متخصصان هنری',
      zh: '艺术专业人士'
    },
  },
  {
    code: 212,
    title: {
      en: 'Media Professionals',
      fa: 'متخصصان رسانه',
      zh: '媒体专业人士'
    },
  },
  {
    code: 221,
    title: {
      en: 'Accountants, Auditors and Company Secretaries',
      fa: 'حسابداران، حسابرسان و منشی شرکت',
      zh: '会计师、审计师和公司秘书'
    },
  },
  {
    code: 222,
    title: {
      en: 'Financial Brokers and Dealers, and Investment Advisers',
      fa: 'کارگزاران و دلالان مالی و مشاوران سرمایه گذاری',
      zh: '金融经纪人和交易商以及投资顾问'
    },
  },
  {
    code: 223,
    title: {
      en: 'Human Resource and Training Professionals',
      fa: 'منابع انسانی و آموزش حرفه ای',
      zh: '人力资源和培训专业人员'
    },
  },
  {
    code: 224,
    title: {
      en: 'Information and Organisation Professionals',
      fa: 'متخصصان اطلاعات و سازمان',
      zh: '信息和组织专业人员'
    },
  },
  {
    code: 225,
    title: {
      en: 'Sales, Marketing and Public Relations Professionals',
      fa: 'کارشناسان فروش، بازاریابی و روابط عمومی',
      zh: '销售、营销和公共关系专业人员'
    },
  },
  {
    code: 231,
    title: {
      en: 'Air and Marine Transport Professionals',
      fa: 'متخصصان حمل و نقل هوایی و دریایی',
      zh: '空运和海运专业人员'
    },
  },
  {
    code: 232,
    title: {
      en: 'Architects, Designers, Planners and Surveyors',
      fa: 'معماران، طراحان، برنامه ریزان و نقشه برداران',
      zh: '建筑师、设计师、规划师和测量师'
    },
  },
  {
    code: 233,
    title: {
      en: 'Engineering Professionals',
      fa: 'متخصصان مهندسی',
      zh: '工程专业人士'
    },
  },
  {
    code: 234,
    title: {
      en: 'Natural and Physical Science Professionals',
      fa: 'متخصصان علوم طبیعی و فیزیکی',
      zh: '自然科学和物理科学专业人士'
    },
  },

  { code: 241, title: { en: 'School Teachers', fa: 'معلمان مدرسه', zh: '学校教师' } },
  {
    code: 242,
    title: {
      en: 'Tertiary Education Teachers',
      fa: 'معلمان آموزش عالی',
      zh: '高等教育教师'
    },
  },
  {
    code: 251,
    title: {
      en: 'Health Diagnostic and Promotion Professionals',
      fa: 'متخصصان تشخیص و ارتقای سلامت',
      zh: '健康诊断和促进专业人员'
    },
  },
  {
    code: 252,
    title: {
      en: 'Health Therapy Professionals',
      fa: 'متخصصان سلامت درمانی',
      zh: '健康治疗专家'
    },
  },
  {
    code: 253,
    title: {
      en: 'Medical Practitioners',
      fa: 'پزشکان',
      zh: '医生'
    },
  },
  {
    code: 254,
    title: {
      en: 'Midwifery and Nursing Professionals',
      fa: 'متخصصین مامایی و پرستاری',
      zh: '助产士和护理专业人员'
    },
  },
  {
    code: 261,
    title: {
      en: 'Business and Systems Analysts, and Programmers',
      fa: 'تحلیلگران کسب و کار و سیستم ها و برنامه نویسان',
      zh: '业务和系统分析师以及程序员'
    },
  },
  {
    code: 262,
    title: {
      en: 'Database and Systems Administrators, and ICT Security Specialists',
      fa: 'مدیران پایگاه داده و سیستم ها و متخصصان امنیت فناوری اطلاعات و ارتباطات',
      zh: '数据库和系统管理员以及 ICT 安全专家'
    },
  },
  {
    code: 263,
    title: {
      en: 'ICT Network and Support Professionals',
      fa: 'شبکه های فناوری اطلاعات و ارتباطات و متخصصان پشتیبانی',
      zh: 'ICT 网络和支持专业人员'
    },
  },
  { code: 271, title: { en: 'Legal Professionals', fa: 'متخصصان حقوق', zh: '法律专业人士' } },
  {
    code: 272,
    title: {
      en: 'Social and Welfare Professionals',
      fa: 'متخصصین اجتماعی و رفاهی',
      zh: '社会及福利专业人士'
    },
  },

  {
    code: 311,
    title: {
      en: 'Agricultural, Medical and Science Technicians',
      fa: 'تکنسین های کشاورزی، پزشکی و علمی',
      zh: '农业、医疗和科学技术人员'
    },
  },
  {
    code: 312,
    title: {
      en: 'Building and Engineering Technicians',
      fa: 'تکنسین های ساختمان و مهندسی',
      zh: '建筑和工程技术人员'
    },
  },
  {
    code: 313,
    title: {
      en: 'ICT and Telecommunications Technicians',
      fa: 'تکنسین های فناوری اطلاعات و ارتباطات و ارتباطات',
      zh: 'ICT 和电信技术人员'
    },
  },
  {
    code: 322,
    title: {
      en: 'Fabrication Engineering Trades Workers',
      fa: 'کارگران صنایع مهندسی ساخت',
      zh: '制造工程行业工人'
    },
  },
  {
    code: 321,
    title: {
      en: 'Automotive Electricians and Mechanics',
      fa: 'برق و مکانیک خودرو',
      zh: '汽车电工和机械师'
    },
  },
  {
    code: 323,
    title: {
      en: 'Mechanical Engineering Trades Workers',
      fa: 'کارگران صنایع مهندسی مکانیک',
      zh: '机械工程行业工人'
    },
  },
  {
    code: 324,
    title: {
      en: 'Panelbeaters, and Vehicle Body Builders, Trimmers and Painters',
      fa: 'پانل کوب، و بدنه ساز خودرو، صافکار و نقاش',
      zh: '钣金工、车身制造商、修整工和喷漆工'
    },
  },
  {
    code: 331,
    title: {
      en: 'Bricklayers, and Carpenters and Joiners',
      fa: 'آجركاران و نجاران',
      zh: '瓦工、木匠和细木工'
    },
  },
  {
    code: 332,
    title: {
      en: 'Floor Finishers and Painting Trades Workers',
      fa: 'کارگران کف سازی و نقاشی',
      zh: '地板整理工和油漆行业工人'
    },
  },
  {
    code: 333,
    title: {
      en: 'Glaziers, Plasterers and Tilers',
      fa: 'شیشه کار، گچ کار و کاشی کار',
      zh: '玻璃工、抹灰工和瓷砖工'
    },
  },
  {
    code: 334,
    title: {
      en: 'Plumbers',
      fa: 'لوله کش ها',
      zh: '水管工'
    },
  },

  { code: 341, title: { en: 'Electricians', fa: 'برق کاران', zh: '电工' } },
  {
    code: 342,
    title: {
      en: 'Electronics and Telecommunications Trades Workers',
      fa: 'کارگران صنایع الکترونیک و مخابرات',
      zh: '电子和电信行业工人'
    },
  },
  {
    code: 351,
    title: { en: 'Food Trades Workers', fa: 'متخصصان صنایع غذایی', zh: '食品行业工人' },
  },
  {
    code: 361,
    title: {
      en: 'Animal Attendants and Trainers, and Shearers',
      fa: 'مراقبین و مربیان حیوانات و قیچی کنندگان',
      zh: '动物服务员和驯兽师以及剪羊毛工'
    },
  },
  {
    code: 362,
    title: {
      en: 'Horticultural Trades Workers',
      fa: 'کارگران صنایع باغبانی',
      zh: '园艺行业工人'
    },
  },
  {
    code: 391,
    title: {
      en: 'Hairdressers',
      fa: 'آرایشگاه ها',
      zh: '理发师'
    },
  },
  {
    code: 392,
    title: {
      en: 'Printing Trades Workers',
      fa: 'کارگران صنایع چاپ',
      zh: '印刷行业工人'
    },
  },
  {
    code: 393,
    title: {
      en: 'Textile, Clothing and Footwear Trades Workers',
      fa: 'کارگران صنایع نساجی، پوشاک و کفش',
      zh: '纺织、服装和鞋类行业工人'
    },
  },
  {
    code: 394,
    title: {
      en: 'Wood Trades Workers',
      fa: 'کارگران صنایع چوب',
      zh: '木材贸易工人'
    },
  },
  {
    code: 411,
    title: {
      en: 'Health and Welfare Support Workers',
      fa: 'متخصصان حامی سلامت و رفاه',
      zh: '健康和福利支持人员'
    },
  },

  { code: 421, title: { en: 'Child Carers', fa: 'مراقبین کودک', zh: '儿童看护者' } },
  {
    code: 422,
    title: {
      en: 'Education Aides',
      fa: 'دستیاران آموزش و پرورش',
      zh: '教育助手'
    },
  },
  {
    code: 423,
    title: {
      en: 'Personal Carers and Assistants',
      fa: 'مراقبین شخصی و دستیاران',
      zh: '个人护理人员和助理'
    },
  },
  { code: 431, title: { en: 'Hospitality Workers', fa: 'متخصصان هتلداری', zh: '酒店工作人员' } },
  {
    code: 441,
    title: {
      en: 'Defence Force Members, Fire Fighters and Police',
      fa: 'اعضای نیروی دفاعی، آتش نشانان و پلیس',
      zh: '国防军成员、消防员和警察'
    },
  },
  {
    code: 442,
    title: {
      en: 'Prison and Security Officers',
      fa: 'ماموران زندان و ماموران امنیتی',
      zh: '监狱和保安人员'
    },
  },
  {
    code: 451,
    title: {
      en: 'Personal Service and Travel Workers',
      fa: 'کارگران خدمات شخصی و مسافرتی',
      zh: '个人服务和旅行工作者'
    },
  },
  {
    code: 452,
    title: {
      en: 'Sports and Fitness Workers',
      fa: 'مربیان ورزش و تناسب اندام',
      zh: '体育健身工作者'
    },
  },
  {
    code: 511,
    title: {
      en: 'Contract, Program and Project Administrators',
      fa: 'مدیران قرارداد، برنامه و پروژه',
      zh: '合同、计划和项目管理员'
    },
  },
  {
    code: 512,
    title: {
      en: 'Office and Practice Managers',
      fa: 'مدیران دفتر و تمرین',
      zh: '办公室和实践经理'
    },
  },
  {
    code: 521,
    title: {
      en: 'Personal Assistants and Secretaries',
      fa: 'دستیاران شخصی و منشی ها',
      zh: '私人助理和秘书'
    },
  },
  { code: 531, title: { en: 'General Clerks', fa: 'کارمندان عمومی', zh: '一般文员' } },
  {
    code: 532,
    title: { en: 'Keyboard Operators', fa: 'اپراتورهای صفحه کلید', zh: '键盘操作员' },
  },
  {
    code: 541,
    title: {
      en: 'Call or Contact Centre Information Clerks',
      fa: 'کارمندان مرکز تماس یا مرکز اطلاعات',
      zh: '致电或联系中心信息员'
    },
  },
  {
    code: 542,
    title: {
      en: 'Receptionists',
      fa: 'مسئولین پذیرش',
      zh: '接待员'
    },
  },
  {
    code: 551,
    title: {
      en: 'Accounting Clerks and Bookkeepers',
      fa: 'کارمندان حسابداری و حسابداران',
      zh: '会计文员和簿记员'
    },
  },
  {
    code: 552,
    title: {
      en: 'Financial and Insurance Clerks',
      fa: 'کارمندان مالی و بیمه',
      zh: '金融和保险文员'
    },
  },
  {
    code: 561,
    title: {
      en: 'Clerical and Office Support Workers',
      fa: 'کارمندان دفتری و پشتیبانی اداری',
      zh: '文员和办公室支持人员'
    },
  },
  {
    code: 611,
    title: {
      en: 'Insurance Agents and Sales Representatives',
      fa: 'نمایندگی های بیمه و نمایندگان فروش',
      zh: '保险代理人和销售代表'
    },
  },
  {
    code: 612,
    title: {
      en: 'Real Estate Sales Agents',
      fa: 'نمایندگی های فروش املاک',
      zh: '房地产销售代理'
    },
  },
  {
    code: 621,
    title: {
      en: 'Sales Assistants and Salespersons',
      fa: 'دستیاران فروش و فروشندگان',
      zh: '销售助理和销售人员'
    },
  },
  {
    code: 631,
    title: {
      en: 'Checkout Operators and Office Cashiers',
      fa: 'اپراتورها و صندوقدارهای دفتر',
      zh: '收银员和办公室收银员'
    },
  },
];
