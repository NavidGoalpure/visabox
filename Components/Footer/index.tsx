import useDevice from 'Hooks/useDevice';
import { useEffect, useState } from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

const SmartFooter = () => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();
  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE') return <MobileFooter />;
  return <DesktopFooter />;
};
export default SmartFooter;
