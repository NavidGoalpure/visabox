import { SanityKeys, Status } from '.';

export enum ClientMarital {
  Married = 'married',
  Single = 'single',
}
export enum ClientDegree {
  Diploma = 'diploma',
  Bachelorsdegree = "bachelor's degree",
  Mastersdegree = "master's degree",
  Doctorate = 'doctorate',
}
export enum ClientRole {
  Normal = 'normal',
  Admin = 'admin',
}
export enum WorkExperience {
  'Below1Year' = 'below 1 year',
  '1To2Years' = '1 to 2 years',
  '3To4Years' = '3 to 4 years',
  '5To7Years' = '5 to 7 years',
  'MoreThan8Years' = '8 years or More',
}
export enum UniSections {
  'Section1' = 'section 1',
  'Section2' = 'section 2',
  'IDontKnow' = "i don't know",
}
export enum AustralianWorkExperience {
  'LessThan1Year' = 'below 1 year',
  '1To2Years' = '1 to 3 years',
  '3To4Years' = '3 to 5 years',
  '5To7Years' = '5 to 8 years',
  'MoreThan8Years' = 'more than 8 years',
}
export enum IELTSScore {
  Six = '6',
  Seven = '7',
  Eight = '8',
}
export enum ClientCompletedForms {
  BasicForm = 'basic_form',
}
export interface ClientCompletedForms_obj {
  forms: ClientCompletedForms;
  _type: 'client_completed_forms_obj';
  _key: string;
}
export interface Client extends SanityKeys {
  name?: string;
  lastname?: string;
  phone?: string;
  age?: string;
  marital?: ClientMarital;
  field_of_study?: string;
  degree?: ClientDegree;
  current_job?: string;
  work_experience?: WorkExperience;
  australian_work_experience?: AustralianWorkExperience;
  ielts_score?: IELTSScore;
  is_sharable?: boolean;
  //سکشن دانشگاه
  uni_section?: UniSections;
  australian_educational_qualification: boolean;
  designated_regional_area_study?: boolean;
  specialist_educational_qualification: boolean;
  professional_year_in_australia: boolean;
  status?: Status;
  role?: ClientRole;
  avatar?: string;
  completed_forms?: ClientCompletedForms_obj[];
  email: string;
}
