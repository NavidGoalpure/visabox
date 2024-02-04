import { Loading } from 'Elements/Loading';
import useDevice from 'Hooks/useDevice';
import { HTMLAttributes, lazy, Suspense, useEffect, useState } from 'react';
const DesktopIndex = lazy(() => import('./desktop'));
const MobileIndex = lazy(() => import('./mobile'));

const index: React.FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();
  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  return (
    <Suspense fallback={<Loading />}>
      {screen === 'MOBILE' ? (
        <MobileIndex {...props} />
      ) : (
        <DesktopIndex {...props} />
      )}
    </Suspense>
  );
};
export default index;

///////////////
