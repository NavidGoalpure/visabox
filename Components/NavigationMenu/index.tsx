import useDevice from 'Hooks/useDevice';
import { useEffect, useState } from 'react';
import { Desktop } from './Desktop';
import Mobile from './Mobile';

const SmartHeader = () => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();
  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE') return <Mobile />;
  return <Desktop />;
};
export default SmartHeader;
