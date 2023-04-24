import { keyframes } from "styled-components";

export const DesktopFormAnimationBackOut_ltr = keyframes`
0%{
  transform:translateX(0) skewX(0deg);
  opacity:1;
}
100%{
  transform:translateX(100%) skewX(15deg);
  opacity:0;
}
`;
export const DesktopFormAnimationOut_ltr = keyframes`
0%{
  transform:translateX(0) skewX(0deg);
  opacity:1;
}
100%{
  transform:translateX(-100%) skewX(-15deg);
  opacity:0;
}
`;
export const DesktopFormAnimationBackIn_ltr = keyframes`
0%{
  
  transform:translateX(-100%)skewX(15deg);
  opacity:0;
}
100%{
  transform:translateX(0) skewX(0deg);
  opacity:1;
}`;
export const DesktopFormAnimationIn_ltr = keyframes`
0%{
  transform:translateX(100%) skewX(-15deg);
  
  opacity:0;
}
100%{
  transform:translateX(0) skewX(0deg);
  opacity:1;
}`;
export const DesktopFormAnimationBackOut_rtl = keyframes`
0%{
  transform:translateX(0) skewX(0deg);
  opacity:1;
}
100%{
  transform:translateX(-100%) skewX(-15deg);
  opacity:0;
}
`;
export const DesktopFormAnimationOut_rtl = keyframes`
0%{
  transform:translateX(0) skewX(0deg);
  opacity:1;
}
100%{
  transform:translateX(100%) skewX(15deg);
  opacity:0;
}
`;
export const DesktopFormAnimationBackIn_rtl = keyframes`
0%{
  
  transform:translateX(100%)skewX(-15deg);
  opacity:0;
}
100%{
  transform:translateX(0) skewX(0deg);
  opacity:1;
}
`;
export const DesktopFormAnimationIn_rtl = keyframes`
0%{
  transform:translateX(-100%) skewX(15deg);
  
  opacity:0;
}
100%{
  transform:translateX(0) skewX(0deg);
  opacity:1;
}
`;
export const mobileFormAnimationBackOut = keyframes`
0%{
  transform:translateY(0);
  opacity:1;
}
100%{
  transform:translateY(-100%);
  opacity:0;
}
`;
export const mobileFormAnimationOut = keyframes`
0%{
  transform:translateY(0);
  opacity:1;
}
100%{
  transform:translateY(100%);
  opacity:0;
}
`;
export const mobileFormAnimationBackIn = keyframes`
0%{
  transform:translateY(100%);
  
  opacity:0;
}
100%{
  transform:translateY(0);
  opacity:1;
}
`;
export const mobileFormAnimationIn = keyframes`
0%{
  
  transform:translateY(-100%);
  opacity:0;
}
100%{
  transform:translateY(0);
  opacity:1;
}
`;
