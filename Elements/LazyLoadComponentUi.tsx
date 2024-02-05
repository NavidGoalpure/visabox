import { HTMLAttributes, useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import { LoadingRow } from './Loading/LoadingRow';

interface Props extends HTMLAttributes<HTMLDivElement> {}
const LazyLoadComponentUi: React.FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div ref={ref} style={{ width: '100%' }}>
      {isVisible ? children : <LoadingRow />}
    </div>
  );
};
export default LazyLoadComponentUi;
