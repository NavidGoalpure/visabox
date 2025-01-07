import { useState, useEffect, lazy, Suspense } from 'react';
import useDevice from 'Hooks/useDevice';
import { LoadingRow } from 'Elements/Loading/LoadingRow';

// Lazy load the components
const Desktop = lazy(() => import('./Desktop'));
const Mobile = lazy(() => import('./Mobile'));

function Content() {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  // Correctly specify dependencies for useEffect
  useEffect(() => {
    setScreen(isLaptop ? 'DESKTOP' : 'MOBILE');
  }, [isLaptop]);

  return (
    <Suspense fallback={<LoadingRow />}>
      {screen === 'MOBILE' ? <Mobile /> : <Desktop />}
    </Suspense>
  );
}

export default Content;
