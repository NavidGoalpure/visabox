import React from 'react';
import { ReactNode } from 'react';

export function findSmartHeight({
  maxHeightInRem,
  childrenItems,
}: {
  maxHeightInRem: number | undefined;
  childrenItems: ReactNode;
}): number {
  const calculatedHeight =
    (React.Children.toArray(childrenItems)?.length || 0) * 3.6;
  if (!maxHeightInRem) return calculatedHeight;
  const smartHeight =
    maxHeightInRem > calculatedHeight ? calculatedHeight : maxHeightInRem;
  return smartHeight;
}
