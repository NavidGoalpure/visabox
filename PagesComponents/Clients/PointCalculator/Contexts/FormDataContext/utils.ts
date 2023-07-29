import {
  Client,
  IELTSScore,
  WorkExperience,
  AustralianWorkExperience,
  VisaSubclass,
  ClientDegree,
  ClientMarital,
} from "Interfaces/Database/Client";
import { calculateAge } from "Utils/clients";

export function CalculateClientScore(clientData: Client): number {
  let finalScore = 0;
  let hasEmptyField = false;
  /////////// age//////////////
  const birthday = new Date(
    clientData?.birthday || clientData.age || "2023-01-01"
  );
  const clientAge = calculateAge(new Date(birthday));
  if (clientAge > 18 && clientAge < 25) finalScore = finalScore + 25;
  else if (clientAge >= 25 && clientAge < 33) finalScore = finalScore + 30;
  else if (clientAge >= 33 && clientAge < 40) finalScore = finalScore + 25;
  else if (clientAge >= 40 && clientAge < 45) finalScore = finalScore + 15;
  ///////////// marital ////////////////////////
  if (clientData?.marital === ClientMarital.Single)
    finalScore = finalScore + 10;
  else if (clientData?.is_partner_competent_english_speaker)
    finalScore = finalScore + 5;
  if (clientData?.does_partner_have_assessment) finalScore = finalScore + 5;

  /////////// English Language ///////////////////////
  if (clientData?.ielts_score === IELTSScore.Seven)
    finalScore = finalScore + 10;
  else if (clientData?.ielts_score === IELTSScore.Eight)
    finalScore = finalScore + 20;
  ///////////  Overseas Work Experience /////////////////
  if (clientData?.work_experience === WorkExperience["3To5Years"])
    finalScore = finalScore + 5;
  else if (clientData?.work_experience === WorkExperience["5To8Years"])
    finalScore = finalScore + 10;
  else if (clientData?.work_experience === WorkExperience.MoreThan8Years)
    finalScore = finalScore + 15;

  ///////////  Australian Work Experience /////////////////
  if (
    clientData?.australian_work_experience ===
    AustralianWorkExperience["1To3Years"]
  )
    finalScore = finalScore + 5;
  else if (
    clientData?.australian_work_experience ===
    AustralianWorkExperience["3To5Years"]
  )
    finalScore = finalScore + 10;
  else if (
    clientData?.australian_work_experience ===
    AustralianWorkExperience["5To8Years"]
  )
    finalScore = finalScore + 15;
  else if (
    clientData?.australian_work_experience ===
    AustralianWorkExperience.MoreThan8Years
  )
    finalScore = finalScore + 20;
  ///////////  Visa Subclass /////////////////
  if (clientData?.visa_subclass === VisaSubclass["189Subclass"])
    finalScore = finalScore + 0;
  else if (clientData?.visa_subclass === VisaSubclass["190Subclass"])
    finalScore = finalScore + 5;
  else if (clientData?.visa_subclass === VisaSubclass["491Subclass"])
    finalScore = finalScore + 15;
  /////////// degree /////////////////
  if (clientData?.degree === ClientDegree.Diploma) finalScore = finalScore + 10;
  else if (clientData?.degree === ClientDegree.Bachelorsdegree)
    finalScore = finalScore + 15;
  else if (clientData?.degree === ClientDegree.Mastersdegree)
    finalScore = finalScore + 15;
  else if (clientData?.degree === ClientDegree.Doctorate)
    finalScore = finalScore + 20;
  /////////// australian_educational_qualification /////////////////
  if (clientData?.australian_educational_qualification)
    finalScore = finalScore + 5;
  /////////// designated_regional_area_study /////////////////
  if (clientData?.designated_regional_area_study) finalScore = finalScore + 5;
  /////////// specialist_educational_qualification /////////////////
  if (clientData?.specialist_educational_qualification)
    finalScore = finalScore + 10;
  /////////// professional_year_in_australia /////////////////
  if (clientData?.professional_year_in_australia) finalScore = finalScore + 5;
  /////////// accredited_community_language /////////////////
  if (clientData?.accredited_community_language) finalScore = finalScore + 5;
  return finalScore;
}
