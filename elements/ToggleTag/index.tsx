import styled, { css } from "styled-components/macro";
import theme from "styled-theming";
import { BsCheckLg } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { Headline6Style } from "Styles/Typo";

interface Props {
  content: string;
  isOn: boolean;
}
const ToggleTag: React.FC<Props> = ({ content, isOn }) => {
  return (
    <Container isOn={isOn}>
      <LeftText isOn={isOn}> {content} </LeftText>{" "}
      <RightText>{isOn ? <CheckLogo /> : <XLogo />}</RightText>
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
  margin: 2rem;
  ${({ isOn }) => (isOn ? ContainerOnColorTheme : ContainerOffColorTheme)}
`;
const LeftText = styled.h3<{ isOn: boolean }>`
  ${LeftTextBackgroundColor}
  ${Headline6Style}
  padding: 0.25em 1em;
`;
const RightText = styled.h3`
  padding: 0.15em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CheckLogo = styled(BsCheckLg)`
  color: var(--color-primary6);
`;
const XLogo = styled(HiXMark)`
  color: var(--color-gray9);
  width: 1.3rem;
  height: auto;
`;
