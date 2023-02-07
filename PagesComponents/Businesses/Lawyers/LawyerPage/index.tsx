import useDevice from 'Hooks/useDevice';
import { useState, useEffect } from 'react';
import DesktopLawyersPage from './Desktop/DesktopLawyersPage';
import MobileLawyersPage from './Mobile/MobileLawyersPage';
import { Lawyer } from '../interfaces';
interface Props {
  chosenLawyer?: Lawyer;
}
function Content({ chosenLawyer }: Props) {
  const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen('DESKTOP');
  });
  if (screen === 'MOBILE')
    return <MobileLawyersPage ChosenLawyer={chosenLawyer} />;
  return <DesktopLawyersPage ChosenLawyer={chosenLawyer} />;
}
export default Content;
