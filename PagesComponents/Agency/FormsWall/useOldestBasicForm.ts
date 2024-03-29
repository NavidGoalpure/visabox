import { ClientError } from '@sanity/client';
import { Client } from 'Interfaces/Database/Client';
import { getOldestBasicForm } from 'Queries/agency/getOldestBasicForm';
import { useQuery } from 'react-query';
import { ClientQueryKeys } from 'Utils/query/keys';

export const useOldestBasicForm = ({ resParams }: { resParams: string }) => {
  const {
    isLoading,
    isError,
    // آخرین بسیک فرمی که دیتابیس موجود است
    data: lastBasicForm,
  } = useQuery<Client, ClientError>(ClientQueryKeys.last({ resParams }), () =>
    getOldestBasicForm({ resParams })
  );

  return {
    isLoading,
    isError,
    lastBasicForm,
  };
};
