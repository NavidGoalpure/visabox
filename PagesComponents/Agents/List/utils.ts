import { InfiniteData } from 'react-query';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import { FilteredMaraAgentRange } from './interfaces';

/**
 * به ما میگه که آیا صفحه دیگه ای هم برای پینجینیشن وجود داره یا خیر
 * @param lastAgent  آخرین آکوپیشن
 * @param  lastFetchedAgent آخرین آکوپیشنی که فچ کردیم
 * @returns boolean
 */
const getHasNextPage = ({
  lastAgent,
  lastFetchedAgent,
}: {
  lastAgent: MaraAgent | undefined;
  lastFetchedAgent: MaraAgent | undefined;
}): boolean => {
  if (lastAgent?.mara_number === undefined) return false;
  if (lastFetchedAgent?.mara_number === undefined) return false;
  if (lastAgent?.mara_number <= lastFetchedAgent?.mara_number) return false;
  return true;
};
/////////////////////////
/**
 * از توی لیست آکیوپیشن های فچ شده، آخریش رو برمیگردونه
 * @param {InfiniteData<Agent[]>|undefined} agents همه آکوپیشن های فچ شده
 * @returns {Agent | undefined } آخرین آکوپیشن فچ شده، اگه هیچ آکیوپیشنی فچ نشده باشه، آندیفایند برمیگردونه
 */
const getLastFetchedAgent = (
  agents: InfiniteData<MaraAgent[]> | undefined
): MaraAgent | undefined => {
  return agents?.pages?.[agents?.pages.length - 1][
    agents?.pages?.[agents?.pages.length - 1].length - 1
  ];
};
//////////

export { getLastFetchedAgent, getHasNextPage };
