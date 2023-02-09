import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Layer1_TextStyle } from "Styles/Theme/Layers/layer1/style";
import { TelegramGroup } from "./interfaces";

type Props = TelegramGroup;
function Content({
  desc,
  name,
  telegramLink,
  socialmediaType,
  locations,
  slug,
}: Props) {
  return (
    <Container>
      <Desc>{desc}</Desc>
    </Container>
  );
}
export default Content;
export const ContainerTheme = theme("mode", {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
const Container = styled.div`
  ${ContainerTheme};
  width: 85%;
  clip-path: polygon(0 0, 95% 0, 100% 75%, 100% 100%, 0 100%);
  padding: 3.25rem 8.75rem;
  margin-bottom: 4rem;
`;
const Desc = styled.p`
${Layer1_TextStyle}
`;