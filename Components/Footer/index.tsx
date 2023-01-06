import { deviceMin } from 'Consts/device';
import styled from 'styled-components';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

const SmartFooter = () => {
  return (
    <>
      <StyledMobileFooter />
      <StyledDesktopFooter />
    </>
  );
};
export default SmartFooter;

const StyledMobileFooter = styled(MobileFooter)`
  @media${deviceMin.laptopXS} {
    display: none;
  }
`;
const StyledDesktopFooter = styled(DesktopFooter)`
  display: none;
  @media${deviceMin.laptopXS} {
    display: initial;
  }
`;
