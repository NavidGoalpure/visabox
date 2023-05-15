import {
  ClientMarital,
  ClientDegree,
  WorkExperience,
  AustralianWorkExperience,
  IELTSScore,
  UniSections,
  ClientCompletedForms,
} from "Interfaces/Database/Client";
import { SanityKeys, Status } from "Interfaces/Database";

export interface ClientData_Sanity extends SanityKeys {
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
  status: Status;
  role: 'normal' | 'admin';
  avatar?: string;
  completed_forms?: ClientCompletedForms[];
  email: string;
}
