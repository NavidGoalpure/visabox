import { MultiLanguageText } from "Interfaces/Database";
import { ClientCountry, IELTSScore } from "Interfaces/Database/Client";

export interface GetLabelsProps {
  age?: string;
  IELTSScore?: IELTSScore;
  phoneNumber?: string;
  email?: string;
  fieldOfStudy?: string;
  marital: MultiLanguageText | undefined;
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
