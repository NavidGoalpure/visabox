import { HTMLAttributes, ReactNode } from "react";
import { FiInfo } from "react-icons/fi";
import styled, { css } from "styled-components";
import theme from "styled-theming";
interface Props extends HTMLAttributes<HTMLDivElement> {

}
const HintComponent:React.FC<Props> = ({children,...props}) => {
  return (
    <Container {...props}>
      <HintInfoIcon id="icon" />
      <Content>{children}</Content>{" "}
    </Container>
  );
};
export default HintComponent;
const IconTheme = theme("mode", {
  light: css`
    color: var(--color-secondary2);
  `,
  dark: css`
    color: var(--color-secondary4);
  `,
});
const ContentTheme = theme("mode", {
  light: css`
    color: var(--color-secondary2);
  `,
  dark: css`
    color: var(--color-secondary3);
  `,
});
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;
`;
const HintInfoIcon = styled(FiInfo)`
  ${IconTheme};
  width: 2.4rem;
  height: auto;
  flex-shrink: 0;
  margin-top: 0.5rem;
`;
const Content = styled.div`
  ${ContentTheme};
  list-style: disc;
`;
