import { Loading } from 'Elements/Loading/Loading';
import useDevice from 'Hooks/useDevice';
import { lazy, Suspense } from 'react';

const Mobile = lazy(() => import('./Mobile'));
const Desktop = lazy(() => import('./Desktop'));

function Content() {
  const { isMobile } = useDevice();
  return (
    <Suspense fallback={<Loading />}>
      {isMobile ? <Mobile /> : <Desktop />}
    </Suspense>
  );
}
export default Content;
