import useDevice from "Hooks/useDevice";
import { useState, useEffect } from "react";
import DesktopAgentsPage from "./Desktop";
import MobileAgentsPage from "./Mobile";
import { Client } from "Interfaces/Database/Client";


interface Props {
  client: Client;
}
const Content: React.FC<Props> = ({ client }) => {
  const [screen, setScreen] = useState<"MOBILE" | "DESKTOP">("MOBILE");
  const { isLaptop } = useDevice();

  useEffect(() => {
    if (isLaptop) setScreen("DESKTOP");
  });
  if (screen === "MOBILE") return <MobileAgentsPage client={client} />;
  return <DesktopAgentsPage client={client} />;
};
export default Content;
