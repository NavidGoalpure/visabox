import React from 'react';
import { ReactNode } from 'react';
import { deviceSize } from 'Consts/device';

/**
 *این فانکشن کمک میکنه بروزر تصمیم بگیره چه سایزی رو برای پاپاپ سلکت نشون بده
 اگه ماکس هیت داده نشه ، بر اساس تعداد آیتم ها سایز رو تعیین میکنه
 اگه ماکس هیت داده بشه نمیزاره از اون بزرگتر بشه و اسکرول نشون میده
 *
 * @export
 * @param {({
 *   maxHeightInRem: number | undefined;
 *   childrenItems: ReactNode;
 * })} {
 *   maxHeightInRem // سایزی که میخوایم پاپاپ از اون بزرگتر نشه. با واحد رم,
 *   childrenItems,// آیتم هایی که توی پاپاپ نشون میدیم
 * }
 * @return {*}  {number}
 */
export function findSmartHeight({
  maxHeightInRem,
  childrenItems,
}: {
  maxHeightInRem: number | undefined;
  childrenItems: ReactNode;
}): number {
  const calculatedHeight =
    (React.Children.toArray(childrenItems)?.length || 0) * 2.2;
  //
  if (!maxHeightInRem) return calculatedHeight;
  const smartHeight =
    maxHeightInRem > calculatedHeight ? calculatedHeight : maxHeightInRem;
  return smartHeight;
}
