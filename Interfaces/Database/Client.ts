import { SanityKeys, Status, SupportedCountry } from '.';

export enum ClientMarital {
  Married = 'married',
  Single = 'single',
}

export enum ClientDegree {
  IDontHaveAny = 'i dont have any',
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
  '1To3Years' = '1 to 3 years',
  '3To5Years' = '3 to 5 years',
  '5To8Years' = '5 to 8 years',
  'MoreThan8Years' = 'more than 8 years',
}
export enum UniSections {
  'Section1' = 'section 1',
  'Section2' = 'section 2',
  'IDontKnow' = "i don't know",
}
export enum AustralianWorkExperience {
  // dont change this its required in order for step 9 to work properly
  'LessThan1Year' = 'none - less than 1 year',
  //
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
  AgentForm = 'agent_form',
}
export interface ClientAllDegrees {
  label: ClientDegree;
  uni_section: UniSections | null;
  field_of_study: string | null;
  graduation_date: string | null;
}
export interface ClientAllJobs {
  title: string;
  work_experience: WorkExperience;
  is_able_to_provide_legal_proof: boolean;
  was_job_in_australia: boolean;
}
export interface ClientCompletedForms_obj {
  forms: ClientCompletedForms;
  _type: 'client_completed_forms_obj';
  _key: string;
}
//
export interface Client extends SanityKeys {
  country: SupportedCountry;
  name?: string;
  lastname?: string;
  phone?: string;
  birthday?: string;
  age?: string;
  marital: ClientMarital;
  does_partner_have_assessment?: boolean;
  is_partner_competent_english_speaker?: boolean;
  all_degrees?: ClientAllDegrees[];
  all_jobs?: ClientAllJobs[];
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
  //AI
  // تعداد سوالاتی که کاربر میتونه از هوش مصنوعی بپرسه
  credit?: number;
}
