import useDevice from 'Hooks/useDevice';
import { Lawyer } from 'Interfaces/Businesses/Lawyers';
import { useState, useEffect } from 'react';
import DesktopLawyersPage from './Desktop/DesktopLawyersPage';
import MobileLawyersPage from './Mobile/MobileLawyersPage';
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
