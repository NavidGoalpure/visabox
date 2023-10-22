import { ClientError } from '@sanity/client';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import { getlastAgentCode } from 'Queries/agents/List';
import { useQuery } from 'react-query';
import { AgentsQueryKeys } from 'Utils/query/keys';

export const useLastAgentData = (searchValue: string) => {
  const {
    isLoading,
    isError,
    // آخرین آکیوپیشنی که دیتابیس موجود است
    data: lastAgent,
  } = useQuery<MaraAgent, ClientError>(
    AgentsQueryKeys.last({ search: searchValue }),
    () => getlastAgentCode()
  );

  return {
    isLoading,
    isError,
    lastAgent,
  };
};
