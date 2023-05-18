import {
  australianWorks,
  educations,
  maritalStatuses,
  uniSections,
  works,
} from "Consts/Client";
import { Languages } from "Interfaces";
import { MultiLanguageText } from "Interfaces/Database";
import {
  AustralianWorkExperience,
  ClientData,
  ClientDegree,
  ClientMarital,
  UniSections,
  WorkExperience,
} from "Interfaces/Database/Client";
import { GetLabelsProps } from "./interface";

export function getMaritalLabel({
  marital,
}: {
  marital: ClientMarital;
}): MultiLanguageText | undefined {
  switch (marital) {
    case ClientMarital.Married:
      return maritalStatuses.find(
        (maritalStatus) => maritalStatus.en === "Married"
      );
    // handeled single in default
    default:
      return maritalStatuses.find(
        (maritalStatus) => maritalStatus.en === "Single"
      );
  }
}
export function getdegreeLabel({
  degree,
}: {
  degree: ClientDegree;
}): MultiLanguageText | undefined {
  switch (degree) {
    case ClientDegree.Diploma:
      return educations.find((degree) => degree.en === "Diploma");
    case ClientDegree.Bachelorsdegree:
      return educations.find((degree) => degree.en === "Bachelor's degree");
    case ClientDegree.Mastersdegree:
      return educations.find((degree) => degree.en === "Master's degree");
    // handeld doctorate in default
    default:
      return educations.find((degree) => degree.en === "Doctorate");
  }
}
export function getUniSectionLabel({
  UniSection,
}: {
  UniSection: UniSections;
}): MultiLanguageText | undefined {
  switch (UniSection) {
    case UniSections.Section1:
      return uniSections.find((section) => section.en === "Section 1");
    case UniSections.Section2:
      return uniSections.find((section) => section.en === "Section 2");
    // handeled I dont know option in default
    default:
      return uniSections.find((section) => section.en === "I don't know");
  }
}
export function getWorkExperienceLabel({
  workExperience,
}: {
  workExperience: WorkExperience;
}): MultiLanguageText | undefined {
  switch (workExperience) {
    case WorkExperience["1To3Years"]:
      return works.find((experience) => experience.en === "1 to 3 years");
    case WorkExperience["3To5Years"]:
      return works.find((experience) => experience.en === "3 to 5 years");
    case WorkExperience["5To8Years"]:
      return works.find((experience) => experience.en === "5 to 8 years");
    case WorkExperience.Below1Year:
      return works.find((experience) => experience.en === "Below 1 year");
    // handeled more than 8 years option in default
    default:
      return works.find((experience) => experience.en === "More than 8 years");
  }
}
export function getAustralianWorkExperienceLabel({
  australianWorkExp,
}: {
  australianWorkExp: AustralianWorkExperience;
}): MultiLanguageText | undefined {
  switch (australianWorkExp) {
    case AustralianWorkExperience.LessThan1Year:
      return australianWorks.find(
        (australianWorkExp) =>
          australianWorkExp.en === "none - less than 1 year"
      );
    case AustralianWorkExperience["1To3Years"]:
      return australianWorks.find(
        (australianWorkExp) => australianWorkExp.en === "1 to 3 years"
      );
    case AustralianWorkExperience["3To5Years"]:
      return australianWorks.find(
        (australianWorkExp) => australianWorkExp.en === "3 to 5 years"
      );
    case AustralianWorkExperience["5To8Years"]:
      return australianWorks.find(
        (australianWorkExp) => australianWorkExp.en === "5 to 8 years"
      );
    // handeled more than 8 years option in default
    default:
      return australianWorks.find(
        (australianWorkExp) => australianWorkExp.en === "More than 8 years"
      );
  }
}
export function getMultiLanguageLabels(clientData: ClientData): GetLabelsProps {
  //   turns sanity data to multilanguage texts so we can show more detailed data
  const showableData = {
    marital: getMaritalLabel({ marital: clientData?.marital }),
    degree: getdegreeLabel({ degree: clientData?.degree }),
    uniSection: getUniSectionLabel({ UniSection: clientData?.uniSection }),
    workExperience: getWorkExperienceLabel({
      workExperience: clientData?.workExperience,
    }),
    australianWorkExperience: getAustralianWorkExperienceLabel({
      australianWorkExp: clientData?.australianWorkExperience,
    }),
    age: clientData?.age,
    IELTSScore: clientData?.IELTSScore,
    phoneNumber: clientData?.phoneNumber,
    email: clientData?.email,
    fieldOfStudy: clientData?.fieldOfStudy,
  };
  return showableData;
}
