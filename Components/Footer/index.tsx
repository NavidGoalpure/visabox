import { deviceMin } from 'Consts/device';
import useDevice from 'Hooks/useDevice';
import styled from 'styled-components';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

const SmartFooter = () => {
  <>
    <StyledMobileFooter />
    <StyledDesktopFooter />
  </>;
};
export default SmartFooter;

const StyledMobileFooter = styled(MobileFooter)`
  @media${deviceMin.laptopXS} {
    display: none;
  }
`;
const StyledDesktopFooter = styled(MobileFooter)`
  display: none;
  @media${deviceMin.laptopXS} {
    display: initial;
  }
`;
