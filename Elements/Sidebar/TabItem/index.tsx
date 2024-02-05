import React, {
  ReactNode,
  useEffect,
  useState,
  lazy,
  Suspense,
  useCallback,
} from 'react';
import { HTMLAttributes } from 'react';
import useDevice from 'Hooks/useDevice';
import { deviceSize } from 'Consts/device';
import { Loading } from 'Elements/Loading/Loading';

const Mobile = lazy(() => import('./Mobile'));
const DesktopTop = lazy(() => import('./DesktopTop'));

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon: ReactNode;
}

export const TabItem: React.FC<Props> = ({ title, value, icon }) => {
  const { useMediaQuery } = useDevice();
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');

  const islaptopS = useMediaQuery({
    maxWidth: deviceSize.laptopXS,
  });

  const setScreenSize = useCallback(() => {
    if (!islaptopS) setScreen('DESKTOP');
  }, [islaptopS]);

  useEffect(() => {
    setScreenSize();
  }, [setScreenSize]);

  return (
    <Suspense fallback={<Loading />}>
      {screen === 'MOBILE' ? (
        <Mobile title={title} value={value} icon={icon} />
      ) : (
        <DesktopTop
          title={title}
          value={value}
          icon={icon}
          data-testid='sidebar-head'
        />
      )}
    </Suspense>
  );
};
