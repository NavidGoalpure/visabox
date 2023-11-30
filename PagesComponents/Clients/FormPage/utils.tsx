import {
  australianWorks,
  Countries,
  educations,
  maritalStatuses,
  uniSections,
  works,
} from "Consts/Client";

import { MultiLanguageText, SupportedCountry } from "Interfaces/Database";
import {
  AustralianWorkExperience,
  Client,
  ClientAllDegrees,
  ClientAllJobs,
  ClientDegree,
  ClientMarital,
  UniSections,
  WorkExperience,
} from "Interfaces/Database/Client";
import { ReactNode } from "react";
import {
  ClientAllDegreesLabels,
  ClientAllJobsLabels,
  GetLabelsProps,
} from "./interface";

export function getMaritalLabel({
  marital,
}: {
  marital: ClientMarital | undefined;
}): MultiLanguageText | undefined {
  switch (marital) {
    case ClientMarital.Married:
      return maritalStatuses.find(
        (maritalStatus) => maritalStatus.en === "Married"
      );
    case ClientMarital.Single:
      return maritalStatuses.find(
        (maritalStatus) => maritalStatus.en === "Single"
      );
    default:
      return undefined;
  }
}
export function getdegreeLabel({
  degree,
}: {
  degree: ClientDegree | undefined;
}): MultiLanguageText | undefined {
  switch (degree) {
    case ClientDegree.Diploma:
      return educations.find((degree) => degree.en === "Diploma");
    case ClientDegree.Bachelorsdegree:
      return educations.find((degree) => degree.en === "Bachelor's degree");
    case ClientDegree.Mastersdegree:
      return educations.find((degree) => degree.en === "Master's degree");
    case ClientDegree.Doctorate:
      return educations.find((degree) => degree.en === "Doctorate");
    case ClientDegree.IDontHaveAny:
      return educations.find((degree) => degree.en === "I dont have any");

    // handled doctorate in default
    default:
      return undefined;
  }
}
export function getUniSectionLabel({
  UniSection,
}: {
  UniSection: UniSections | undefined;
}): MultiLanguageText | undefined {
  switch (UniSection) {
    case UniSections.Section1:
      return uniSections.find((section) => section.en === "Section 1");
    case UniSections.Section2:
      return uniSections.find((section) => section.en === "Section 2");
    // handeled I dont know option in default
    case UniSections.IDontKnow:
      return uniSections.find((section) => section.en === "I don't know");
    default:
      return undefined;
  }
}
export function getWorkExperienceLabel({
  workExperience,
}: {
  workExperience: WorkExperience | undefined;
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
    case WorkExperience.MoreThan8Years:
      return works.find((experience) => experience.en === "More than 8 years");
    // handeled more than 8 years option in default
    default:
      return undefined;
  }
}
export function getAllDegreeLabels({
  all_degrees,
}: {
  all_degrees: ClientAllDegrees[] | undefined;
}) {
  const labeledAllDegrees: ClientAllDegreesLabels[] = [];
  all_degrees?.map((degree) => {
    const degreeLabel: ClientAllDegreesLabels = {
      label: getdegreeLabel({ degree: degree.label }),
      uni_section: getUniSectionLabel({
        UniSection: degree.uni_section || undefined,
      }),
      field_of_study: degree.field_of_study,
      graduation_date: degree.graduation_date,
    };
    labeledAllDegrees.push(degreeLabel);
  });
  return labeledAllDegrees;
}
export function getAllJobLabels({
  all_jobs,
}: {
  all_jobs: ClientAllJobs[] | undefined;
}) {
  const labeledAllDegrees: ClientAllJobsLabels[] = [];
  all_jobs?.map((job) => {
    const degreeLabel: ClientAllJobsLabels = {
      work_experience: getWorkExperienceLabel({
        workExperience: job?.work_experience || undefined,
      }),
      is_able_to_provide_legal_proof: job.is_able_to_provide_legal_proof,
      was_job_in_australia: job.was_job_in_australia,
      title: job.title,
    };
    labeledAllDegrees.push(degreeLabel);
  });
  return labeledAllDegrees;
}
export function getAustralianWorkExperienceLabel({
  australianWorkExp,
}: {
  australianWorkExp: AustralianWorkExperience | undefined;
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
    case AustralianWorkExperience.MoreThan8Years:
      return australianWorks.find(
        (australianWorkExp) => australianWorkExp.en === "More than 8 years"
      );
    default:
      return undefined;
  }
}
export function getCountryLabel({
  country,
}: {
  country: SupportedCountry | undefined;
}): MultiLanguageText | undefined {
  switch (country) {
    case SupportedCountry.Iran:
      return Countries.find((Country) => Country.en === "Iran");
    case SupportedCountry.Australia:
      return Countries.find((Country) => Country.en === "Australia");
    case SupportedCountry.China:
      return Countries.find((Country) => Country.en === "China");
    case SupportedCountry.India:
      return Countries.find((Country) => Country.en === "India");
    case SupportedCountry.Other:
      return Countries.find((Country) => Country.en === "Other");
    default:
      return undefined;
  }
}
export function getMultiLanguageLabels(client: Client): GetLabelsProps {
  //   turns sanity data to multilanguage texts so we can show more detailed data
  const showableData: GetLabelsProps = {
    name: client?.name,
    lastname: client?.lastname,
    marital: getMaritalLabel({
      marital: client?.marital,
    }),
    does_partner_have_assessment: client?.does_partner_have_assessment,
    is_partner_competent_english_speaker:
      client?.is_partner_competent_english_speaker,
    degree: getdegreeLabel({ degree: client?.degree }),
    uniSection: getUniSectionLabel({ UniSection: client?.uni_section }),
    workExperience: getWorkExperienceLabel({
      workExperience: client?.work_experience,
    }),
    all_degrees: getAllDegreeLabels({ all_degrees: client?.all_degrees }),
    all_jobs: getAllJobLabels({ all_jobs: client?.all_jobs }),
    australianWorkExperience: getAustralianWorkExperienceLabel({
      australianWorkExp: client?.australian_work_experience,
    }),
    country: getCountryLabel({ country: client?.country }),
    age: client?.age,
    birthday: client?.birthday,
    IELTSScore: client?.ielts_score,
    phoneNumber: client?.phone,
    email: client?.email,
    fieldOfStudy: client?.field_of_study,
    australian_educational_qualification:
      client?.australian_educational_qualification,
    designated_regional_area_study: client?.designated_regional_area_study,
    specialist_educational_qualification:
      client?.specialist_educational_qualification,
    professional_year_in_australia: client?.professional_year_in_australia,
    accredited_community_language: client?.accredited_community_language,
  };
  return showableData;
}
