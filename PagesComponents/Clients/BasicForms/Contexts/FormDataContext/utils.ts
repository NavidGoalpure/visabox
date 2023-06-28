import {
  Client,
  IELTSScore,
  WorkExperience,
  AustralianWorkExperience,
} from 'Interfaces/Database/Client';
import { calculateAge } from 'Utils/clients';

export function CalculateClientScore(clientData: Client): number {
  let finalScore = 0;
  let hasEmptyField = false;
  /////////// age//////////////
  const birthday = new Date(clientData.age || '1800-01-01');
  const clientAge = calculateAge(new Date(birthday));
  if (clientAge < 25) finalScore = finalScore + 25;
  else if (clientAge < 33) finalScore = finalScore + 30;
  else if (clientAge < 40) finalScore = finalScore + 25;
  else if (clientAge < 44) finalScore = finalScore + 15;

  /////////// English Language ///////////////////////
  if (clientData.ielts_score === IELTSScore.Seven) finalScore = finalScore + 10;
  else if (clientData.ielts_score === IELTSScore.Eight)
    finalScore = finalScore + 20;

  ///////////  Overseas Work Experience /////////////////
  if (clientData.work_experience === WorkExperience['3To4Years'])
    finalScore = finalScore + 5;
  else if (clientData.work_experience === WorkExperience['5To7Years'])
    finalScore = finalScore + 10;
  else if (clientData.work_experience === WorkExperience.MoreThan8Years)
    finalScore = finalScore + 15;

  ///////////  Australian Work Experience /////////////////
  if (
    clientData.australian_work_experience ===
    AustralianWorkExperience['1To2Years']
  )
    finalScore = finalScore + 5;
  else if (
    clientData.australian_work_experience ===
    AustralianWorkExperience['3To4Years']
  )
    finalScore = finalScore + 10;
  else if (
    clientData.australian_work_experience ===
    AustralianWorkExperience['5To7Years']
  )
    finalScore = finalScore + 15;
  else if (
    clientData.australian_work_experience ===
    AustralianWorkExperience.MoreThan8Years
  )
    finalScore = finalScore + 20;

  return finalScore;
}
