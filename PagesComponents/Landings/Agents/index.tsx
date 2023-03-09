import useDevice from 'Hooks/useDevice';
import { useState, useEffect } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

function Content() {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE') return <Mobile />;
  return <Desktop />;
}
export default Content;
