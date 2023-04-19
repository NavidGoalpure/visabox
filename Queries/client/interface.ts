import { ClientMarital, ClientDegree, WorkExperience, AustralianWorkExperience, EnglishSkillLevel } from "Interfaces/Client";

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
  english_skill_level: EnglishSkillLevel;
};
