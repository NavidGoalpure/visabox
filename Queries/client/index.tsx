import { QueryClient, useQueryClient } from "react-query";
import { UserQueryKeys } from "Utils/query/keys";
import { sanityClient } from "Utils/sanity";
import { ClientData_Sanity } from "./interface";

export const getClientDetail_Form = async (
  email: string
): Promise<{ clientData: ClientData_Sanity[]; queryClient: QueryClient }> => {
  const clientEmail = email;
  const queryParams = `*[_type=='client' && email == "${clientEmail}" ]{
    _id,
    name,
    lastname,
    age,
    phone,
    marital,
    field_of_study,
    degree,
    current_job,
    work_experience,
    australian_work_experience,
    ielts_score,
    is_sharable
  }`;
  const queryClient = new QueryClient();
  try {
    const data = await queryClient.fetchQuery(
      UserQueryKeys.detail(clientEmail),
      () => sanityClient.fetch(queryParams)
    );
    return { queryClient, clientData: data };
  } catch (error) {
    throw error;
  }
};
