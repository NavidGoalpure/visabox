import useDevice from 'Hooks/useDevice';
import { useState, useEffect, lazy, Suspense } from 'react';

//
const DesktopAgentsPage = lazy(() => import('./Desktop/DesktopNaatiPage'));
const MobileAgentsPage = lazy(() => import('./Mobile/MobileNaatiPage'));
import { Naati } from 'Interfaces/Database/Lists/naaties';
import { Loading } from 'Elements/Loading';
interface Props {
  chosenNaati?: Naati;
}
function Content({ chosenNaati }: Props) {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  return (
    <Suspense fallback={<Loading />}>
      {screen === 'MOBILE' ? (
        <MobileAgentsPage chosenNaati={chosenNaati} />
      ) : (
        <DesktopAgentsPage chosenNaati={chosenNaati} />
      )}
    </Suspense>
  );
}
export default Content;
