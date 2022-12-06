import * as RdxSwitch from '@radix-ui/react-switch';
import React from 'react';
import styled, { css } from 'styled-components/macro';
import Sun from './Images/Sun.svg';
import Moon from './Images/Moon.svg';
import MoonLogo from './MoonLogo';
import SunLogo from './SunLogo';
import theme from 'styled-theming';
import { ThemeModes } from 'interfaces';
import useSsr from 'hooks/useSsr';
import useTheme from 'hooks/useTheme';

const Switch = () => {
  const { isClient } = useSsr();
  const { theme, setTheme } = useTheme();
  const isChecked = theme === ThemeModes.LIGHT;
  return (
    <SwitchRoot
      defaultChecked={isChecked}
      onCheckedChange={() => {
        if (isClient) {
          theme === ThemeModes.DARK
            ? setTheme(ThemeModes.LIGHT)
            : setTheme(ThemeModes.DARK);
        }
      }}
    >
      {isChecked && <MoonLogo id='moon' />}
      <SwitchThumb />
      {!isChecked && <SunLogo id='sun' />}
    </SwitchRoot>
  );
};

export default Switch;
export const BorderColor = theme('mode', {
  light: css`
    border-color: var(--color-gray12);
  `,
  dark: css`
    border-color: var(--color-gray9);
  `,
});
const SwitchRoot = styled(RdxSwitch.Root)`
  border: 3px solid var(--color-gray12);
  ${BorderColor};
  width: 4rem;
  height: 2.25rem;
  background-color: transparent;
  border-radius: 9999px;
  position: relative;
  outline: none;
  display: flex;
  align-items: center;
  #moon {
    font-size: 4px;
    position: absolute;
    left: 4%;
    display: none;
    width: 30%;
    height: auto;
    path {
      fill: var(--color-gray10);
      stroke: var(--color-gray10);
    }
  }
  #sun {
    font-size: 4px;
    position: absolute;
    right: 5%;
    width: 25%;
    height: auto;
    path {
      fill: var(--color-gray5);
      stroke: var(--color-gray5);
    }
  }
  &[data-state='checked'] {
    justify-content: flex-end;
    .sun {
      display: none;
    }
    .moon {
      display: flex;
    }
  }
`;
const SwitchThumb = styled(RdxSwitch.Thumb)`
  display: block;
  width: 68%;
  height: calc(100% + 6px);
  border-radius: 50%;
  transition: all 100ms;
  transform: translateX(-3px);
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-gray9);
  :before {
    content: '';
    z-index: 2;
    width: 70%;
    background-size: contain;
    height: 71%;
    background-repeat: no-repeat;
    background-image: url(${Moon});
  }
  &[data-state='checked'] {
    transform: translateX(3px);
    background-color: var(--color-secondary4);
    :before {
      background-image: url(${Sun});
    }
    span {
    }
  }
`;
