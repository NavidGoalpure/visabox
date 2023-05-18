import { MultiLanguageText } from "Interfaces/Database";
import { IELTSScore } from "Interfaces/Database/Client";

export interface GetLabelsProps {
  age: string;
  IELTSScore: IELTSScore;
  phoneNumber: string;
  email: string;
  fieldOfStudy: string;
  marital: MultiLanguageText | undefined;
  degree: MultiLanguageText | undefined;
  uniSection: MultiLanguageText | undefined;
  workExperience: MultiLanguageText | undefined;
  australianWorkExperience: MultiLanguageText | undefined;
}