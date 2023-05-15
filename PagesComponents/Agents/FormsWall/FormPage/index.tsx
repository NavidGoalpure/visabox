import useDevice from 'Hooks/useDevice';
import { useState, useEffect } from 'react';
import DesktopAgentsPage from './Desktop';
import MobileAgentsPage from './Mobile';
import { ClientData } from 'Interfaces/Database/Client';

interface Props {
  clientData: ClientData;
}
const Content: React.FC<Props> = ({ clientData }) => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });

  if (screen === 'MOBILE') return <MobileAgentsPage clientData={clientData} />;
  return <DesktopAgentsPage clientData={clientData} />;
};
export default Content;
