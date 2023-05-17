import { ClientData } from 'Interfaces/Database/Client';
import { ClientData_Sanity } from 'Queries/client/interface';

export function proxySanityClientResponseToCamelCase(
  sanityResponse: ClientData_Sanity
): ClientData {
  const clientData: ClientData =
    sanityResponse &&
    Object.assign(sanityResponse, {
      lastName: sanityResponse?.lastname,
      fieldOfStudy: sanityResponse?.field_of_study,
      workExperience: sanityResponse?.work_experience,
      currentJob: sanityResponse?.current_job,
      phoneNumber: sanityResponse?.phone,
      australianWorkExperience: sanityResponse?.australian_work_experience,
      IELTSScore: sanityResponse?.ielts_score,
      isSharable: sanityResponse?.is_sharable,
      uniSection: sanityResponse?.uni_section,
      completedForms: sanityResponse?.completed_forms || [],
    });
  console.log(' navid clientData=', clientData);
  console.log(' navid sanityResponse=', sanityResponse);
  return clientData;
}
