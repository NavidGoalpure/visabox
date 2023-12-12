import { Client } from "Interfaces/Database/Client";
import {
  getMaritalLabel,
  getdegreeLabel,
  getUniSectionLabel,
  getWorkExperienceLabel,
  getAllDegreeLabels,
  getAllJobLabels,
  getAustralianWorkExperienceLabel,
  getCountryLabel,
} from "Utils/clients";
import { GetLabelsProps } from "./interface";

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
