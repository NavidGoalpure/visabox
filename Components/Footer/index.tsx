import useDevice from 'Hooks/useDevice';
import { useEffect, useState } from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';
import { getUserCountry } from 'Utils/country-state-city';

const SmartFooter = () => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  }, [isLaptop]);
  const userCountry = getUserCountry();

  if (screen === 'MOBILE') {
    return <MobileFooter clientCountry={userCountry} />;
  } else {
    return <DesktopFooter clientCountry={userCountry} />;
  }
};

export default SmartFooter;
