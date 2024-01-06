import useDevice from 'Hooks/useDevice';
import { SupportedCountry } from 'Interfaces/Database';
import { useState, useEffect } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

interface Props {
  isLogin: boolean;
  userCountry: SupportedCountry;
}
function Content({ isLogin, userCountry }: Props) {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  // improve mobile props
  if (screen === 'MOBILE')
    return <Mobile isLogin={isLogin} userCountry={userCountry} />;
  return <Desktop isLogin={isLogin} userCountry={userCountry} />;
}
export default Content;
