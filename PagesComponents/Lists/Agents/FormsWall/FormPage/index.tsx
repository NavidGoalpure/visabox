import useDevice from "Hooks/useDevice";
import { Agent } from "Interfaces/Lists/agents";
import { useState, useEffect } from "react";
import DesktopAgentsPage from "./Desktop";
import MobileAgentsPage from "./Mobile";
interface Props {
  chosenAgent?: Agent;
}
function Content({ chosenAgent }: Props) {
  const [screen, setScreen] = useState<"MOBILE" | "DESKTOP">("MOBILE");
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen("DESKTOP");
  });
  if (screen === "MOBILE")
    return <MobileAgentsPage ChosenAgent={chosenAgent} />;
  return <DesktopAgentsPage ChosenAgent={chosenAgent} />;
}
export default Content;
