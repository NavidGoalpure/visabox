import useDevice from 'Hooks/useDevice';
import { useEffect, useState } from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';
import { useSession } from 'next-auth/react';
import { ClientQueryKeys } from 'Utils/query/keys';
import { getUserCountry, getClientDetail } from 'Queries/client';
import { Session } from 'next-auth';

const SmartFooter = () => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();
  const { data: session } = useSession();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  }, [isLaptop]);

  const userCountry = getUserCountry(session);

  if (screen === 'MOBILE') {
    return <MobileFooter clientCountry={userCountry} />;
  } else {
    return <DesktopFooter clientCountry={userCountry} />;
  }
};

export default SmartFooter;
