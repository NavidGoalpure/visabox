import {
  ClientMarital,
  ClientDegree,
  WorkExperience,
  AustralianWorkExperience,
  IELTSScore,
  UniSections,
} from "Interfaces/Client";

export type ClientData_Sanity = {
  name: string;
  lastname: string;
  phone: string;
  age: string;
  marital: ClientMarital;
  field_of_study: string;
  degree: ClientDegree;
  current_job: string;
  work_experience: WorkExperience;
  australian_work_experience: AustralianWorkExperience;
  ielts_score: IELTSScore;
  is_sharable: boolean;
  uni_section: UniSections;
  _createdAt?: Date;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: Date;
};
