import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',

  //
  AssessingAuthority = 'AssessingAuthority',
  '491-family' = '491-family',
  //
  Details = 'Details',
  Anzsco = 'Anzsco',
  //
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
  OccupationsinUnitGroup = 'OccupationsinUnitGroup',
  AverageSalary = 'AverageSalary',
  AlternativeTitles_title = 'AlternativeTitles_title',
  AlternativeTitles_description = 'AlternativeTitles_description',
  alternativeTitles_empty = 'alternativeTitles_empty',
  specialisations_title = 'specialisations_title',
  specialisations_description = 'specialisations_description',
  specialisations_empty = 'specialisations_empty',
  IndicativeSkillLevel_1 = 'IndicativeSkillLevel_1',
  IndicativeSkillLevel_2 = 'IndicativeSkillLevel_2',
  IndicativeSkillLevel_3 = 'IndicativeSkillLevel_3',
  IndicativeSkillLevel_4 = 'IndicativeSkillLevel_4',
  //backlog
  Backlog = 'Backlog',
  BacklogTitle = 'BacklogTitle',
  //Similar
  Similars = 'Similars',
  SimilarOccupations = 'SimilarOccupations',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    fa: 'لیست مشاغل | مارا باکس',
    en: 'ANZSCO $code: $title | Australia Visa options',
  },
  SeoDesc: {
    fa: 'فهرست کامل مشاغل ماهر را ببینید و بدانید که آیا شغل شما واجد شرایط درخواست ویزای کار یا مهارت استرالیا است یا خیر | برای اطلاعات بیشتر امروز با ما تماس بگیرید',
    en: 'See the full Skilled Occupations List & find out whether your occupation is eligible to apply for an Australian Skilled or Work Visa | Contact us today for more info',
  },
  AssessingAuthority: {
    fa: 'مرجع ارزیابی',
    en: 'Assessing Authority',
  },
  '491-family': {
    fa: '491-فامیلی',
    en: '491-family',
  },
  //
  Details: {
    fa: 'جزییات',
    en: 'Details',
  },
  Anzsco: {
    fa: 'کد رشته',
    en: 'Anzsco',
  },
  Backlog: {
    fa: 'صف',
    en: 'Backlog',
  },
  SimilarOccupations: {
    en: 'Similar Occupations',
    fa: 'لیست مشاغل نزدیک به این شغل',
  },
  //
  AnzscoTabTitle: {
    fa: 'مشخصات کد رشته',
    en: 'ANZSCO Version Specifications',
  },
  MajorGroup: {
    en: 'Major Group',
    fa: 'گروه اصلی',
  },
  SubMajorGroup: {
    en: 'Sub-Major Group',
    fa: 'زیر گروه اصلی',
  },
  MinorGroup: {
    en: 'Minor Group',
    fa: 'گروه فرعی',
  },
  UnitGroup: {
    en: 'Unit Group',
    fa: 'گروه واحد',
  },
  AlternativeTitles: {
    en: 'Alternative Titles',
    fa: 'عنوان جایگزین',
  },
  Specialisations: {
    en: 'Specialisations',
    fa: 'تخصص ها',
  },
  SkillPriorityLists: {
    en: '2022 Skill Priority Lists',
    fa: 'لیست اولویت مهارت 2022',
  },
  Description: {
    en: 'Description',
    fa: 'توضیحات',
  },
  IndicativeSkillLevel: {
    en: 'Indicative Skill Level',
    fa: 'سطح مهارت نشان دهنده',
  },
  Tasks: {
    en: 'Tasks',
    fa: 'وظایف',
  },
  OccupationsinUnitGroup: {
    en: 'Occupations in This Unit Group',
    fa: 'مشاغل در این گروه واحد',
  },
  AverageSalary: {
    en: 'Average Salary 2021',
    fa: 'میانگین حقوق ۲۰۲۱',
  },
  AlternativeTitles_title: {
    en: 'Alternative titles',
    fa: 'عنوان جایگزین',
  },
  AlternativeTitles_description: {
    en: 'are any commonly used alternative title (or titles) for the occupation. These alternative titles have the same meaning as the principal title but may be less commonly used.',
    fa: 'هر جایگزین رایج استفاده می شود عنوان (یا عناوین) برای شغل. این عناوین جایگزین دارند  همان معنای عنوان اصلی است اما ممکن است کمتر مورد استفاده قرار گیرد.',
  },
  specialisations_title: {
    en: 'specialisations title',
    fa: 'عنوان تخصص ها',
  },
  specialisations_description: {
    en: 'are any commonly used titles which refer to a subset of jobs belonging to the occupation designated in the principal title. These jobs involve the performance of specialised tasks rather than the broader range of tasks usually performed in the occupation.',
    fa: 'عناوین رایجی هستند که به زیرمجموعه ای از مشاغل متعلق به شغل تعیین شده در عنوان اصلی اشاره می کنند. این مشاغل شامل انجام وظایف تخصصی به جای گستره وسیع تری از وظایفی است که معمولاً در شغل انجام می شود.',
  },
  IndicativeSkillLevel_1: {
    en: `In Australia and New Zealand:
Most occupations in this unit group have a level of skill commensurate with a bachelor degree or higher qualification (ANZSCO Skill Level 1).`,
    fa: `در استرالیا و نیوزلند:

     اکثر مشاغل در این گروه واحد دارای سطح مهارتی متناسب با مدرک لیسانس یا بالاتر (سطح مهارت ANZSCO 1) هستند.`,
  },
  IndicativeSkillLevel_2: {
    en: `In Australia:

AQF Associate Degree, Advanced Diploma or Diploma (ANZSCO Skill Level 2)

In New Zealand:
NZQF Diploma (ANZSCO Skill Level 2)

At least three years of relevant experience may substitute for the formal qualifications listed above. In some instances relevant experience and/or on-the-job training may be required in addition to the formal qualification.`,
    fa: `در استرالیا:

مدرک کاردانی AQF، دیپلم یا دیپلم پیشرفته (سطح مهارت ANZSCO)

در نیوزلند:
دیپلم NZQF (سطح مهارت ANZSCO)

حداقل سه سال تجربه مرتبط ممکن است جایگزین مدارک رسمی ذکر شده در بالا شود. در برخی موارد تجربه مرتبط و/یا آموزش در حین کار ممکن است علاوه بر صلاحیت رسمی مورد نیاز باشد.`,
  },
  IndicativeSkillLevel_3: {
    en: `Most occupations in this unit group have a level of skill commensurate with the qualifications and experience outlined below.

In Australia:

AQF Certificate III including at least two years of on-the-job training, or AQF Certificate IV (ANZSCO Skill Level 3)

In New Zealand:
NZQF Level 4 qualification (ANZSCO Skill Level 3)

At least three years of relevant experience may substitute for the formal qualifications listed above. In some instances relevant experience and/or on-the-job training may be required in addition to the formal qualification.
Registration or licensing may be required.`,
    fa: `اکثر مشاغل در این گروه واحد دارای سطح مهارتی متناسب با صلاحیت ها و تجربه های ذکر شده در زیر هستند.

در استرالیا:

گواهینامه AQF III شامل حداقل دو سال آموزش در محل کار، یا گواهینامه AQF IV (سطح مهارت ANZSCO)

در نیوزلند:
مدرک NZQF سطح 4 (سطح مهارت ANZSCO)

حداقل سه سال تجربه مرتبط ممکن است جایگزین مدارک رسمی ذکر شده در بالا شود. در برخی موارد تجربه مرتبط و/یا آموزش در حین کار ممکن است علاوه بر صلاحیت رسمی مورد نیاز باشد.
ثبت یا پروانه ممکن است لازم باشد.`,
  },
  IndicativeSkillLevel_4: {
    //navid
    en: ``,
    fa: ``,
  },
  alternativeTitles_empty: {
    en: `There are no Alternative Titles for this occupation.`,
    fa: `هیچ عنوان جایگزینی برای این شغل وجود ندارد.`,
  },
  specialisations_empty: {
    en: `There are no Specialisation Titles for this occupation.`,
    fa: `هیچ عنوان تخصصی برای این شغل وجود ندارد.`,
  },
  ////// backlog/////////
  BacklogTitle: {
    en: 'Backlog & Invitations issued',
    fa: 'صف انتظار و دعوت نامه های صادر شده',
  },

  //////Similars////////
  Similars: {
    en: 'Similars',
    fa: 'مشاغل مشابه',
  },
};
