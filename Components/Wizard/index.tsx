import React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components/macro';
import { device } from '../../consts/device';

import {
  desktopFormAnimationBackOut,
  desktopFormAnimationOut,
  desktopFormAnimationBackIn,
  desktopFormAnimationIn,
  mobileFormAnimationBackOut,
  mobileFormAnimationOut,
  mobileFormAnimationBackIn,
  mobileFormAnimationIn,
} from '../../Styles/Animation/Form';
import { WizardContext } from './Context';

const Wizard: React.FC = ({ children }) => {
  const { isBackPressed, isOut } = useContext(WizardContext);
  return (
    <WizardContainer isBackPressed={isBackPressed} isOut={isOut}>
      {children}
    </WizardContainer>
  );
};
export default Wizard;
export const WizardContainer = styled.div<{
  isOut?: boolean;
  isBackPressed: boolean;
}>`
  position: relative;
  height: 100%;
  padding: 6rem 1rem 2.5rem 1rem;
  max-width: 600px;
  margin-left: auto;
  width: 100%;
  margin-right: auto;
  ${({ isOut, isBackPressed }) =>
    isOut
      ? isBackPressed
        ? // next && out
          css`
            ${desktopFormAnimationBackOut}
          `
        : // prev && out
          css`
            ${desktopFormAnimationOut}
          `
      : isBackPressed
      ? // prev && in
        css`
          ${desktopFormAnimationBackIn}
        `
      : // next && in
        css`
          ${desktopFormAnimationIn}
        `}

  @media ${device.mobileL} {
    padding: 1rem 1rem 2.5rem 1rem;
    max-width: 600px;
    ${({ isOut, isBackPressed }) =>
      isOut
        ? isBackPressed
          ? css`
              ${mobileFormAnimationBackOut}
            ` // prev && out
          : css`
              ${mobileFormAnimationOut}
            `
        : isBackPressed
        ? css`
            ${mobileFormAnimationBackIn}
          ` // prev && in
        : css`
            ${mobileFormAnimationIn}
          `}
  }
`;
