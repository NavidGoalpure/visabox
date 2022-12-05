import useDevice from "hooks/useDevice";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const SmartFooter = () => {
  const { isTablet, isMobile } = useDevice();
  if (isTablet || isMobile) return <MobileFooter />;
  return <DesktopFooter />;
};
export default SmartFooter;
