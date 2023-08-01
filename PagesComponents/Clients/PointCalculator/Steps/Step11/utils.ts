import { object, string, date, mixed, boolean, array } from "yup";
import {
  AustralianWorkExperience,
  ClientCompletedForms,
  Client,
  ClientDegree,
  ClientMarital,
  ClientRole,
  IELTSScore,
  UniSections,
  WorkExperience,
  ClientCountry,
} from "Interfaces/Database/Client";
import { Status } from "Interfaces/Database";
import ErrorToast from "Elements/Toast/Error";

export function validateClientDataWithYup(client: Client | undefined) {
  let userSchema = object({
    country: mixed<ClientCountry>()
      .oneOf(Object.values(ClientCountry))
      .required(),
    name: string().required(),
    lastname: string().required(),
    phone: string().required(),

    age: date().notRequired(),
    birthday:date().required(),
    marital: mixed<ClientMarital>()
      .oneOf(Object.values(ClientMarital))
      .required(),
    does_partner_have_assessment: boolean().notRequired(),
    is_partner_competent_english_speaker:boolean().notRequired(),
    field_of_study: string().required(),
    degree: mixed<ClientDegree>().oneOf(Object.values(ClientDegree)).required(),
    current_job: string().required(),
    work_experience: mixed<WorkExperience>()
      .oneOf(Object.values(WorkExperience))
      .required(),
    australian_work_experience: mixed<AustralianWorkExperience>()
      .oneOf(Object.values(AustralianWorkExperience))
      .required(),
    ielts_score: mixed<IELTSScore>()
      .oneOf(Object.values(IELTSScore))
      .required(),
    uni_section: mixed<UniSections>()
      .oneOf(Object.values(UniSections))
      .required(),
    is_sharable: boolean(),
    status: mixed<Status>().oneOf(Object.values(Status)).required(),
    role: mixed<ClientRole>().oneOf(Object.values(ClientRole)).required(),
    completed_forms: array().of(
      object().shape({
        forms: mixed<ClientCompletedForms>()
          .oneOf(Object.values(ClientCompletedForms))
          .required(),
        _type: string().required(),
        _key: string().required(),
      })
    ),
    australian_educational_qualification: boolean().required(),
    designated_regional_area_study: boolean().notRequired(),
    specialist_educational_qualification: boolean().required(),
    professional_year_in_australia: boolean().required(),
    accredited_community_language: boolean().required(),
    avatar: string(),
    email: string().email().required(),
    //
  });
  try {
    return userSchema.validateSync(client);
  } catch (error: unknown) {
    ErrorToast("Data is wrong. Please try again");
    throw new Error(error as string);
  }
}
