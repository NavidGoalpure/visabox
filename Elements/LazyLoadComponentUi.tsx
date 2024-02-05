import { HTMLAttributes, useRef } from 'react';

import { useIntersectionObserver } from 'usehooks-ts';
import { Loading } from './Loading';

interface Props extends HTMLAttributes<HTMLDivElement> {}
const LazyLoadComponentUi: React.FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  console.log(`Render Section `, { isVisible });

  return <div ref={ref}> {isVisible ? children : <Loading />}</div>;
};
export default LazyLoadComponentUi;
