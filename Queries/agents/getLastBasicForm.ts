import { ClientData } from 'Interfaces/Database/Client';
import { sanityClient } from 'Utils/sanity';

export const getlastBasicForm = async ({
  resParams,
}: {
  resParams: string;
}): Promise<ClientData> => {
  const lastBasicFormQuery = `*[_type=='client']| order(_createdAt asc)[0] {
${resParams}
  }`;
  const data = await sanityClient.fetch(lastBasicFormQuery);
  return data;
};
