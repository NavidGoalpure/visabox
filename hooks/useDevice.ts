import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../consts/device';

interface MediaQueryTools {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
}
const useDevice = (): MediaQueryTools => {
  const isMobile = useMediaQuery({
    maxWidth: deviceSize.mobileL,
  });
  const isLaptop = useMediaQuery({ minWidth: deviceSize.laptopXS });
  const isTablet = !isLaptop && !isMobile;

  return {
    isTablet,
    isMobile,
    isLaptop,
  };
};
export default useDevice;
