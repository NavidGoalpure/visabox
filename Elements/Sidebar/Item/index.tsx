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
  const { isLaptop } = useDevice();
  return isLaptop ? (
    <Desktop title={title} value={value} icon={icon} />
  ) : (
    <Mobile title={title} value={value} icon={icon} />
  );
};
