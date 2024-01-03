import { device } from 'Consts/device';
import { useLocale } from 'Hooks/useLocale';
import { LanguageDirection } from 'Interfaces';
import React, { HTMLAttributes, useContext } from 'react';
import styled, { css } from 'styled-components';
import {
  mobileFormAnimationBackOut,
  mobileFormAnimationOut,
  mobileFormAnimationBackIn,
  mobileFormAnimationIn,
  DesktopFormAnimationBackOut_rtl,
  DesktopFormAnimationBackIn_rtl,
  DesktopFormAnimationIn_rtl,
  DesktopFormAnimationOut_rtl,
  DesktopFormAnimationBackIn_ltr,
  DesktopFormAnimationBackOut_ltr,
  DesktopFormAnimationIn_ltr,
  DesktopFormAnimationOut_ltr,
} from './Animations';

import { WizardContext } from './Context';
interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Wizard: React.FC<Props> = ({ children, ...props }) => {
  const { isBackPressed, isOut } = useContext(WizardContext);
  const { direction } = useLocale();
  return (
    <WizardContainer
      {...props}
      direction={direction}
      isBackPressed={isBackPressed}
      isOut={isOut}
    >
      {children}
    </WizardContainer>
  );
};
export default Wizard;

export const WizardContainer = styled.div<{
  isOut?: boolean;
  isBackPressed: boolean;
  direction: LanguageDirection;
}>`
  position: relative;
  height: 100%;
  width: 100%;
  ${({ isOut, isBackPressed, direction }) =>
    direction === LanguageDirection.RTL
      ? isOut
        ? isBackPressed
          ? // rtl && next && out
            css`
              animation: 0.8s ${DesktopFormAnimationBackOut_rtl};
            `
          : // rtl && prev && out
            css`
              animation: 0.8s ${DesktopFormAnimationOut_rtl};
            `
        : isBackPressed
        ? // rtl && prev && in
          css`
            animation: 0.8s ${DesktopFormAnimationBackIn_rtl};
          `
        : // rtl && next && in
          css`
            animation: 0.8s ${DesktopFormAnimationIn_rtl};
          `
      : isOut
      ? isBackPressed
        ? // ltr && next && out
          css`
            animation: 0.8s ${DesktopFormAnimationBackOut_ltr};
          `
        : // ltr && prev && out
          css`
            animation: 0.8s ${DesktopFormAnimationOut_ltr};
          `
      : isBackPressed
      ? // ltr && prev && in
        css`
          animation: 0.8s ${DesktopFormAnimationBackIn_ltr};
        `
      : // ltr && next && in
        css`
          animation: 0.8s ${DesktopFormAnimationIn_ltr};
        `}

  @media ${device.mobileL} {
    padding: 1rem 1rem 2.5rem 1rem;
    max-width: 600px;
    ${({ isOut, isBackPressed }) =>
      isOut
        ? isBackPressed
          ? css`
              animation: 0.8s ${mobileFormAnimationBackOut};
            ` // prev && out
          : css`
              animation: 0.8s ${mobileFormAnimationOut};
            `
        : isBackPressed
        ? css`
            animation: 0.8s ${mobileFormAnimationBackIn};
          ` // prev && in
        : css`
            animation: 0.8s ${mobileFormAnimationIn};
          `}
  }
`;
