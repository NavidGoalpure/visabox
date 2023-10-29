import useDevice from 'Hooks/useDevice';
import { useState, useEffect } from 'react';
import DesktopAgentsPage from './Desktop/DesktopAgentsPage';
import MobileAgentsPage from './Mobile/MobileAgentsPage';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
interface Props {
  chosenAgent?: MaraAgent;
}
function Content({ chosenAgent }: Props) {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE')
    return <MobileAgentsPage ChosenAgent={chosenAgent} />;
  return <DesktopAgentsPage ChosenAgent={chosenAgent} />;
}
export default Content;
