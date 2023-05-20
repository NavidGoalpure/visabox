import { ClientError } from '@sanity/client';
import { getlistOfBasicForm } from 'Queries/agents/ListOfForms';
import { Client_Sanity } from 'Queries/client/interface';
import { useInfiniteQuery } from 'react-query';
import { ClientQueryKeys } from 'Utils/query/keys';
import { listOfBasicForm_ResParams } from './const';

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
  } = useInfiniteQuery<Client_Sanity[], ClientError>(
    ClientQueryKeys.listOfBasicForm({ resParams }),
    ({ pageParam }) => {
      const _createAt = pageParam || new Date().toISOString();
      return getlistOfBasicForm({
        lastFormDate: _createAt,
        resParams,
      });
    },
    {
      getNextPageParam: (lastPage: Client_Sanity[]) => {
        if (lastPage?.[lastPage.length - 1]?._id == oldestBasicFormId)
          return undefined;
        return lastPage?.[lastPage.length - 1]?._createdAt;
      },
      enabled: !!oldestBasicFormId,
    }
  );
  console.log('navid form===', forms);
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
