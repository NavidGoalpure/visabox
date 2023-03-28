import useDevice from 'Hooks/useDevice';
import { HTMLAttributes, useEffect, useState } from 'react';
import DesktopIndex from './desktop';
import MobileIndex from './mobile';

const index: React.FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const [screen, setScreen] = useState<"MOBILE" | "DESKTOP">("MOBILE");
  const { isLaptop } = useDevice();
  useEffect(() => {
    if (isLaptop) setScreen("DESKTOP");
  });
  if (screen === "MOBILE") return <MobileIndex {...props} />;
  else return <DesktopIndex {...props} />;
};
export default index;

///////////////
