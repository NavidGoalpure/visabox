import { ClientData } from "Interfaces/Client";
import { ClientData_Sanity } from "Queries/client/interface";

export function proxySanityClientResponseToCamelCase(
  sanityResponse: ClientData_Sanity
): ClientData {
  const clientData:ClientData = Object.assign(sanityResponse, {
    lastName: sanityResponse.lastname,
    fieldOfStudy: sanityResponse.field_of_study,
    workExperience: sanityResponse.work_experience,
    currentJob: sanityResponse.current_job,
    phoneNumber: sanityResponse.phone,
    australianWorkExperience: sanityResponse.australian_work_experience,
    englishSkillLevel: sanityResponse.english_skill_level,
  });
  
  console.log("navid sanityResponse ===", sanityResponse);
  return clientData;
}
