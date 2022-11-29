import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../consts/device';

interface MediaQueryTools {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isServer: boolean;
}
const useDevice = (): MediaQueryTools => {
  const isMobile = useMediaQuery({
    maxWidth: deviceSize.mobileL,
  });
  const isLaptop = useMediaQuery({ minWidth: deviceSize.laptopXS });
  const isTablet = !isLaptop && !isMobile;
  const isServer = typeof window === 'undefined';
  return {
    isTablet: !isServer && isTablet,
    isMobile: !isServer && isMobile,
    isLaptop: !isServer && isLaptop,
    isServer,
  };
};
export default useDevice;
