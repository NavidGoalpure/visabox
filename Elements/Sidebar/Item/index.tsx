import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import useDevice from 'Hooks/useDevice';
import { Mobile } from './Mobile';
import { Desktop } from './Desktop';
import { deviceSize } from 'Consts/device';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: ReactNode;
}
export const Item: React.FC<Props> = ({ title, value, icon }) => {
  const { useMediaQuery } = useDevice();
  const islaptopS = useMediaQuery({
    maxWidth: deviceSize.laptopS,
  });
  return islaptopS ? (
    <Mobile title={title} value={value} icon={icon} />
  ) : (
    <Desktop title={title} value={value} icon={icon} />
  );
};
