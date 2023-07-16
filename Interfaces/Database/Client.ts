import { SanityKeys, Status } from ".";
// the enum values should be the same as sanity document name and toggle group english text
export enum ClientCountry {
  Iran = "iran",
  China = "china",
  India = "india",
  Other = "other",
}
export enum ClientMarital {
  Married = "married",
  Single = "single",
}
export enum MaritalSituationType {
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
}
export enum ClientDegree {
  IDontHaveAny = "I dont have any",
  Diploma = "diploma",
  Bachelorsdegree = "bachelor's degree",
  Mastersdegree = "master's degree",
  Doctorate = "doctorate",
}
export enum ClientRole {
  Normal = "normal",
  Admin = "admin",
}
export enum WorkExperience {
  "Below1Year" = "below 1 year",
  "1To3Years" = "1 to 3 years",
  "3To5Years" = "3 to 5 years",
  "5To8Years" = "5 to 8 years",
  "MoreThan8Years" = "more than 8 years",
}
export enum UniSections {
  "Section1" = "section 1",
  "Section2" = "section 2",
  "IDontKnow" = "i don't know",
}
export enum AustralianWorkExperience {
  // dont change this its required in order for step 9 to work properly
  "LessThan1Year" = "none - less than 1 year",
  //
  "1To3Years" = "1 to 3 years",
  "3To5Years" = "3 to 5 years",
  "5To8Years" = "5 to 8 years",
  "MoreThan8Years" = "more than 8 years",
}
export enum IELTSScore {
  Six = "6",
  Seven = "7",
  Eight = "8",
}
export enum VisaSubclass {
  "189Subclass" = "189",
  "190Subclass" = "190",
  "491Subclass" = "491",
}
export enum ClientCompletedForms {
  BasicForm = "basic_form",
}
export interface ClientCompletedForms_obj {
  forms: ClientCompletedForms;
  _type: "client_completed_forms_obj";
  _key: string;
}
export interface Client extends SanityKeys {
  country: ClientCountry;
  name?: string;
  lastname?: string;
  phone?: string;
  // navid make another one of these named birthday
  age?: string;
  visa_subclass: VisaSubclass;
  // navid delete this in a few months because we use marital_situation instead
  marital?: ClientMarital;
  marital_situation: MaritalSituationType;
  field_of_study?: string;
  degree?: ClientDegree;
  current_job?: string;
  work_experience?: WorkExperience;
  australian_work_experience?: AustralianWorkExperience;
  ielts_score?: IELTSScore;
  is_sharable?: boolean;
  //سکشن دانشگاه
  uni_section?: UniSections;
  ///
  australian_educational_qualification: boolean;
  designated_regional_area_study?: boolean;
  specialist_educational_qualification: boolean;
  professional_year_in_australia: boolean;
  accredited_community_language: boolean;
  ///
  status?: Status;
  role?: ClientRole;
  avatar?: string;
  completed_forms?: ClientCompletedForms_obj[];
  email: string;
}
