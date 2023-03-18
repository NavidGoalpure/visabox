import useDevice from 'Hooks/useDevice';
import { Agency } from 'Interfaces/Businesses/agency';
import { useState, useEffect } from 'react';
import DesktopAgentsPage from './Desktop/DesktopAgentsPage';
import MobileAgencysPage from './Mobile/MobileAgencysPage';
interface Props {
  chosenAgency?: Agency;
}
function Content({ chosenAgency }: Props) {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE')
    return <MobileAgencysPage ChosenAgency={chosenAgency} />;
  return <DesktopAgentsPage ChosenAgency={chosenAgency} />;
}
export default Content;
