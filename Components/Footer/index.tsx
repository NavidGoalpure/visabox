import useDevice from 'Hooks/useDevice';
import { useEffect, useState } from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';
import { useSession } from 'next-auth/react';
import { getUserCountry } from 'Queries/client';

const SmartFooter = () => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const [userCountry, setUserCountry] = useState<string | undefined>(undefined);
  const { isLaptop } = useDevice();
  const { data: session } = useSession();

  const fetchUserCountry = async () => {
    const country = await getUserCountry(session);
    if (userCountry !== country) setUserCountry(country);
  };

  if (session) fetchUserCountry();
  console.log('navid session=', session);

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  }, [isLaptop]);

  if (screen === 'MOBILE') {
    return <MobileFooter clientCountry={userCountry} />;
  } else {
    return <DesktopFooter clientCountry={userCountry} />;
  }
};

export default SmartFooter;
