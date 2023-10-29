import useDevice from 'Hooks/useDevice';
import { useState, useEffect } from 'react';
import DesktopAgentsPage from './Desktop/DesktopNaatiPage';
import MobileAgentsPage from './Mobile/MobileNaatiPage';
import { Naati } from 'Interfaces/Database/Lists/naaties';
interface Props {
  chosenNaati?: Naati;
}
function Content({ chosenNaati }: Props) {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE')
    return <MobileAgentsPage chosenNaati={chosenNaati} />;
  return <DesktopAgentsPage chosenNaati={chosenNaati} />;
}
export default Content;
