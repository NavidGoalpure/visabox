
export enum ClientMarital {
  Married = "Married",
  Single = "Single",
}
export enum ClientDegree {
  Diploma = "Diploma",
  
  Bachelorsdegree = "Bachelor's degree",
  Doctorate = "Doctorate",
}
export enum WorkExperience {
  "Below1Year" = "Below 1 year",
  "1To3Years" = "1 to 3 years",
  "3To5Years" = "3 to 5 years",
  "5To8Years" = "5 to 8 years",
  "MoreThan8Years" = "More than 8 years",
}
export enum AustralianWorkExperience {
  "LessThan1Year" = "none - less than 1 year",
  "1To3Years" = "1 to 3 years",
  "3To5Years" = "3 to 5 years",
  "5To8Years" = "5 to 8 years",
  "MoreThan8Years" = "More than 8 years",
}
export enum EnglishSkillLevel {
  "Score6inIELTS" = "Score 6 in IELTS",
  "Score7InIELTS" = "Score 7 in IELTS",
  "Score8InIELTS" = "Score 8 in IELTS",
}
export type ClientData = {
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
  englishSkillLevel: EnglishSkillLevel;
};
