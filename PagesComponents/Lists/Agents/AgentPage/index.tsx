import useDevice from 'Hooks/useDevice';
import { useState, useEffect } from 'react';
import DesktopAgentsPage from './Desktop/DesktopAgentsPage';
import MobileAgentsPage from './Mobile/MobileAgentsPage';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
interface Props {
  agent?: MaraAgent;
}
function Content({ agent }: Props) {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE') return <MobileAgentsPage ChosenAgent={agent} />;
  return <DesktopAgentsPage ChosenAgent={agent} />;
}
export default Content;
