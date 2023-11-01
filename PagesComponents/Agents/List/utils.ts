import { InfiniteData } from 'react-query';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import { AGENTS_PER_PAGE } from './const';

/**
 * به ما میگه که آیا صفحه دیگه ای هم برای پینجینیشن وجود داره یا خیر
 * @param lastAgent  آخرین آکوپیشن
 * @param  lastFetchedAgent آخرین آکوپیشنی که فچ کردیم
 * @returns boolean
 */
const getHasNextPage = ({
  agents,
}: {
  agents: InfiniteData<Partial<MaraAgent>[]> | undefined;
}): boolean => {
  const pageCount = agents?.pages.length;
  const lastPage = pageCount ? agents?.pages?.[pageCount - 1] : undefined;

  // اگه آخرین بار تعداد کمتری ایجنت رو نشون داده بود یعنی ایجنتها تموم شدن
  // این روش یک باگ داره. اگه فرضا نتیجه یک سرچ دقیقا ۱۲ تا باشه و تو هر صفحه هم ۱۲ تا ایجنت نشون بدیم، یک بار دکمه اضافی نشون میده
  // اما چون زیاد تکرار نمیشه ازش صرف نظر میکنیم

  if ((lastPage?.length || 0) < AGENTS_PER_PAGE) return false;
  return true;
};

export { getHasNextPage };
