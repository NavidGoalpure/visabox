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
import { Territory } from './territory';

export enum AssessingAuthority {
  'AACA' = 'AACA',
  'AASW' = 'AASW',
  'ACECQA' = 'ACECQA',
  'ACS' = 'ACS',
  'ACWA' = 'ACWA',
  'ADC' = 'ADC',
  'AIMS' = 'AIMS',
  'AIQS' = 'AIQS',
  'AITSL' = 'AITSL',
  'ANMAC' = 'ANMAC',
  'ANZSNM' = 'ANZSNM',
  'AOAC' = 'AOAC',
  'AOPA' = 'AOPA',
  'APC' = 'APC',
  'APharmC' = 'APharmC',
  'APS' = 'APS',
  'ASMIRT' = 'ASMIRT',
  'AVBC' = 'AVBC',
  'CASA' = 'CASA',
  'CCEA' = 'CCEA',
  'CMBA' = 'CMBA',
  'CPAA' = 'CPAA',
  'CAANZ' = 'CAANZ',
  'IPA' = 'IPA',
  'DDA' = 'DDA',
  'EA' = 'EA',
  'IML' = 'IML',
  'MedBA' = 'MedBA',
  'NAATI' = 'NAATI',
  'OCANZ' = 'OCANZ',
  'OTC' = 'OTC',
  'PodBA' = 'PodBA',
  'SLAA' = 'SLAA',
  'SPA' = 'SPA',
  'SSSI' = 'SSSI',
  'TRA' = 'TRA',
  'ACPSEM' = 'ACPSEM',
  'VETASSESS_A' = 'VETASSESS_A',
  'VETASSESS_B' = 'VETASSESS_B',
  'VETASSESS_C' = 'VETASSESS_C',
  'VETASSESS_D' = 'VETASSESS_D',
  'VETASSESS_E' = 'VETASSESS_E',
  'VETASSESS_F' = 'VETASSESS_F',
}
export interface Occupation {
  _createdAt?: Date;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: Date;
  anzsco_section?: AnzscoSection;
  assessing_authority?: AssessingAuthority;
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
  nec_occupation: MultiLanguageTextArray;
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
  year?: string;
  [Territories.ACT]: string;
  [Territories.NSW]: string;
  [Territories.NT]: string;
  [Territories.QLD]: string;
  [Territories.SA]: string;
  [Territories.TAS]: string;
  [Territories.VIC]: string;
  [Territories.WA]: string;
}

export interface ReferenceType {
  _ref?: string;
  _type?: 'reference';
  _weak?: boolean;
}
export interface ByStateTable {
  _key: string;
  _type: 'territory_backlog_obj';
  eoi_count: string;
  territory: ReferenceType | Territory;
}
export interface BacklogSection {
  _type?: string;
  //
  submited_189?: BacklogPoints;
  invited_189?: BacklogPoints;
  total_submited_189?: string;
  total_invited_189?: string;
  //
  submited_190?: BacklogPoints;
  invited_190?: BacklogPoints;
  submited_by_state_190?: ByStateTable[];
  submited_by_state_491?: ByStateTable[];
  invited_by_state_190?: ByStateTable[];
  invited_by_state_491?: ByStateTable[];
  //
  submited_491?: BacklogPoints;
  invited_491?: BacklogPoints;
  //
  submited_491_family?: BacklogPoints;
  invited_491_family?: BacklogPoints;
  total_submited_491_family?: string;
  total_invited_491_family?: string;
  //
}

export interface BacklogPoints {
  _type?: string;
  upper_than_65?: string;
  upper_than_70?: string;
  upper_than_75?: string;
  upper_than_80?: string;
  upper_than_85?: string;
  upper_than_90?: string;
  upper_than_95?: string;
  upper_than_100?: string;
  upper_than_105?: string;
  upper_than_110?: string;
}

export interface TerritorySection {
  _key?: string;
  _type?: string;
  desc?: Desc[];
  html_desc: string;
  territory?: ReferenceType | Territory;
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
