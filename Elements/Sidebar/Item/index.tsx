import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import useDevice from 'Hooks/useDevice';
import { Mobile } from './Mobile';
import { Desktop } from './Desktop';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: ReactNode;
}
export const Item: React.FC<Props> = ({ title, value, icon }) => {
  const { isMobile, isTablet } = useDevice();
  return isMobile || isTablet ? (
    <Mobile title={title} value={value} icon={icon} />
  ) : (
    <Desktop title={title} value={value} icon={icon} />
  );
};
