import { Lawyers } from "../const";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import useDevice from "Hooks/useDevice";
import { useState, useEffect } from "react";
import DesktopLawyersPage from "./DesktopLawyersPage";
import MobileLawyersPage from "./MobileLawyersPage";
import { Lawyer } from "../interfaces";
interface Props {
  chosenLawyer?:Lawyer;
}
function Content({ chosenLawyer }: Props) {
  const { dt } = useDynamicTranslation();
  const [screen, setScreen] = useState<"MOBILE" | "DESKTOP">("MOBILE");
  const { isLaptop } = useDevice();
  
  useEffect(() => {
    if (isLaptop) setScreen("DESKTOP");
  });
  if (screen === "MOBILE") return <MobileLawyersPage ChosenLawyer={chosenLawyer} />;
  return <DesktopLawyersPage ChosenLawyer={chosenLawyer} />;
  
}
export default Content;
