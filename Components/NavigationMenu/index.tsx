import { useEffect, useState, lazy, Suspense } from 'react';
import useDevice from 'Hooks/useDevice';

// Lazy load the components
const Desktop = lazy(() => import('./Desktop'));
const Mobile = lazy(() => import('./Mobile'));

const SmartHeader = () => {
  const { isLaptop } = useDevice();
  const [screen, setScreen] = useState('MOBILE');

  useEffect(() => {
    setScreen(isLaptop ? 'DESKTOP' : 'MOBILE');
  }, [isLaptop]);

  return (
    <Suspense fallback={<Mobile />}>
      {screen === 'MOBILE' ? <Mobile /> : <Desktop />}
    </Suspense>
  );
};

export default SmartHeader;
