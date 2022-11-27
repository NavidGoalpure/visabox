import * as Tooltip from "@radix-ui/react-tooltip";
import styled, { css, keyframes } from "styled-components/macro";
import theme from "styled-theming";
import border from "./LeftBorder.svg";

interface Props {
  content: string;
  isOn: boolean;
}
//navid change the name
const Toggle: React.FC<Props> = ({ content, isOn }) => {
  return (
    <Container isOn={isOn}>
      <LeftText> {content} </LeftText>{" "}
      <RightText isOn={isOn}>{isOn ? "ON" : "OFF"}</RightText>
    </Container>
  );
};
export default Toggle;

export const ButtonBorderTheme = theme("mode", {
  light: css`
    border: 5px solid var(--color-primary4);
  `,
  dark: css`
    border: 5px solid var(--color-primary5);
  `,
});
const Container = styled.div<{ isOn: boolean }>`
  border-radius: 30px;
  width: fit-content;
  display: flex;
  align-items: center;
  ${({ isOn }) =>
    isOn
      ? `
border: 3px solid var(--color-primary4);
box-shadow: 0 0 4px 0px var(--color-primary4);
  color:white;
  `
      : `
  border: 3px solid var(--color-primary1);
  color:var(--color-gray9);

  `}
`;
const LeftText = styled.h3`
  padding: 0.25em 1em;
`;
const RightText = styled.h3<{ isOn: boolean }>`
  padding: 0.25em 1em;
  ${({ isOn }) =>
    isOn
      ? `
  background-color: var(--color-primary4);
  border-radius: 0 6px 6px 0;
  `
      : `
  background-color: var(--color-primary1);
  border-radius: 0 6px 6px 0;
  `}
`;
