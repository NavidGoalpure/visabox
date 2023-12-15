import useDevice from 'Hooks/useDevice';
import { useEffect, useState } from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';
import { useSession } from 'next-auth/react';
import { useQuery } from 'react-query';
import { ClientQueryKeys } from 'Utils/query/keys';
import { getClientDetail } from 'Queries/client';

const SmartFooter = () => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();
  const { data: session } = useSession();
  const reqParams = `email == "${session?.user?.email || 'defensive'}"`;
  const resParams = `
      country
      `;

  const { data } = useQuery(
    ClientQueryKeys.detail({
      reqParams,
      resParams,
    }),
    () => {
      return getClientDetail({
        reqParams,
        resParams,
      });
    },
    {
      enabled: !!session?.user?.email,
    }
  );
  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE')
    return (
      <MobileFooter clientCountry={data?.client?.[0]?.country || 'defensive'} />
    );
  return (
    <DesktopFooter clientCountry={data?.client?.[0]?.country || 'defensive'} />
  );
};
export default SmartFooter;
