import { useEffect, useState, lazy, Suspense } from 'react';
import useDevice from 'Hooks/useDevice';
import { Loading } from 'Elements/Loading';

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
    <Suspense fallback={<Loading />}>
      {screen === 'MOBILE' ? <Mobile /> : <Desktop />}
    </Suspense>
  );
};

export default SmartHeader;
