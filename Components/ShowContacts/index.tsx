import {
  useState,
  useEffect,
  lazy,
  Suspense,
  useCallback,
  HTMLAttributes,
} from 'react';
import useDevice from 'Hooks/useDevice';
import { Contact } from 'Interfaces/Database';
import { Loading } from 'Elements/Loading/Loading';
import { LoadingRow } from 'Elements/Loading/LoadingRow';

// Lazy load the components
const Desktop = lazy(() => import('./Desktop'));
const Mobile = lazy(() => import('./Mobile'));

interface Props extends HTMLAttributes<HTMLDivElement>, Contact {
  // Your additional properties from Contact interface go here
}

function ShowContacts(props: Props) {
  const { isLaptop } = useDevice();
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');

  const setScreenSize = useCallback(() => {
    setScreen(isLaptop ? 'DESKTOP' : 'MOBILE');
  }, [isLaptop]);

  useEffect(() => {
    setScreenSize();
  }, [setScreenSize]);

  return (
    <Suspense fallback={<LoadingRow />}>
      {screen === 'MOBILE' ? <Mobile {...props} /> : <Desktop {...props} />}
    </Suspense>
  );
}

export default ShowContacts;
