import { useEffect, useState, lazy, Suspense } from 'react';
import useDevice from 'Hooks/useDevice';
import { Loading } from 'Elements/Loading/Loading';

// Lazy load the footer components
const DesktopFooter = lazy(() => import('./DesktopFooter'));
const MobileFooter = lazy(() => import('./MobileFooter'));

const SmartFooter = () => {
  const { isLaptop } = useDevice();
  const [screen, setScreen] = useState('MOBILE');

  useEffect(() => {
    setScreen(isLaptop ? 'DESKTOP' : 'MOBILE');
  }, [isLaptop]);

  const renderFooter = () => {
    if (screen === 'MOBILE') {
      return <MobileFooter />;
    } else {
      return <DesktopFooter />;
    }
  };

  return <Suspense fallback={<Loading />}>{renderFooter()}</Suspense>;
};

export default SmartFooter;
