import { MediaQueryAllQueryable, useMediaQuery } from 'react-responsive';
import { MediaQueryMatchers } from 'react-responsive/types/types';
import { deviceSize } from '../Consts/device';

interface MediaQueryTools {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isServer: boolean;
  useMediaQuery: (
    settings: Partial<MediaQueryAllQueryable & { query?: string | undefined }>,
    device?: MediaQueryMatchers | undefined,
    onChange?: ((_: boolean) => void) | undefined
  ) => boolean;
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
    useMediaQuery,
  };
};
export default useDevice;
