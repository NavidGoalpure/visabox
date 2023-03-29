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
 *   elementHeight:number
 * })} {
 *   maxHeightInRem // سایزی که میخوایم پاپاپ از اون بزرگتر نشه. با واحد رم,
 *   childrenItems,// آیتم هایی که توی پاپاپ نشون میدیم
 *    elementHeight,// طول هر المنت فرزند- این المنت برای محاسبه طول کانتینر به کار میره
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
    (React.Children.toArray(childrenItems)?.length || 0) * 3.5;
  //
  if (!maxHeightInRem) return calculatedHeight;
  const smartHeight =
    maxHeightInRem > calculatedHeight ? calculatedHeight : maxHeightInRem;
  return smartHeight;
}
