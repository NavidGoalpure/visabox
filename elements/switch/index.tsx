import * as RdxSwitch from "@radix-ui/react-switch";
import React from "react";
import styled, { css } from "styled-components/macro";
import Sun from "./Images/Sun.svg";
import Moon from "./Images/Moon.svg";
import MoonLogo from "./MoonLogo";
import SunLogo from "./SunLogo";
import theme from "styled-theming";

const Switch = () => {
  return (
    <SwitchRoot>
      <MoonLogo className="moon" />
      <SwitchThumb />
      <SunLogo className="sun" />
    </SwitchRoot>
  );
};

export default Switch;
export const BorderColor = theme("mode", {
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
  width: 4.375rem;
  height: 2.5rem;
  background-color: transparent;
  border-radius: 9999px;
  position: relative;
  outline: none;
  display: flex;
  align-items: center;
  .moon {
    font-size: 4px;
    position: absolute;
    left: 4%;
    display: none;
    width: 35%;
    height: auto;
    path {
      fill: var(--color-gray10);
      stroke: var(--color-gray10);
    }
  }
  .sun {
    font-size: 4px;
    position: absolute;
    right: 5%;
    width: 30%;
    height: auto;
    path {
      fill: var(--color-gray10);
      stroke: var(--color-gray10);
    }
  }
  &[data-state="checked"] {
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
  width: 65%;
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
    content: "";
    z-index: 2;
    width: 70%;
    background-size: contain;
    height: 71%;
    background-repeat: no-repeat;
    background-image: url(${Moon});
  }
  &[data-state="checked"] {
    transform: translateX(3px);
    background-color: var(--color-secondary4);
    :before {
      background-image: url(${Sun});
    }
    span {
    }
  }
`;
