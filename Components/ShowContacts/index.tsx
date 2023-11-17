import useDevice from 'Hooks/useDevice';
import { useState, useEffect, HTMLAttributes } from 'react';
import Desktop from './Desktop';
import { Contact } from 'Interfaces/Database';
import Mobile from './Mobile';

interface Props extends HTMLAttributes<HTMLDivElement>, Contact {
  // Your additional properties from Contact interface go here
}
function ShowContacts(props: Props) {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE') return <Mobile {...props} />;
  return <Desktop {...props} />;
}
export default ShowContacts;
