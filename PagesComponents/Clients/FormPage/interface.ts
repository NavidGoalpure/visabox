import { MultiLanguageText } from "Interfaces/Database";
import { ClientAllDegrees, ClientAllJobs, IELTSScore } from "Interfaces/Database/Client";

export interface GetLabelsProps {
  age?: string;
  birthday?: string;
  IELTSScore?: IELTSScore;
  phoneNumber?: string;
  email?: string;
  name?: string;
  lastname?: string;
  fieldOfStudy?: string;
  all_degrees?: ClientAllDegrees[];
  all_jobs?: ClientAllJobs[];
  marital: MultiLanguageText | undefined;
  does_partner_have_assessment?: boolean;
  is_partner_competent_english_speaker?: boolean;
  degree: MultiLanguageText | undefined;
  uniSection: MultiLanguageText | undefined;
  workExperience: MultiLanguageText | undefined;
  australianWorkExperience: MultiLanguageText | undefined;
  country: MultiLanguageText | undefined;
  australian_educational_qualification: boolean | undefined;
  designated_regional_area_study: boolean | undefined;
  specialist_educational_qualification: boolean | undefined;
  professional_year_in_australia: boolean | undefined;
  accredited_community_language: boolean | undefined;
}
