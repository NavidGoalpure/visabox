import useDevice from 'Hooks/useDevice';
import Desktop from './Desktop';
import Mobile from './Mobile';

function Content() {
  const { isMobile } = useDevice();

  if (isMobile) return <Mobile />;
  return <Desktop />;
}
export default Content;
