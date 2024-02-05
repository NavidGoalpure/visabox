import { HTMLAttributes, useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import { LoadingRow } from './Loading/LoadingRow';
import isBot from 'isbot-fast';

interface Props extends HTMLAttributes<HTMLDivElement> {}
const LazyLoadComponentUi: React.FC<Props> = ({ children }) => {
  const userAgent = window.navigator.userAgent;

  // Use isbot to check if the User-Agent is a known bot
  const isItBot = isBot(userAgent);

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    rootMargin: '100px 0px',
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div ref={ref} style={{ width: '100%' }}>
      {isItBot || isVisible ? children : <LoadingRow />}
    </div>
  );
};
export default LazyLoadComponentUi;
