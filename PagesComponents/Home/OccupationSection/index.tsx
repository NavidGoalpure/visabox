import useDevice from 'Hooks/useDevice';
import DesktopIndex from './desktop';
import MobileIndex from './mobile';

const index: React.FC = () => {
  const { isMobile } = useDevice();
  if (isMobile) return <MobileIndex />;
  else return <DesktopIndex />;
};
export default index;

///////////////
