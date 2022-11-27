import * as Tooltip from "@radix-ui/react-tooltip";
import styled, { css, keyframes } from "styled-components/macro";
import theme from "styled-theming";
import border from "./LeftBorder.svg";

interface Props {
  content: string;
  isOn: boolean;
}
//navid change the name
const ToggleTag: React.FC<Props> = ({ content, isOn }) => {
  return (
    <Container isOn={isOn}>
      <LeftText isOn={isOn}> {content} </LeftText>{" "}
      <RightText>{isOn ? "ON" : "OFF"}</RightText>
    </Container>
  );
};
export default ToggleTag;

const ContainerOnColorTheme = theme("mode", {
  light: css`
    border: 3px solid var(--color-primary4);
    box-shadow: 0 0 4px 0px var(--color-primary4);
    background-color: var(--color-primary4);
    color: var(--color-gray4);
  `,
  dark: css`
    border: 3px solid var(--color-primary4);
    box-shadow: 0 0 4px 0px var(--color-primary4);
    background-color: var(--color-primary4);
    color: white;
  `,
});
const ContainerOffColorTheme = theme("mode", {
  light: css`
    border: 3px solid var(--color-primary1);
    background-color: var(--color-primary1);
    color: var(--color-gray9);
  `,
  dark: css`
    border: 3px solid var(--color-primary1);
    background-color: var(--color-primary1);
    color: white;
  `,
});
const LeftTextBackgroundColor = theme("mode", {
  light: css`
    background-color: white;
  `,
  dark: css`
    background-color: var(--color-gray3);
  `,
});

const Container = styled.div<{ isOn: boolean }>`
  border-radius: 30px;
  width: fit-content;
  display: flex;
  align-items: center;
  overflow: hidden;
  ${({ isOn }) => (isOn ? ContainerOnColorTheme : ContainerOffColorTheme)}
`;
const LeftText = styled.h3<{ isOn: boolean }>`
  ${LeftTextBackgroundColor}
  padding: 0.25em 1em;
`;
const RightText = styled.h3`
  padding: 0.25em 1em;
`;

