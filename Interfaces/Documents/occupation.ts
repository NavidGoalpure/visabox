// To parse this data:
//
//   import { Convert, Occupation } from "./file";
//
//   const occupation = Convert.toOccupation(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { MultiLanguageText, MultiLanguageTextArray } from '..';
import { Slug } from '../Fields';
import { UnitGroup } from './unitGroup';

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
  alternative_title?: MultiLanguageTextArray;
  description?: MultiLanguageText;
  priority_list?: PriorityList[];
  specialisations?: MultiLanguageTextArray;
  unit_group?: ReferenceType | UnitGroup;
  major_group: number;
  submajor_group: number;
  minor_group: number;
}

export enum Territories {
  ACT = 'ACT',
  NSW = 'NSW',
  NT = 'NT',
  QLD = 'QLD',
  SA = 'SA',
  TAS = 'TAS',
  VIC = 'VIC',
  WA = 'WA',
}
export interface PriorityList {
  _key: string;
  _type?: string;
  future_demend?: string;
  national?: string;
  year?: Date;
  [Territories.ACT]: string;
  [Territories.NSW]: string;
  [Territories.NT]: string;
  [Territories.QLD]: string;
  [Territories.SA]: string;
  [Territories.TAS]: string;
  [Territories.VIC]: string;
  [Territories.WA]: string;
}

interface ReferenceType {
  _ref?: string;
  _type?: 'reference;';
}

export interface BacklogSection {
  _type?: string;
  //
  submited_189?: BacklogPoints;
  invited_189?: BacklogPoints;
  total_submited_189?: BacklogPoints;
  total_invited_189?: BacklogPoints;
  //
  submited_190?: BacklogPoints;
  invited_190?: BacklogPoints;
  total_submited_190?: BacklogPoints;
  total_invited_190?: BacklogPoints;
  //
  submited_491?: BacklogPoints;
  invited_491: BacklogPoints;
  total_submited_491?: BacklogPoints;
  total_invited_491?: BacklogPoints;
  //
  submited_491_family?: BacklogPoints;
  invited_491_family: BacklogPoints;
  total_submited_491_family?: BacklogPoints;
  total_invited_491_family?: BacklogPoints;
  //
}

export interface BacklogPoints {
  _type?: string;
  upper_than_65?: number;
  upper_than_70?: number;
  upper_than_75?: number;
  upper_than_80?: number;
  upper_than_85?: number;
  upper_than_90?: number;
  upper_than_100?: number;
  upper_than_105?: number;
}

export interface TerritoryObj {
  _key?: string;
  _type?: string;
  title?: string;
  abv?: string;
  url: URL;
}
export interface TerritorySection {
  _key?: string;
  _type?: string;
  desc?: Desc[];
  html_desc: string;
  territory?: ReferenceType | TerritoryObj;
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
  types?: ReferenceType;
}
