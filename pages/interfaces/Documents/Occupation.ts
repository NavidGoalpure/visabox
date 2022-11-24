// To parse this data:
//
//   import { Convert, Occupation } from "./file";
//
//   const occupation = Convert.toOccupation(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { MultiLanguageText } from '..';
import { Slug } from '../Fields';

export interface Occupation {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  anzsco_section?: AnzscoSection;
  assessing_authority?: string;
  backlog_section?: BacklogSection;
  code: number;
  slug?: Slug;
  territory_section?: TerritorySection[];
  title: MultiLanguageText;
  visa_option_section?: VisaOptionSection[];
}

export interface AnzscoSection {
  _type?: string;
  alternative_title?: AlternativeTitle;
  description?: MultiLanguageText;
  priority_list?: PriorityList[];
  specialisations?: AlternativeTitle;
  unit_group?: UnitGroup;
}

export interface AlternativeTitle {
  en?: string[];
}

export interface PriorityList {
  _key?: string;
  _type?: string;
  act?: string;
  future_demend?: string;
  national?: string;
  nsw?: string;
  nt?: string;
  qld?: string;
  sa?: string;
  tas?: string;
  vic?: string;
  wa?: string;
  year?: Date;
}

interface UnitGroup {
  _ref?: string;
  _type?: UnitGroupType;
}

enum UnitGroupType {
  Reference = 'reference',
}

export interface BacklogSection {
  _type?: string;
  submited_491?: Submited491;
}

export interface Submited491 {
  _type?: string;
  upper_than_70?: number;
  upper_than_75?: number;
  upper_than_80?: number;
  upper_than_85?: number;
}

export interface TerritorySection {
  _key?: string;
  _type?: string;
  desc?: Desc[];
  territory?: UnitGroup;
}

export interface Desc {
  _key?: string;
  _type?: DescType;
  children?: Child[];
  markDefs?: any[];
  style?: Style;
}

export enum DescType {
  Block = 'block',
}

export interface Child {
  _key?: string;
  _type?: ChildType;
  marks?: any[];
  text?: string;
}

export enum ChildType {
  Span = 'span',
}

export enum Style {
  Normal = 'normal',
}

export interface VisaOptionSection {
  _key?: string;
  _type?: string;
  types?: UnitGroup;
}
