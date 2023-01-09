import { device, deviceMin } from 'Consts/device';
import { Button } from 'Elements/Button';
import { VerticalScrollBox } from 'Elements/VerticalScrollBox';
import { IoIosArrowDown } from 'react-icons/io';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import {
  componentBodyTheme,
  componentSubtitleStyle,
  componentTitleColor,
  componentTextStyle,
  componentTextColor,
} from 'Styles/Theme/Component';

export const Container = styled.section`
  ${componentBodyTheme}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 19rem;
  height: 19rem;
  border-radius: 15px;
  cursor: pointer;
  max-width: 31%;
  position: relative;
  padding: 1rem 1rem 2rem 1rem;

  @media ${device.tabletL} {
    max-width: unset;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
  overflow: hidden;
`;
export const codeColor = theme('mode', {
  light: css`
    background: white;
    color: var(--color-gray8);
    border: 2px solid var(--color-primary3);
  `,
  dark: css`
    color: var(--color-primary6);
    border: 2px solid var(--color-primary4);
  `,
});

export const Code = styled.h3`
  ${componentSubtitleStyle}
  ${codeColor}
  width:min-content;
  padding: 0.5rem;
  align-items: center;
  border-radius: 55px;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  ${componentSubtitleStyle}
  ${componentTitleColor}
  margin-bottom:0.5rem;
  text-align: center;
`;

//////popup///////
export const ContainerHoverColor = theme('mode', {
  light: css`
    background-color: var(--color-gray13);
  `,
  dark: css`
    background-color: var(--color-gray8);
  `,
});
export const ContainerHoverCss = css`
  ${ContainerHoverColor}
  transition-delay: 0s;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  padding-inline-start: 1rem;
  padding-inline-end: 0.25rem;
  height: 100%;
  border-radius: 15px;
`;

export const PopupContentContainerHoverCss = css`
  transition-delay: 0.3s;
  transform: translateY(0);
  opacity: 1;
`;
export const ContainerColor = theme('mode', {
  light: css`
    background-color: var(--color-gray12);
  `,
  dark: css`
    background-color: var(--color-gray8);
  `,
});

export const PopupContainer = styled.div<{ isPopupOpen: boolean }>`
  ${ContainerColor}
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10%;
  border-radius: 0 0 15px 15px;
  transition: all 0.4s ease, border-radius 0.4s 0.1s ease;
  transition-delay: 0.3s;
  @media ${deviceMin.tabletL} {
    :hover {
      ${ContainerHoverCss}
      pointer-events: all;
    }
  }

  ${({ isPopupOpen }) => isPopupOpen && ContainerHoverCss}
`;

export const StyledVerticalScrollBox = styled(VerticalScrollBox)<{
  isPopupOpen: boolean;
}>`
  opacity: 0;
  padding: 0;
  transform: translateY(-20px);
  width: 100%;
  height: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease;
  padding-inline-end: 1rem;
  pointer-events: none;
  @media ${deviceMin.tabletL} {
    ${PopupContainer}:hover & {
      ${PopupContentContainerHoverCss}
      pointer-events: all;
    }
  }
  ul {
    ${componentTextStyle}
    margin-bottom:1rem;
  }
  p {
    ${componentTextStyle}
    margin-bottom:1rem;
  }
  ${({ isPopupOpen }) =>
    isPopupOpen &&
    `
    ${PopupContentContainerHoverCss}
    pointer-events: all;`}
`;

export const ArrowHoverCss = css`
  transition-delay: 0s;
  transform: translateX(-50%) rotate(0deg);
`;
export const Arrow = styled(IoIosArrowDown)<{ isPopupOpen: boolean }>`
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
  fill: white;
  background-color: var(--color-primary4);
  width: 3rem;
  height: auto;
  border-radius: 50px;
  padding: 0.5rem;
  transition: all 0.4s ease;
  transition-delay: 0.3s;
  pointer-events: all;
  z-index: 1;

  @media ${deviceMin.tabletS} {
    top: -1rem;
    width: 2rem;
  }
  @media ${deviceMin.tabletL} {
    top: -1rem;
    width: 2rem;
    ${PopupContainer}:hover & {
      ${ArrowHoverCss}
    }
  }
  ${({ isPopupOpen }) => isPopupOpen && ArrowHoverCss}
`;
export const PopupTitle = styled.h3`
  ${componentSubtitleStyle}
  ${componentTextColor}
    margin-bottom:1rem;
`;
export const StyledButton = styled(Button)`
  margin: 0 auto;
  margin-bottom: 2rem;
  width: auto;
`;
