import { css } from "styled-components";
import theme from "styled-theming";

export const Hint_BG = theme("mode", {
  light: css`
    background: var(--color-gray6);
    border: 1px solid var(--color-gray9);
  `,
  dark: css`
    background: var(--color-gray2);
    border: 1px solid var(--color-gray9);
  `,
});
export const IconTheme = theme("mode", {
  light: css`
    color: var(--color-secondary2);
  `,
  dark: css`
    color: var(--color-secondary4);
  `,
});
export const SecondaryTextTheme = theme("mode", {
  light: css`
    color: var(--color-secondary2);
  `,
  dark: css`
    color: var(--color-secondary3);
  `,
});