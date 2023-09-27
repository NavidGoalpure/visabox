// To parse this data:
//
//   import { Convert, Occupation } from "./file";
//
//   const occupation = Convert.toOccupation(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.


import { Slug } from './Fields';
import { UnitGroup } from './unitGroup';
import { Territory } from './territory';
import { EnLanguage, EnLanguageArray, SanityKeys } from '..';

export enum AssessingAuthorityAbv {
  'AACA' = 'AACA',
  'AASW' = 'AASW',
  'ACECQA' = 'ACECQA',
  'ACS' = 'ACS',
  'ACWA' = 'ACWA',
  'ADC' = 'ADC',
  'AIM' = 'AIM',
  'AIMS' = 'AIMS',
  'AIR' = 'AIR',
  'AMSA' = 'AMSA',
  'AIQS' = 'AIQS',
  'AITSL' = 'AITSL',
  'ANMAC' = 'ANMAC',
  'ANZSNM' = 'ANZSNM',
  'AOAC' = 'AOAC',
  'ANZPAC' = 'ANZPAC',
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
  'DDA' = 'DDA',
  'DAA' = 'DAA',
  'EA' = 'EA',
  'IPA' = 'IPA',
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
  'VETASSESS' = 'VETASSESS',
  'VETASSESS_A' = 'VETASSESS_A',
  'VETASSESS_B' = 'VETASSESS_B',
  'VETASSESS_C' = 'VETASSESS_C',
  'VETASSESS_D' = 'VETASSESS_D',
  'VETASSESS_E' = 'VETASSESS_E',
  'VETASSESS_F' = 'VETASSESS_F',
}
export interface Occupation extends SanityKeys {
  anzsco_section?: AnzscoSection;
  assessing_authority?: AssessingAuthorityAbv;
  backlog_section?: BacklogSection;
  code: number;
  slug?: Slug;
  territory_section?: TerritorySection[];
  title: EnLanguage;
  visa_option_section?: VisaOptionSection[];
}

export interface AnzscoSection {
  _type?: string;
  alternative_title?: EnLanguageArray;
  description?: EnLanguage;
  priority_list?: PriorityList[];
  specialisations?: EnLanguageArray;
  unit_group?: ReferenceType | UnitGroup;
  major_group?: number;
  submajor_group?: number;
  minor_group?: number;
  nec_occupation?: EnLanguageArray;
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
  _strengthenOnPublish?: {
    template: {
      id: string;
    };
    type: string;
  };
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
  lodged_189?: BacklogPoints;
  total_submited_189?: string;
  total_invited_189?: string;
  total_lodged_189?: string;
  //
  submited_190?: BacklogPoints;
  invited_190?: BacklogPoints;
  lodged_190?: BacklogPoints;
  submited_by_state_190?: ByStateTable[];
  invited_by_state_190?: ByStateTable[];
  lodged_by_state_190?: ByStateTable[];

  //
  submited_491?: BacklogPoints;
  invited_491?: BacklogPoints;
  lodged_491?: BacklogPoints;
  submited_by_state_491?: ByStateTable[];
  invited_by_state_491?: ByStateTable[];
  lodged_by_state_491?: ByStateTable[];
  //
  submited_491_family?: BacklogPoints;
  invited_491_family?: BacklogPoints;
  lodged_491_family?: BacklogPoints;
  total_submited_491_family?: string;
  total_invited_491_family?: string;
  total_lodged_491_family?: string;

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
  upper_than_115?: string;
  upper_than_120?: string;
  upper_than_125?: string;
  upper_than_130?: string;
  upper_than_135?: string;
  upper_than_140?: string;
  upper_than_145?: string;
  upper_than_150?: string;
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
