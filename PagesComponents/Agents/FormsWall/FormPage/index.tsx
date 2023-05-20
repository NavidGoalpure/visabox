import useDevice from 'Hooks/useDevice';
import { useState, useEffect } from 'react';
import DesktopAgentsPage from './Desktop';
import MobileAgentsPage from './Mobile';
import { Client } from 'Interfaces/Database/Client';

interface Props {
  Client: Client;
}
const Content: React.FC<Props> = ({ Client }) => {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });

  if (screen === 'MOBILE') return <MobileAgentsPage Client={Client} />;
  return <DesktopAgentsPage Client={Client} />;
};
export default Content;
