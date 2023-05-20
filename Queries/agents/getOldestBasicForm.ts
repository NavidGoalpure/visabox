import { ClientCompletedForms, Client } from 'Interfaces/Database/Client';
import { sanityClient } from 'Utils/sanity';

export const getOldestBasicForm = async ({
  resParams,
}: {
  resParams: string;
}): Promise<Client> => {
  const oldestBasicFormQuery = `*[_type=='client' && !(_id in path('drafts.**')) && "${ClientCompletedForms.BasicForm}" in completed_forms[].forms && is_sharable == true ]| order(_createdAt asc)[0] {
${resParams}
  }`;
  const data = await sanityClient.fetch(oldestBasicFormQuery);
  return data;
};
