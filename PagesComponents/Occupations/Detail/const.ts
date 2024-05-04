import { MultiLanguageText } from 'Interfaces/Database';
import { AssessingAuthorityAbv } from 'Interfaces/Database/Occupation/occupation';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',

  //
  AssessingAuthorityAbv = 'AssessingAuthorityAbv',
  '491-family' = '491-family',
  //
  Details = 'Details',
  Anzsco = 'Anzsco',
  Agents = 'Agents',
  //
  TooltipTagDesc = 'TooltipTagDesc',
  AnzscoTabTitle = 'AnzscoTabTitle',
  MajorGroup = 'MajorGroup',
  SubMajorGroup = 'SubMajorGroup',
  MinorGroup = 'MinorGroup',
  UnitGroup = 'UnitGroup',
  AlternativeTitles = 'AlternativeTitles',
  Specialisations = 'Specialisations',
  SkillPriorityLists = 'SkillPriorityLists',
  Description = 'Description',
  IndicativeSkillLevel = 'IndicativeSkillLevel',
  Tasks = 'Tasks',
  NoTask = 'NoTask',
  OccupationsinUnitGroup = 'OccupationsinUnitGroup',
  AverageSalary = 'AverageSalary',
  AlternativeTitles_description = 'AlternativeTitles_description',
  AlternativeTitles_empty = 'AlternativeTitles_empty',
  specialisations_title = 'specialisations_title',
  specialisations_description = 'specialisations_description',
  specialisations_empty = 'specialisations_empty',
  NecOccupation = 'NecOccupation',
  NecOccupation_description = 'NecOccupation_description',
  IndicativeSkillLevel_1 = 'IndicativeSkillLevel_1',
  IndicativeSkillLevel_2 = 'IndicativeSkillLevel_2',
  IndicativeSkillLevel_3 = 'IndicativeSkillLevel_3',
  IndicativeSkillLevel_4 = 'IndicativeSkillLevel_4',
  IndicativeSkillLevel_5 = 'IndicativeSkillLevel_5',
  //backlog
  Backlog = 'Backlog',
  NoDataMessage = 'NoDataMessage',
  BacklogTitle = 'BacklogTitle',
  HintsTitle = 'HintsTitle',
  HintPoints = 'HintPoints',
  HintSubmitted = 'HintSubmitted',
  HintInvited = 'HintInvited',
  HintLodged = 'HintLodged',
  //Similar
  SimilarOccupations = 'SimilarOccupations',
  Points = 'Points',
  Submitted = 'Submitted',
  Invited = 'Invited',
  Lodged = 'Lodged',
  LastUpdate = 'LastUpdate',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    fa: 'لیست مشاغل | مارا باکس',
    en: 'ANZSCO $code: $title | Australia Visa options',
    zh: 'ANZSCO $code: $title | 澳大利亚签证选择',
  },
  SeoDesc: {
    fa: 'فهرست کامل مشاغل ماهر را ببینید و بدانید که آیا شغل شما واجد شرایط درخواست ویزای کار یا مهارت استرالیا است یا خیر | برای اطلاعات بیشتر می‌توانید با ما تماس بگیرید',
    en: 'See the full Skilled Occupations List & find out whether your occupation is eligible to apply for an Australian Skilled or Work Visa | Contact us for more info',
    zh: '查看完整的技术职业列表并了解您的职业是否有资格申请澳大利亚技术或工作签证 | 联系我们了解更多信息',
  },
  AssessingAuthorityAbv: {
    fa: 'مرجع ارزیابی',
    en: 'Assessing Authority',
    zh: '评估机构',
  },
  '491-family': {
    fa: '491-فامیلی',
    en: '491-family',
    zh: '491-家庭',
  },
  //
  Details: {
    fa: 'جزییات',
    en: 'Details',
    zh: '细节',
  },
  TooltipTagDesc: {
    fa: 'در این سایت می‌توانید اطلاعات بیشتری درباره موسسات ارزیابی استرالیا پیدا کنید.',
    en: 'You can find more information about the Assessing Authorities here.',
    zh: '您可以在此处找到有关评估机构的更多信息。',
  },
  Anzsco: {
    fa: 'کد رشته',
    en: 'Anzsco',
    zh: '安兹斯科',
  },
  Backlog: {
    fa: 'صف',
    en: 'Backlog',
    zh: '积压',
  },
  Agents: {
    en: 'Agents',
    zh: '代理商',
    fa: 'وکلا',
  },
  SimilarOccupations: {
    en: 'Similar Occupations',
    zh: '类似职业',
    fa: 'لیست مشاغل نزدیک به این شغل',
  },
  //
  AnzscoTabTitle: {
    fa: 'مشخصات کد رشته',
    en: 'ANZSCO Version Specifications',
    zh: 'ANZSCO版本规格',
  },
  MajorGroup: {
    en: 'Major Group',
    zh: '主要群体',
    fa: 'گروه اصلی',
  },
  SubMajorGroup: {
    en: 'Sub-Major Group',
    zh: '子专业组',
    fa: 'زیر گروه اصلی',
  },
  MinorGroup: {
    en: 'Minor Group',
    zh: '小组',
    fa: 'گروه فرعی',
  },
  UnitGroup: {
    en: 'Unit Group',
    zh: '单位组',
    fa: 'گروه واحد',
  },
  AlternativeTitles: {
    en: 'Alternative Titles',
    zh: '替代标题',
    fa: 'عنوان جایگزین',
  },
  Specialisations: {
    en: 'Specialisations',
    zh: '专业领域',
    fa: 'تخصص ها',
  },
  NecOccupation: {
    en: 'Occupation in NEC category',
    zh: 'NEC类别职业',
    fa: 'مشاغل زیرمجموعه این NEC',
  },
  NecOccupation_description: {
    en: `"Not elsewhere classified (nec)" categories are used for known, discrete occupations which are not separately identified in ANZSCO Version 1.3 because of their lack of numerical significance in Australia or New Zealand. The occupation titles listed under nec categories are illustrative of the scope and range of occupations included in the nec category.`,
    zh: '未在其他地方分类 (nec) 类别用于已知的、离散的职业，这些职业在 ANZSCO 版本 1.3 中未单独标识，因为它们在澳大利亚或新西兰缺乏数字意义。 nec 类别下列出的职业名称说明了 nec 类别中包含的职业范围和范围。',
    fa: 'دسته‌های طبقه‌بندی‌شده (nec) در جای دیگر برای مشاغل شناخته‌شده و مجزا استفاده می‌شوند که به‌دلیل عدم اهمیت عددی آنها در استرالیا یا نیوزلند، به طور جداگانه در ANZSCO نسخه 1.3 شناسایی نشده‌اند. عناوین شغلی که در زیر دسته‌های nec فهرست شده‌اند، گویای دامنه و دامنه مشاغل موجود در دسته‌بندی nec هستند.',
  },
  SkillPriorityLists: {
    en: '2023 Skill Priority Lists',
    zh: '2023 年技能优先列表',
    fa: 'لیست اولویت مهارت 2023',
  },
  Description: {
    en: 'Description',
    zh: '描述',
    fa: 'توضیحات',
  },
  IndicativeSkillLevel: {
    en: 'Indicative Skill Level',
    zh: '指示性技能水平',
    fa: 'سطح مهارت نشان دهنده',
  },
  Tasks: {
    en: 'Tasks',
    zh: '任务',
    fa: 'وظایف',
  },
  NoTask: {
    fa: 'شرح وظایفی برای این شغل وجود ندارد.',
    en: 'There are no Tasks associated to this Unit Group.',
    zh: '没有与该单元组关联的任务。',
  },
  OccupationsinUnitGroup: {
    en: 'Occupations in This Unit Group',
    zh: '本单元组的职业',
    fa: 'مشاغل در این گروه واحد',
  },
  AverageSalary: {
    en: 'Average Salary 2021',
    zh: '2021 年平均工资',
    fa: 'میانگین حقوق ۲۰۲۱',
  },

  AlternativeTitles_description: {
    en: 'Alternative titles are any commonly used alternative title (or titles) for the occupation. These alternative titles have the same meaning as the principal title but may be less commonly used.',
    zh: '替代头衔是该职业的任何常用替代头衔（或多个头衔）。 这些替代标题与主标题具有相同的含义，但可能不太常用。',
    fa: 'عناوین جایگزین، هر عنوان جایگزین رایج مورد استفاده برای شغل را نشان می‌دهد. این عناوین جایگزین همان معنای عنوان اصلی را دارند اما ممکن است کمتر مورد استفاده قرار گیرند.',
  },
  specialisations_title: {
    en: 'specialisations title',
    zh: '专业名称',
    fa: 'عنوان تخصص ها',
  },
  specialisations_description: {
    en: 'specialisations are any commonly used titles which refer to a subset of jobs belonging to the occupation designated in the principal title. These jobs involve the performance of specialised tasks rather than the broader range of tasks usually performed in the occupation.',
    zh: '专业化是任何常用的头衔，指的是属于主头衔中指定的职业的工作子集。 这些工作涉及执行专门的任务，而不是通常在该职业中执行的更广泛的任务。',
    fa: 'تخصص‌ها، عناوین رایجی هستند که به زیرمجموعه ای از مشاغل متعلق به شغل تعیین شده در عنوان اصلی اشاره می کنند. این مشاغل شامل انجام وظایف تخصصی به جای گستره وسیع تری از وظایفی است که معمولاً در شغل انجام می‌شود.',
  },
  IndicativeSkillLevel_1: {
    en: `In Australia and New Zealand:
Most occupations in this unit group have a level of skill commensurate with a bachelor degree or higher qualification.`,
    fa: `در استرالیا و نیوزلند:

     اکثر مشاغل در این گروه واحد دارای سطح مهارتی متناسب با مدرک لیسانس یا بالاتر هستند.`,
    zh: `在澳大利亚和新西兰：
    本单元组中的大多数职业都具有与学士学位或更高学历相当的技能水平。`,
  },
  IndicativeSkillLevel_2: {
    en: `In Australia:

AQF Associate Degree, Advanced Diploma or Diploma 

In New Zealand:
NZQF Diploma 

At least three years of relevant experience may substitute for the formal qualifications listed above. In some instances relevant experience and/or on-the-job training may be required in addition to the formal qualification.`,
    fa: `در استرالیا:
مدرک کاردانی AQF، دیپلم یا دیپلم پیشرفته 

در نیوزلند:
دیپلم NZQF 

حداقل سه سال تجربه مرتبط ممکن است جایگزین مدارک رسمی ذکر شده در بالا شود. در برخی موارد تجربه مرتبط و/یا آموزش در حین کار ممکن است علاوه بر صلاحیت رسمی مورد نیاز باشد.`,
    zh: `在澳大利亚：

    AQF 副学士学位、高级文凭或文凭
    
    在新西兰：
    NZQF文凭
    
    至少三年的相关经验可以替代上面列出的正式资格。 在某些情况下，除了正式资格外，还可能需要相关经验和/或在职培训。`,
  },
  IndicativeSkillLevel_3: {
    en: `Most occupations in this unit group have a level of skill commensurate with the qualifications and experience outlined below.

In Australia:

AQF Certificate III including at least two years of on-the-job training, or AQF Certificate IV 

In New Zealand:
NZQF Level 4 qualification 

At least three years of relevant experience may substitute for the formal qualifications listed above. In some instances relevant experience and/or on-the-job training may be required in addition to the formal qualification.
Registration or licensing may be required.`,
    fa: `اکثر مشاغل در این گروه واحد دارای سطح مهارتی متناسب با صلاحیت ها و تجربه های ذکر شده در زیر هستند.

در استرالیا:
گواهینامه AQF III شامل حداقل دو سال آموزش در محل کار، یا گواهینامه AQF IV 

در نیوزلند:
مدرک NZQF سطح 4 

حداقل سه سال تجربه مرتبط ممکن است جایگزین مدارک رسمی ذکر شده در بالا شود. در برخی موارد تجربه مرتبط و/یا آموزش در حین کار ممکن است علاوه بر صلاحیت رسمی مورد نیاز باشد.
ثبت یا پروانه ممکن است لازم باشد.`,
    zh: `本单元组中的大多数职业都具有与下述资格和经验相称的技能水平。

    在澳大利亚：
    
    AQF 三级证书，包括至少两年的在职培训，或 AQF 四级证书
    
    在新西兰：
    NZQF 4 级资格
    
    至少三年的相关经验可以替代上面列出的正式资格。 在某些情况下，除了正式资格外，还可能需要相关经验和/或在职培训。
    可能需要注册或许可。`,
  },
  IndicativeSkillLevel_4: {
    en: `Most occupations in this unit group have a level of skill commensurate with the qualifications and experience outlined below.

In Australia:
AQF Certificate II or III

In New Zealand:
NZQF Level 2 or 3 qualification 

At least one year of relevant experience may substitute for the formal qualifications listed above. In some instances relevant experience may be required in addition to the formal qualification.`,
    fa: `اکثر مشاغل در این گروه واحد دارای سطح مهارتی متناسب با صلاحیت ها و تجربه های ذکر شده در زیر هستند.

در استرالیا:
AQF Certificate II or III

در نیوزلند:
NZQF Level 2 or 3 qualification 

حداقل یک سال تجربه مرتبط ممکن است جایگزین مدارک رسمی ذکر شده در بالا شود. در برخی موارد ممکن است علاوه بر صلاحیت رسمی، به تجربه مرتبط نیز نیاز باشد.`,
    zh: `本单元组中的大多数职业都具有与下述资格和经验相称的技能水平。

    在澳大利亚：
    AQF 二级或三级证书
    
    在新西兰：
    NZQF 2 级或 3 级资格
    
    至少一年的相关经验可以代替上面列出的正式资格。 在某些情况下，除了正式资格外，还可能需要相关经验。`,
  },
  IndicativeSkillLevel_5: {
    en: `Most occupations in this unit group have a level of skill commensurate with the qualifications and experience outlined below.

- NZ Register Level 1 qualification
- AQF Certificate I or
- compulsory secondary education.

For some occupations a short period of on-the-job training may be required in addition to or instead of the formal qualification.

In some instances, no formal qualification or on-the-job training may be required.`,

    fa: `اکثر مشاغل در این گروه واحد دارای سطح مهارتی متناسب با صلاحیت ها و تجربه های ذکر شده در زیر هستند.

- NZ Register Level 1 qualification
- AQF Certificate I or
- compulsory secondary education.

برای برخی مشاغل ممکن است علاوه بر مدارک رسمی یا به جای آن، یک دوره کوتاه آموزش در حین کار لازم باشد.در برخی موارد، هیچ مدرک رسمی یا آموزش در حین کار ممکن است مورد نیاز نباشد.`,
    zh: `本单元组中的大多数职业都具有与下述资格和经验相称的技能水平。

- 新西兰注册一级资格
- AQF 证书 I 或
- 中等义务教育。

对于某些职业，除了正式资格之外或代替正式资格，可能还需要短期在职培训。

在某些情况下，可能不需要正式资格或在职培训。`,
  },
  AlternativeTitles_empty: {
    en: `There are no Alternative Titles for this occupation.`,
    fa: `هیچ عنوان جایگزینی برای این شغل وجود ندارد.`,
    zh: '该职业没有替代头衔。',
  },
  specialisations_empty: {
    en: `There are no Specialisation Titles for this occupation.`,
    fa: `هیچ عنوان تخصصی برای این شغل وجود ندارد.`,
    zh: '该职业没有专业化头衔。',
  },
  ////// backlog/////////
  BacklogTitle: {
    en: 'Backlog',
    fa: 'صف انتظار',
    zh: '积压',
  },
  NoDataMessage: {
    en: 'Since there are no submissions or invitations registered  in the backlog of this ANZSCO code, there is no visa table in these visa subclasses Any changes will be shown here as soon as the information is updated by the Department of Home Affairs.',
    fa: 'از آنجایی که هیچ ارسال یا دعوت نامه ای در بک لاگ این کد anzsco ثبت نشده است، هیچ جدول ویزا در این زیر کلاس های ویزا وجود ندارد. هر گونه تغییر به محض به روز رسانی اطلاعات -توسط مراجع زیربط استرالیا- در اینجا نشان داده می‌شود.',
    zh: '由于此 ANZSCO 代码的积压中没有注册任何提交或邀请，因此这些签证子类别中没有签证表。一旦内政部更新信息，任何更改都会显示在此处。',
  },
  HintsTitle: {
    en: 'Hints',
    fa: 'راهنمایی استفاده',
    zh: '提示',
  },
  HintPoints: {
    en: `Points depend on factors such as applicant's age, work experience, knowledge of English and, if they have it, the documents of their partner. The minimum score required to submit an EOI and participate in the invitation rounds is 65 points, and cases below this score will not be considered during invitation rounds.`,
    fa: 'امتیاز به عواملی مانند سن متقاضی، سابقه کار، دانش زبان انگلیسی و در صورت داشتن آن، مدارک شریک زندگی خود بستگی دارد. حداقل امتیاز لازم برای ارسال EOI و شرکت در دورهای دعوت 65 امتیاز است و موارد زیر این امتیاز در دورهای دعوت لحاظ نخواهد شد.',
    zh: '分数取决于申请人的年龄、工作经验、英语知识以及伴侣的文件（如果有）等因素。 提交EOI并参加邀请轮所需的最低分数为65分，低于此分数的案例将不会在邀请轮中被考虑。',
  },
  HintSubmitted: {
    en: 'You can submit an EOI with all fields completed, meeting all requirements for all visa subclasses you have selected. Once submitted, points will be assigned to the EOI based on the information provided. Submitted EOIs can be selected in the invitation rounds.',
    fa: 'صف موارد EOI ثبت شده براي هر سابكلاس كه در انتظار دريافت دعوتنامه هستند .',
    zh: '您可以提交已填写所有字段的意向书 (EOI)，满足您选择的所有签证子类别的所有要求。 提交后，积分将根据所提供的信息分配给 EOI。 提交的意向书可以在邀请轮中进行选择。',
  },
  HintInvited: {
    en: 'Invitation letter for visa application has been issued.',
    fa: 'تعداد دعوت نامه ای که برای درخواست ویزا صادر شده است..',
    zh: '签证申请邀请函已发出。',
  },
  HintLodged: {
    en: 'The number of files that have been lodged for this occupation.',
    fa: 'تعداد پرونده هایی که برای این رشته لاج شده است.',
    zh: '已为此职业提交的文件数量。',
  },
  Points: { en: 'Points', fa: 'امتیازات', zh: '积分' },
  Submitted: { en: 'Submitted', fa: 'ثبت شده‌ها', zh: '已提交' },
  Invited: { en: 'Invited', fa: 'دعوت شده‌ها', zh: '受邀' },
  Lodged: {
    en: 'Lodged',
    fa: 'لاج شده‌ها',
    zh: '住宿',
  },
  LastUpdate: { en: 'Last Update:', fa: 'آخرین آپدیت: ', zh: '最后更新：' },
};

//////
export const ROL_LIST: Number[] = [
  121111, 121211, 121213, 121214, 121216, 121217, 121299, 121312, 121313,
  121314, 121315, 121316, 121317, 121318, 121322, 121399, 121411, 131114,
  132411, 133112, 133612, 134211, 134412, 139915, 141211, 142115, 149111,
  149112, 149113, 149912, 149914, 223111, 223113, 224412, 224912, 225112,
  231111, 231113, 231114, 231213, 232413, 234213, 234311, 234915, 242211,
  251311, 252312, 253211, 271214, 272413, 272611, 311111, 311214, 311216,
  312114, 312116, 312511, 312611, 312911, 312999, 324311, 332111, 342211,
  361114, 362411, 399212, 411211, 411214, 441211, 451211, 451399, 451711,
  451815, 452413, 599915, 612112, 612115,
];
export const STSOL_LIST: Number[] = [
  121212, 121215, 121221, 121311, 121321, 131112, 131113, 132111, 132211,
  132311, 132511, 133411, 133511, 133512, 133513, 133611, 134299, 134311,
  134499, 135112, 135199, 139913, 139914, 139999, 141111, 141311, 141999,
  149212, 149311, 149413, 149913, 211299, 211311, 212212, 212312, 212314,
  212315, 212316, 212317, 212318, 212411, 212412, 212413, 212415, 212416,
  212499, 221211, 222111, 222112, 222113, 222199, 222211, 222213, 222299,
  222311, 222312, 223112, 223211, 224112, 224212, 224213, 224214, 224611,
  224712, 224914, 224999, 225111, 225113, 225211, 225212, 225213, 225311,
  225499, 232311, 232312, 232313, 232411, 232412, 232414, 232511, 232611,
  234411, 241213, 241311, 249111, 249211, 249212, 249214, 249299, 249311,
  251111, 251112, 251312, 251412, 251511, 251512, 251513, 251911, 251999,
  252211, 252213, 252214, 252299, 252311, 253112, 254211, 254212, 254311,
  261212, 261314, 262111, 262113, 263112, 263113, 263211, 263212, 263213,
  263299, 271299, 272111, 272112, 272113, 272114, 272115, 272199, 272314,
  272412, 272499, 272612, 272613, 311211, 311212, 311213, 311215, 311299,
  311312, 311399, 311411, 311412, 311413, 311499, 312111, 312113, 312199,
  312512, 312912, 312913, 313111, 313112, 313113, 313199, 322113, 323111,
  323112, 323113, 323299, 323314, 323412, 324211, 324212, 333311, 342311,
  342411, 342413, 351111, 351112, 351211, 351411, 361111, 361199, 361311,
  362111, 362211, 362212, 362213, 362311, 391111, 392111, 392311, 393213,
  393311, 394211, 394213, 394299, 399213, 399411, 399512, 399514, 399516,
  399599, 399611, 411111, 411112, 411213, 411311, 411411, 411611, 411711,
  411712, 411713, 411715, 411716, 452311, 452312, 452313, 452314, 452315,
  452317, 452321, 452499, 511111, 511112, 599612, 611211, 639211,
];
export const MLTSSL_LIST: Number[] = [
  133111, 133211, 134111, 134212, 134213, 134214, 139911, 139912, 211112,
  211212, 211213, 212111, 221111, 221112, 221113, 221213, 221214, 224111,
  224113, 224311, 224511, 224512, 224711, 232111, 232112, 232212, 232213,
  232214, 233111, 233112, 233211, 233212, 233213, 233214, 233215, 233311,
  233411, 233511, 233512, 233513, 233611, 233612, 233911, 233912, 233913,
  233914, 233915, 233916, 233999, 234111, 234112, 234113, 234211, 234212,
  234312, 234313, 234399, 234412, 234413, 234511, 234513, 234514, 234515,
  234516, 234517, 234518, 234599, 234611, 234711, 234911, 234912, 234913,
  234914, 234999, 241111, 241411, 241511, 241512, 241513, 241599, 242111,
  251211, 251212, 251213, 251214, 251411, 251912, 252111, 252112, 252411,
  252511, 252611, 252711, 252712, 253111, 253311, 253312, 253313, 253314,
  253315, 253316, 253317, 253318, 253321, 253322, 253323, 253324, 253399,
  253411, 253511, 253512, 253513, 253514, 253515, 253516, 253517, 253518,
  253521, 253911, 253912, 253913, 253914, 253915, 253917, 253918, 253999,
  254111, 254411, 254412, 254413, 254414, 254415, 254416, 254417, 254418,
  254421, 254422, 254423, 254424, 254425, 254499, 261111, 261112, 261211,
  261311, 261312, 261313, 261399, 262112, 263111, 263311, 263312, 271111,
  271311, 272311, 272312, 272313, 272399, 272511, 312211, 312212, 312311,
  312312, 313211, 313212, 313213, 313214, 321111, 321211, 321212, 321213,
  321214, 322211, 322311, 322312, 322313, 323211, 323212, 323213, 323214,
  323313, 324111, 331111, 331112, 331211, 331212, 331213, 332211, 333111,
  333211, 333212, 333411, 334111, 334112, 334113, 334114, 334115, 341111,
  341112, 341113, 342111, 342212, 342313, 342314, 342315, 351311, 361112,
  394111, 399111, 399112, 452316, 452411,
];
export const multiAssessingAuthority = [
  {
    code: 221111,
    assessingAuthority_abv: [
      AssessingAuthorityAbv.CAANZ,
      AssessingAuthorityAbv.CPAA,
      AssessingAuthorityAbv.IPA,
    ],
  },
  {
    code: 221113,
    assessingAuthority_abv: [
      AssessingAuthorityAbv.CAANZ,
      AssessingAuthorityAbv.CPAA,
      AssessingAuthorityAbv.IPA,
    ],
  },
  {
    code: 221112,
    assessingAuthority_abv: [
      AssessingAuthorityAbv.CAANZ,
      AssessingAuthorityAbv.CPAA,
      AssessingAuthorityAbv.IPA,
    ],
  },
  {
    code: 132211,
    assessingAuthority_abv: [
      AssessingAuthorityAbv.CAANZ,
      AssessingAuthorityAbv.CPAA,
      AssessingAuthorityAbv.IPA,
    ],
  },
  {
    code: 221213,
    assessingAuthority_abv: [
      AssessingAuthorityAbv.CAANZ,
      AssessingAuthorityAbv.CPAA,
      AssessingAuthorityAbv.IPA,
    ],
  },
  {
    code: 312211,
    assessingAuthority_abv: [
      AssessingAuthorityAbv.EA,
      AssessingAuthorityAbv.VETASSESS_C,
    ],
  },
  {
    code: 133211,
    assessingAuthority_abv: [
      AssessingAuthorityAbv.EA,
      AssessingAuthorityAbv.IML,
    ],
  },
  {
    code: 312999,
    assessingAuthority_abv: [
      AssessingAuthorityAbv.EA,
      AssessingAuthorityAbv.VETASSESS_C,
    ],
  },
  {
    code: 234914,
    assessingAuthority_abv: [
      AssessingAuthorityAbv.ACPSEM,
      AssessingAuthorityAbv.VETASSESS_A,
    ],
  },

  {
    code: 221212,
    assessingAuthority_abv: [
      AssessingAuthorityAbv.CPAA,
      AssessingAuthorityAbv.IPA,
      AssessingAuthorityAbv.CAANZ,
    ],
  },
  {
    code: 242211,
    assessingAuthority_abv: [
      AssessingAuthorityAbv.TRA,
      AssessingAuthorityAbv.VETASSESS_A,
    ],
  },
];
