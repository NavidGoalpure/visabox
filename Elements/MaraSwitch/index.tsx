import * as RdxSwitch from "@radix-ui/react-switch";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { ThemeModes } from "Interfaces";
import useTheme from "Hooks/useTheme";
import { Loading } from "Elements/Loading";
import { IoMdClose } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
interface Props {
  isChecked?: boolean;
  onCheckedChange?: () => void;
  isLoading?: boolean;
}
const MaraSwitch: React.FC<Props> = ({
  isChecked,
  isLoading = false,
  onCheckedChange,
}) => {
  if (isLoading || isChecked === undefined) return <Loading style={{ width: "auto" }} />;
  return (
    <SwitchRoot
      aria-label={isChecked ? "checked" : "not checked"}
      checked={isChecked}
      onCheckedChange={() => {
        onCheckedChange && onCheckedChange();
      }}
    >
      <SwitchThumb>
        {" "}
        {isChecked ? <CheckedIcon /> : <NotCheckedIcon />}
      </SwitchThumb>
    </SwitchRoot>
  );
};

export default MaraSwitch;
const NotCheckedColorTheme = theme("mode", {
  light: css`
    border-color: var(--color-gray10);
    background: var(--color-gray12);
  `,
  dark: css`
    border-color: var(--color-gray8);
    background: var(--color-gray5);
  `,
});
const CheckedBorderColor = theme("mode", {
  light: css`
    border-color: var(--color-gray9);
    background: var(--color-secondary4);
  `,
  dark: css`
    border-color: var(--color-gray9);
    background: var(--color-secondary4);
  `,
});
const NotCheckedThumbColor = theme("mode", {
  light: css`
    background-color: var(--color-gray10);
  `,
  dark: css`
    background-color: var(--color-gray8);
  `,
});
const CheckedThumbColor = theme("mode", {
  light: css`
    background-color: var(--color-gray9);
  `,
  dark: css`
    background-color: var(--color-gray9);
  `,
});
const CrossColor = theme("mode", {
  light: css`
    color: var(--color-gray12);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});
const SwitchRoot = styled(RdxSwitch.Root)`
  border: 3px solid;
  ${NotCheckedColorTheme};
  position: relative;
  width: 4rem;
  height: 2.25rem;
  background-color: transparent;
  border-radius: 9999px;
  position: relative;
  outline: none;
  display: flex;
  align-items: center;
  direction: ltr;
  scale: 0.7;
  &[data-state="checked"] {
    justify-content: flex-end;
    ${CheckedBorderColor};
  }
`;
const SwitchThumb = styled(RdxSwitch.Thumb)`
  ${NotCheckedThumbColor};
  display: block;
  width: 68%;
  height: calc(100% + 6px);
  border-radius: 50%;
  transition: all 100ms;
  z-index: 2;
  transform: translateX(-3px);
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  &[data-state="checked"] {
    width: 75%;
    transform: translateX(3px);
    ${CheckedThumbColor};
  }
`;
const NotCheckedIcon = styled(IoMdClose)`
  ${CrossColor};
  width: 70%;
  height: auto;
`;
const CheckedIcon = styled(AiOutlineCheck)`
  width: 50%;
  height: auto;
  color: var(--color-secondary4);
`;
