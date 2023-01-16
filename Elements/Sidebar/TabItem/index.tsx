import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import useDevice from 'Hooks/useDevice';
import { MobileTabItem as Mobile } from './Mobile';
import { DesktopTabItem_Top as DesktopTop } from './DesktopTop';
import { deviceSize } from 'Consts/device';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: ReactNode;
}
export const TabItem: React.FC<Props> = ({ title, value, icon }) => {
  const { useMediaQuery } = useDevice();
  const islaptopS = useMediaQuery({
    maxWidth: deviceSize.laptopS,
  });
  return islaptopS ? (
    <Mobile title={title} value={value} icon={icon} />
  ) : (
    <DesktopTop
      title={title}
      value={value}
      icon={icon}
      data-testid='sidebar-head'
    />
  );
};
