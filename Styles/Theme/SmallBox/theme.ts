import { css } from "styled-components";
import theme from "styled-theming";

export const SmallBox_BG_Textured = theme("mode", {
  light: css`
    background: var(--color-gray13);
    background-image: url("/Images/Patterns/LightPattern.svg");
    box-shadow: var(--box-shadow-layer2);
  `,
  dark: css`
    background: var(--color-gray6);
    background-image: url("/Images/Patterns/DarkPattern.svg");
  `,
});
export const SmallBox_BG_Disabled = theme("mode", {
  light: css`
    background: var(--color-gray10);
    box-shadow: 0px 0px 12.03235912322998px 0px rgba(0, 0, 0, 0.5);
  `,
  dark: css`
    background: var(--color-gray4);
  `,
});
export const SmallBox_BG_Selected = theme("mode", {
  light: css`
    background: var(--color-gray12);
    box-shadow: 0px 9.120776176452637px 9.120776176452637px 0px
      rgba(0, 0, 0, 0.25);
  `,
  dark: css`
    background: var(--color-gray7);
    box-shadow: 0px 9.120776176452637px 9.120776176452637px 0px
      rgba(0, 0, 0, 0.25);
  `,
});
export const SmallBox_BG_Alternative = theme("mode", {
  light: css`
    background: var(--color-gray8);
    box-shadow: 0px 0px 12.03235912322998px 0px rgba(0, 0, 0, 0.5);
  `,
  dark: css`
    background: var(--color-gray2);
  `,
});
export const SmallBox_BG_Alternative_Hover = theme("mode", {
  light: css`
    background: var(--color-gray8);
    box-shadow: 0px 0px 12.03235912322998px 0px rgba(0, 0, 0, 0.5);
  `,
  dark: css`
    background: var(--color-gray2);
  `,
});
