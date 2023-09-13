import gsap from 'gsap';
import { Dispatch, SetStateAction } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

////////////
export function getGsapTimeLine_Hero(
  setState: Dispatch<SetStateAction<boolean>>
) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.hero', {
    scrollTrigger: {
      trigger: '.hero',
      onLeave: () => setState(true),
      onEnterBack: () => setState(false),
    },
  });
}
//////////////////////
