import { LoadingRow } from 'Elements/Loading/LoadingRow';
import useDevice from 'Hooks/useDevice';
import { lazy, Suspense } from 'react';

const Mobile = lazy(() => import('./Mobile'));
const Desktop = lazy(() => import('./Desktop'));

function Content() {
  const { isMobile } = useDevice();
  return (
    <Suspense fallback={<LoadingRow />}>
      {isMobile ? <Mobile /> : <Desktop />}
    </Suspense>
  );
}
export default Content;
