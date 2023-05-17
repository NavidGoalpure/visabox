import { SanityKeys, Status } from '.';

export enum ClientMarital {
  Married = 'married',
  Single = 'single',
}
export enum ClientDegree {
  Diploma = 'diploma',
  Bachelorsdegree = "bachelor's degree",
  Doctorate = 'doctorate',
}
export enum WorkExperience {
  'Below1Year' = 'below 1 year',
  '1To3Years' = '1 to 3 years',
  '3To5Years' = '3 to 5 years',
  '5To8Years' = '5 to 8 years',
  'MoreThan8Years' = 'more than 8 years',
}
export enum UniSections {
  'Section1' = 'Section 1',
  'Section2' = 'Section 2',
  'IDontKnow' = "I don't know",
}
export enum AustralianWorkExperience {
  'LessThan1Year' = 'none - less than 1 year',
  '1To3Years' = '1 to 3 years',
  '3To5Years' = '3 to 5 years',
  '5To8Years' = '5 to 8 years',
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
}
export interface ClientData extends SanityKeys {
  name: string;
  lastName: string;
  phoneNumber: string;
  age: string;
  marital: ClientMarital;
  fieldOfStudy: string;
  degree: ClientDegree;
  currentJob: string;
  workExperience: WorkExperience;
  australianWorkExperience: AustralianWorkExperience;
  IELTSScore: IELTSScore;
  uniSection: UniSections;
  isSharable: boolean;
  status: Status;
  role: 'normal' | 'admin';
  completedForms?: ClientCompletedForms_obj[];
  avatar?: string;
  email: string;
}
