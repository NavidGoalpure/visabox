import useDevice from 'Hooks/useDevice';
import { Agent } from 'Interfaces/Lists/agents';
import { useState, useEffect } from 'react';
import DesktopAgentsPage from './Desktop/DesktopNaatiPage';
import MobileAgentsPage from './Mobile/MobileNaatiPage';
import { Naati } from 'Interfaces/Lists/naaties';
interface Props {
  chosenNaaties?: Naati;
}
function Content({ chosenNaaties }: Props) {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE')
    return <MobileAgentsPage chosenNaati={chosenNaaties} />;
  return <DesktopAgentsPage chosenNaati={chosenNaaties} />;
}
export default Content;
