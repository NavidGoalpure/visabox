import { ClientError } from '@sanity/client';
import { ClientData } from 'Interfaces/Database/Client';
import { getlastBasicForm } from 'Queries/agents/getLastBasicForm';
import { useQuery } from 'react-query';
import { ClientQueryKeys } from 'Utils/query/keys';

export const useLastBasicForm = ({ resParams }: { resParams: string }) => {
  const {
    isLoading,
    isError,
    // آخرین بسیک فرمی که دیتابیس موجود است
    data: lastBasicForm,
  } = useQuery<ClientData, ClientError>(
    ClientQueryKeys.last({ resParams }),
    () => getlastBasicForm({ resParams })
  );

  return {
    isLoading,
    isError,
    lastBasicForm,
  };
};
