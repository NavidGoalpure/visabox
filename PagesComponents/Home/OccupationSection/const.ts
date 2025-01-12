import { MultiLanguageText, MultiLanguageTextArray } from 'Interfaces/Database';
import { Slug } from 'Interfaces/Database/Fields';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    fa: 'لیست مشاغل مورد نیاز',
    en: 'List Of Occupations',
    zh: '职业清单',
  },
  Subtitle: {
    fa: 'برای مشاهده لیست مشاغل مورد تایید برای ویزای مهارتی، از این بخش استفاده کنید.',
    en: 'Use this section to view the list of Occupations',
    zh: '使用此部分查看职业列表',
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
    zh: '查看全部',
  },
};
export const CardData = {
  code: 133111,
  title: {
    en: "Construction Project Manager",
  } as MultiLanguageText,
  description: {
    en: "Plans, organises, directs, controls and coordinates construction of civil engineering and building projects, and the physical and human resources involved in the construction process. Registration or licensing may be required.",
  } as MultiLanguageText,
  slug: { current: "construction-project-manager" } as Slug,
  tasks: {en:[
    "Interpreting architectural drawings and specifications",
    "Coordinating labour resources, and procurement and delivery of materials, plant and equipment",
    "Consulting with Architects, Engineering Professionals and other professionals, and Technical and Trades Workers",
    "Negotiating with building owners, property developers and subcontractors involved in the construction process to ensure projects are completed on time and within budget",
    "Preparing tenders and contract bids",
    "Operating and implementing coordinated work programs for sites",
    "Ensuring adherence to building legislation and standards of performance, quality, cost and safety",
    "Arranging submission of plans to local authorities",
    "Building under contract, or subcontracting specialised building services",
    "Overseeing the standard and progress of subcontractors work",
    "Arranging building inspections by local authorities",
  ]},
};
