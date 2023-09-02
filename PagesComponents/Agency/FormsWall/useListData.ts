import { ClientError } from '@sanity/client';
import { listOfBasicForm_ResParams } from 'Consts/agents';
import { Client } from 'Interfaces/Database/Client';
import { getlistOfBasicForm } from 'Queries/agency/ListOfForms';
import { useInfiniteQuery } from 'react-query';
import { ClientQueryKeys } from 'Utils/query/keys';

const resParams = listOfBasicForm_ResParams;

export const useListData = (oldestBasicFormId: string | undefined) => {
  const {
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    isFetching,
    isRefetching,
    data: forms,
    refetch,
  } = useInfiniteQuery<Client[], ClientError>(
    ClientQueryKeys.listOfBasicForm({ resParams }),
    ({ pageParam }) => {
      const _createAt = pageParam || new Date().toISOString();
      return getlistOfBasicForm({
        lastFormDate: _createAt,
        resParams,
      });
    },
    {
      getNextPageParam: (lastPage: Client[]) => {
        if (lastPage?.[lastPage.length - 1]?._id == oldestBasicFormId)
          return undefined;
        return lastPage?.[lastPage.length - 1]?._createdAt;
      },
      enabled: !!oldestBasicFormId,
    }
  );
  return {
    fetchNextPage,
    isLoading,
    isError,
    forms,
    hasNextPage,
    isFetching,
    isRefetching,
    refetch,
  };
};
