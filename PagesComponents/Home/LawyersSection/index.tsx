import useDevice from 'Hooks/useDevice';
import { useEffect, useState } from 'react';
import DesktopIndex from './desktop';
import MobileIndex from './mobile';

const index: React.FC = () => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();
  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE') return <MobileIndex />;
  else return <DesktopIndex />;
};
export default index;

///////////////
